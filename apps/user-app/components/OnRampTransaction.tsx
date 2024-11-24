import { Card } from "@repo/ui/card";

export const OnRampTransaction = ({
  transactions,
  title = "Recent Transactions",
}: {
  transactions: {
    time: Date;
    amount: number;
    status: string;
    provider: string;
  }[];
  title?: string;
}) => {
  const isSentTransactions = title === "Sent transactions";

  if (!transactions.length) {
    return (
      <Card title={title}>
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }

  return (
    <Card title={title}>
      <div className="pt-2">
        {transactions
          .slice(-5)
          .reverse()
          .map((t, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <div className="text-sm">
                  {isSentTransactions ? "Sent INR" : "Received INR"}
                </div>
                <div className="text-slate-600 text-xs">
                  {t.time.toDateString()}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-sm">
                  {isSentTransactions
                    ? `- Rs ${t.amount / 100}`
                    : `+ Rs ${t.amount / 100}`}
                </div>
                <div className="text-sm">
                  {t.status === "Completed" ? (
                    <span className="text-green-500">Success</span>
                  ) : t.status === "Pending" ? (
                    <span className="text-yellow-500">Pending</span>
                  ) : (
                    <span className="text-red-500">Failed</span>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </Card>
  );
};
