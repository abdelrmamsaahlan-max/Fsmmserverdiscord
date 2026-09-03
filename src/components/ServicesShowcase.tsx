import { Handshake, Paintbrush, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

const services = [
  { icon: Paintbrush, title: 'Base Painting', desc: 'Request one of the listed SAB mutation bases and confirm the current requirements with the painter.', label: 'Base service' },
  { icon: Handshake, title: 'Middleman', desc: 'Have an FSMM middleman oversee an eligible trade so the agreed exchange is handled in the right order.', label: 'Trade service' },
  { icon: ShieldCheck, title: 'Trusted Trades', desc: 'Use community roles and vouches as part of your decision when choosing who to trade with.', label: 'Community reputation' },
  { icon: Rocket, title: 'Server Boosts', desc: 'If you want to support FSMM, server boosts help us maintain and grow the community.', label: 'Support the server' },
];

export default function ServicesShowcase() {
  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute left-1/2 top-20 -translate-x-1/2 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">FSMM Services</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">What you can use FSMM for</h2>
          <p className="mt-4 text-lg text-slate-600">Choose what you need, then use the Discord server to discuss the details and arrange the service.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <a key={service.title} href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className={`group relative rounded-3xl border border-brand-100 bg-white/90 backdrop-blur-xl p-6 shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-600/15 transition-all duration-500 reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-brand-400 to-brand-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-105 transition-all duration-300"><service.icon className="h-6 w-6" /></span>
                <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-wider text-brand-600">{service.label}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-brand-950">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
