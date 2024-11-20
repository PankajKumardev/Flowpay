import { SendCard } from "../../../components/SendCard";

export default function () {
  return (
    <div className="w-full">
      <div className="flex justify-center text-4xl mt-20 font-extrabold ">
        <h1 className="text-4xl font-extrabold text-slate-800">
          <span className="text-blue-600">FlowPay </span>P2P Transfer
        </h1>
      </div>
      <div className="text-center mb-12">
        <p className="mt-2 text-xl text-slate-800">
          Fast and safe P2P transfers
        </p>
      </div>
      <SendCard />
    </div>
  );
}
