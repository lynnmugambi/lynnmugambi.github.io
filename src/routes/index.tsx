import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import portrait from "@/assets/lynn_portrait.png.asset.json";
import { Arrow, Frame, HandNote, Heart, Sparkle, Spiral, Squiggle, Star, Underline } from "@/components/doodles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lynn Mugambi — Product Engineer" },
      {
        name: "description",
        content: "Lynn Mugambi: engineer by trade, product thinker by nature. Product engineer with 8 years shipping.",
      },
      { property: "og:title", content: "Lynn Mugambi — Product Engineer" },
      { property: "og:description", content: "Engineer by trade. Product thinker by nature." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#beyond", label: "Beyond code" },
  { href: "#ask", label: "Before you ask" },
  { href: "#contact", label: "Contact" },
];

export const buttonClass =
  "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0";

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main">
        <a href="#top" className="label-mono text-foreground">
          Lynn Mugambi
        </a>
        <ul className="hidden gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-primary hover:underline underline-offset-4">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded p-1 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-ink/10 px-5 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-6 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-[1.15fr_1fr] md:gap-4 lg:gap-0 lg:pt-16"
    >
      <div className="relative z-10">
        <p className="label-mono rise text-muted-foreground">Product Engineer · 8 Years Shipping</p>
        <h1
          className="headline rise mt-4 leading-[0.95] text-[5.25rem] sm:text-[8rem] md:text-[6.5rem] lg:text-[10rem]"
          style={{ animationDelay: ".1s" }}
        >
          Hello,
          <br />
          I'm{" "}
          <span className="relative inline-block">
            Lynn.
            <Underline className="absolute -bottom-3 left-0 h-5 w-full sm:-bottom-4 sm:h-7" delay={0.6} />
          </span>
        </h1>
        <p
          className="rise mt-8 max-w-md text-xl font-medium leading-snug sm:text-2xl md:text-xl lg:text-2xl"
          style={{ animationDelay: ".25s" }}
        >
          Engineer by trade. Product thinker by nature.
        </p>
        <div className="rise mt-8 flex flex-wrap items-center gap-6" style={{ animationDelay: ".4s" }}>
          <a href="#work" className={buttonClass}>
            See my work
          </a>
          <a href="#contact" className="font-semibold text-primary underline underline-offset-4 hover:decoration-2">
            Get in touch
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full min-w-0 max-w-sm px-3 pb-8 md:max-w-none lg:pl-14">
        <Star className="absolute right-3 top-0 h-8 w-8" delay={1} />
        <Sparkle className="absolute right-12 top-8 hidden h-6 w-6 sm:block" delay={1.2} />
        <Squiggle className="absolute bottom-0 left-2 z-20 w-20 -rotate-6 sm:w-24" delay={0.8} />
        <Spiral className="absolute bottom-24 right-0 z-20 h-10 w-10 sm:h-12 sm:w-12" delay={1.1} />
        <Heart className="absolute left-0 top-1/2 z-20 hidden h-8 w-8 -rotate-12 sm:block" delay={1.4} />
        <Sparkle className="absolute bottom-2 right-10 z-20 h-5 w-5" delay={1.5} />
        <div className="relative z-10 mb-1 flex items-end gap-1">
          <HandNote rotate={-8} className="text-3xl">
            hi, that's me
          </HandNote>
          <Arrow className="h-12 w-16 rotate-[35deg] translate-y-4" delay={1.3} />
        </div>
        <div className="relative px-4 pt-6 sm:px-6">
          <Frame className="pointer-events-none absolute inset-0 h-full w-full" delay={0.3} />
          <img
            src={portrait.url}
            alt="Lynn Mugambi smiling, wearing a white top and a red floral skirt"
            width={795}
            height={768}
            className="rise relative w-full"
            style={{ animationDelay: ".2s" }}
          />
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <Hero />
        {["skills", "work", "beyond", "ask", "contact"].map((id) => (
          <section key={id} id={id} aria-hidden />
        ))}
      </main>
    </>
  );
}
