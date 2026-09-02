import { MessageSquare, Search, Handshake, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Post what you need',
    desc: 'Drop a message in #base-paints or #cross-trades describing what you want. A trusted member will respond.',
  },
  {
    icon: Search,
    title: 'Pick your painter or MM',
    desc: 'Check vouches and reputation before choosing. Every painter and middleman is a trusted member of our server.',
  },
  {
    icon: Handshake,
    title: 'Agree on the deal',
    desc: 'Work out the details — price, items, timing. For cross trades, the middleman holds both sides.',
  },
  {
    icon: PackageCheck,
    title: 'Receive your base',
    desc: 'Get your clean base paint or complete your cross trade safely. Leave a vouch to help the next trader.',
  },
];

const showcase = [
  {
    name: 'Candy Base',
    img: 'https://images.pexels.com/photos/30580213/pexels-photo-30580213.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    desc: 'Sweet pastel tones with a glossy finish.',
  },
  {
    name: 'Lava Base',
    img: 'https://images.pexels.com/photos/14032281/pexels-photo-14032281.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    desc: 'Molten reds and oranges with a fiery glow.',
  },
  {
    name: 'Galaxy Base',
    img: 'https://images.pexels.com/photos/14314462/pexels-photo-14314462.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    desc: 'Deep purples and gold like a starlit sky.',
  },
  {
    name: 'Cyber Base',
    img: 'https://images.pexels.com/photos/37824226/pexels-photo-37824226.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    desc: 'Neon blues and magenta in a futuristic grid.',
  },
  {
    name: 'Radioactive Base',
    img: 'https://images.pexels.com/photos/30032763/pexels-photo-30032763.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    desc: 'Toxic green energy with electric streaks.',
  },
  {
    name: 'Phantom Base',
    img: 'https://images.pexels.com/photos/26545226/pexels-photo-26545226.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    desc: 'Shadowy violet with a haunting dark orb core.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-gradient-to-b from-brand-50/30 to-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* How it works steps */}
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">How it works</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
            Trading made simple in four steps
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From request to delivery, here's exactly how a typical base paint or cross trade goes down in FSMM.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`group relative rounded-2xl bg-white/90 backdrop-blur border border-brand-100 p-7 shadow-sm hover:shadow-xl hover:shadow-brand-600/10 hover:-translate-y-1.5 hover:border-brand-200 transition-all duration-500 reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="absolute top-5 right-5 font-display text-5xl font-extrabold text-brand-100 select-none transition-colors duration-500 group-hover:text-brand-200">
                {i + 1}
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-600/30 transition-all duration-500">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-brand-950">{s.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Brainrot showcase gallery */}
        <div className="mt-24 text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Base paint gallery</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
            See the bases our painters create
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A taste of the finishes available from our trusted painters. Join the server to see more and place an order.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcase.map((b, i) => (
            <figure
              key={b.name}
              className={`group relative rounded-2xl overflow-hidden border border-brand-100 shadow-sm hover:shadow-2xl hover:shadow-brand-600/20 hover:-translate-y-1.5 transition-all duration-500 reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={b.img}
                  alt={`${b.name} example`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <figcaption className="absolute bottom-0 inset-x-0 p-5 text-left">
                  <p className="font-display text-lg font-bold text-white">{b.name}</p>
                  <p className="mt-1 text-sm text-brand-100 leading-snug opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {b.desc}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500 reveal">
          Gallery images are illustrative. Finished bases vary by painter and request.
        </p>
      </div>
    </section>
  );
}
