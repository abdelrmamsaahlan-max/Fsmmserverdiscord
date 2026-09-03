import { useCallback, useEffect, useState } from 'react';
import { Activity, MessageCircle, Users, Wifi, ArrowUpRight, RefreshCw } from 'lucide-react';
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
    : 'Connecting to Discord...';

  return (
    <section className="relative py-14 sm:py-18">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 reveal">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-200/80 bg-brand-950 px-6 py-7 sm:px-9 sm:py-8 shadow-2xl shadow-brand-900/20">
          <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-28 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Live Discord Status</span>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">LIVE</span>
                </div>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">FSMM is live right now.</h2>
                <p className="mt-2 max-w-xl text-sm sm:text-base leading-relaxed text-brand-100/80">See the current server activity and join the community whenever you are ready.</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-brand-200/60">
                  <span className={`inline-block h-1.5 w-1.5 rounded-full ${refreshing ? 'animate-pulse bg-brand-300' : 'bg-emerald-400'}`} />
                  <span>{updatedText}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-stretch gap-3">
                <div className="min-w-[112px] rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 text-brand-200"><Users className="h-4 w-4" /><span className="text-xs">Members</span></div>
                  <p className="mt-1 text-xl font-bold tabular-nums text-white">{memberText}</p>
                </div>
                <div className="min-w-[112px] rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-3 backdrop-blur transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 text-emerald-300"><Wifi className="h-4 w-4" /><span className="text-xs">Online now</span></div>
                  <p className="mt-1 text-xl font-bold tabular-nums text-white">{onlineText}</p>
                </div>
                <button type="button" onClick={fetchStatus} disabled={refreshing} aria-label="Refresh Discord status" className="inline-flex h-auto min-h-[72px] w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-brand-200 hover:bg-white/10 hover:text-white disabled:opacity-50 transition-all">
                  <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                </button>
                <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-brand-950 hover:-translate-y-0.5 hover:shadow-xl transition-all"><MessageCircle className="h-4 w-4" /> Join Discord <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-brand-100/55">
              <Activity className="h-3.5 w-3.5" />
              <span>Server activity refreshes automatically every 60 seconds.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
