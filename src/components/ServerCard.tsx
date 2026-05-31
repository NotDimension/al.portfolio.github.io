import { ArrowUpRight, Users } from "lucide-react";
import { DiscordServer, serverIcon } from "@/data/servers";
import { TiltCard } from "./TiltCard";
import { useDiscordInvite } from "@/hooks/useDiscordInvite";

const roleStyle = (role: string) => {
  if (role.toLowerCase().includes("owner")) return "bg-primary text-primary-foreground";
  if (role.toLowerCase().includes("retired")) return "bg-muted text-muted-foreground";
  return "bg-accent/15 text-accent";
};

export const ServerCard = ({ server }: { server: DiscordServer }) => {
  const live = useDiscordInvite(server.invite);
  const isRetired = server.role.toLowerCase().includes("retired");
  const icon = (!isRetired && live?.icon) || serverIcon(server);
  const name = (!isRetired && live?.name) || server.name;
  const members = !isRetired && live?.members && live.members !== "0" ? live.members : server.members;
  return (
    <TiltCard
      href={server.invite}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex h-full items-center gap-3 rounded-2xl border border-border/70 bg-card/70 p-3.5 backdrop-blur-sm hover:border-primary/50 sm:gap-4 sm:p-4"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border bg-secondary sm:h-14 sm:w-14">
        {icon ? (
          <img src={icon} alt={server.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/30 to-accent/20 text-lg font-semibold text-foreground">
            {server.name.charAt(0)}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-foreground sm:text-base">{server.name}</h3>
        <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${roleStyle(server.role)}`}>
            {server.role}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" /> {server.members}
          </span>
        </div>
      </div>

      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:h-5 sm:w-5" />
    </TiltCard>
  );
};
