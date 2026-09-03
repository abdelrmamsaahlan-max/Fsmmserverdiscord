import { Paintbrush, Handshake, ShieldCheck, Users, Gamepad2, TrendingUp, ArrowUpRight } from 'lucide-react';

const basePaints = [
  { name: 'Candy', index: '100% Index', file: 'candy.svg' },
  { name: 'Lava', index: '100% Index', file: 'lava.svg' },
  { name: 'Galaxy', index: '100% Index', file: 'galaxy.svg' },
  { name: 'Yin Yang', index: '75% Index', file: 'yin-yang.svg' },
  { name: 'Radioactive', index: '75% Index', file: 'radioactive.svg' },
  { name: 'Cursed', index: '60% Index', file: 'cursed.svg' },
  { name: 'Divine', index: '60% Index', file: 'divine.svg' },
  { name: 'Cyber', index: '60% Index', file: 'cyber.svg' },
  { name: 'Phantom', index: '60% Index', file: 'phantom.svg' },
  { name: 'Crystal', index: '50% Index', file: 'crystal.svg' },
];

const features = [
  { icon: Paintbrush, title: 'Base Painting', desc: 'Get custom SAB base paints from server members, with multiple mutation styles available.' },
  { icon: Handshake, title: 'Middleman Service', desc: 'Use an independent FSMM middleman to help keep eligible cross trades organized and secure.' },
  { icon: ShieldCheck, title: 'Trusted Trades', desc: 'Use community vouches and reputation to make more informed trading decisions.' },
  { icon: Users, title: 'Community', desc: 'Connect with other Steal a Brainrot players, traders, painters, and middlemen.' },
  { icon: Gamepad2, title: 'SAB Focused', desc: 'Everything is centered around Steal a Brainrot trading, bases, and community services.' },
  { icon: TrendingUp, title: 'Value & Trade Help', desc: 'Ask experienced community members for opinions before committing to a trade.' },
];

export default function Features() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="features" className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-white/55 via-brand-50/30 to-white/50 backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/70 to-transparent" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-200/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center rounded-full border border-brand-200/80 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-700 shadow-sm">Mutation Bases</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Explore the base paints</h2>
          <p className="mt-4 text-lg text-slate-600">See the mutation base styles available through the FSMM community.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {basePaints.map((b, i) => (
            <figure key={b.name} className={`group relative overflow-hidden rounded-2xl border border-brand-100/90 bg-white shadow-sm fsmm-shine fsmm-glow hover:-translate-y-2 hover:border-brand-200 transition-all duration-500 reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-brand-50 to-slate-100">
                <img
                  src={`${baseUrl}bases/${b.file}?v=4`}
                  alt={`${b.name} base skin`}
                  loading={i < 5 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(event) => {
                    const image = event.currentTarget;
                    if (image.dataset.fallback) return;
                    image.dataset.fallback = 'true';
                    image.src = `${baseUrl}server-logo.svg`;
                    image.className = 'h-full w-full object-contain p-16 opacity-80 transition-transform duration-700 ease-out group-hover:scale-110';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/5 to-transparent" />
                <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-slate-950/35 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">SAB Base</div>
                <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left">
                  <p className="font-display text-base sm:text-lg font-bold text-white drop-shadow">{b.name}</p>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-brand-100">{b.index}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500 reveal">Index requirements can change. The in-game Index is the final authority.</p>

        <div className="mt-24 text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center rounded-full border border-brand-200/80 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-700 shadow-sm">What we offer</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Everything you need for SAB trading</h2>
          <p className="mt-4 text-lg text-slate-600">From base painting to safer trades, FSMM keeps the trading experience simple.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className={`group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur border border-brand-100 p-7 fsmm-shine fsmm-glow hover:shadow-2xl hover:shadow-brand-600/15 hover:-translate-y-2 hover:border-brand-200 transition-all duration-300 reveal reveal-delay-${(i % 3) + 1}`}>
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
