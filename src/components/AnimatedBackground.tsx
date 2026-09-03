import { useEffect, useRef } from 'react';

/**
 * Clean white FSMM background with very subtle floating snow-like particles.
 * Keeps the site light, minimal, and gently animated without distracting from content.
 */
export default function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--parallax', `${window.scrollY * 0.04}px`);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-white"
      style={{ ['--parallax' as string]: '0px' }}
    >
      <div className="absolute inset-0 bg-white" />

      {/* Very subtle blue atmosphere */}
      <div
        className="absolute -top-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-brand-100/25 blur-3xl"
        style={{ transform: 'translateY(var(--parallax))' }}
      />
      <div
        className="absolute -right-48 top-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-50/35 blur-3xl"
        style={{ transform: 'translateY(calc(var(--parallax) * -0.5))' }}
      />

      {/* Soft snowfall effect */}
      <div className="absolute inset-0 opacity-45">
        {SNOW.map((flake, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-brand-300/40 animate-fall"
            style={{
              top: flake.top,
              left: flake.left,
              width: flake.size,
              height: flake.size,
              animationDelay: flake.delay,
              animationDuration: flake.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}

const SNOW = [
  { top: '-4%', left: '8%', size: '3px', delay: '0s', duration: '13s' },
  { top: '-10%', left: '18%', size: '2px', delay: '2s', duration: '16s' },
  { top: '-6%', left: '29%', size: '4px', delay: '5s', duration: '14s' },
  { top: '-12%', left: '41%', size: '2px', delay: '1s', duration: '18s' },
  { top: '-5%', left: '52%', size: '3px', delay: '7s', duration: '15s' },
  { top: '-8%', left: '63%', size: '2px', delay: '3s', duration: '17s' },
  { top: '-11%', left: '74%', size: '4px', delay: '9s', duration: '14s' },
  { top: '-5%', left: '86%', size: '2px', delay: '4s', duration: '19s' },
  { top: '-14%', left: '94%', size: '3px', delay: '6s', duration: '16s' },
  { top: '8%', left: '3%', size: '2px', delay: '8s', duration: '17s' },
  { top: '20%', left: '23%', size: '3px', delay: '10s', duration: '15s' },
  { top: '35%', left: '67%', size: '2px', delay: '11s', duration: '18s' },
  { top: '55%', left: '91%', size: '3px', delay: '12s', duration: '16s' },
];
