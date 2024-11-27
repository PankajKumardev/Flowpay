import React from "react";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import { authOptions } from "../../lib/auth";
import { OnRampTransaction } from "../../../components/OnRampTransaction";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Flowpay",
  description: "Dashboard for Flowpay digital wallet application",
};

import {
  Wallet,
  TrendingUp,
  AlertCircle,
  ArrowUpRight,
  ArrowDownLeft,
  PieChart,
  HelpCircle,
} from "lucide-react";

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
    orderBy: {
      startTime: "desc",
    },
    take: 5,
  });
  return txns.map((t: any) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

export default async function DashboardPage() {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();

  return (
    <div className="min-h-screen pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            <span className="text-blue-600">FlowPay </span>Dashboard
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-slate-800">
            Manage your finances with ease
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Wallet className="mr-2 h-6 w-6 text-indigo-600" />
              Your Balance
            </h2>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-indigo-600">
                ₹{(balance.amount / 100).toFixed(2)}
              </span>
              <span className="ml-2 text-sm text-gray-500">Available</span>
            </div>
            {balance.locked > 0 && (
              <div className="mt-2 text-sm text-gray-500 flex items-center">
                <AlertCircle className="mr-1 h-4 w-4 text-yellow-500" />₹
                {(balance.locked / 100).toFixed(2)} Locked
              </div>
            )}
          </div>
          <div className="bg-indigo-50 px-6 py-4">
            <div className="text-sm font-medium text-indigo-600 flex items-center">
              <TrendingUp className="mr-2 h-4 w-4" />
              Quick Tip: Regular transactions help build your financial profile.
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <OnRampTransaction transactions={transactions} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <ArrowUpRight className="mr-2 h-5 w-5 text-green-500" />
                Quick Send
              </h3>
              <p className="text-gray-600 mb-4">
                Transfer money to your contacts instantly.
              </p>
              <div className="pt-1">
                <a
                  href="/p2p"
                  className="bg-green-500 text-white px-3 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Send Money
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <ArrowDownLeft className="mr-2 h-5 w-5 text-blue-500" />
                Add Funds
              </h3>
              <p className="text-gray-600 mb-4">
                Top up your FlowPay wallet easily.
              </p>
              <div className="pt-1">
                <a
                  href="/transfer"
                  className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Add Money
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <PieChart className="mr-2 h-5 w-5 text-purple-500" />
              Spending Insights
            </h3>
            <p className="text-gray-600 mb-4">
              Track your spending patterns and manage your budget more
              effectively.
            </p>
            <a
              href="/transactions"
              className="text-purple-500 font-medium hover:text-purple-600 transition-colors"
            >
              View Detailed Analytics →
            </a>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <HelpCircle className="mr-2 h-5 w-5 text-indigo-600" />
            Need Help?
          </h3>
          <p className="text-gray-600 mb-4">
            Our support team is always ready to assist you with any questions or
            issues.
          </p>
          <a
            href="/contact"
            className="bg-indigo-600 text-white px-4 py-3 rounded-lg mt-1 hover:bg-indigo-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
