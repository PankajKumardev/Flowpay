"use client";

import { usePathname } from "next/navigation";
import { AppbarClient } from "./AppbarClient";
import Footer from "@repo/ui/footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

    const showAppbarAndFooter = pathname !== "/home" && pathname !== "/auth"

  return (
    <>
      {showAppbarAndFooter && <AppbarClient />}

      {children}

      {showAppbarAndFooter && <Footer />}
    </>
  );
}
