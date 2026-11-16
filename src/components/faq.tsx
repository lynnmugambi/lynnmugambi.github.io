import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export const faqs = [
  { q: "How soon can you start?", a: "Full-time from May 2027, right after I graduate. For part-time or project work, sooner. Ask me." },
  { q: "Frontend, backend, or product?", a: "Yes. Frontend is home, backend is where I visit often, and product is how I think. I'll build with whatever stack is already there." },
  { q: "Why a master's after 8 years of engineering?", a: "Eight years in, I cared as much about why we build as how. So I went to NYU to study Management of Technology, across London, Paris and New York." },
  { q: "Where are you open to working?", a: "The US, London or elsewhere in Europe, or remote. I've worked with teams across time zones for most of my career." },
  { q: "Who should not hire you?", a: "If nobody on the team talks to users often, I'll be the annoying one who does." },
  { q: "What are you still learning?", a: "How to build AI, build with AI, and how the money works. I'm preparing for the Claude Certified Architect exam, and studying finance and strategy at NYU." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="ask" className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8">
      <h2 className="headline text-4xl sm:text-5xl lg:text-6xl">Before you ask</h2>
      <ul className="mt-10 border-t border-ink">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          const Icon = isOpen ? Minus : Plus;
          return (
            <li key={f.q} className="border-b border-ink">
              <button type="button" id={`faq-q-${i}`} aria-expanded={isOpen} aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-5 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <span className="label-mono w-8 shrink-0 text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="headline flex-1 text-2xl sm:text-3xl">{f.q}</span>
                <Icon aria-hidden className="h-6 w-6 shrink-0" />
              </button>
              {isOpen && (
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="pb-7">
                  <p className="max-w-3xl pl-13 text-lg leading-relaxed sm:text-xl">{f.a}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
