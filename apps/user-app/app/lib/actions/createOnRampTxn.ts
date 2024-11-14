"use server";

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createOnRamptxn(amount: number, provider: string) {
  const session = await getServerSession(authOptions);
  const userId = (await session?.user?.id) || "";
  const token = Math.random().toString().substring(2, 7);
  if (!userId) {
    return {
      message: "User not logged in",
    };
  }
  await prisma.onRampTransaction.create({
    data: {
      userId,
      amount: amount * 100,
      provider,
      status: "Pending",
      token: token,
      startTime: new Date(),
    },
  });
  return {
    message: "Transaction created successfully",
  };
}
