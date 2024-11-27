import { SendCard } from "../../../components/SendCard";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'P2P Transfer | Flowpay',
  description: 'Fast and safe P2P transfers with Flowpay digital wallet application',
}

export default function () {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-center text-4xl mt-20 font-extrabold">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
          <span className="text-blue-600">FlowPay </span>P2P Transfer
        </h1>
      </div>
      <div className="text-center mb-8 sm:mb-12">
        <p className="mt-2 text-lg sm:text-xl text-slate-800">
          Fast and safe P2P transfers
        </p>
      </div>
      <div className="flex justify-center">
        <SendCard />
      </div>
    </div>
  );
}
