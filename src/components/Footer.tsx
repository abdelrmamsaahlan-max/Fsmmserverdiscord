import { ArrowUpRight } from 'lucide-react';
import { DISCORD_INVITE, SERVER_NAME } from '@/lib/constants';

const FSMM_GIF = 'https://cdn.discordapp.com/attachments/1429547493187784835/1544878711336083606/02177081896787500000000000000000000ffffac183399eb0c9f_V1_V1.gif?ex=6a9a1beb&is=6a98ca6b&hm=a36dcdb0e7a32f99bfca23a31dbaddf1eea627418d2be79ff9ba1eb38d6c1d9c&';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Base Painting', href: '#base-paints' },
  { label: 'Middleman', href: '#how-it-works' },
  { label: 'Vouches', href: '#vouches' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-[1.2fr_.8fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5"><span className="flex h-9 w-9 items-center justify-center rounded-xl overflow-hidden bg-brand-600 shadow-lg shadow-brand-500/20"><img src={FSMM_GIF} alt="FSMM" className="h-full w-full object-cover" /></span><span className="font-display text-xl font-extrabold text-white">{SERVER_NAME}</span></div>
            <p className="mt-4 text-sm leading-relaxed text-brand-200 max-w-sm">A Steal a Brainrot community for organized middleman support, base painting, trade discussions, and a practical place to connect with other players.</p>
          </div>

          <div>
            <p className="font-semibold text-white">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">{links.map((l) => <li key={l.href}><a href={l.href} className="text-brand-200 hover:text-white hover:translate-x-0.5 inline-block transition-all">{l.label}</a></li>)}</ul>
          </div>

          <div>
            <p className="font-semibold text-white">Join the server</p>
            <p className="mt-4 text-sm leading-relaxed text-brand-200">Use Discord for service requests, current availability, community feedback, and the latest SAB trading conversations.</p>
            <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95">Open Discord <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-800/60 flex flex-col sm:flex-row items-center justify-between gap-3"><p className="text-xs text-brand-300">© {new Date().getFullYear()} {SERVER_NAME}. Not affiliated with Roblox Corp. or Discord Inc.</p><p className="text-xs text-brand-300">Built for the SAB community.</p></div>
      </div>
    </footer>
  );
}
