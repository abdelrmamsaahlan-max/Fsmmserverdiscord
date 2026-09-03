import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Community from '@/components/Community';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import RefreshEasterEgg from '@/components/RefreshEasterEgg';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen text-slate-900 font-sans antialiased relative">
      <AnimatedBackground />
      <RefreshEasterEgg />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Community />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
