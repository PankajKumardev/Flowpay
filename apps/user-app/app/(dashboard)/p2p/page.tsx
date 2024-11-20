import { SendCard } from "../../../components/SendCard";

export default function () {
  return (
    <div className="w-full">
      <div className="flex justify-center text-4xl mt-20 font-extrabold ">
      <h1 className="text-4xl font-extrabold text-slate-800">
            <span className="text-blue-600">FlowPay </span>P2P Transfer
          </h1>
      </div>
      <SendCard />
    </div>
  );
}
