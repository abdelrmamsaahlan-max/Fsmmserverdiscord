import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ServicesShowcase from '@/components/ServicesShowcase';
import HowItWorks from '@/components/HowItWorks';
import DiscordStatus from '@/components/DiscordStatus';
import Community from '@/components/Community';
import CommunityVouches from '@/components/CommunityVouches';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import RefreshEasterEgg from '@/components/RefreshEasterEgg';
import SecretEasterEgg from '@/components/SecretEasterEgg';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen text-slate-900 font-sans antialiased relative">
      <AnimatedBackground />
      <RefreshEasterEgg />
      <SecretEasterEgg />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ServicesShowcase />
        <HowItWorks />
        <DiscordStatus />
        <Community />
        <CommunityVouches />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
