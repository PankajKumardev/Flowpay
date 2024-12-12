'use client';

import { useState } from 'react';
import { Card } from '@repo/ui/card';

export const OnRampTransaction = ({
  transactions,
  title = 'Recent Transactions',
}: {
  transactions: {
    time: Date;
    amount: number;
    status: string;
    provider: string;
  }[];
  title?: string;
}) => {
  const [showAll, setShowAll] = useState(false);
  const isSentTransactions = title === 'Sent transactions';

  const displayedTransactions = showAll
    ? transactions.slice().reverse()
    : transactions.slice(-5).reverse();

  if (!transactions.length) {
    return (
      <Card title={title}>
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }

  return (
    <Card title={title}>
      <div className="pt-2 ">
        <div className="max-h-64 overflow-y-auto w-full ">
          {displayedTransactions.map((t, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-2 w-full "
            >
              <div>
                <div className={` ${showAll ? 'pr-1 text-sm' : 'text-sm'}`}>
                  {isSentTransactions ? 'Sent INR' : 'Received INR'}
                </div>
                <div className="text-slate-600 text-xs">
                  {t.time.toDateString()}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-sm w-full ">
                  {isSentTransactions
                    ? `- Rs ${t.amount / 100}`
                    : `+ Rs ${t.amount / 100}`}
                </div>
                <div className="text-sm pr-1">
                  {t.status === 'Completed' ? (
                    <span className="text-green-500">Success</span>
                  ) : t.status === 'Pending' ? (
                    <span className="text-yellow-500">Pending</span>
                  ) : (
                    <span className="text-red-500">Failed</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {transactions.length > 5 && (
          <button
            className="mt-4 text-blue-500"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        )}
      </div>
    </Card>
  );
};
