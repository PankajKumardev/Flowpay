"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <div
      className={`flex ${selected ? "text-indigo-500" : "text-slate-500"} cursor-pointer  p-2 md:pl-8   w-svw`}
      onClick={() => {
        router.push(href);
      }}
    >
      <div className="pr-1 md:pr-2">{icon}</div>
      <div
        className={`md:font-bold ${selected ? "text-indigo-500" : "text-slate-500"} font-semibold text-sm `}
      >
        {title}
      </div>
    </div>
  );
};
