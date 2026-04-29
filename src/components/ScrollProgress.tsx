import { useEffect, useRef } from "react";

export const ScrollProgress = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number | null = null;
    const update = () => {
      frame = null;
      const el = ref.current;
      if (!el) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      el.style.transform = `scaleX(${p / 100})`;
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-[2px] w-full bg-transparent">
      <div
        ref={ref}
        className="h-full origin-left bg-gradient-to-r from-primary via-accent to-primary"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};
