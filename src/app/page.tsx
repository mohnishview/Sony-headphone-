import Navbar from "@/components/Navbar";
import CanvasSequence from "@/components/CanvasSequence";
import { HeroSection } from "@/components/sections/HeroSection";
import { EngineeringSection } from "@/components/sections/EngineeringSection";
import { NoiseCancellingSection } from "@/components/sections/NoiseCancellingSection";
import { SoundSection } from "@/components/sections/SoundSection";
import { ReassemblySection } from "@/components/sections/ReassemblySection";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen">
      <Navbar />

      <div className="relative w-full" style={{ height: "500vh" }}>
        
        <div className="sticky top-0 w-full h-screen bg-[#050505]">
          <CanvasSequence />
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col pointer-events-none">
          <HeroSection />
          <EngineeringSection />
          <NoiseCancellingSection />
          <SoundSection />
          <ReassemblySection />
        </div>
      </div>
    </main>
  );
}
