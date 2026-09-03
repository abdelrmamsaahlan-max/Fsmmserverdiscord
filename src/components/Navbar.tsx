import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { DISCORD_INVITE, SERVER_NAME } from '@/lib/constants';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Vouches', href: '#vouches' },
  { label: 'FAQ', href: '#faq' },
];

const FSMM_GIF = 'https://cdn.discordapp.com/attachments/1429547493187784835/1544878711336083606/02177081896787500000000000000000000ffffac183399eb0c9f_V1_V1.gif?ex=6a9a1beb&is=6a98ca6b&hm=a36dcdb0e7a32f99bfca23a31dbaddf1eea627418d2be79ff9ba1eb38d6c1d9c&';

function BrandMark() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center rounded-xl overflow-hidden shadow-lg shadow-brand-500/25 transition-transform group-hover:scale-105 bg-brand-600">
      <img src={FSMM_GIF} alt="FSMM" className="h-full w-full object-cover" />
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-white/85 backdrop-blur-md shadow-lg shadow-brand-900/5 border-b border-brand-100' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between transition-all duration-500">
        <a href="#home" className="flex items-center gap-2.5 group"><BrandMark /><span className="font-display text-xl font-extrabold tracking-tight text-brand-900 transition-colors duration-300">{SERVER_NAME}</span></a>
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => <li key={l.href}><a href={l.href} className="relative px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-700 hover:bg-brand-50 transition-colors after:absolute after:left-1/2 after:-bottom-0.5 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-brand-600 after:transition-all after:duration-300 hover:after:w-5">{l.label}</a></li>)}
        </ul>
        <div className="hidden md:flex items-center gap-3"><a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-brand-700/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95">Join Discord</a></div>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-brand-800 hover:bg-brand-50 transition-colors" aria-label="Toggle menu">{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </nav>
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-brand-100 ${open ? 'max-h-[32rem]' : 'max-h-0'}`}>
        <ul className="px-5 py-3 space-y-1">
          {links.map((l) => <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-brand-700 hover:bg-brand-50 transition-colors">{l.label}</a></li>)}
          <li className="pt-2"><a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block text-center rounded-xl bg-brand-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-brand-600/25">Join Discord</a></li>
        </ul>
      </div>
    </header>
  );
}
