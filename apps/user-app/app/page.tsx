import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";
import { Analytics } from "@vercel/analytics/react";

export default async function Page() {
  <Analytics />;
  const session = await getServerSession(await authOptions);
  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/home");
  }
}
