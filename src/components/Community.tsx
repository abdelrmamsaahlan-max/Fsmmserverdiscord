import { ShieldCheck, MessageCircle, Users } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

const highlights = [
  { icon: ShieldCheck, title: 'Trade Carefully', desc: 'Use the available community systems and middleman service when appropriate.' },
  { icon: MessageCircle, title: 'Ask the Community', desc: 'Get help with trades, values, base paints, and general SAB questions.' },
  { icon: Users, title: 'Meet Traders', desc: 'Connect with other SAB players and find people for your next deal.' },
];

export default function Community() {
  return (
    <section id="community" className="relative py-20 sm:py-28 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">The Community</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Find your place in FSMM</h2>
          <p className="mt-4 text-lg text-slate-600">Join the Discord community to chat with traders, request services, and take part in the SAB trading scene.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, i) => (
            <div key={item.title} className={`group rounded-2xl bg-gradient-to-b from-brand-50 to-white border border-brand-100 p-7 shadow-sm hover:shadow-xl hover:shadow-brand-600/10 hover:-translate-y-1.5 hover:border-brand-200 transition-all duration-300 reveal reveal-delay-${i + 1}`}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300"><item.icon className="h-6 w-6" /></span>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-950">{item.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm hover:bg-brand-50 hover:border-brand-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">Join the Community <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
