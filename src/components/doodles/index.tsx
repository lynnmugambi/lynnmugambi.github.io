import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type DoodleProps = { className?: string; delay?: number };

function Doodle({ viewBox, children, className, delay = 0 }: DoodleProps & { viewBox: string; children: ReactNode }) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { setDrawn(true); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <svg ref={ref} viewBox={viewBox} preserveAspectRatio="none" fill="none" aria-hidden stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
      className={cn("doodle text-teal", drawn && "is-drawn", className)} style={{ ["--delay" as string]: `${delay}s` }}>
      {children}
    </svg>
  );
}

const P = (d: string) => <path d={d} pathLength={1} />;

export const Squiggle = (p: DoodleProps) => (
  <Doodle viewBox="0 0 200 30" {...p}>{P("M3 17 C 20 4, 34 28, 52 15 S 84 3, 101 16 S 133 29, 150 14 S 182 5, 197 15")}</Doodle>
);
export const Underline = (p: DoodleProps) => (
  <Doodle viewBox="0 0 300 24" {...p}>{P("M4 14 C 60 7, 140 6, 210 9 S 280 13, 296 10 M 30 19 C 100 15, 190 15, 262 17")}</Doodle>
);
export const Arrow = (p: DoodleProps) => (
  <Doodle viewBox="0 0 120 80" {...p}>{P("M6 10 C 30 6, 70 14, 88 40 S 104 64, 108 70 M 92 66 L 109 72 L 112 54")}</Doodle>
);
export const Star = (p: DoodleProps) => (
  <Doodle viewBox="0 0 40 40" {...p}>{P("M20 4 L23.5 15.8 L36 19.5 L24 23.6 L20.4 36 L16.3 24 L4 20.6 L16 16.4 Z")}</Doodle>
);

export const Spiral = (p: DoodleProps) => (
  <Doodle viewBox="0 0 60 60" {...p}>{P("M30 30 C 34 26, 38 32, 33 36 C 26 40, 20 32, 25 24 C 31 16, 44 22, 44 32 C 44 44, 28 50, 18 42 C 8 33, 12 14, 28 10 C 42 7, 54 18, 54 30")}</Doodle>
);
export const Sparkle = (p: DoodleProps) => (
  <Doodle viewBox="0 0 40 40" {...p}>{P("M20 4 L20 14 M20 26 L20 36 M4 20 L14 20 M26 20 L36 20 M9 9 L14 14 M26 26 L31 31")}</Doodle>
);
export const Heart = (p: DoodleProps) => (
  <Doodle viewBox="0 0 40 36" {...p}>{P("M20 32 C 8 22, 2 16, 4 9 C 6 3, 15 2, 20 10 C 25 2, 34 3, 36 9 C 38 16, 32 22, 20 32")}</Doodle>
);

export function HandNote({ children, className, rotate = -4 }: { children: ReactNode; className?: string; rotate?: number }) {
  return <p className={cn("font-hand text-2xl leading-tight text-teal", className)} style={{ transform: `rotate(${rotate}deg)` }}>{children}</p>;
}

export const Frame = (p: DoodleProps) => (
  <Doodle viewBox="0 0 400 400" {...p}>
    {P("M14 12 C 110 6, 250 16, 388 9 C 392 120, 384 260, 391 388 C 270 394, 130 386, 10 392 C 6 270, 15 130, 14 12")}
    {P("M22 4 C 140 14, 280 2, 380 18 M 396 30 C 386 150, 398 280, 384 380 M 372 398 C 240 384, 120 398, 26 384 M 4 372 C 18 250, 2 120, 20 26")}
  </Doodle>
);

export const CoffeeMug = (p: DoodleProps) => (
  <Doodle viewBox="0 0 60 60" {...p}>
    {P("M10 24 C 10 22, 40 21, 41 24 C 42 34, 40 48, 34 51 C 28 53, 20 53, 16 51 C 11 47, 9 34, 10 24 Z")}
    {P("M41 29 C 50 27, 53 38, 40 42")}
    {P("M20 17 C 16 12, 24 9, 20 4 M 30 17 C 26 12, 34 9, 30 4")}
  </Doodle>
);
export const TerminalPrompt = (p: DoodleProps) => (
  <Doodle viewBox="0 0 70 50" {...p}>
    {P("M5 7 C 25 5, 45 6, 65 6 C 66 20, 65 32, 64 44 C 45 45, 25 45, 6 44 C 5 30, 4 18, 5 7 Z")}
    {P("M14 18 L 23 25 L 14 32")}
    {P("M29 33 L 44 33")}
  </Doodle>
);
export const ClickCursor = (p: DoodleProps) => (
  <Doodle viewBox="0 0 60 60" {...p}>
    {P("M22 20 L 26 50 L 32 40 L 42 52 L 47 48 L 37 36 L 48 33 Z")}
    {P("M18 12 L 15 5 M 12 18 L 5 15 M 24 10 L 26 3")}
  </Doodle>
);
