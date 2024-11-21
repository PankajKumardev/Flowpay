"use server";

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import axios from "axios";

export async function createOnRamptxn(amount: number, provider: string) {
  const session = await getServerSession(authOptions);
  const userId = (await session?.user?.id) || "";
  const token = Math.random().toString().substring(2, 7);
  await webhook(amount, token, userId);
  if (!userId) {
    return {
      message: "User not logged in",
    };
  }
  await prisma.onRampTransaction.create({
    data: {
      userId: Number(userId),
      amount: amount,
      provider,
      status: "Pending",
      token: token,
      startTime: new Date(),
    },
  });

  function webhook(amount: number, token: string, userId: string) {
    axios.post("http://localhost:3003/hdfcWebhook", {
      amount: amount || 0,
      token: token || "",
      user_identifier: userId || "",
    });
  }
  return {
    message: "Transaction created successfully",
  };
}
