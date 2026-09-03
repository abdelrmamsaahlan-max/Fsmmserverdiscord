import { Quote, Star, ArrowRight } from 'lucide-react';
import { DISCORD_INVITE, SERVER_NAME } from '@/lib/constants';

const brainrotImages = [
  {
    src: 'https://i0.wp.com/levelup.buscafs.com/2025/09/Steal-a-Brainrot.jpg?fit=1280%2C960&quality=75&strip=all',
    alt: 'Steal a Brainrot characters',
  },
  {
    src: 'https://bloxcontrol.de/assets/steal-a-brainrot-roblox-game-trend-2026.p0EdfaaB_2jJOdL.webp',
    alt: 'Steal a Brainrot gameplay',
  },
];

const reviewPlaceholders = [
  { name: 'FSMM Member', label: 'Discord Vouch', text: 'Real member feedback will be featured here.' },
  { name: 'FSMM Member', label: 'Discord Vouch', text: 'Share your experience in the FSMM Discord to be featured.' },
  { name: 'FSMM Member', label: 'Discord Vouch', text: 'Trusted community feedback, added from real vouches.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
              {brainrotImages.map((image, i) => (
                <div key={image.src} className={`group relative overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-xl reveal reveal-delay-${i + 1} ${i === 1 ? 'mt-10' : ''}`}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 pt-12">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/90">Steal a Brainrot</p>
                    <p className="mt-1 text-sm font-medium text-white">SAB Community</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Community Reviews</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">What FSMM Members Say</h2>
            <p className="mt-5 text-lg text-slate-600">See real feedback from traders who use FSMM for base painting, middleman services, and SAB trading.</p>

            <div className="mt-8 space-y-4">
              {reviewPlaceholders.map((review, i) => (
                <article key={i} className={`rounded-2xl border border-brand-100 bg-white/85 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="flex items-center gap-1 text-brand-500" aria-label="Review rating placeholder">
                    {Array.from({ length: 5 }).map((_, star) => <Star key={star} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-3 text-slate-700 leading-relaxed">“{review.text}”</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center"><Quote className="h-4 w-4" /></div>
                    <div>
                      <p className="text-sm font-semibold text-brand-950">{review.name}</p>
                      <p className="text-xs text-slate-500">{review.label}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-700/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95">Join {SERVER_NAME} Discord <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
