import { ArrowUpRight, MessageSquareQuote, ShieldCheck } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

const trustPoints = [
  { title: 'Public feedback', desc: 'Keep service feedback in Discord so members can review real community comments in one place.' },
  { title: 'Service context', desc: 'Vouches are most useful when you can see what service was involved and what was completed.' },
  { title: 'Community first', desc: 'Use feedback as one part of your decision and always confirm the current trade or service details.' },
];

export default function Vouches() {
  return (
    <section id="vouches" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute left-1/2 top-16 -translate-x-1/2 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Community Feedback</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">See the feedback behind FSMM</h2>
          <p className="mt-4 text-lg text-slate-600">Vouches live in the FSMM Discord server, where members can review service experiences instead of relying on polished claims on a website.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.15fr_.85fr] gap-6 items-stretch">
          <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-7 sm:p-9 text-white shadow-2xl shadow-brand-900/15 reveal">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.10] blur-3xl" />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.12] border border-white/[0.15]">
                <MessageSquareQuote className="h-6 w-6 text-white" />
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-brand-200">FSMM vouch system</p>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight">Real feedback belongs in the community.</h3>
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/[0.78]">Open the server to review the current vouches, ask questions, and get the latest information before arranging a middleman request or base paint.</p>
              <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-800 shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:shadow-xl transition-all active:translate-y-0 active:scale-95">
                Open vouches in Discord <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {trustPoints.map((item, i) => (
              <div key={item.title} className={`group rounded-2xl border border-brand-100 bg-white/90 p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10 transition-all duration-300 reveal reveal-delay-${i + 1}`}>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-950">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
