import { SendCard } from "../../../components/SendCard";

export default function () {
  return (
    <div className="w-full">
      <div className="flex justify-center text-3xl mt-20 font-extrabold pr-4 text-indigo-600">
        P2P Transfer
      </div>
      <SendCard />
    </div>
  );
}
