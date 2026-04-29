import { useEffect, useState } from "react";

const LINES = [
  "> booting al.os v1.6.0...",
  "> mounting /discord/servers ............ ok",
  "> loading staff_credentials.json ....... ok",
  "> initializing bot framework ........... ok",
  "> establishing secure session .......... ok",
  "> welcome, AL.",
];

interface Props {
  onDone: () => void;
}

export const BootSequence = ({ onDone }: Props) => {
  const [shown, setShown] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const tick = () => {
      setShown((s) => [...s, LINES[i]]);
      i++;
      if (i < LINES.length) {
        setTimeout(tick, 320 + Math.random() * 220);
      } else {
        setTimeout(onDone, 700);
      }
    };
    const t = setTimeout(tick, 200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background grid-bg">
      <div className="w-full max-w-xl px-6 font-mono-display text-sm text-foreground/90">
        {shown.map((l, i) => (
          <div key={i} className="animate-fade-up">
            <span className="text-primary">{l.split(" ")[0]}</span>{" "}
            <span className="text-foreground/80">{l.split(" ").slice(1).join(" ")}</span>
          </div>
        ))}
        <div className="mt-1 cursor-blink text-primary" />
      </div>
    </div>
  );
};
