"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";
import { z } from "zod";

const transferSchema = z.object({
  to: z.string().min(1, "Recipient is required"),
  amount: z.number().positive("Amount must be positive"),
});

export async function p2pTransfer(formData: FormData) {
  const session = await getServerSession(authOptions);
  const from = session?.user?.id;

  if (!from) {
    return {
      success: false,
      message: "Authentication required",
    };
  }

  const validatedFields = transferSchema.safeParse({
    to: formData.get("to"),
    amount: Number(formData.get("amount")),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid input",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { to, amount } = validatedFields.data;

  try {
    const toUser = await prisma.user.findFirst({
      where: {
        number: to,
      },
    });

    if (!toUser) {
      return {
        success: false,
        message: "Recipient not found",
      };
    }

    if (Number(from) === toUser.id) {
      return {
        success: false,
        message: "Cannot transfer to yourself",
      };
    }

    const result = await prisma.$transaction(async (tx) => {
      await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;
      const fromBalance = await tx.balance.findUnique({
        where: { userId: Number(from) },
      });

      if (!fromBalance || fromBalance.amount < amount) {
        throw new Error("Insufficient funds");
      }

      const [updatedFromBalance, updatedToBalance, transfer] = await Promise.all([
        tx.balance.update({
          where: { userId: Number(from) },
          data: { amount: { decrement: amount } },
        }),
        tx.balance.update({
          where: { userId: toUser.id },
          data: { amount: { increment: amount } },
        }),
        tx.p2pTransfer.create({
          data: {
            fromUserId: Number(from),
            toUserId: toUser.id,
            amount,
            timestamp: new Date(),
          },
        }),
      ]);

      return { updatedFromBalance, updatedToBalance, transfer };
    });

    return {
      success: true,
      message: "Transfer successful",
      data: {
        transferId: result.transfer.id,
        amount: result.transfer.amount,
        newBalance: result.updatedFromBalance.amount,
      },
    };
  } catch (error) {
    console.error("P2P Transfer Error:", error);
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}

