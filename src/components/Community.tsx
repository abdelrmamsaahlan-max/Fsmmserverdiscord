import { ShieldCheck, Zap, Paintbrush, Users, MessageCircle } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

const reasons = [
  { icon: ShieldCheck, title: 'Structured Middleman Support', desc: 'Use the FSMM middleman service for eligible trades when you want a clear process and an organized third party involved.' },
  { icon: Paintbrush, title: 'Base Painting', desc: 'Browse the mutation bases listed on the site, then confirm the current painting arrangement and requirements in Discord.' },
  { icon: MessageCircle, title: 'Clear Service Requests', desc: 'Requests stay in the official Discord server so the details, questions, and next steps are visible where the service is handled.' },
  { icon: Zap, title: 'Useful Trade Discussions', desc: 'Talk with other SAB players about trades, values, collection goals, and the details that matter before you commit.' },
  { icon: Users, title: 'A Focused SAB Community', desc: 'FSMM is centered on Steal a Brainrot players who trade, collect, paint bases, and help keep the community useful.' },
];

export default function Community() {
  return (
    <section id="community" className="relative py-20 sm:py-28 bg-white/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Why FSMM</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">A community built around how traders actually use SAB.</h2>
          <p className="mt-4 text-lg text-slate-600">The goal is simple: keep services organized, make trade conversations easier, and give SAB players one place to handle the practical side of trading.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reasons.map((item, i) => (
            <div key={item.title} className={`group rounded-2xl bg-gradient-to-b from-brand-50 to-white border border-brand-100 p-6 shadow-sm hover:shadow-xl hover:shadow-brand-600/10 hover:-translate-y-1.5 hover:border-brand-200 transition-all duration-300 reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-105 transition-all duration-300"><item.icon className="h-5 w-5" /></span>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-950">{item.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 reveal">
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95">Join the FSMM community <span aria-hidden="true">→</span></a>
          <span className="text-sm text-slate-500">Questions, requests, and feedback stay in Discord.</span>
        </div>
      </div>
    </section>
  );
}
