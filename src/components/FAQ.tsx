import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  { q: 'When should I use an FSMM middleman?', a: 'If a trade is eligible for the service and you want a third party to oversee the exchange, open the appropriate request in the official FSMM Discord and follow the ticket instructions.' },
  { q: 'Can FSMM handle cross-trades between Roblox games?', a: 'Eligible cross-trades can be coordinated through the middleman service. Confirm the exact trade and procedure with the FSMM middleman in the ticket before sending anything.' },
  { q: 'What happens if someone changes the trade halfway through?', a: 'Pause the exchange. Everyone should agree to the new terms before anything is released. The middleman should follow the confirmed deal rather than an unapproved change.' },
  { q: 'How do I request a base paint?', a: 'Open the relevant request in the FSMM Discord and tell the painter which mutation base you want. They can confirm the current requirements, terms, and availability before the work begins.' },
  { q: 'Which mutation bases are listed on the site?', a: 'Candy, Lava, Galaxy, Yin Yang, Radioactive, Cursed, Divine, Cyber, Phantom, and Crystal. Requirements and availability can change, so confirm the current details with the painter.' },
  { q: 'How can I tell whether a trader or painter is trusted?', a: 'Look at their server role and community vouches, and keep important service requests inside the official FSMM server. A display name, profile picture, or DM claim alone should not be treated as proof.' },
  { q: 'What if someone messages me pretending to be an FSMM middleman?', a: 'Do not continue the trade through the message. Verify the person inside the official FSMM server and use the proper ticket or request process instead.' },
  { q: 'Can new SAB traders join FSMM?', a: 'Yes. New traders can join to ask questions, meet other players, discuss trades, and learn how the server services work.' },
  { q: 'What should I do if there is a trade dispute?', a: 'Keep the relevant trade details and screenshots, then contact the appropriate FSMM staff through the server. Let the staff review the situation instead of escalating it with the other trader.' },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`group rounded-2xl border bg-white/80 backdrop-blur overflow-hidden transition-all duration-300 ${open ? 'border-brand-300 shadow-lg shadow-brand-500/10' : 'border-brand-100 hover:border-brand-200 hover:shadow-md hover:shadow-brand-500/5'}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left hover:bg-brand-50/50 transition-colors">
        <span className="flex items-center gap-3 font-semibold text-brand-950"><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${open ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600 group-hover:bg-brand-100'}`}><HelpCircle className="h-4 w-4" /></span>{q}</span>
        <ChevronDown className={`h-5 w-5 text-brand-600 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden"><p className="px-5 pb-5 pl-16 text-slate-600 leading-relaxed">{a}</p></div></div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-gradient-to-b from-brand-50/30 to-white/40 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center reveal"><p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">FAQ</p><h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Questions about FSMM</h2><p className="mt-4 text-slate-600 max-w-xl mx-auto">A few practical answers about middleman requests, base painting, and trading in the community.</p></div>
        <div className="mt-12 space-y-3">{faqs.map((f, i) => <div key={f.q} className={`reveal reveal-delay-${(i % 3) + 1}`}><Item {...f} /></div>)}</div>
      </div>
    </section>
  );
}
