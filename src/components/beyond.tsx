import { useState } from "react";
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
  return (
    <li className="relative">
      <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)}
        style={{ ["--tilt" as string]: `${n.tilt}deg` }}
        className={cn("note-paper group relative flex min-h-64 w-full flex-col items-center justify-center px-5 pb-6 pt-9 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary", open && "is-open")}>
        <span aria-hidden className="note-tape" />
        <n.Icon className="note-front h-14 w-14" />
        <h3 className="headline mt-4 text-2xl">{n.title}</h3>
        <p className="note-back mt-3 font-hand text-[0.8rem] leading-[1.9] text-teal">{n.text}</p>
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
