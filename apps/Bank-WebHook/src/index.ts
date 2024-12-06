import express from 'express';
import db from '@repo/db/client';
import { z } from 'zod';
const Port = process.env.PORT || 3003;
const app = express();
app.use(express.json());

const TranscationSchema = z.object({
  userId: z.string(),
  amount: z.number(),
  token: z.string(),
});
// ** Function to handle pending transactions on server startup **
async function processPendingTransactions() {
  try {
    const pendingTransactions = await db.onRampTransaction.findMany({
      where: { status: 'Pending' },
    });

    for (const transaction of pendingTransactions) {
      await db.$transaction([
        db.balance.update({
          where: { userId: transaction.userId },
          data: {
            amount: {
              increment: transaction.amount, // Increment user balance by transaction amount
            },
          },
        }),
        db.onRampTransaction.update({
          where: { id: transaction.id },
          data: { status: 'Completed' },
        }),
      ]);
    }

    console.log(
      `Processed ${pendingTransactions.length} pending transactions.`
    );
  } catch (error) {
    console.error('Error processing pending transactions:', error);
  }
}

app.post('/hdfcWebhook', async (req, res) => {
  const result = TranscationSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).send(result.error);
    return;
  }

  const paymentInformation = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount,
  };

  try {
    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId: Number(paymentInformation.userId),
        },
        data: {
          amount: {
            increment: Number(paymentInformation.amount),
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: 'Completed',
        },
      }),
    ]);

    res.status(200).json({ message: 'Captured payment' });
  } catch (e) {
    console.log(e);
    res.status(411).json({ message: 'Error while Processing webhook' });
  }
});


app.listen(Port, async () => {
  console.log(`Server is running on ${Port}`);
  await processPendingTransactions();
});
