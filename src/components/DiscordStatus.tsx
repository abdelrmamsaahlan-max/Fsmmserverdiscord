import { MessageCircle, Users, Wifi, ArrowUpRight } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

export default function DiscordStatus() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 reveal">
        <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-brand-950 px-6 py-7 sm:px-9 sm:py-8 shadow-2xl shadow-brand-900/20">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute -left-16 -bottom-24 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
            <div>
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">FSMM Community</span>
              </div>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">The action is on Discord.</h2>
              <p className="mt-2 max-w-xl text-sm sm:text-base text-brand-100/80">Join the server for trade help, middleman requests, base painting, trusted trades, and the latest SAB community activity.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur">
                <Wifi className="h-4 w-4 text-emerald-300" />
                <span>Online community</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur">
                <Users className="h-4 w-4 text-brand-200" />
                <span>Active traders</span>
              </div>
              <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-brand-950 hover:-translate-y-0.5 hover:shadow-xl transition-all">
                <MessageCircle className="h-4 w-4" /> Join Discord <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
