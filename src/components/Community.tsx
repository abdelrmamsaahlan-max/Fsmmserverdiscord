import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Kai',
    handle: '@kai_sab',
    avatar: 'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    text: "Got a base paint done in under an hour and it came out clean. FSMM is the only place I trade now.",
  },
  {
    name: 'Riley',
    handle: '@rileysb',
    avatar: 'https://images.pexels.com/photos/590479/pexels-photo-590479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    text: "Used their middleman for a cross trade and everything went smooth. Felt safe the whole time.",
  },
  {
    name: 'Dez',
    handle: '@deztron',
    avatar: 'https://images.pexels.com/photos/7562139/pexels-photo-7562139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    text: "Small server but the traders here actually know their values. Way better than the huge chaotic servers.",
  },
];

export default function Community() {
  return (
    <section id="community" className="relative py-20 sm:py-28 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">From the community</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
            What members are saying
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Don't take our word for it — here's what the traders who call FSMM home have to say.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`relative rounded-2xl bg-gradient-to-b from-brand-50 to-white border border-brand-100 p-7 shadow-sm hover:shadow-xl hover:shadow-brand-600/10 hover:-translate-y-1.5 hover:border-brand-200 transition-all duration-300 reveal reveal-delay-${i + 1}`}
            >
              <Quote className="h-8 w-8 text-brand-200" />
              <blockquote className="mt-4 text-slate-700 leading-relaxed">{t.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={`${t.name}'s profile picture`}
                  className="h-10 w-10 rounded-full object-cover shadow-md ring-2 ring-white"
                />
                <div>
                  <p className="font-semibold text-brand-950">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.handle}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
