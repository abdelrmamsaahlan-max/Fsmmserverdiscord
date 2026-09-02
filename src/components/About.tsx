import { DISCORD_INVITE, SERVER_LOGO, SERVER_NAME } from '@/lib/constants';

const reasons = [
  { title: 'Safety First', desc: 'Clearer, safer ways to handle trades and get help from the community.' },
  { title: 'Trusted Middlemen', desc: 'Experienced FSMM middlemen can oversee eligible cross trades.' },
  { title: 'Community Vouches', desc: 'Use community feedback and reputation to make more informed choices.' },
  { title: 'Fast Service', desc: 'Get connected with the right people without unnecessary steps.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1 reveal">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-brand-400/30 to-brand-600/20 blur-2xl animate-pulse-ring" style={{ animationDuration: '5s' }} />
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-500 to-brand-800 shadow-2xl shadow-brand-700/30 animate-float" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-0 rounded-[2.5rem] opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <div className="absolute inset-6 rounded-[2rem] bg-white/95 backdrop-blur p-8 flex flex-col justify-between shadow-xl">
              <div>
                <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Why FSMM</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-brand-950 leading-snug">A better place to trade in SAB</h3>
                <p className="mt-3 text-slate-600">{SERVER_NAME} brings traders together around base painting, middleman services, and community-driven trading support.</p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                <div className="h-10 w-10 rounded-xl overflow-hidden bg-brand-900 shadow-md"><img src={SERVER_LOGO} alt={`${SERVER_NAME} logo`} className="h-full w-full object-cover object-[50%_38%]" /></div>
                <p className="text-sm text-slate-600"><span className="font-semibold text-brand-900">SAB</span> focused community</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 reveal reveal-delay-1">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">About {SERVER_NAME}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">Why Traders Choose FSMM</h2>
          <p className="mt-5 text-lg text-slate-600">Your items deserve more than a random trade. FSMM gives traders a safer place to connect, verify deals, and get help when they need it.</p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-5">
            {reasons.map((item, i) => (
              <li key={item.title} className={`rounded-2xl border border-brand-100 bg-white/80 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-${(i % 3) + 1}`}>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><span className="h-2 w-2 rounded-full bg-brand-600" /></span>
                <p className="mt-3 font-semibold text-brand-950">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>

          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-700/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95">Join FSMM Discord <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
