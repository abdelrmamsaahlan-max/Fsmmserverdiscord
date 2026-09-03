import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What should I do if the other trader asks me to go first?',
    a: 'You do not have to go first just because the other trader asks. If the trade is eligible for a middleman, open a ticket and let the FSMM middleman handle the exchange instead of taking unnecessary risk.',
  },
  {
    q: 'Can FSMM middleman a cross-trade between Roblox games?',
    a: 'That is one of the main reasons to use the service. If both sides agree to the trade and it fits the server rules, an available FSMM middleman can coordinate the exchange. Always confirm the exact trade and procedure in the ticket before sending anything.',
  },
  {
    q: 'What if the other person changes the trade after the middleman has started?',
    a: 'Stop the exchange and have the new deal confirmed by everyone before anything is released. The middleman should follow the agreed trade, not a last-second change that was never confirmed.',
  },
  {
    q: 'How do I request a base paint, and do I need to provide the brainrots?',
    a: 'Open the appropriate FSMM ticket and tell the painter which mutation/base you want. The painter can then explain the current requirements, price or trade terms, and what you need to provide before starting.',
  },
  {
    q: 'Which mutation bases can FSMM painters make?',
    a: 'The site currently lists Candy, Lava, Galaxy, Yin Yang, Radioactive, Cursed, Divine, Cyber, Phantom, and Crystal. Requirements can change, so confirm the current Index requirement with the painter before ordering.',
  },
  {
    q: 'What happens if I accidentally send the wrong item in a trade?',
    a: 'Tell the middleman immediately and do not continue the exchange. Keep screenshots or other relevant proof and let the middleman and the other trader resolve the situation before anything is released.',
  },
  {
    q: 'How do I know whether a trader or painter is actually trusted?',
    a: 'Do not rely only on a role or a claim in DMs. Check their server role, reputation, and recent community feedback, and use the official FSMM ticket system when a service requires it.',
  },
  {
    q: 'What should I do if someone sends me a fake FSMM middleman account?',
    a: 'Do not trade with them. Verify that the person is the actual server member through the official FSMM server and ticket, rather than trusting a DM, display name, profile picture, or copied role.',
  },
  {
    q: 'Can I join FSMM even if I am new to Steal a Brainrot trading?',
    a: 'Yes. You can join to ask questions, meet other traders, and learn how the community services work. If you are unsure about a trade, ask for help before committing to it.',
  },
  {
    q: 'What should I do if a trade dispute happens after the deal is completed?',
    a: 'Keep the trade details and relevant screenshots, then contact the appropriate FSMM staff through the server. Do not escalate the situation through threats or harassment; let the staff review what happened and apply the server rules.',
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`group rounded-2xl border bg-white/80 backdrop-blur overflow-hidden transition-all duration-300 ${open ? 'border-brand-300 shadow-lg shadow-brand-500/10' : 'border-brand-100 hover:border-brand-200 hover:shadow-md hover:shadow-brand-500/5'}`}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left hover:bg-brand-50/50 transition-colors"
      >
        <span className="flex items-center gap-3 font-semibold text-brand-950">
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${open ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600 group-hover:bg-brand-100'}`}>
            <HelpCircle className="h-4 w-4" />
          </span>
          {q}
        </span>
        <ChevronDown className={`h-5 w-5 text-brand-600 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 pl-16 text-slate-600 leading-relaxed">{a}</p>
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
            Real questions traders ask
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">Straight answers to the situations that actually come up when trading, using a middleman, or ordering a base paint.</p>
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
