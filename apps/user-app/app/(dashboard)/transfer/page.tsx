import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { AddMoney } from "../../../components/AddMoneyCard";
import { authOptions } from "../../lib/auth";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransaction } from "../../../components/OnRampTransaction";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transfer | Flowpay',
  description: 'Transfer funds seamlessly with Flowpay digital wallet application',
}

async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user.id),
    },
  });
  return txns.map((t: any) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

export default async function () {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();
  return (
    <div className="w-full mt-10 ">
      <div className="text-2xl  md:text-4xl pt-8 mb-8 font-bold text-violet-600 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
          <span className="text-blue-600">FlowPay </span>Transfer
        </h1>
        <p className="mt-2 text-lg md:text-xl text-slate-800 font-normal">
          Transfer funds seamlessly
        </p>
      </div>
      <div className=" gap-4 md:grid-cols -2 pt-4  md:px-28">
        <div>
          <AddMoney />
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 px-2">
            <BalanceCard amount={balance.amount} locked={balance.locked} />
            <div>
              <OnRampTransaction transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
