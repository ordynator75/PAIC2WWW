import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import COP from "@/components/COP";
import Architecture from "@/components/Architecture";
import Nvidia from "@/components/Nvidia";
import SecurityOverlay from "@/components/SecurityOverlay";
import Positioning from "@/components/Positioning";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <COP />
      <Architecture />
      <Nvidia />
      <SecurityOverlay />
      <Positioning />
      <Community />
      <Footer />
    </main>
  );
}
