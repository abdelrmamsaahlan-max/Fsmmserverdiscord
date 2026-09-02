import { Paintbrush, Handshake, ShieldCheck, Users, Gamepad2, TrendingUp } from 'lucide-react';

const basePaints = [
  { name: 'Candy', cls: 'bg-gradient-to-r from-pink-400 to-rose-500' },
  { name: 'Lava', cls: 'bg-gradient-to-r from-orange-500 to-red-600' },
  { name: 'Galaxy', cls: 'bg-gradient-to-r from-indigo-600 to-purple-700' },
  { name: 'Yin Yang', cls: 'bg-gradient-to-r from-slate-700 to-slate-200 text-slate-800' },
  { name: 'Radioactive', cls: 'bg-gradient-to-r from-lime-400 to-green-500 text-slate-900' },
  { name: 'Cursed', cls: 'bg-gradient-to-r from-slate-800 to-zinc-900' },
  { name: 'Divine', cls: 'bg-gradient-to-r from-amber-300 to-yellow-500 text-slate-900' },
  { name: 'Cyber', cls: 'bg-gradient-to-r from-cyan-400 to-blue-600' },
  { name: 'Phantom', cls: 'bg-gradient-to-r from-violet-500 to-indigo-700' },
  { name: 'Crystal', cls: 'bg-gradient-to-r from-sky-300 to-cyan-500 text-slate-900' },
];

const features = [
  {
    icon: Paintbrush,
    title: 'Base Paints',
    desc: 'Order from trusted server members. Candy, lava, galaxy, yin yang, radioactive, cursed, divine, cyber, phantom & crystal bases available.',
  },
  {
    icon: Handshake,
    title: 'Middleman Service',
    desc: 'Trusted server members act as middleman for cross trades, holding both sides until the deal is complete. No scams, no headaches.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Traders',
    desc: 'A reputation system and vouching channel help you find reliable people to trade with.',
  },
  {
    icon: Users,
    title: 'Active Community',
    desc: '200 members who actually play SAB and trade regularly. There is almost always someone online to deal with.',
  },
  {
    icon: Gamepad2,
    title: 'SAB Focused',
    desc: 'Every channel is built around Steal a Brainrot — base paints, value checks, and trade discussion.',
  },
  {
    icon: TrendingUp,
    title: 'Value & Price Checks',
    desc: 'Not sure what something is worth? Get a second opinion from experienced traders before you commit.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-gradient-to-b from-white/40 to-brand-50/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">What we offer</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
            Everything you need for SAB trading
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From base paints to safe cross trades, FSMM covers the whole trading experience.
          </p>
        </div>

        {/* Base paint types showcase */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5 reveal">
          {basePaints.map((b) => (
            <span
              key={b.name}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md ${b.cls} hover:scale-105 hover:shadow-lg transition-transform duration-200`}
            >
              {b.name} Base
            </span>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative rounded-2xl bg-white/90 backdrop-blur border border-brand-100 p-7 shadow-sm hover:shadow-2xl hover:shadow-brand-600/15 hover:-translate-y-1.5 hover:border-brand-200 transition-all duration-300 reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-brand-400 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* glow on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-400/0 to-brand-600/0 group-hover:from-brand-400/10 group-hover:to-brand-600/5 transition-all duration-500 -z-10" />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-600/30 transition-all duration-300">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-950">{f.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
