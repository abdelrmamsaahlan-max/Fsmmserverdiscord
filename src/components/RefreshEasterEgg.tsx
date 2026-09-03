import { useEffect, useState } from 'react';

const MEOWL_IMAGE = 'https://www.game.guide/_next/image?q=75&url=%2Fimages%2Fsteal-a-brainrot%2Fmeowl-value-steal-a-brainrot.png&w=1200';

export default function RefreshEasterEgg() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => setVisible(false), 1900);
    return () => window.clearTimeout(hideTimer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-4 bottom-4 sm:right-8 sm:bottom-7 z-[60] animate-[refreshPop_1.9s_ease-in-out_forwards]"
    >
      <div className="relative h-28 w-28 sm:h-36 sm:w-36">
        <div className="absolute inset-3 rounded-full bg-brand-400/20 blur-2xl" />
        <img
          src={MEOWL_IMAGE}
          alt=""
          className="relative h-full w-full object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
