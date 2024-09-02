import { Approach } from '@/components/Approach';
import HeroSection from '@/components/HeroSection';
import { AppleCardsCarouselDemo } from '@/components/Skills';
import WhyChooseMe from '@/components/WhyChooseMe';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Approach />
      <WhyChooseMe />
      <AppleCardsCarouselDemo />
    </main>
  );
}
