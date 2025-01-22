import { HeroSection } from "@/components/HeroSection";
import { CrisisSection } from "@/components/CrisisSection";
import { RebellionSection } from "@/components/RebellionSection";
import { RoadmapSection } from "@/components/RoadmapSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <CrisisSection />
      <RebellionSection />
      <RoadmapSection />
    </div>
  );
};

export default Index;