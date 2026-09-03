import { useEffect, useState } from 'react';
import { Activity, Brush, Server, Users } from 'lucide-react';
import { DISCORD_INVITE } from '@/lib/constants';

const INVITE_CODE = DISCORD_INVITE.split('/').pop() ?? '';

type DiscordInvite = { approximate_member_count?: number; approximate_presence_count?: number };

export default function CommunityPulse() {
  const [members, setMembers] = useState<number | null>(null);
  const [online, setOnline] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://discord.com/api/v9/invites/${INVITE_CODE}?with_counts=true`, { signal: AbortSignal.timeout(8000) })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('Discord request failed'))))
      .then((data: DiscordInvite) => {
        if (!cancelled) {
          setMembers(typeof data.approximate_member_count === 'number' ? data.approximate_member_count : null);
          setOnline(typeof data.approximate_presence_count === 'number' ? data.approximate_presence_count : null);
        }
      })
      .catch(() => undefined);

    return () => { cancelled = true; };
  }, []);

  const stats = [
    { icon: Users, value: members !== null ? members.toLocaleString() : '—', label: 'Discord members' },
    { icon: Activity, value: online !== null ? online.toLocaleString() : '—', label: 'Online now' },
    { icon: Brush, value: '10', label: 'Mutation bases listed' },
    { icon: Server, value: '4', label: 'Core services' },
  ];

  return (
    <section id="community-stats" className="relative py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-[28px] border border-brand-100 bg-white/90 shadow-xl shadow-brand-900/5 p-4 sm:p-5 reveal">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-brand-100">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`flex items-center gap-3 px-4 py-4 ${i >= 2 ? 'sm:mt-0' : ''}`}>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><stat.icon className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="font-display text-xl font-extrabold text-brand-950 tabular-nums">{stat.value}</p>
                  <p className="text-xs text-slate-500 truncate">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="px-4 pt-2 text-[11px] text-slate-400">Discord figures are approximate and update when the page loads.</p>
        </div>
      </div>
    </section>
  );
}
