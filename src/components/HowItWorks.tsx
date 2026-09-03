import { CheckCircle2, MessageSquareText, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

const points = [
  { icon: CheckCircle2, title: 'Agree on the trade', desc: 'Both traders confirm the exact items involved before the middleman request starts.' },
  { icon: MessageSquareText, title: 'Open an FSMM ticket', desc: 'Request the service through the official Discord server and follow the ticket instructions.' },
  { icon: ShieldCheck, title: 'Middleman oversees', desc: 'The middleman follows the agreed exchange and keeps the handoff organized for both sides.' },
  { icon: Users, title: 'Complete the trade', desc: 'Once the agreed steps are confirmed, the exchange is wrapped up and the ticket can be closed.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-gradient-to-b from-brand-50/30 to-white/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Middleman Service</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">A simple process, handled in order.</h2>
          <p className="mt-4 text-lg text-slate-600">FSMM keeps middleman requests structured so both traders know what happens next.</p>
        </div>

        <div className="relative mt-14 max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-[12.5%] right-[12.5%] top-9 h-px bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" />
          <div className="grid md:grid-cols-4 gap-5">
            {points.map((item, i) => (
              <div key={item.title} className={`relative group rounded-3xl border border-brand-100 bg-white/95 p-6 shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-600/10 transition-all duration-500 reveal reveal-delay-${i + 1}`}>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/20 group-hover:scale-105 transition-transform"><item.icon className="h-5 w-5" /></span>
                  <span className="text-xs font-extrabold tracking-[0.16em] text-brand-300">0{i + 1}</span>
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-wider text-brand-600">Step {i + 1}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-brand-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                {i < points.length - 1 && <ArrowRight className="hidden md:block absolute -right-4 top-7 h-7 w-7 text-brand-300 z-20" />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center reveal">
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:-translate-y-0.5 transition-all active:translate-y-0 active:scale-95">Request a Middleman <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}
