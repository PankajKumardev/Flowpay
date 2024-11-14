import express from "express";
import db from "@repo/db/client";
import { z } from "zod";

const Port = process.env.PORT || 3003;
const app = express();
app.use(express.json());
const TranscationSchema = z.object({
  user_identifier: z.string(),
  amount: z.number(),
  token: z.string(),
});

app.post("/hdfcWebhook", async (req, res) => {
  const result = TranscationSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).send(result.error);
    return;
  }

  const paymentInformation = {
    token: req.body.token,
    userId: req.body.user_identifier,
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
          status: "Completed",
        },
      }),
    ]);
    res.status(200).json({ message: "Captured payment" });
  } catch (e) {
    console.log(e);
    res.status(411).json({ message: "Error while Processing webhook" });
  }
});

app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
