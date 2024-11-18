import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";

export default async function Page() {
  const sesson = await getServerSession(authOptions);
  if (sesson?.user) {
    redirect("/dashboard");
  } else {
    redirect("/home");
  }
}
