import { useEffect, useState } from "react";

export interface InviteData {
  name: string;
  members: string;
  icon: string | null;
}

const formatCount = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M+`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K+`;
  return `${n}`;
};

const extractCode = (invite: string) => {
  const m = invite.match(/discord\.gg\/([\w-]+)/i);
  return m ? m[1] : invite;
};

const cache = new Map<string, InviteData>();

export const useDiscordInvite = (invite: string) => {
  const [data, setData] = useState<InviteData | null>(() => cache.get(invite) ?? null);

  useEffect(() => {
    if (cache.has(invite)) {
      setData(cache.get(invite)!);
      return;
    }
    const code = extractCode(invite);
    let cancelled = false;
    fetch(`https://discord.com/api/v10/invites/${code}?with_counts=true&with_expiration=true`)
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (cancelled || !json?.guild) return;
        const g = json.guild;
        const icon = g.icon
          ? `https://cdn.discordapp.com/icons/${g.id}/${g.icon}.${g.icon.startsWith("a_") ? "gif" : "png"}?size=128`
          : null;
        const result: InviteData = {
          name: g.name,
          members: formatCount(json.approximate_member_count ?? 0),
          icon,
        };
        cache.set(invite, result);
        setData(result);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [invite]);

  return data;
};
