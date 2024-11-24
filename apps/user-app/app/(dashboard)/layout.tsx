import { getServerSession } from "next-auth";
import { SidebarItem } from "../../components/SiderBarItem";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import { MobileNav } from "../../components/MobileNav";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/home");
  }
  return (
    <div className="flex pt-14 bg-slate-100 overflow-hidden">
      <MobileNav>
        <div className="w-32 md:w-60 md:border-r md:border-slate-300 min-h-svh flex-grow pt-28 md:mr-8 ml-4">
          <div className="flex flex-col gap-4">
            <SidebarItem href={"/dashboard"} title="Home" icon={<HomeIcon />} />
            <SidebarItem
              href={"/transfer"}
              title="Transfer"
              icon={<TransferIcon />}
            />
            <SidebarItem
              href={"/transactions"}
              title="Transactions"
              icon={<TransactionsIcon />}
            />
            <SidebarItem
              href={"/p2p"}
              title="P2P Transfer"
              icon={<P2PIcon />}
            />
          </div>
        </div>
      </MobileNav>
      <div className="flex-1 pb-10">{children}</div>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4 md:w-6 md:h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4 md:w-6 md:h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </svg>
  );
}

function TransactionsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4 md:w-6 md:h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function P2PIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4 md:w-6 md:h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
