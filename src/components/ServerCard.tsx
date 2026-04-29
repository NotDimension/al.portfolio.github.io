import { ArrowUpRight, Users } from "lucide-react";
import { DiscordServer, serverIcon } from "@/data/servers";

const roleStyle = (role: string) => {
  if (role.toLowerCase().includes("owner")) return "bg-primary text-primary-foreground";
  if (role.toLowerCase().includes("retired")) return "bg-muted text-muted-foreground";
  return "bg-accent/15 text-accent";
};

export const ServerCard = ({ server, index }: { server: DiscordServer; index: number }) => {
  const icon = serverIcon(server);
  return (
    <a
      href={server.invite}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex items-center gap-4 rounded-2xl border border-border/70 bg-card/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card animate-fade-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-secondary">
        {icon ? (
          <img src={icon} alt={server.name} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/30 to-accent/20 text-lg font-semibold text-foreground">
            {server.name.charAt(0)}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold text-foreground">{server.name}</h3>
        <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${roleStyle(server.role)}`}>
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
