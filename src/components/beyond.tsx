import { useEffect, useRef, useState } from "react";
import { PenBrush, PenBulb, PenHeart, PenPlane, Squiggle, VSquiggle } from "@/components/doodles";
import { cn } from "@/lib/utils";

export const notes = [
  { title: "Travel", Icon: PenPlane, tilt: -4, text: "Nairobi, Kuala Lumpur, London, Paris, New York. I've studied or worked in all five and wandered through plenty more. Every new place, and the people in it, stretches how I see things." },
  { title: "Side projects", Icon: PenBulb, tilt: 3, text: "There is always one more idea than I have time for. A few are in progress. The rest are waiting in my notebook." },
  { title: "My heart", Icon: PenHeart, tilt: -2, text: "Family, friends and animals! <3" },
  { title: "Art", Icon: PenBrush, tilt: 5, text: "I paint, I doodle, and most nights I disappear into a coloring book to unwind. The margins of my notebooks have never been empty." },
];

function Note({ n }: { n: (typeof notes)[number] }) {
  const [open, setOpen] = useState(false);
  const paperRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const paper = paperRef.current;
    const content = contentRef.current;
    if (!paper || !content) return;
    const measure = () => {
      // Reserve the same top/bottom breathing room at every screen width.
      paper.style.setProperty("--open-height", `${Math.max(256, content.scrollHeight + 60)}px`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(content);
    return () => observer.disconnect();
  }, []);
  return (
    <li className="relative">
      <button ref={paperRef} type="button" aria-label={n.title} aria-expanded={open} onClick={() => setOpen((o) => !o)}
        style={{ ["--tilt" as string]: `${n.tilt}deg` }}
        className={cn("note-paper group relative w-full text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary", open && "is-open")}>
        <span aria-hidden className="note-tape" />
        <div className="note-front flex flex-col items-center" aria-hidden="true">
          <n.Icon className="h-14 w-14" />
          <span className="headline mt-4 text-2xl">{n.title}</span>
        </div>
        <div ref={contentRef} className="note-back">
          <h3 className="headline text-2xl">{n.title}</h3>
          <p className="mt-3 font-hand text-[0.8rem] leading-[1.9] text-teal">{n.text}</p>
        </div>
      </button>
    </li>
  );
}

export function Beyond() {
  return (
    <section id="beyond" className="bg-[var(--lavender)] py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <h2 className="headline text-4xl sm:text-5xl lg:text-6xl">Beyond code</h2>
      <div className="relative mt-12">
        <Squiggle className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-10 w-full -translate-y-1/2 lg:block" />
        <VSquiggle className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-8 -translate-x-1/2 lg:hidden" />
        <ul className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {notes.map((n) => <Note key={n.title} n={n} />)}
        </ul>
      </div>
      </div>
    </section>
  );
}
