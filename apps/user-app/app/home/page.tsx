import { HeroSection } from "../../components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Flowpay",
  description: "Welcome to the Flowpay digital wallet application",
};

export default function Home() {

  return <HeroSection />;
}
