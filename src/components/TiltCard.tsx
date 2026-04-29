import { useRef, MouseEvent, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  intensity?: number;
}

export const TiltCard = ({
  children,
  className = "",
  href,
  target,
  rel,
  intensity = 8,
}: TiltCardProps) => {
  const ref = useRef<HTMLElement | null>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const rx = (py - 0.5) * -intensity * 2;
    const ry = (px - 0.5) * intensity * 2;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
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
        <span className="tilt-shine" />
        <span className="tilt-card-inner block">{children}</span>
      </a>
    );
  }

  return (
    <div {...sharedProps}>
      <span className="tilt-shine" />
      <span className="tilt-card-inner block">{children}</span>
    </div>
  );
};
