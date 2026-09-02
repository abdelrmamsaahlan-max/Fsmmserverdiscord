import { Users, MessageCircle, Sparkles } from 'lucide-react';
import { DISCORD_INVITE, SERVER_LOGO, SERVER_NAME } from '@/lib/constants';

const stats = [
  { icon: Users, label: 'Community', value: 'SAB' },
  { icon: MessageCircle, label: 'Base Painting', value: 'Bases' },
  { icon: Sparkles, label: 'Middleman', value: 'MM' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', backgroundSize: '56px 56px' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm animate-fade-up"><span className="h-2 w-2 rounded-full bg-brand-500" />Steal a Brainrot trading community</span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-950 leading-[1.1] animate-fade-up" style={{ animationDelay: '80ms' }}>
            Trade Smarter. Trade Safer. <span className="relative inline-block"><span className="relative z-10 bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">Trade With FSMM.</span><span className="absolute bottom-1 left-0 h-3 w-full bg-brand-200/60 -z-0 rounded" /></span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '160ms' }}>
            The trusted Steal a Brainrot community for secure trades, professional middleman services, base painting, and trusted deals.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '240ms' }}>
            <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-600/30 hover:bg-brand-700 hover:shadow-2xl hover:shadow-brand-700/50 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-95">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.21.375-.444.882-.608 1.283a18.27 18.27 0 0 0-5.487 0A12.6 12.6 0 0 0 9.852 3a19.736 19.736 0 0 0-3.762 1.369C2.024 9.678 1.18 14.866 1.6 19.974a19.91 19.91 0 0 0 6.063 3.058c.488-.666.923-1.373 1.298-2.119a12.9 12.9 0 0 1-2.047-.978c.171-.124.34-.253.502-.385a14.197 14.197 0 0 0 12.182 0c.164.134.333.263.504.385-.654.387-1.34.716-2.05.978.375.746.81 1.453 1.298 2.119a19.846 19.846 0 0 0 6.063-3.058c.5-5.922-.86-11.065-4.096-15.605ZM8.02 16.278c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" /></svg>
              Join FSMM Discord →
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-2xl border border-brand-200 bg-white/80 backdrop-blur px-7 py-3.5 text-base font-semibold text-brand-700 hover:bg-brand-50 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-95">Explore Services</a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '320ms' }}>
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/70 backdrop-blur border border-brand-100 p-4 text-center shadow-sm hover:shadow-md hover:shadow-brand-500/10 hover:-translate-y-0.5 hover:border-brand-200 transition-all duration-300">
                <dt className="flex items-center justify-center text-brand-600 mb-1"><s.icon className="h-5 w-5" /></dt>
                <dd className="font-display text-xl sm:text-2xl font-bold text-brand-900">{s.value}</dd>
                <dd className="text-xs text-slate-500 mt-0.5">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '200ms' }}>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-8 bg-gradient-to-tr from-brand-400/40 to-brand-600/25 rounded-[3rem] blur-3xl animate-pulse-ring" style={{ animationDuration: '4s' }} />
            <div className="relative rounded-[2rem] bg-white shadow-2xl shadow-brand-900/10 border border-brand-100 p-6 animate-float">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="h-12 w-12 rounded-2xl overflow-hidden bg-brand-900 shadow-lg shadow-brand-500/30"><img src={SERVER_LOGO} alt={`${SERVER_NAME} logo`} className="h-full w-full object-cover object-[50%_38%]" /></div>
                <div><p className="font-semibold text-brand-950 leading-tight">{SERVER_NAME} Community</p><p className="text-xs text-slate-500 flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-green-500" />SAB trading community</p></div>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  { name: 'base-paints', msg: 'Looking for a clean base paint?', color: 'bg-brand-500' },
                  { name: 'cross-trades', msg: 'Middleman service available.', color: 'bg-emerald-500' },
                  { name: 'trade-chat', msg: 'SAB traders connecting here.', color: 'bg-amber-500' },
                ].map((c) => (
                  <div key={c.name} className="flex items-start gap-3"><span className={`mt-0.5 h-8 w-8 shrink-0 rounded-lg ${c.color} flex items-center justify-center text-white text-xs font-bold`}>#</span><div className="rounded-xl bg-slate-50 px-3 py-2 flex-1"><p className="text-xs font-semibold text-slate-700">#{c.name}</p><p className="text-sm text-slate-600 mt-0.5">{c.msg}</p></div></div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-brand-100 bg-brand-50/60 px-3 py-2.5"><span className="flex-1 text-sm text-slate-500">Message #base-paints</span><span className="text-xs font-medium text-brand-600">Join to chat</span></div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white shadow-xl border border-brand-100 px-4 py-3 animate-float" style={{ animationDelay: '1.5s' }}><p className="text-xs text-slate-500">Trading with support</p><p className="font-display text-lg font-bold text-brand-700">MM available</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
