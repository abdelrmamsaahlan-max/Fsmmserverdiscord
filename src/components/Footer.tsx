import { DISCORD_INVITE, SERVER_LOGO, SERVER_NAME } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl overflow-hidden bg-brand-900 shadow-lg">
                <img src={SERVER_LOGO} alt="FSMM logo" className="h-full w-full object-cover object-[50%_38%]" />
              </span>
              <span className="font-display text-xl font-extrabold text-white">{SERVER_NAME}</span>
            </div>
            <p className="mt-4 text-sm text-brand-200 max-w-xs">
              A Steal a Brainrot trading community. Base paints, cross trades, and trusted middleman services.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Features', href: '#features' },
                { label: 'How it works', href: '#how-it-works' },
                { label: 'Community', href: '#community' },
                { label: 'FAQ', href: '#faq' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-brand-200 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Get started</p>
            <p className="mt-4 text-sm text-brand-200">
              Join the server and introduce yourself — we'll take it from there.
            </p>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              Join Discord
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-300">© {new Date().getFullYear()} {SERVER_NAME}. Not affiliated with Roblox Corp. or Discord Inc.</p>
          <p className="text-xs text-brand-300">Made with care for the community.</p>
        </div>
      </div>
    </footer>
  );
}
