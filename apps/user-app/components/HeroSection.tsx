'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CreditCard,
  PieChart,
  Shield,
  Smartphone,
  Zap,
  TrendingUp,
  DollarSign,
  BarChart2,
  Lock,
  RefreshCw,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function FeatureItem({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center transform transition-all duration-200"
    >
      <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-5 shadow-lg">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <p className="mt-4 text-lg font-medium text-gray-900">{text}</p>
    </motion.div>
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
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-xl transition-all duration-200"
    >
      <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-4 mb-6">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function HowItWorksStep({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-violet-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-400/20 to-blue-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              Simplify Your Finances with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                FlowPay
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Experience seamless fund management, expense tracking, and secure
              money transfers with FlowPay - your all-in-one digital e-wallet
              solution.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <Link href="/api/auth/signin">
              <button className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-medium text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started Now
                <ArrowRight className="ml-2 h-6 w-6 transform transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <FeatureItem icon={CreditCard} text="Instant Deposits" />
            <FeatureItem icon={Smartphone} text="P2P Payments" />
            <FeatureItem icon={PieChart} text="Smart Analytics" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
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
        </motion.div>

        {/* New Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Powerful Features for Your Financial Journey
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureItem icon={DollarSign} text="Add Funds Securely" />
            <FeatureItem icon={RefreshCw} text="Instant Transfers" />
            <FeatureItem icon={BarChart2} text="Real-time Balance" />
            <FeatureItem icon={Lock} text="Secure Authentication" />
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            How FlowPay Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <HowItWorksStep
              number={1}
              title="Sign Up"
              description="Create your account in minutes with our simple and secure registration process."
            />
            <HowItWorksStep
              number={2}
              title="Add Funds"
              description="Easily transfer money from your bank account to your FlowPay wallet."
            />
            <HowItWorksStep
              number={3}
              title="Start Transacting"
              description="Send money, make payments, and track your expenses with ease."
            />
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Simplify Your Finances?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying the benefits of
            FlowPay. Start your journey to smarter financial management today.
          </p>
          <Link href="/api/auth/signin">
            <button className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-medium text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Create Your FlowPay Account
              <ArrowRight className="ml-2 h-6 w-6 transform transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
