import { CheckCircle2, MessageSquareQuote, Star } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

const highlights = [
  { title: 'Middleman requests', text: 'Clear trade coordination through the FSMM Discord.' },
  { title: 'Community reputation', text: 'Use real member vouches to make more informed decisions.' },
  { title: 'SAB-focused support', text: 'A focused place for traders, painters, and middlemen.' },
];

export default function CommunityVouches() {
  return (
    <section id="vouches" className="relative py-20 sm:py-28 bg-brand-50/35 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Community Trust</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Built around real vouches</h2>
          <p className="mt-4 text-lg text-slate-600">No made-up testimonials. Check the actual FSMM Discord for real member feedback and trade history.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.15fr_.85fr] gap-6 items-stretch">
          <div className="rounded-3xl border border-brand-100 bg-white shadow-sm p-6 sm:p-8 reveal">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/20">
                <MessageSquareQuote className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-brand-950">How trust works</h3>
                <p className="text-sm text-slate-500">Keep reputation transparent and community-driven.</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {highlights.map((item, i) => (
                <div key={item.title} className="flex gap-4 rounded-2xl bg-slate-50 p-4 hover:bg-brand-50 transition-colors duration-300">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-950">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-900 to-brand-950 p-7 sm:p-8 text-white shadow-xl shadow-brand-900/15 reveal reveal-delay-2">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-400/20 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold">Want your vouch featured?</h3>
                <p className="mt-3 text-brand-100/80 leading-relaxed">Complete your trade through the community, then leave your genuine feedback in the designated Discord channel.</p>
              </div>
              <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-950 hover:-translate-y-0.5 hover:shadow-xl transition-all">Open FSMM Discord →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
