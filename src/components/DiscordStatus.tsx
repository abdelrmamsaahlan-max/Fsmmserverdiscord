import { useCallback, useEffect, useState } from 'react';
import { Activity, ArrowUpRight, MessageCircle, RefreshCw, Users, Wifi } from 'lucide-react';
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
      const res = await fetch(`https://discord.com/api/v9/invites/${code}?with_counts=true`);
      if (!res.ok) throw new Error('Discord status unavailable');
      const data = await res.json();
      setCounts(data);
      setUpdatedAt(new Date());
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
    <section className="relative py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 reveal">
        <div className="relative overflow-hidden rounded-3xl border border-brand-200/70 bg-brand-950 shadow-xl shadow-brand-900/10">
          <div className="absolute -right-24 -top-28 h-64 w-64 rounded-full bg-brand-500/15 blur-3xl" />

          <div className="relative p-6 sm:p-8">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Discord status</span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/70">LIVE</span>
                </div>

                <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  FSMM community is active.
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-brand-100/65">
                  Check the latest server numbers and join the community whenever you need a trade or service.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-brand-100/45">
                  <Activity className="h-3.5 w-3.5" />
                  <span>{updatedText} · Auto-updates every 60s</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <div className="flex min-w-[125px] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.08] text-brand-200">
                    <Users className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] text-white/45">Members</p>
                    <p className="text-lg font-bold tabular-nums text-white">{memberText}</p>
                  </div>
                </div>

                <div className="flex min-w-[125px] items-center gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.06] px-4 py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                    <Wifi className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] text-white/45">Online now</p>
                    <p className="text-lg font-bold tabular-nums text-white">{onlineText}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={fetchStatus}
                  disabled={refreshing}
                  aria-label="Refresh Discord status"
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center self-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/55 transition-all hover:bg-white/10 hover:text-white disabled:opacity-50 sm:h-auto"
                >
                  <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                </button>

                <a
                  href={DISCORD_INVITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-brand-950 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  Join Discord
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
