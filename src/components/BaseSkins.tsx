import { ExternalLink } from 'lucide-react';

const FANDOM_BASES = 'https://stealabrainrot.fandom.com/wiki/Base/Gallery';

const skins = [
  { name: 'Gold', category: 'Classic', requirement: '75% Gold Index', image: 'https://i.ebayimg.com/images/g/xcQAAeSwcU5oyyFa/s-l500.png' },
  { name: 'Diamond', category: 'Classic', requirement: '75% Diamond Index', image: 'https://d3p9x0g8yuku7f.cloudfront.net/media/shop/DIAMOND-BASEResultado.webp' },
  { name: 'Candy', category: 'Mutation', requirement: '100% eligible Candy Index', image: 'https://a.allegroimg.com/s720/11827c/c3b48bf94fa1b6832b38d2cc576e' },
  { name: 'Lava', category: 'Mutation', requirement: '100% eligible Lava Index', image: 'https://a.allegroimg.com/s720/1127d0/a1629cce43deba125de1c2222954' },
  { name: 'Galaxy', category: 'Mutation', requirement: '100% eligible Galaxy Index', image: 'https://a.allegroimg.com/s720/114821/7fad47814a0288e568049f4fdecb' },
  { name: 'Yin Yang', category: 'Mutation', requirement: '75% eligible Yin Yang Index', image: 'https://res.ldrescdn.com/rms/ldplayer/process/img/7a1dd224e8014bccba514e4c57e5702f1763234424.png?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2CQ_100%2Fresize%2Cw_1024' },
  { name: 'Radioactive', category: 'Mutation', requirement: '75% eligible Radioactive Index', image: 'https://i.ebayimg.com/images/g/-iAAAeSwXFtpGfmg/s-l1600.jpg' },
  { name: 'Cursed', category: 'Mutation', requirement: '60% eligible Cursed Index', image: 'https://a.allegroimg.com/s720/114905/03722ee747559b990ec12ee2825d' },
  { name: 'Divine', category: 'Mutation', requirement: '60% eligible Divine Index', image: 'https://files.bo3.gg/uploads/image/113456/image/webp-d2c3dae306b0814d44aba61b5c1ff99e.webp' },
  { name: 'Cyber', category: 'Mutation', requirement: '60% eligible Cyber Index', image: 'https://www.lolga.com/uploads/images/news/cyber-base.png' },
];

export default function BaseSkins() {
  return (
    <section id="base-skins" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute left-1/2 top-24 -translate-x-1/2 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">SAB Base Skins</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Base skins & mutations</h2>
          <p className="mt-4 text-lg text-slate-600">Real in-game base previews, sourced from public SAB references instead of generated artwork.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skins.map((skin, i) => (
            <a
              key={skin.name}
              href={FANDOM_BASES}
              target="_blank"
              rel="noopener noreferrer"
              className={`group overflow-hidden rounded-3xl border border-brand-100 bg-white/90 backdrop-blur-xl shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-600/15 transition-all duration-500 reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={skin.image}
                  alt={`${skin.name} base skin in Steal a Brainrot`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                <div className="absolute left-4 bottom-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">{skin.category}</p>
                  <h3 className="mt-1 font-display text-xl font-bold">{skin.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-slate-600">{skin.requirement}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                  View source <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          Full base gallery and the latest skin list are available on the SAB Fandom wiki.
        </div>
      </div>
    </section>
  );
}
