import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let stars: Star[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density tuned for perf; cap on small/low devices
      const density = isCoarse ? 14000 : 9000;
      const target = Math.min(110, Math.floor((width * height) / density));
      stars = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.4,
      }));
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let raf = 0;
    const linkDist = 130;
    const mouseDist = 170;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0 || s.x > width) s.vx *= -1;
        if (s.y < 0 || s.y > height) s.vy *= -1;
      }

      // star-to-star links
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDist * linkDist) {
            const alpha = (1 - Math.sqrt(d2) / linkDist) * 0.18;
            ctx.strokeStyle = `hsla(270, 90%, 70%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // mouse-to-star links
      if (mouse.active) {
        for (const s of stars) {
          const dx = s.x - mouse.x;
          const dy = s.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < mouseDist * mouseDist) {
            const dist = Math.sqrt(d2);
            const alpha = (1 - dist / mouseDist) * 0.55;
            ctx.strokeStyle = `hsla(280, 100%, 75%, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // gentle attraction
            s.vx += (mouse.x - s.x) * 0.00004;
            s.vy += (mouse.y - s.y) * 0.00004;
          }
        }
      }

      // stars
      for (const s of stars) {
        ctx.fillStyle = "hsla(280, 100%, 80%, 0.85)";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // dampen velocity so stars don't fly off
      for (const s of stars) {
        s.vx *= 0.995;
        s.vy *= 0.995;
        // keep a minimum drift
        if (Math.abs(s.vx) < 0.04) s.vx += (Math.random() - 0.5) * 0.02;
        if (Math.abs(s.vy) < 0.04) s.vy += (Math.random() - 0.5) * 0.02;
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!isCoarse) window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    if (!reduced) draw();
    else {
      // single static frame for reduced motion
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        ctx.fillStyle = "hsla(280, 100%, 80%, 0.7)";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
    />
  );
};
