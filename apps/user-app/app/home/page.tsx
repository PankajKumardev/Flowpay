import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  CreditCard,
  PieChart,
  Shield,
  Smartphone,
  Zap,
  TrendingUp,
} from "lucide-react";
import { authOptions } from "../lib/auth";
import { getServerSession } from "next-auth";

export default async function HeroSection() {
  const sesson = await getServerSession(authOptions);
  if (sesson?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 pt-10 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900  sm:text-6xl md:text-7xl">
            Simplify Your Finances with{" "}
            <span className="text-blue-600 ">FlowPay</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 ">
            Experience seamless fund management, expense tracking, and secure
            money transfers with FlowPay - your all-in-one digital e-wallet
            solution.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="rounded-full px-8 py-4 text-lg bg-black text-white flex items-center hover:bg-gray-800">
              <Link href="/api/auth/signin" className="flex items-center">
                Get Started Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </button>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FeatureItem icon={CreditCard} text="Instant Deposits" />
            <FeatureItem icon={Smartphone} text="Mobile Payments" />
            <FeatureItem icon={PieChart} text="Smart Analytics" />
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900  mb-12">
            Why FlowPay Stands Out
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <BenefitItem
              icon={Zap}
              title="Lightning-Fast Transactions"
              description="Experience the speed of instant transfers and payments, making your financial life smoother than ever."
            />
            <BenefitItem
              icon={Shield}
              title="Bank-Grade Security"
              description="Rest easy knowing your funds are protected by state-of-the-art encryption and multi-factor authentication."
            />
            <BenefitItem
              icon={TrendingUp}
              title="Intelligent Financial Insights"
              description="Gain valuable insights into your spending habits with our advanced analytics, helping you make smarter financial decisions."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full bg-blue-100  p-4">
        <Icon className="h-8 w-8 text-blue-600 " />
      </div>
      <p className="mt-4 text-lg font-medium text-gray-900 ">{text}</p>
    </div>
  );
}

function BenefitItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="rounded-full bg-blue-100 p-4 mb-4">
        <Icon className="h-8 w-8 text-blue-600 " />
      </div>
      <h3 className="text-xl font-semibold text-gray-900  mb-3">{title}</h3>
      <p className="text-gray-600 ">{description}</p>
    </div>
  );
}
