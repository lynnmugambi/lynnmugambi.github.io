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
      if (e.isIntersecting) { setDrawn(true); io.disconnect(); }
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

export function HandNote({ children, className, rotate = -4 }: { children: ReactNode; className?: string; rotate?: number }) {
  return <p className={cn("font-hand text-2xl leading-tight text-teal", className)} style={{ transform: `rotate(${rotate}deg)` }}>{children}</p>;
}
