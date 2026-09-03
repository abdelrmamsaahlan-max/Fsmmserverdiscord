import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

export default function SecretEasterEgg() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === sequence[index]) {
        const next = index + 1;
        if (next === sequence.length) {
          setShow(true);
          setIndex(0);
          window.setTimeout(() => setShow(false), 3200);
        } else {
          setIndex(next);
        }
      } else {
        setIndex(event.key === sequence[0] ? 1 : 0);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [index]);

  if (!show) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-24 z-[70] flex justify-center px-5 animate-[refreshPop_0.5s_ease-out]">
      <div className="flex items-center gap-3 rounded-2xl border border-brand-200 bg-white/95 px-5 py-3 shadow-2xl shadow-brand-600/20 backdrop-blur-xl">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white"><Sparkles className="h-5 w-5" /></span>
        <div><p className="font-display font-bold text-brand-950">Secret unlocked 👀</p><p className="text-xs text-slate-500">FSMM knows you found it.</p></div>
      </div>
    </div>
  );
}
