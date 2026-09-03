import { useState } from 'react';
import { ArrowRight, Check, Paintbrush, X } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

const bases = [
  { name: 'Candy', requirement: '100% of the eligible Candy Index', status: 'Past mutation index', image: 'https://static.wikia.nocookie.net/stealabr/images/1/1d/Candy_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040019' },
  { name: 'Lava', requirement: '100% of the eligible Lava Index', status: 'Past mutation index', image: 'https://static.wikia.nocookie.net/stealabr/images/2/20/Lava_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040023' },
  { name: 'Galaxy', requirement: '100% of the eligible Galaxy Index', status: 'Past mutation index', image: 'https://static.wikia.nocookie.net/stealabr/images/2/27/Galaxy_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040022' },
  { name: 'Yin Yang', requirement: '75% of the eligible Yin Yang Index', status: 'Past mutation index', image: 'https://static.wikia.nocookie.net/stealabr/images/6/60/Yin_Yang_Base_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040025' },
  { name: 'Radioactive', requirement: '75% of the eligible Radioactive Index', status: 'Past mutation index', image: 'https://static.wikia.nocookie.net/stealabr/images/d/d7/Radioactive_Base_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040025' },
  { name: 'Cursed', requirement: '60% of the eligible Cursed Index', status: 'Past mutation index', image: 'https://static.wikia.nocookie.net/stealabr/images/7/77/Cursed_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040020' },
  { name: 'Divine', requirement: '60% of the eligible Divine Index', status: 'Past mutation index', image: 'https://static.wikia.nocookie.net/stealabr/images/e/e9/Divine_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040021' },
  { name: 'Cyber', requirement: '60% of the eligible Cyber Index', status: 'Past mutation index', image: 'https://static.wikia.nocookie.net/stealabr/images/9/9c/Cyber_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260720040021' },
  { name: 'Phantom', requirement: '60% of the eligible Phantom Index', status: 'Check the live Index', image: 'https://static.wikia.nocookie.net/stealabr/images/8/8e/Idk_some_phantom_base.png/revision/latest/scale-to-width-down/160?cb=20260727093917' },
  { name: 'Crystal', requirement: '50% of the Crystal Index', status: 'Newer mutation base', image: 'https://static.wikia.nocookie.net/stealabr/images/6/68/Crystal_Base_Skin_Icon.png/revision/latest/scale-to-width-down/160?cb=20260725202106' },
];

const imageUrl = (url: string) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}`;

export default function BasesWePaint() {
  const [selected, setSelected] = useState<typeof bases[number] | null>(null);

  return (
    <section id="base-paints" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute left-1/2 top-20 -translate-x-1/2 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Base Painting</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Mutation bases we paint</h2>
          <p className="mt-4 text-lg text-slate-600">Browse the mutation base skins listed by FSMM. Select a base to see the current index target, then confirm the exact service availability in Discord.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {bases.map((base, i) => (
            <button key={base.name} type="button" onClick={() => setSelected(base)} className={`group relative overflow-hidden rounded-3xl border border-brand-100 bg-white/95 p-4 text-left shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-600/15 transition-all duration-500 reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-brand-400 to-brand-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="aspect-square rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center">
                <img src={imageUrl(base.image)} alt={`${base.name} base skin`} className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Mutation base</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-brand-950">{base.name}</h3>
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition-colors"><ArrowRight className="h-4 w-4" /></span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 reveal">
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:-translate-y-0.5 transition-all active:translate-y-0 active:scale-95"><Paintbrush className="h-4 w-4" />Ask about base painting</a>
          <span className="text-sm text-slate-500">Requirements can change with game updates.</span>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-5" role="dialog" aria-modal="true" aria-label={`${selected.name} base details`}>
          <button className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm" onClick={() => setSelected(null)} aria-label="Close modal" />
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[30px] border border-brand-100 bg-white shadow-2xl reveal is-visible">
            <button type="button" onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-slate-600 shadow-sm hover:bg-brand-50 hover:text-brand-700 transition-colors" aria-label="Close"><X className="h-5 w-5" /></button>
            <div className="grid sm:grid-cols-[.8fr_1.2fr]">
              <div className="bg-slate-50 p-8 flex items-center justify-center min-h-64 sm:min-h-full"><img src={imageUrl(selected.image)} alt="" className="max-h-64 w-full object-contain" /></div>
              <div className="p-7 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">Mutation base</p>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-brand-950">{selected.name}</h3>
                <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Index target</p>
                  <p className="mt-2 text-base font-semibold text-brand-950">{selected.requirement}</p>
                </div>
                <div className="mt-4 flex items-start gap-3 text-sm text-slate-600"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /><span>{selected.status}</span></div>
                <p className="mt-5 text-sm leading-relaxed text-slate-600">FSMM can confirm the current painting arrangement, availability, and any game-specific changes through Discord before you proceed.</p>
                <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:-translate-y-0.5 transition-all active:translate-y-0 active:scale-95">Ask in Discord <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
