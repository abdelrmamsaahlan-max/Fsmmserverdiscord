import { useCallback, useEffect, useState } from 'react';
import { ArrowUpRight, MessageCircle, RefreshCw, Users, Wifi } from 'lucide-react';
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
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 reveal">
        <div className="overflow-hidden rounded-2xl border border-brand-200 bg-brand-600 shadow-lg shadow-brand-600/15">
          <div className="flex flex-col gap-6 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-white/50" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">Discord community</span>
                <span className="h-1 w-1 rounded-full bg-blue-200/70" />
                <span className="text-xs font-medium text-white">Live</span>
              </div>

              <h2 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-white sm:text-[28px]">FSMM on Discord</h2>
              <p className="mt-1.5 max-w-lg text-sm leading-6 text-blue-100/90">
                Trade safely, request a middleman, get base painting help, and stay connected with the community.
              </p>
              <p className="mt-2 text-[11px] text-blue-100/65">{updatedText}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex divide-x divide-blue-400/40 rounded-xl border border-blue-300/30 bg-white/10">
                <div className="min-w-[105px] px-4 py-3">
                  <div className="flex items-center gap-1.5 text-xs text-blue-100"><Users className="h-3.5 w-3.5" />Members</div>
                  <p className="mt-1 text-lg font-semibold tabular-nums text-white">{memberText}</p>
                </div>
                <div className="min-w-[105px] px-4 py-3">
                  <div className="flex items-center gap-1.5 text-xs text-blue-100"><Wifi className="h-3.5 w-3.5 text-white" />Online</div>
                  <p className="mt-1 text-lg font-semibold tabular-nums text-white">{onlineText}</p>
                </div>
              </div>

              <button type="button" onClick={fetchStatus} disabled={refreshing} aria-label="Refresh Discord status" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-300/30 bg-white/10 text-blue-100 transition hover:bg-white/15 hover:text-white disabled:opacity-50">
                <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              </button>

              <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-brand-700 transition hover:bg-blue-50 hover:shadow-md">
                <MessageCircle className="h-4 w-4" />Join Discord<ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
