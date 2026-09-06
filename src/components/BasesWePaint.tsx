import { useState } from 'react';
import { ArrowRight, Check, Paintbrush, X } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

// The official Steal a Brainrot Wiki gallery lists these mutation bases.
// Fandom file names can change, so each card tries a few common Wiki media-file names
// instead of leaving a broken image icon on the page.
const FANDOM = 'https://stealabrainrot.fandom.com/wiki/Special:Redirect/file/';

const fandomCandidates = (name: string) => {
  const compact = name.replace(/[^a-z0-9]/gi, '');
  const underscored = name.replace(/\s+/g, '_');
  const spaced = `${name} Base`;
  const underscoredBase = `${underscored}_Base`;
  return [
    `${FANDOM}${encodeURIComponent(`${name} Base.png`)}`,
    `${FANDOM}${encodeURIComponent(`${name} Base.webp`)}`,
    `${FANDOM}${encodeURIComponent(`${underscoredBase}.png`)}`,
    `${FANDOM}${encodeURIComponent(`${underscoredBase}.webp`)}`,
    `${FANDOM}${encodeURIComponent(`${compact}Base.png`)}`,
    `${FANDOM}${encodeURIComponent(`${compact}Base.webp`)}`,
    `${FANDOM}${encodeURIComponent(`${name}.png`)}`,
    `${FANDOM}${encodeURIComponent(`${name}.webp`)}`,
  ];
};

const bases = [
  { name: 'Candy', requirement: '100% of the eligible Candy Index', status: 'Past mutation index', images: fandomCandidates('Candy') },
  { name: 'Lava', requirement: '100% of the eligible Lava Index', status: 'Past mutation index', images: fandomCandidates('Lava') },
  { name: 'Galaxy', requirement: '100% of the eligible Galaxy Index', status: 'Past mutation index', images: fandomCandidates('Galaxy') },
  { name: 'Yin Yang', requirement: '75% of the eligible Yin Yang Index', status: 'Past mutation index', images: fandomCandidates('Yin Yang') },
  { name: 'Radioactive', requirement: '75% of the eligible Radioactive Index', status: 'Past mutation index', images: fandomCandidates('Radioactive') },
  { name: 'Cursed', requirement: '60% of the eligible Cursed Index', status: 'Past mutation index', images: fandomCandidates('Cursed') },
  { name: 'Divine', requirement: '60% of the eligible Divine Index', status: 'Past mutation index', images: fandomCandidates('Divine') },
  { name: 'Cyber', requirement: '60% of the eligible Cyber Index', status: 'Past mutation index', images: fandomCandidates('Cyber') },
  { name: 'Phantom', requirement: '60% of the eligible Phantom Index', status: 'Check the live Index', images: fandomCandidates('Phantom') },
];

type Base = typeof bases[number];

function FandomImage({ base, className, alt }: { base: Base; className: string; alt: string }) {
  const [index, setIndex] = useState(0);
  const src = base.images[index];

  if (!src) {
    return <div className="h-full w-full flex items-center justify-center bg-slate-100 text-xs font-semibold text-slate-400">Base image unavailable</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setIndex((current) => current + 1)}
    />
  );
}

export default function BasesWePaint() {
  const [selected, setSelected] = useState<Base | null>(null);

  return (
    <section id="base-paints" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute left-1/2 top-20 -translate-x-1/2 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Base Painting</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Mutation bases we paint</h2>
          <p className="mt-4 text-lg text-slate-600">Browse the mutation base skins from the Steal a Brainrot Wiki. Select a base to see the current index target, then confirm the exact service availability in Discord.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {bases.map((base, i) => (
            <button key={base.name} type="button" onClick={() => setSelected(base)} className={`group relative overflow-hidden rounded-3xl border border-brand-100 bg-white/95 p-4 text-left shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-600/15 transition-all duration-500 reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-brand-400 to-brand-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="aspect-square rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center">
                <FandomImage base={base} alt={`${base.name} base skin`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-2">
                <div><p className="text-xs font-bold uppercase tracking-wider text-brand-600">Mutation base</p><h3 className="mt-1 font-display text-lg font-bold text-brand-950">{base.name}</h3></div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition-colors"><ArrowRight className="h-4 w-4" /></span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 reveal"><a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:-translate-y-0.5 transition-all active:translate-y-0 active:scale-95"><Paintbrush className="h-4 w-4" />Ask about base painting</a><span className="text-sm text-slate-500">Requirements can change with game updates.</span></div>
      </div>

      {selected && <div className="fixed inset-0 z-[70] flex items-center justify-center p-5" role="dialog" aria-modal="true" aria-label={`${selected.name} base details`}>
        <button className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm" onClick={() => setSelected(null)} aria-label="Close modal" />
        <div className="relative w-full max-w-2xl overflow-hidden rounded-[30px] border border-brand-100 bg-white shadow-2xl reveal is-visible">
          <button type="button" onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-slate-600 shadow-sm hover:bg-brand-50 hover:text-brand-700 transition-colors" aria-label="Close"><X className="h-5 w-5" /></button>
          <div className="grid sm:grid-cols-[.8fr_1.2fr]"><div className="bg-slate-50 p-8 flex items-center justify-center min-h-64 sm:min-h-full"><FandomImage base={selected} alt={`${selected.name} base`} className="max-h-64 w-full object-contain" /></div><div className="p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">Mutation base</p><h3 className="mt-2 font-display text-3xl font-extrabold text-brand-950">{selected.name}</h3><div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/60 p-5"><p className="text-xs font-bold uppercase tracking-wider text-brand-600">Index target</p><p className="mt-2 text-base font-semibold text-brand-950">{selected.requirement}</p></div><div className="mt-4 flex items-start gap-3 text-sm text-slate-600"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /><span>{selected.status}</span></div><p className="mt-5 text-sm leading-relaxed text-slate-600">FSMM can confirm the current painting arrangement, availability, and any game-specific changes through Discord before you proceed.</p><a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:-translate-y-0.5 transition-all active:translate-y-0 active:scale-95">Ask in Discord <ArrowRight className="h-4 w-4" /></a></div></div>
        </div>
      </div>}
    </section>
  );
}
