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
      <div className="mx-auto max-w-5xl px-5 sm:px-8 reveal">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/60">
          <div className="flex flex-col gap-6 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Discord community</span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                <span className="text-xs text-emerald-600">Live</span>
              </div>

              <h2 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-[28px]">
                FSMM on Discord
              </h2>
              <p className="mt-1.5 max-w-lg text-sm leading-6 text-slate-500">
                Trade safely, request a middleman, get base painting help, and stay connected with the community.
              </p>
              <p className="mt-2 text-[11px] text-slate-400">{updatedText}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex divide-x divide-slate-200 rounded-xl border border-slate-200 bg-slate-50">
                <div className="min-w-[105px] px-4 py-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Users className="h-3.5 w-3.5" />
                    Members
                  </div>
                  <p className="mt-1 text-lg font-semibold tabular-nums text-slate-900">{memberText}</p>
                </div>
                <div className="min-w-[105px] px-4 py-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Wifi className="h-3.5 w-3.5 text-emerald-500" />
                    Online
                  </div>
                  <p className="mt-1 text-lg font-semibold tabular-nums text-slate-900">{onlineText}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={fetchStatus}
                disabled={refreshing}
                aria-label="Refresh Discord status"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              </button>

              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white transition hover:bg-brand-700 hover:shadow-md hover:shadow-brand-600/20"
              >
                <MessageCircle className="h-4 w-4" />
                Join Discord
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
