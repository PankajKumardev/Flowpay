import prisma from "@repo/db/client";
import { getSession } from "next-auth/react";
import { AddMoney } from "../../../components/AddMoneyCard"
async function getBalance() {
  const session = await getSession();
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return <div></div>;
}
