import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is FSMM free to join?',
    a: "Yes — completely free. There are no fees or paywalls. Just click the invite link and you're in.",
  },
  {
    q: 'What is Steal a Brainrot?',
    a: 'Steal a Brainrot (SAB) is a Roblox game. Our community focuses on base paints and trading within it, including cross trades with other games.',
  },
  {
    q: 'How does the middleman service work?',
    a: 'When two players agree on a cross trade, a trusted member from our server acts as middleman. They hold the items on both sides and make sure each person gets what they agreed on before anything is released.',
  },
  {
    q: 'Are the base painters trusted?',
    a: 'Yes. Our base painters are trusted server members who build reputation through completed orders and vouches. They offer candy, lava, galaxy, yin yang, radioactive, cursed, divine, cyber, phantom, and crystal bases.',
  },
  {
    q: 'How big is the server?',
    a: 'We are a focused 200-member community. That means less noise, faster responses, and traders who actually know each other.',
  },
  {
    q: 'Can I invite my friends?',
    a: "Absolutely. The more, the merrier — feel free to share the invite link with anyone who'd enjoy the community.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-brand-100 bg-white/80 backdrop-blur overflow-hidden hover:border-brand-200 hover:shadow-md hover:shadow-brand-500/5 transition-all duration-300">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-brand-50/50 transition-colors"
      >
        <span className="font-semibold text-brand-950">{q}</span>
        <ChevronDown className={`h-5 w-5 text-brand-600 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-slate-600 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-gradient-to-b from-brand-50/30 to-white/40 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">FAQ</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <Item {...f} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
