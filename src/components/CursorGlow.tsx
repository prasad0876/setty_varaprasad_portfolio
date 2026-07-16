import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    setVisible(true);
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
    };
    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  if (!visible) return null;
  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-neon-cyan mix-blend-screen" />
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[100] h-10 w-10 rounded-full border border-neon-purple/60 mix-blend-screen transition-[width,height] duration-200" style={{ boxShadow: "0 0 30px oklch(0.68 0.24 305 / 60%)" }} />
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-40"
        style={{
          background: "radial-gradient(600px at var(--mx, 50%) var(--my, 50%), oklch(0.72 0.2 260 / 0.15), transparent 60%)",
        }}
        ref={(el) => {
          if (!el) return;
          window.addEventListener("mousemove", (e) => {
            el.style.setProperty("--mx", `${e.clientX}px`);
            el.style.setProperty("--my", `${e.clientY}px`);
          });
        }}
      />
    </>
  );
}
