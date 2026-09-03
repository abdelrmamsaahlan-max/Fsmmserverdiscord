import { ArrowRight, Paintbrush } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

const bases = [
  { name: 'Candy', image: 'https://static.wikia.nocookie.net/stealabr/images/1/1d/Candy_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040019' },
  { name: 'Lava', image: 'https://static.wikia.nocookie.net/stealabr/images/2/20/Lava_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040023' },
  { name: 'Galaxy', image: 'https://static.wikia.nocookie.net/stealabr/images/2/27/Galaxy_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040022' },
  { name: 'Yin Yang', image: 'https://static.wikia.nocookie.net/stealabr/images/6/60/Yin_Yang_Base_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040025' },
  { name: 'Radioactive', image: 'https://static.wikia.nocookie.net/stealabr/images/d/d7/Radioactive_Base_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040025' },
  { name: 'Cursed', image: 'https://static.wikia.nocookie.net/stealabr/images/7/77/Cursed_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040020' },
  { name: 'Divine', image: 'https://static.wikia.nocookie.net/stealabr/images/e/e9/Divine_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040021' },
  { name: 'Cyber', image: 'https://static.wikia.nocookie.net/stealabr/images/9/9c/Cyber_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040021' },
  { name: 'Phantom', image: 'https://static.wikia.nocookie.net/stealabr/images/8/8e/Idk_some_phantom_base.png/revision/latest/scale-to-width-down/160?cb=20260727093917' },
  { name: 'Crystal', image: 'https://static.wikia.nocookie.net/stealabr/images/6/68/Crystal_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260725202106' },
];

export default function BasesWePaint() {
  return (
    <section id="base-paints" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute left-1/2 top-20 -translate-x-1/2 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Base Painting</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Mutation bases available through FSMM</h2>
          <p className="mt-4 text-lg text-slate-600">These are the SAB mutation bases currently listed on the site. Contact the painter in Discord to confirm requirements and availability.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {bases.map((base, i) => (
            <a key={base.name} href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className={`group relative overflow-hidden rounded-3xl border border-brand-100 bg-white/90 backdrop-blur-xl p-4 shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-600/15 transition-all duration-500 reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-brand-400 to-brand-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="aspect-square rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center"><img src={base.image} alt={`${base.name} base`} className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" /></div>
              <div className="mt-4 flex items-center justify-between gap-2"><div><p className="text-xs font-bold uppercase tracking-wider text-brand-600">Mutation base</p><h3 className="mt-1 font-display text-lg font-bold text-brand-950">{base.name}</h3></div><span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition-colors"><ArrowRight className="h-4 w-4" /></span></div>
            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center reveal"><a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:-translate-y-0.5 transition-all"><Paintbrush className="h-4 w-4" />Ask about a base paint</a></div>
      </div>
    </section>
  );
}
