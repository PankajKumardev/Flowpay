import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { OnRampTransaction } from "../../../components/OnRampTransaction";

async function getsentP2PTranscations() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user.id),
    },
  });

  return txns.map((t: any) => ({
    time: t.timestamp ,
    amount: t.amount,
    status: "Completed",
    provider: t.provider,
  }));
}

async function getreceivedP2PTranscations() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      toUserId: Number(session?.user.id),
    },
  });

  return txns.map((t: any) => ({
    time: t.timestamp ,
    amount: t.amount,
    status: "Completed",
    provider: t.provider, 
  }));
}

async function getOnRampTransactions(status: any) {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
      status: status,
    },
  });
  return txns.map((t) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

export default async function TransactionsPage() {
  const [sentP2PTranscations, receivedP2PTranscations, onRampTransactions, onRampTransactionsPending, onRampTransactionsFailed] = await Promise.all([
    getsentP2PTranscations(),
    getreceivedP2PTranscations(),
    getOnRampTransactions("Completed"),
    getOnRampTransactions("Pending"),
    getOnRampTransactions("Failed"),
  ]);

  return (
    <div>
      <div className="pl-4 pt-14">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center">
          <h1 className="text-4xl text-indigo-600 pt-8 mb-8 font-bold justify-center ">
            Transactions
          </h1>

          </div>
          <div className="w-[80vw] grid grid-cols-1 md:grid-cols-2 px-10 gap-3">
            <h1 className="text-2xl text-violet-500 pt-2 font-bold col-span-2">
              P2P Transactions
            </h1>
            <div>
              <OnRampTransaction
                title={"Sent transactions"}
                transactions={sentP2PTranscations}
              />
            </div>
            <div>
              <OnRampTransaction
                title={"Received transactions"}
                transactions={receivedP2PTranscations}
              />
            </div>
          </div>

          <div className="w-[80vw] grid grid-cols-1 md:grid-cols-2 px-10 gap-3">
            <h1 className="text-2xl text-violet-500 pt-2 font-bold col-span-2">
              Wallet Transactions
            </h1>
            <div>
              <OnRampTransaction
                title={"Successful transactions"}
                transactions={onRampTransactions}
              />
            </div>

            <div>
              <OnRampTransaction
                title={"Processing Transactions"}
                transactions={onRampTransactionsPending}
              />
            </div>

            <div>
            <OnRampTransaction
            title={"Failed transactions"}
            transactions={onRampTransactionsFailed}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
