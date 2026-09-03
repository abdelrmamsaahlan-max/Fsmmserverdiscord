import { Paintbrush, Handshake, ShieldCheck, Users, Gamepad2, TrendingUp } from 'lucide-react';

const basePaints = [
  { name: 'Candy', index: '100% Index', img: 'https://www.lolga.com/uploads/images/goods/steal-a-brainrot/all-server-rebirthing-accountcandy-base.png' },
  { name: 'Lava', index: '100% Index', img: 'https://cdn.gameboost.com/cdn-cgi/image/format%3Dauto%2Cwidth%3D1920/https%3A//cdn.gameboost.com/cms-uploads/images/2026-08-20/eef64379-7c12-4b9e-a516-fd75c270ac4e.webp' },
  { name: 'Galaxy', index: '100% Index', img: 'https://cdn.gameboost.com/cdn-cgi/image/format%3Dauto%2Cwidth%3D1920/https%3A//cdn.gameboost.com/cms-uploads/images/2026-08-20/66a24204-030c-4366-b455-ecd4b6252e12.webp' },
  { name: 'Yin Yang', index: '75% Index', img: 'https://cdn.gameboost.com/cdn-cgi/image/format%3Dauto%2Cwidth%3D1920/https%3A//cdn.gameboost.com/cms-uploads/images/2026-08-20/8e0de5b8-5512-4b58-87ae-bbd3c996b8cc.webp' },
  { name: 'Radioactive', index: '75% Index', img: 'https://cdn.gameboost.com/cdn-cgi/image/format%3Dauto%2Cwidth%3D1920/https%3A//cdn.gameboost.com/cms-uploads/images/2026-08-20/3e4a52b6-f404-4881-88cc-188813d19296.webp' },
  { name: 'Cursed', index: '60% Index', img: 'https://cdn.gameboost.com/cdn-cgi/image/format%3Dauto%2Cwidth%3D1920/https%3A//cdn.gameboost.com/cms-uploads/images/2026-08-20/ae2b15c6-829c-492c-bc1c-fe59090d2d32.webp' },
  { name: 'Divine', index: '60% Index', img: 'https://cdn.gameboost.com/cdn-cgi/image/format%3Dauto%2Cwidth%3D1920/https%3A//cdn.gameboost.com/cms-uploads/images/2026-08-20/a2acedc7-d3e5-42d0-bba0-d9d83af51c5c.webp' },
  { name: 'Cyber', index: '60% Index', img: 'https://cdn.gameboost.com/cdn-cgi/image/format%3Dauto%2Cwidth%3D1920/https%3A//cdn.gameboost.com/cms-uploads/images/2026-08-20/2e60c329-3e35-45bd-ba9d-da92f33da26c.webp' },
  { name: 'Phantom', index: '60% Index', img: 'https://cdn.gameboost.com/cdn-cgi/image/format%3Dauto%2Cwidth%3D1920/https%3A//cdn.gameboost.com/cms-uploads/images/2026-08-20/213da962-00d5-4224-bef9-04126f030d2d.webp' },
  { name: 'Crystal', index: '50% Index', img: 'https://cdn.gameboost.com/cdn-cgi/image/format%3Dauto%2Cwidth%3D1920/https%3A//cdn.gameboost.com/cms-uploads/images/2026-08-20/607ee0bc-2d69-41dc-b764-1c7b0cf5fc58.webp' },
];

const features = [
  { icon: Paintbrush, title: 'Base Painting', desc: 'Get custom SAB base paints from server members, with multiple mutation styles available.' },
  { icon: Handshake, title: 'Middleman Service', desc: 'Use an independent FSMM middleman to help keep eligible cross trades organized and secure.' },
  { icon: ShieldCheck, title: 'Trusted Trades', desc: 'Use community vouches and reputation to make more informed trading decisions.' },
  { icon: Users, title: 'Community', desc: 'Connect with other Steal a Brainrot players, traders, painters, and middlemen.' },
  { icon: Gamepad2, title: 'SAB Focused', desc: 'Everything is centered around Steal a Brainrot trading, bases, and community services.' },
  { icon: TrendingUp, title: 'Value & Trade Help', desc: 'Ask experienced community members for opinions before committing to a trade.' },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-gradient-to-b from-white/40 to-brand-50/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Mutation Bases</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Explore the base paints</h2>
          <p className="mt-4 text-lg text-slate-600">See the mutation base styles available through the FSMM community.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {basePaints.map((b, i) => (
            <figure key={b.name} className={`group relative overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-600/15 transition-all duration-500 reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={b.img} alt={`${b.name} base skin`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left">
                  <p className="font-display text-base sm:text-lg font-bold text-white">{b.name}</p>
                  <p className="mt-0.5 text-xs sm:text-sm font-medium text-brand-100">{b.index}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500 reveal">Index requirements can change. The in-game Index is the final authority.</p>

        <div className="mt-20 text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">What we offer</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Everything you need for SAB trading</h2>
          <p className="mt-4 text-lg text-slate-600">From base painting to safer trades, FSMM keeps the trading experience simple.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className={`group relative rounded-2xl bg-white/90 backdrop-blur border border-brand-100 p-7 shadow-sm hover:shadow-2xl hover:shadow-brand-600/15 hover:-translate-y-1.5 hover:border-brand-200 transition-all duration-300 reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-brand-400 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-600/30 transition-all duration-300"><f.icon className="h-6 w-6" /></span>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-950">{f.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
