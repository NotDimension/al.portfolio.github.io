import {
  MapPin,
  Shield,
  Bot,
  Code2,
  Sparkles,
  Users,
  Server,
  MessageCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { SERVERS } from "@/data/servers";
import { ServerCard } from "./ServerCard";

const AVATAR =
  "https://cdn.discordapp.com/avatars/1223739092366524497/8efc6448a30283164d8725b0bbe2c817.png?size=512";

const SKILLS = [
  { icon: Shield, title: "Moderation", desc: "Keeping communities safe, organized, and welcoming." },
  { icon: Bot, title: "Bot Setup", desc: "Configuring MEE6, Carl-bot, Dyno and custom workflows." },
  { icon: Server, title: "Server Building", desc: "Channels, roles, permissions and structure done right." },
  { icon: Code2, title: "Scripting", desc: "Currently learning to build my own tools and automations." },
];

const EXPERIENCE = [
  { role: "Owner", server: "AxonMC (Prism SMP)", period: "Current", current: true },
  { role: "Mod", server: "SMP Finder · 43K+", period: "Current", current: true },
  { role: "Helper", server: "MineHeart · 25K+", period: "Current", current: true },
  { role: "Helper", server: "Echo Network · 3K+", period: "Current", current: true },
  { role: "Retired Mod", server: "PotionMC · 6.5K+", period: "Past" },
  { role: "Retired Mod", server: "StaticPVP · 6.2K+", period: "Past" },
  { role: "Retired Jr. Mod", server: "Cavern · 5.9K+", period: "Past" },
  { role: "Retired Admin + CMA", server: "KyroMC · 2.8K+", period: "Past" },
];

export const Portfolio = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ambient bg */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-primary/25 blur-[160px]" />
      <div className="pointer-events-none absolute top-[40%] -left-40 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:py-28">
        {/* HERO */}
        <section className="flex flex-col items-center text-center animate-fade-up">
          <div className="ring-glow mb-7 rounded-full p-1 animate-float">
            <img
              src={AVATAR}
              alt="AL"
              className="h-32 w-32 rounded-full object-cover md:h-36 md:w-36"
            />
          </div>

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Available for staff roles
          </span>

          <h1 className="text-5xl font-bold tracking-tight text-gradient-purple md:text-7xl">
            Hey, I'm AL
          </h1>

          <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            16 y/o experienced Discord staff member. I run servers, set up bots, and help communities thrive.
          </p>

          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" /> Cali
            </span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" /> 16 y/o
            </span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#servers"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-6px_hsl(var(--primary)/0.7)]"
            >
              View my servers <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://solo.to/al_plays16"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
            >
              <MessageCircle className="h-4 w-4" /> Get in touch
            </a>
          </div>
        </section>

        {/* STATS */}
        <section className="mt-20 grid grid-cols-3 gap-3 md:gap-5">
          {[
            { v: "10+", l: "Communities", icon: Server },
            { v: "100K+", l: "Members reached", icon: Users },
            { v: "3+", l: "Years staffing", icon: Sparkles },
          ].map((s, i) => (
            <div
              key={s.l}
              className="rounded-2xl border border-border/70 bg-card/60 p-5 text-center backdrop-blur-sm animate-fade-up md:p-7"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <s.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
              <div className="text-3xl font-bold text-foreground md:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.l}</div>
            </div>
          ))}
        </section>

        {/* ABOUT */}
        <section className="mt-24">
          <SectionHeader eyebrow="About" title="A bit about me" />
          <div className="rounded-3xl border border-border/70 bg-card/50 p-6 backdrop-blur-sm md:p-10">
            <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
              I've been working in Discord communities for years — moderating, helping members,
              setting up bots, and now owning my own server. I take my staff work seriously
              because the people in these communities deserve a space that's safe, organized
              and actually fun to be in.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
              Outside of moderation I'm picking up scripting so I can build my own tools and
              automations. Always learning, always shipping.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-24">
          <SectionHeader eyebrow="What I do" title="Skills & services" />
          <div className="grid gap-4 sm:grid-cols-2">
            {SKILLS.map((s, i) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section className="mt-24">
          <SectionHeader eyebrow="Experience" title="Roles I've held" />
          <div className="rounded-3xl border border-border/70 bg-card/50 p-2 backdrop-blur-sm md:p-4">
            <ul className="divide-y divide-border/60">
              {EXPERIENCE.map((e, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between gap-4 px-4 py-4 animate-fade-up"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        e.current ? "bg-primary shadow-[0_0_12px_hsl(var(--primary))]" : "bg-muted-foreground/40"
                      }`}
                    />
                    <div className="min-w-0">
                      <div className="font-medium text-foreground">{e.role}</div>
                      <div className="truncate text-sm text-muted-foreground">{e.server}</div>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                      e.current
                        ? "bg-primary/15 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {e.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVERS */}
        <section id="servers" className="mt-24 scroll-mt-10">
          <SectionHeader
            eyebrow="Servers"
            title="Where I staff"
            sub={`${SERVERS.length} communities`}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {SERVERS.map((s, i) => (
              <ServerCard key={s.invite} server={s} index={i} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-accent/10 p-8 text-center md:p-14">
            <div className="pointer-events-none absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
            <Sparkles className="relative mx-auto mb-4 h-7 w-7 text-primary" />
            <h2 className="relative text-3xl font-bold text-foreground md:text-4xl">
              Need a staff member?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-muted-foreground">
              Looking for someone reliable to help moderate or set up your server? Let's chat.
            </p>
            <a
              href="https://solo.to/al_plays16"
              target="_blank"
              rel="noreferrer"
              className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-6px_hsl(var(--primary)/0.6)] transition-all hover:-translate-y-0.5"
            >
              Reach out <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <footer className="mt-20 flex flex-col items-center gap-2 border-t border-border/60 pt-8 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} AL · All rights reserved</div>
          <a
            href="https://solo.to/al_plays16"
            target="_blank"
            rel="noreferrer"
            className="text-foreground/70 transition-colors hover:text-primary"
          >
            solo.to/al_plays16
          </a>
        </footer>
      </main>
    </div>
  );
};

const SectionHeader = ({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) => (
  <div className="mb-8 flex items-end justify-between">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    </div>
    {sub && <span className="text-sm text-muted-foreground">{sub}</span>}
  </div>
);
