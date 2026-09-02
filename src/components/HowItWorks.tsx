import { ShieldCheck, Users, Scale, ArrowRight } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

const points = [
  { icon: ShieldCheck, title: 'Secure Trades', desc: 'Added protection during your deal.' },
  { icon: Users, title: 'Trusted Middlemen', desc: 'Experienced FSMM middlemen.' },
  { icon: Scale, title: 'Fair & Neutral', desc: 'No side-taking, just a smooth trade.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-gradient-to-b from-brand-50/30 to-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Middleman Service</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Trade With Confidence</h2>
          <p className="mt-4 text-lg text-slate-600">Need a safe and reliable way to complete your trade? Our Middleman Service helps both traders complete deals with an independent third party overseeing the exchange.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {points.map((item, i) => (
            <div key={item.title} className={`group rounded-2xl bg-white/90 backdrop-blur border border-brand-100 p-7 shadow-sm hover:shadow-xl hover:shadow-brand-600/10 hover:-translate-y-1.5 hover:border-brand-200 transition-all duration-500 reveal reveal-delay-${i + 1}`}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-600/30 transition-all duration-300"><item.icon className="h-6 w-6" /></span>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-950">{item.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-700/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95">
            Request a Middleman <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
