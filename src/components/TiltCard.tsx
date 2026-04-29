import { useEffect, useRef, MouseEvent, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  intensity?: number;
}

const isCoarse = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches);

export const TiltCard = ({
  children,
  className = "",
  href,
  target,
  rel,
  intensity = 6,
}: TiltCardProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const frame = useRef<number | null>(null);
  const enabled = useRef(true);

  useEffect(() => {
    enabled.current = !isCoarse();
  }, []);

  const handleMove = (e: MouseEvent) => {
    if (!enabled.current) return;
    const el = ref.current;
    if (!el) return;
    const x = e.clientX;
    const y = e.clientY;
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      const rect = el.getBoundingClientRect();
      const px = (x - rect.left) / rect.width;
      const py = (y - rect.top) / rect.height;
      const rx = (py - 0.5) * -intensity * 2;
      const ry = (px - 0.5) * intensity * 2;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
    el.style.transform = "";
  };

  const sharedProps = {
    ref: ref as React.Ref<HTMLAnchorElement & HTMLDivElement>,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: `tilt-card relative ${className}`,
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...sharedProps}>
        {children}
      </a>
    );
  }

  return <div {...sharedProps}>{children}</div>;
};
