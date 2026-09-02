import { DISCORD_INVITE, SERVER_NAME } from '@/lib/constants';

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900" />
      {/* animated moving gradient overlay */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(110deg,transparent,40%,rgba(255,255,255,0.15),60%,transparent)] bg-[length:200%_100%] animate-shimmer" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, white 1.5px, transparent 1.5px), radial-gradient(circle at 75% 75%, white 1.5px, transparent 1.5px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl animate-drift" />
      <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl animate-drift-slow" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center reveal">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to join {SERVER_NAME}?
        </h2>
        <p className="mt-5 text-lg sm:text-xl text-brand-100 max-w-xl mx-auto">
          Join 200 SAB traders. Get base paints, use our middleman, and trade with confidence.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-2xl shadow-brand-950/30 hover:bg-brand-50 hover:shadow-2xl hover:shadow-brand-950/40 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.21.375-.444.882-.608 1.283a18.27 18.27 0 0 0-5.487 0A12.6 12.6 0 0 0 9.852 3a19.736 19.736 0 0 0-3.762 1.369C2.024 9.678 1.18 14.866 1.6 19.974a19.91 19.91 0 0 0 6.063 3.058c.488-.666.923-1.373 1.298-2.119a12.9 12.9 0 0 1-2.047-.978c.171-.124.34-.253.502-.385a14.197 14.197 0 0 0 12.182 0c.164.134.333.263.504.385-.654.387-1.34.716-2.05.978.375.746.81 1.453 1.298 2.119a19.846 19.846 0 0 0 6.063-3.058c.5-5.922-.86-11.065-4.096-15.605ZM8.02 16.278c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
            </svg>
            Join the Server
          </a>
        </div>
        <p className="mt-4 text-sm text-brand-200">It's free — and always will be.</p>
      </div>
    </section>
  );
}
