import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import Lamper from "@/components/lamp";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSection />
   <Features />
   <Lamper />
   </>
  );
}
