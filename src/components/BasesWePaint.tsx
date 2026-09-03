const bases = [
  { name: 'Candy', image: 'https://static.wikia.nocookie.net/stealabr/images/1/1d/Candy_Base_Skin_Icon.png' },
  { name: 'Lava', image: 'https://static.wikia.nocookie.net/stealabr/images/2/20/Lava_Base_Skin_Icon.png' },
  { name: 'Galaxy', image: 'https://static.wikia.nocookie.net/stealabr/images/2/27/Galaxy_Base_Skin_Icon.png' },
  { name: 'Yin Yang', image: 'https://static.wikia.nocookie.net/stealabr/images/6/60/Yin_Yang_Base_Icon.png' },
  { name: 'Radioactive', image: 'https://static.wikia.nocookie.net/stealabr/images/d/d7/Radioactive_Base_Icon.png' },
  { name: 'Cursed', image: 'https://static.wikia.nocookie.net/stealabr/images/7/77/Cursed_Base_Skin_Icon.png' },
  { name: 'Divine', image: 'https://static.wikia.nocookie.net/stealabr/images/e/e9/Divine_Base_Skin_Icon.png' },
  { name: 'Cyber', image: 'https://static.wikia.nocookie.net/stealabr/images/9/9c/Cyber_Base_Skin_Icon.png' },
  { name: 'Phantom', image: 'https://static.wikia.nocookie.net/stealabr/images/8/8e/Idk_some_phantom_base.png' },
  { name: 'Crystal', image: 'https://static.wikia.nocookie.net/stealabr/images/6/68/Crystal_Base_Skin_Icon.png' },
];

export default function BasesWePaint() {
  return (
    <section id="bases-we-paint" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute left-1/2 top-20 -translate-x-1/2 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">FSMM Base Painting</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">Bases We Paint</h2>
          <p className="mt-4 text-lg text-slate-600">
            We paint mutation bases from Candy all the way to Crystal.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {bases.map((base, i) => (
            <div
              key={base.name}
              className={`group relative overflow-hidden rounded-3xl border border-brand-100 bg-white/90 backdrop-blur-xl shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-600/15 transition-all duration-500 reveal reveal-delay-${(i % 5) + 1}`}
            >
              <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-brand-400 to-brand-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="aspect-square overflow-hidden bg-slate-50 p-3">
                <img
                  src={base.image}
                  alt={`${base.name} Base`}
                  loading="lazy"
                  className="h-full w-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="border-t border-brand-50 px-5 py-4 text-center">
                <h3 className="font-display text-lg font-bold text-brand-950">{base.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-600">Base Painting</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
