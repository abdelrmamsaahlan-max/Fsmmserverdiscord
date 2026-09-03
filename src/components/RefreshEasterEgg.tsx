import { useEffect, useState } from 'react';

const MEOWL_IMAGE = 'https://cdn.discordapp.com/attachments/1429547493187784835/1544878711336083606/02177081896787500000000000000000000ffffac183399eb0c9f_V1_V1.gif?ex=6a9a1beb&is=6a98ca6b&hm=a36dcdb0e7a32f99bfca23a31dbaddf1eea627418d2be79ff9ba1eb38d6c1d9c&';

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
