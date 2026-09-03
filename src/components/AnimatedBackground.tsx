import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--parallax', `${window.scrollY * 0.035}px`);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-slate-50" style={{ ['--parallax' as string]: '0px' }}>
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute inset-0 fsmm-grid opacity-80" />

      <div className="absolute -top-56 -left-48 h-[34rem] w-[34rem] rounded-full bg-brand-100/40 blur-3xl animate-drift-slow" style={{ transform: 'translateY(var(--parallax))' }} />
      <div className="absolute top-[20%] -right-52 h-[34rem] w-[34rem] rounded-full bg-blue-100/35 blur-3xl animate-drift" style={{ transform: 'translateY(calc(var(--parallax) * -0.5))' }} />
      <div className="absolute bottom-[-10rem] left-[30%] h-[30rem] w-[30rem] rounded-full bg-sky-100/30 blur-3xl animate-pulse-glow" style={{ transform: 'translateY(calc(var(--parallax) * 0.3))' }} />

      <div className="absolute top-[8%] left-[48%] h-56 w-56 rounded-full border border-brand-200/20 animate-pulse-glow" />
      <div className="absolute top-[10%] left-[50%] h-40 w-40 rounded-full border border-blue-200/20" />

      <div className="absolute inset-0 opacity-45">
        {SNOW.map((flake, i) => (
          <span key={i} className="absolute rounded-full bg-brand-400/35 animate-fall" style={{ top: flake.top, left: flake.left, width: flake.size, height: flake.size, animationDelay: flake.delay, animationDuration: flake.duration }} />
        ))}
      </div>

      <div className="absolute inset-0 opacity-30">
        {PARTICLES.map((particle, i) => (
          <span key={i} className="absolute rounded-full bg-brand-300/35 animate-float" style={{ top: particle.top, left: particle.left, width: particle.size, height: particle.size, animationDelay: particle.delay, animationDuration: particle.duration }} />
        ))}
      </div>
    </div>
  );
}

const SNOW = [
  { top: '-4%', left: '7%', size: '3px', delay: '0s', duration: '15s' }, { top: '-10%', left: '18%', size: '2px', delay: '2s', duration: '18s' }, { top: '-6%', left: '30%', size: '3px', delay: '5s', duration: '16s' }, { top: '-12%', left: '42%', size: '2px', delay: '1s', duration: '20s' }, { top: '-5%', left: '54%', size: '3px', delay: '7s', duration: '17s' }, { top: '-8%', left: '66%', size: '2px', delay: '3s', duration: '19s' }, { top: '-11%', left: '77%', size: '3px', delay: '9s', duration: '16s' }, { top: '-5%', left: '88%', size: '2px', delay: '4s', duration: '21s' }, { top: '-14%', left: '96%', size: '3px', delay: '6s', duration: '18s' }, { top: '15%', left: '12%', size: '2px', delay: '8s', duration: '20s' }, { top: '31%', left: '52%', size: '3px', delay: '10s', duration: '17s' }, { top: '58%', left: '84%', size: '2px', delay: '12s', duration: '19s' }, { top: '76%', left: '28%', size: '3px', delay: '6s', duration: '18s' },
];

const PARTICLES = [
  { top: '18%', left: '9%', size: '5px', delay: '0s', duration: '9s' }, { top: '38%', left: '24%', size: '4px', delay: '2s', duration: '11s' }, { top: '14%', left: '72%', size: '4px', delay: '4s', duration: '10s' }, { top: '52%', left: '63%', size: '5px', delay: '1s', duration: '12s' }, { top: '73%', left: '92%', size: '4px', delay: '5s', duration: '10s' }, { top: '86%', left: '47%', size: '5px', delay: '3s', duration: '13s' },
];
