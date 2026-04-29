import { ArrowUpRight, Users } from "lucide-react";
import { DiscordServer, serverIcon } from "@/data/servers";

const roleStyle = (role: string) => {
  if (role.toLowerCase().includes("owner")) return "bg-primary text-primary-foreground";
  if (role.toLowerCase().includes("retired")) return "bg-muted text-muted-foreground border border-border";
  return "bg-accent/20 text-accent border border-accent/30";
};

export const ServerCard = ({ server, index }: { server: DiscordServer; index: number }) => {
  const icon = serverIcon(server);
  return (
    <a
      href={server.invite}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-card animate-fade-up"
      style={{ animationDelay: `${index * 60}ms`, boxShadow: "var(--shadow-card)" }}
    >
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-border bg-secondary">
        {icon ? (
          <img src={icon} alt={server.name} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono-display text-lg text-primary">
            {server.name.charAt(0)}
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-semibold text-foreground">{server.name}</h3>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          <span className={`rounded-full px-2 py-0.5 font-mono-display text-[10px] uppercase tracking-wide ${roleStyle(server.role)}`}>
            {server.role}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" /> {server.members}
          </span>
        </div>
      </div>

      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
    </a>
  );
};
