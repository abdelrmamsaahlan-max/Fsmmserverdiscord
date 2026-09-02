import { useEffect, useRef } from 'react';

/**
 * Fixed full-page animated background that sits behind all content.
 * Subtle parallax glow orbs that drift on scroll + floating SAB-themed
 * particles (brainrot cells / coins). Pointer-events disabled so it
 * never blocks interaction. Respects prefers-reduced-motion.
 */
export default function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.setProperty('--parallax', `${y * 0.12}px`);
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
      className="fixed inset-0 -z-50 overflow-hidden pointer-events-none"
      style={{ ['--parallax' as string]: '0px' }}
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />

      {/* drifting parallax orbs */}
      <div
        className="absolute -top-32 -left-24 h-[32rem] w-[32rem] rounded-full bg-brand-200/50 blur-3xl animate-drift-slow"
        style={{ transform: 'translateY(var(--parallax))' }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-brand-300/40 blur-3xl animate-drift"
        style={{ transform: 'translateY(calc(var(--parallax) * -0.6))' }}
      />
      <div
        className="absolute bottom-10 left-1/4 h-[24rem] w-[24rem] rounded-full bg-brand-100/50 blur-3xl animate-drift-slow"
        style={{ transform: 'translateY(calc(var(--parallax) * 0.4))' }}
      />

      {/* floating SAB-themed particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-brand-400/15 animate-float"
          style={{
            top: p.top,
            left: p.left,
            height: p.size,
            width: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

const PARTICLES = [
  { top: '12%', left: '8%', size: '10px', delay: '0s', duration: '7s' },
  { top: '22%', left: '85%', size: '14px', delay: '1.2s', duration: '9s' },
  { top: '48%', left: '15%', size: '8px', delay: '2s', duration: '6s' },
  { top: '62%', left: '78%', size: '12px', delay: '0.6s', duration: '8s' },
  { top: '78%', left: '40%', size: '9px', delay: '1.8s', duration: '7.5s' },
  { top: '35%', left: '52%', size: '6px', delay: '3s', duration: '10s' },
  { top: '88%', left: '88%', size: '11px', delay: '2.4s', duration: '8.5s' },
  { top: '8%', left: '60%', size: '7px', delay: '1.5s', duration: '9.5s' },
];
