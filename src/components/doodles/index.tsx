import { useEffect, useRef, useState, type ReactNode } from "react";
import type * as React from "react";
import { cn } from "@/lib/utils";

type DoodleProps = { className?: string; delay?: number; style?: React.CSSProperties };

function Doodle({ viewBox, children, className, delay = 0, style }: DoodleProps & { viewBox: string; children: ReactNode }) {
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
      className={cn("doodle text-teal", drawn && "is-drawn", className)} style={{ ...style, ["--delay" as string]: `${delay}s` }}>
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

export const NameField = (p: DoodleProps) => (
  <span className={cn("relative block", p.className)} aria-hidden>
    <span className="absolute left-2 top-0 font-hand text-xs text-teal">Name</span>
    <Doodle viewBox="0 0 120 50" className="absolute inset-0 h-full w-full">
      {P("M6 22 C 40 20, 80 21, 114 22 C 115 30, 114 38, 113 46 C 80 47, 40 46, 7 46 C 6 38, 5 30, 6 22 Z")}
      {P("M14 40 C 30 26, 40 42, 56 30 S 84 40, 104 28")}
    </Doodle>
  </span>
);

export const CrumpledForm = (p: DoodleProps) => (
  <Doodle viewBox="0 0 120 70" {...p}>
    {P("M8 10 L 20 6 L 30 12 L 42 5 L 50 14 L 46 30 L 52 44 L 40 58 L 26 54 L 12 62 L 6 46 L 12 32 Z")}
    {P("M16 22 L 38 20 M 14 34 L 40 36 M 18 46 L 34 44")}
    {P("M58 34 C 68 30, 76 30, 84 34")}
    {P("M86 34 L 94 44 L 112 18")}
  </Doodle>
);

export function ResultNote({ text, className }: { text: string; className?: string }) {
  return (
    <span aria-hidden className={className}>
      <Doodle viewBox="0 0 60 30" className="absolute -left-12 -top-5 h-6 w-12">
        {P("M54 26 C48 12 34 8 8 10 M15 4 L8 10 L15 16")}
      </Doodle>
      <span className="block whitespace-nowrap rotate-[-8deg] font-hand text-lg text-teal">{text}</span>
    </span>
  );
}

export const CircleMark = (p: DoodleProps) => (
  <Doodle viewBox="0 0 100 70" {...p}>{P("M58 6 C 30 3, 6 14, 5 34 C 4 54, 28 66, 52 65 C 78 64, 96 52, 95 33 C 94 15, 74 4, 48 8 C 40 9, 34 11, 30 14")}</Doodle>
);

export const VSquiggle = (p: DoodleProps) => (
  <Doodle viewBox="0 0 30 400" {...p}>{P("M15 3 C 2 30, 28 50, 15 80 S 2 130, 15 160 S 28 210, 15 240 S 2 290, 15 320 S 28 370, 15 397")}</Doodle>
);
export const PaperPlane = (p: DoodleProps) => (
  <Doodle viewBox="0 0 60 50" {...p}>
    {P("M4 24 L 56 5 L 40 45 L 28 30 Z")}
    {P("M56 5 L 28 30 L 26 42 L 33 36")}
  </Doodle>
);
export const Bulb = (p: DoodleProps) => (
  <Doodle viewBox="0 0 50 60" {...p}>
    {P("M18 42 C 18 34, 8 30, 9 19 C 10 9, 18 4, 25 4 C 33 4, 41 10, 41 20 C 41 30, 32 34, 32 42 Z")}
    {P("M18 48 L 32 48 M 20 54 L 30 54 M 25 42 L 25 28 L 21 24 M 25 28 L 29 24")}
  </Doodle>
);
export const Paintbrush = (p: DoodleProps) => (
  <Doodle viewBox="0 0 60 60" {...p}>
    {P("M52 6 L 30 32 L 26 28 L 52 6")}
    {P("M28 30 C 22 30, 16 34, 15 42 C 14 48, 10 52, 6 54 C 16 56, 28 52, 30 42 C 31 38, 31 34, 30 32")}
  </Doodle>
);
export const CrystalBall = (p: DoodleProps) => (
  <Doodle viewBox="0 0 60 60" {...p}>
    {P("M30 10 C 42 10, 48 20, 47 30 C 46 40, 38 45, 30 45 C 20 45, 13 38, 13 28 C 13 18, 20 10, 30 10 Z")}
    {P("M20 46 L 40 46 L 44 54 L 16 54 Z M 22 24 C 23 20, 26 18, 29 17")}
    {P("M8 8 L 12 13 M 52 6 L 48 12 M 55 22 L 50 23")}
  </Doodle>
);

/* Pen-drawn note doodles for Beyond code: wobbly lines, varying pressure, open ends. */
const W = (d: string, w = 2.5) => <path d={d} pathLength={1} strokeWidth={w} />;

export const PenPlane = (p: DoodleProps) => (
  <Doodle viewBox="0 0 64 64" {...p}>
    {W("M7 30 C18 25 33 18 57 9 C50 21 44 36 39 53 C35 46 31 41 26 37 C20 35 13 33 6 31", 2.8)}
    {W("M56 10 C45 19 35 28 26.5 36.5 C26 41 26 45 27 49 C29 46 31 43 33 41", 2.2)}
    {W("M3 43 C7 42 11 41.5 15 41", 1.8)}
    {W("M7 50 C11 49 15 48.5 19 48.8", 1.6)}
  </Doodle>
);

export const PenBulb = (p: DoodleProps) => (
  <Doodle viewBox="0 0 64 64" {...p}>
    {W("M24 44 C23 38 16 33 16.5 25 C17 15 24 9.5 32.5 10 C41 10.5 47.5 17 47 26 C46.5 33 40 38 39.5 44.5 C34 45.5 29 45 23 44.6", 2.9)}
    {W("M25 49 C30 48.6 34 48.8 39 48.5", 2.2)}
    {W("M27 54 C30 53.6 33 53.8 37 53.4", 2)}
    {W("M29 37 C29 31 31 28 32 26 C33 29 35 32 35 38", 1.6)}
    {W("M32 3 C32.2 4.5 32 6 32.3 7", 1.8)}
    {W("M10 12 C11.5 13.4 12.6 14.6 13.8 15.8", 1.8)}
    {W("M54 12.5 C52.8 13.6 51.6 14.9 50.4 16.2", 1.8)}
  </Doodle>
);

export const PenHeart = (p: DoodleProps) => (
  <Doodle viewBox="0 0 64 64" {...p}>
    {W("M33 54 C24 47 10 38 9 25 C8.5 16 15 11 22 12 C27.5 13 30.5 17 32 21 C33.5 16 37.5 11.5 44 11 C51 11 56.5 17 55 26 C53 37 42 46 31.5 55.5", 2.9)}
    {W("M17 22 C19 20 21 19 23 19.5 M16 27 C19 23 23 21 26 21.5 M18 31 C21 27 24 25 27 25.5", 1.4)}
  </Doodle>
);

export const PenBrush = (p: DoodleProps) => (
  <Doodle viewBox="0 0 64 64" {...p}>
    {W("M53 7 C47 14 40 22 33 30 C34.5 32 36 33.5 37.8 34.5 C44 26 50 18 56.5 10 C55.5 8.5 54.5 7.5 52.5 6.5", 2.7)}
    {W("M32.5 31 C27 30 22.5 33 21.5 39 C20.5 45 17 48 12 49 C19 52 28 50.5 33 45 C36 41.5 37.5 38 37 35", 2.9)}
    {W("M9 58 C15 56 21 57.5 27 56 C31 55 35 56.5 39 55.5", 2.2)}
  </Doodle>
);
