import { useState } from "react";
import { Copy, Check } from "lucide-react";

const DiscordIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a13.55 13.55 0 0 0-.617 1.265 18.27 18.27 0 0 0-5.487 0A12.51 12.51 0 0 0 9.83 3a19.74 19.74 0 0 0-3.76 1.37C2.16 10.106 1.13 15.7 1.64 21.21a19.91 19.91 0 0 0 6.034 3.045c.49-.66.927-1.362 1.302-2.099a12.95 12.95 0 0 1-2.052-.978c.172-.126.34-.256.502-.39 3.927 1.83 8.18 1.83 12.06 0 .164.134.332.264.504.39-.656.39-1.343.717-2.054.98.376.736.812 1.439 1.302 2.099a19.85 19.85 0 0 0 6.04-3.046c.6-6.36-1.034-11.91-4.95-16.842ZM8.68 17.345c-1.183 0-2.157-1.085-2.157-2.42 0-1.336.957-2.42 2.157-2.42 1.21 0 2.176 1.094 2.157 2.42 0 1.335-.956 2.42-2.157 2.42Zm6.64 0c-1.182 0-2.156-1.085-2.156-2.42 0-1.336.956-2.42 2.156-2.42 1.21 0 2.176 1.094 2.157 2.42 0 1.335-.946 2.42-2.157 2.42Z" />
  </svg>
);

export const ContactCard = () => {
  const username = "al_plays16";
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(username);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card/60 to-accent/10 p-6 md:p-10">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
      <div className="relative flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:gap-6 md:text-left">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#5865F2] text-white shadow-[0_10px_30px_-8px_rgba(88,101,242,0.6)]">
          <DiscordIcon className="h-9 w-9" />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground md:text-3xl">Find me on Discord</h3>
          <p className="mt-1 text-sm text-muted-foreground md:text-base">
            DM me directly, I'm always open to chat about staffing, bots, or just to say hi.
          </p>

          <div className="mt-4 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center justify-between gap-3 rounded-full border border-border bg-background/60 px-4 py-2.5">
              <span className="font-mono text-sm text-foreground">@{username}</span>
              <button
                onClick={copy}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="Copy Discord username"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" /> Copy
                  </>
                )}
              </button>
            </div>
            <a
              href={`https://discord.com/users/1223739092366524497`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5865F2] px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#4752c4]"
            >
              <DiscordIcon className="h-4 w-4" /> Open Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
