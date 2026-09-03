import { ShieldCheck, Zap, Paintbrush, Users, CircleDollarSign } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

const reasons = [
  { icon: ShieldCheck, title: 'Middleman Support', desc: 'Use the FSMM middleman service for eligible trades when you want an organized third party involved.' },
  { icon: Paintbrush, title: 'Base Painting', desc: 'Request SAB mutation base paints and confirm the current requirements and terms with the painter.' },
  { icon: Zap, title: 'Straightforward Requests', desc: 'Service requests are handled through the Discord server, where you can discuss the details before proceeding.' },
  { icon: CircleDollarSign, title: 'Trade Discussions', desc: 'Ask other players about values and potential deals when you want another opinion before trading.' },
  { icon: Users, title: 'Focused Community', desc: 'A dedicated place for Steal a Brainrot players who trade, collect, paint bases, and help one another.' },
];

export default function Community() {
  return (
    <section id="community" className="relative py-20 sm:py-28 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Why FSMM</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">A community built around trading</h2>
          <p className="mt-4 text-lg text-slate-600">FSMM brings the services, people, and conversations around SAB trading into one Discord server.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reasons.map((item, i) => (
            <div key={item.title} className={`group rounded-2xl bg-gradient-to-b from-brand-50 to-white border border-brand-100 p-6 shadow-sm hover:shadow-xl hover:shadow-brand-600/10 hover:-translate-y-1 hover:border-brand-200 transition-all duration-300 reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300"><item.icon className="h-5 w-5" /></span>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-950">{item.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center reveal">
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">Join the FSMM community <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
