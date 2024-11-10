"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { AppbarClient } from "../AppbarClient";

export default function Page(): JSX.Element {
  const session = useSession();
  return (
   <div>
   </div>
  );
}
