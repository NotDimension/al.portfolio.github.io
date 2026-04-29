import {
  MapPin,
  Shield,
  Bot,
  Code2,
  Sparkles,
  Users,
  Server,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { SERVERS } from "@/data/servers";
import { ServerCard } from "./ServerCard";
import { useReveal } from "@/hooks/useReveal";
import { TiltCard } from "./TiltCard";
import { StarField } from "./StarField";
import { ContactCard } from "./ContactCard";
import { ScrollProgress } from "./ScrollProgress";

const AVATAR =
  "https://cdn.discordapp.com/avatars/1223739092366524497/8efc6448a30283164d8725b0bbe2c817.png?size=512";

const SKILLS = [
  { icon: Shield, title: "Moderation", desc: "Keeping communities safe, organized, and welcoming." },
  { icon: Bot, title: "Bot Setup", desc: "Configuring MEE6, Carl-bot, Dyno and custom workflows." },
  { icon: Server, title: "Server Building", desc: "Channels, roles, permissions and structure done right." },
  { icon: Code2, title: "Scripting", desc: "Currently learning to build my own tools and automations." },
];

const currentServers = SERVERS.filter((s) => !s.role.toLowerCase().includes("retired"));
const pastServers = SERVERS.filter((s) => s.role.toLowerCase().includes("retired"));

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${visible ? "in-view" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
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

export const Portfolio = () => {
  const name = "AL";

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <ScrollProgress />
      <StarField />
      <main className="relative z-10 mx-auto max-w-5xl px-6">
        {/* HERO */}
        <section className="relative flex min-h-screen flex-col items-center justify-center text-center">
          <div className="ring-glow mb-8 rounded-full p-1 animate-intro-zoom animate-float">
            <a
              href="https://solo.to/al_plays16"
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-full avatar-hover"
            >
              <img
                src={AVATAR}
                alt="AL"
                className="h-36 w-36 rounded-full object-cover md:h-44 md:w-44"
              />
            </a>
          </div>

          <h1 className="text-7xl font-bold tracking-tight md:text-9xl">
            <a
              href="#about"
              className="text-shimmer cursor-pointer"
              aria-label="AL"
            >
              {name.split("").map((ch, i) => (
                <span
                  key={i}
                  className="animate-intro-letter inline-block"
                  style={{ animationDelay: `${600 + i * 120}ms` }}
                >
                  {ch}
                </span>
              ))}
            </a>
          </h1>

          <div
            className="mt-6 max-w-xl animate-intro-zoom"
            style={{ animationDelay: "1100ms" }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              16 y/o experienced Discord staff member from Cali. I run servers,
              set up bots, and help communities thrive.
            </p>
            <div className="mt-5 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" /> Cali
              </span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" /> 16 y/o
              </span>
            </div>
          </div>

          {/* scroll hint */}
          <div
            className="absolute bottom-10 flex flex-col items-center gap-1 text-xs uppercase tracking-[0.25em] text-muted-foreground animate-intro-zoom"
            style={{ animationDelay: "1500ms" }}
          >
            <span>Scroll</span>
            <ChevronDown className="h-4 w-4 animate-scroll-hint text-primary" />
          </div>
        </section>

        {/* CURRENT */}
        <section id="about" className="py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Currently"
              title="Servers I work on"
              sub={`${currentServers.length} active`}
            />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {currentServers.map((s, i) => (
              <Reveal key={s.invite} delay={i * 80}>
                <ServerCard server={s} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* PAST */}
        <section className="py-12">
          <Reveal>
            <SectionHeader
              eyebrow="Previously"
              title="Past experience"
              sub={`${pastServers.length} retired`}
            />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {pastServers.map((s, i) => (
              <Reveal key={s.invite} delay={i * 80}>
                <ServerCard server={s} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="py-20">
          <div className="grid grid-cols-3 gap-3 md:gap-5">
            {[
              { v: "10+", l: "Communities", icon: Server },
              { v: "100K+", l: "Members reached", icon: Users },
              { v: "3+", l: "Years staffing", icon: Sparkles },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 100}>
                <TiltCard className="rounded-2xl border border-border/70 bg-card/60 p-5 text-center backdrop-blur-sm hover:border-primary/50 md:p-7">
                  <s.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-3xl font-bold text-foreground md:text-4xl">{s.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.l}</div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20">
          <Reveal>
            <SectionHeader eyebrow="About" title="A bit about me" />
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl border border-border/70 bg-card/50 p-6 backdrop-blur-sm md:p-10">
              <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
                I've been working in Discord communities for years, moderating,
                helping members, setting up bots, and now owning my own server.
                I take my staff work seriously because the people in these
                communities deserve a space that's safe, organized and actually
                fun to be in.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
                Outside of moderation I'm picking up scripting so I can build my
                own tools and automations. Always learning, always shipping.
              </p>
            </div>
          </Reveal>
        </section>

        {/* SKILLS */}
        <section className="py-20">
          <Reveal>
            <SectionHeader eyebrow="What I do" title="Skills & services" />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {SKILLS.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <TiltCard className="group h-full rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur-sm hover:border-primary/50">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <Reveal>
            <SectionHeader eyebrow="Contact" title="Let's connect" />
          </Reveal>
          <Reveal delay={100}>
            <ContactCard />
          </Reveal>
        </section>

        <div className="h-20" />
      </main>
    </div>
  );
};
