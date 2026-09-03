import { useEffect, useState } from 'react';

const SAB_VIDEO_ID = '-H4TNdg6rQ4';

/**
 * Full-page SAB gameplay video background with a subtle blue overlay.
 * The video stays behind the site content and never blocks interaction.
 */
export default function AnimatedBackground() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-slate-950"
    >
      {!reduceMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            title="Steal a Brainrot gameplay background"
            src={`https://www.youtube.com/embed/${SAB_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${SAB_VIDEO_ID}&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3`}
            className="absolute left-1/2 top-1/2 h-[115vh] w-[204vh] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.04]"
            allow="autoplay; encrypted-media"
            tabIndex={-1}
          />
        </div>
      )}

      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="absolute inset-0 bg-brand-950/35 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_0%,rgba(2,6,23,0.18)_45%,rgba(2,6,23,0.7)_100%)]" />
    </div>
  );
}
