import { DISCORD_INVITE, SERVER_LOGO, SERVER_NAME } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Visual */}
        <div className="relative order-2 lg:order-1 reveal">
          <div className="relative aspect-square max-w-md mx-auto">
            {/* animated glow behind card */}
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-brand-400/30 to-brand-600/20 blur-2xl animate-pulse-ring" style={{ animationDuration: '5s' }} />
            <div className="relative absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-500 to-brand-800 shadow-2xl shadow-brand-700/30 animate-float" style={{ animationDuration: '8s' }} />
            <div
              className="absolute inset-0 rounded-[2.5rem] opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="absolute inset-6 rounded-[2rem] bg-white/95 backdrop-blur p-8 flex flex-col justify-between shadow-xl">
              <div>
                <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Our promise</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-brand-950 leading-snug">
                  A safe place to trade in SAB
                </h3>
                <p className="mt-3 text-slate-600">
                  We keep things honest and reliable. Our team makes sure {SERVER_NAME} stays a trusted spot for base paints,
                  cross trades, and everything in between.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                <div className="flex -space-x-3">
                  {['from-brand-400 to-brand-600', 'from-emerald-400 to-emerald-600', 'from-amber-400 to-amber-600', 'from-sky-400 to-sky-600'].map((g, i) => (
                    <span key={i} className={`h-10 w-10 rounded-full bg-gradient-to-br ${g} ring-2 ring-white`} />
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-brand-900">200</span> members and counting
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2 reveal reveal-delay-1">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">About {SERVER_NAME}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
            A Discord community built on real connections
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            {SERVER_NAME} is a community built around Steal a Brainrot. We specialize in base paints and middleman services for
            cross trades, so you can buy, sell, and swap with confidence. Whether you're a veteran trader or just getting
            started, there's a place for you here.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              { title: 'Base paint services', desc: 'Order clean base paints from trusted server members. Candy, lava, galaxy, yin yang, radioactive, cursed, divine, cyber, phantom, and crystal bases available.' },
              { title: 'Middleman for cross trades', desc: 'Our trusted server members act as middleman to keep your cross-game trades fair and scam-free.' },
              { title: 'Active & growing', desc: 'A tight-knit 200-member community of SAB players who actually trade.' },
            ].map((item, i) => (
              <li key={item.title} className={`flex gap-4 reveal reveal-delay-${i + 1}`}>
                <span className="mt-1 shrink-0 h-7 w-7 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" /></svg>
                </span>
                <div>
                  <p className="font-semibold text-brand-950">{item.title}</p>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-700/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            Become a member
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
