import { MapPin, Shield, Bot, Code2 } from "lucide-react";
import { SERVERS } from "@/data/servers";
import { ServerCard } from "./ServerCard";

const AVATAR =
  "https://cdn.discordapp.com/avatars/1223739092366524497/8efc6448a30283164d8725b0bbe2c817.png?size=512";

export const Portfolio = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ambient bg */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* HERO */}
        <section className="flex flex-col items-center text-center animate-fade-up">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full pulse-ring" />
            <div className="ring-glow rounded-full p-1 animate-float">
              <img
                src={AVATAR}
                alt="AL avatar"
                className="h-32 w-32 rounded-full object-cover md:h-36 md:w-36"
              />
            </div>
          </div>

          <h1 className="font-mono-display text-5xl font-bold tracking-tight text-gradient-purple md:text-7xl">
            AL<span className="cursor-blink" />
          </h1>

          <p className="mt-3 font-mono-display text-xs uppercase tracking-[0.3em] text-primary">
            // staff · bot dev · server owner
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Cali</span>
            <span className="mx-2 text-border">|</span>
            <span>16 y/o</span>
          </div>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-foreground/80 md:text-lg">
            Hey, I'm <span className="text-foreground font-medium">AL</span>. Experienced staff member
            across 10+ Discord communities. I set up <span className="text-primary">bots</span>,{" "}
            <span className="text-primary">servers</span>, and I'm currently leveling up my{" "}
            <span className="text-primary">scripting</span>.
          </p>

          {/* skill chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { icon: Shield, label: "Moderation" },
              { icon: Bot, label: "Bot Setup" },
              { icon: Code2, label: "Scripting" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono-display text-xs text-foreground/80 backdrop-blur-sm"
              >
                <Icon className="h-3.5 w-3.5 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="mt-16 grid grid-cols-3 gap-3 md:gap-6">
          {[
            { v: "10+", l: "Communities" },
            { v: "100K+", l: "Members reached" },
            { v: "1", l: "Server owned" },
          ].map((s, i) => (
            <div
              key={s.l}
              className="rounded-xl border border-border bg-card/50 p-4 text-center backdrop-blur-sm animate-fade-up md:p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="font-mono-display text-2xl font-bold text-glow text-foreground md:text-4xl">
                {s.v}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground md:text-xs">
                {s.l}
              </div>
            </div>
          ))}
        </section>

        {/* SERVERS */}
        <section className="mt-20">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="font-mono-display text-xs uppercase tracking-[0.3em] text-primary">
                // servers
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-foreground md:text-3xl">
                Where I staff
              </h2>
            </div>
            <span className="font-mono-display text-xs text-muted-foreground">
              {SERVERS.length} entries
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {SERVERS.map((s, i) => (
              <ServerCard key={s.invite} server={s} index={i} />
            ))}
          </div>
        </section>

        <footer className="mt-20 flex flex-col items-center gap-2 border-t border-border pt-8 font-mono-display text-xs text-muted-foreground">
          <div>
            <span className="text-primary">$</span> echo "thanks for stopping by"
          </div>
          <div className="opacity-60">© {new Date().getFullYear()} AL — solo.to/al_plays16</div>
        </footer>
      </main>
    </div>
  );
};
