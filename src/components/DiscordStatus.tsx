import { useCallback, useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle, RefreshCw, Users, Wifi, Zap } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

type DiscordCounts = {
  approximate_member_count?: number;
  approximate_presence_count?: number;
};

export default function DiscordStatus() {
  const [counts, setCounts] = useState<DiscordCounts | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchStatus = useCallback(async () => {
    const code = DISCORD_INVITE.split('/').filter(Boolean).pop();
    if (!code) return;

    setRefreshing(true);
    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 8000);
      try {
        const res = await fetch(`https://discord.com/api/v9/invites/${code}?with_counts=true`, {
          signal: controller.signal,
          cache: 'no-store',
        });
        if (!res.ok) throw new Error('Discord status unavailable');
        const data = await res.json();
        setCounts(data);
        setUpdatedAt(new Date());
      } finally {
        window.clearTimeout(timeout);
      }
    } catch {
      // Keep the last known values if Discord is temporarily unavailable.
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
    const interval = window.setInterval(fetchStatus, 60_000);
    return () => window.clearInterval(interval);
  }, [fetchStatus]);

  const memberText = counts?.approximate_member_count != null
    ? counts.approximate_member_count.toLocaleString()
    : '—';
  const onlineText = counts?.approximate_presence_count != null
    ? counts.approximate_presence_count.toLocaleString()
    : '—';

  const updatedText = updatedAt
    ? `Updated ${updatedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
    : 'Connecting...';

  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/10 blur-3xl fsmm-float-slow" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 reveal">
        <div className="group relative overflow-hidden rounded-[28px] border border-brand-300/50 bg-gradient-to-br from-brand-700 via-brand-600 to-blue-700 shadow-[0_25px_80px_rgba(37,99,235,0.22)] fsmm-3d">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,.18),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,.12),transparent_30%)]" />
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-[1px] fsmm-float-slow" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10 bg-white/5 blur-[1px] fsmm-float" />

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-emerald-300/70" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,.9)]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Discord community</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                  <Zap className="h-3 w-3" /> Live
                </span>
              </div>

              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">FSMM is live on Discord</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100/90 sm:text-base">
                See the community pulse in real time, then jump straight into FSMM for trades, middleman help, base painting, and more.
              </p>

              <div className="mt-5 flex items-center gap-2 text-[11px] text-blue-100/70">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                <span>{updatedText} · refreshes automatically</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch lg:flex-col">
              <div className="grid grid-cols-2 gap-3">
                <div className="min-w-[135px] rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                  <div className="flex items-center gap-2 text-xs font-medium text-blue-100"><Users className="h-4 w-4" />Members</div>
                  <p className="mt-2 text-2xl font-extrabold tabular-nums text-white">{memberText}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-blue-100/60">Community size</p>
                </div>
                <div className="min-w-[135px] rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                  <div className="flex items-center gap-2 text-xs font-medium text-blue-100"><Wifi className="h-4 w-4" />Online now</div>
                  <p className="mt-2 text-2xl font-extrabold tabular-nums text-white">{onlineText}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-blue-100/60">Active presence</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={fetchStatus}
                  disabled={refreshing}
                  aria-label="Refresh Discord status"
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-blue-100 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                </button>
                <a
                  href={DISCORD_INVITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fsmm-shine inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-brand-700 shadow-lg shadow-blue-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl sm:min-w-[190px]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Join Discord
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100/60 sm:justify-start sm:px-10">
            <span>Real-time community pulse</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
            <span>Updated automatically</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
            <span>FSMM · Steal a Brainrot</span>
          </div>
        </div>
      </div>
    </section>
  );
}
