import { Paintbrush, Handshake, ShieldCheck, Users, Gamepad2, TrendingUp, ArrowUpRight } from 'lucide-react';

const features = [
  { icon: Paintbrush, title: 'Base Painting', desc: 'Request a mutation base paint through FSMM and confirm the current requirements directly with the painter.' },
  { icon: Handshake, title: 'Middleman Service', desc: 'For eligible trades, an FSMM middleman can oversee the exchange so both sides follow the same agreed deal.' },
  { icon: ShieldCheck, title: 'Trusted Trades', desc: 'Check roles, vouches, and community reputation before deciding who you want to trade with.' },
  { icon: Users, title: 'Trading Community', desc: 'Meet Steal a Brainrot players, traders, painters, and middlemen in one focused community.' },
  { icon: Gamepad2, title: 'SAB Focused', desc: 'The server is built around Steal a Brainrot trading, base paints, and the people who play the game.' },
  { icon: TrendingUp, title: 'Trade Advice', desc: 'When you are unsure about a deal, ask the community for another opinion before you commit.' },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-white/55 via-brand-50/30 to-white/50 backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/70 to-transparent" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-200/15 blur-3xl pointer-events-none fsmm-float-slow" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center rounded-full border border-brand-200/80 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-700 shadow-sm">What FSMM provides</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">The services and support around FSMM</h2>
          <p className="mt-4 text-lg text-slate-600">A focused set of services for SAB players, with the details handled inside the Discord server.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
          {features.map((f, i) => (
            <div key={f.title} className={`group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur border border-brand-100 p-7 fsmm-shine fsmm-glow fsmm-3d reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-100/50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-brand-400 via-blue-500 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start justify-between gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-600/30 transition-all duration-300"><f.icon className="h-6 w-6" /></span>
                <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
              <h3 className="relative mt-5 font-display text-xl font-bold text-brand-950">{f.title}</h3>
              <p className="relative mt-2 text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
