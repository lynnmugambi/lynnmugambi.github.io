import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const navLinks = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "beyond", label: "Beyond code" },
  { id: "ask", label: "Q&A" },
  { id: "contact", label: "Contact" },
];

/** Top navigation. On case pages pass `active="work"` and `home="/"` so links lead back to the homepage. */
export function Nav({ active: forced, home = "" }: { active?: string; home?: string }) {
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState<string | null>(null);
  useEffect(() => {
    if (forced) return;
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const l of navLinks) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= line) current = l.id;
      }
      setInView(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [forced]);
  const active = forced ?? inView;
  const linkClass = (id: string) =>
    `label-mono uppercase transition-colors hover:text-primary focus-visible:text-primary ${active === id ? "text-primary" : "text-ink"}`;

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main">
        <a href={`${home}#top`} className="label-mono text-foreground">Lynn Mugambi</a>
        <ul className="hidden gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`${home}#${l.id}`} aria-current={active === l.id ? "true" : undefined} className={linkClass(l.id)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button type="button" className="rounded p-1 md:hidden" aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-ink/10 px-5 pb-4 md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`${home}#${l.id}`} onClick={() => setOpen(false)} aria-current={active === l.id ? "true" : undefined}
                className={`block py-3 ${linkClass(l.id)}`}>{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
