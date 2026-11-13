import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { z } from "zod";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lynn Mugambi — Product Engineer & Strategist" },
      { name: "description", content: "Lynn Mugambi creates, builds and launches products customers can't stop talking about. Based in New York." },
      { property: "og:title", content: "Lynn Mugambi — Product Engineer & Strategist" },
      { property: "og:description", content: "Creating, building and launching products customers can't stop talking about." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "lynnlmugambi@gmail.com";

const projects = [
  { title: "Sample Project One", text: "Placeholder: the problem this project solved and the outcome it achieved.", tags: ["Product", "Engineering", "Strategy"], tone: "bg-secondary", rot: "-rotate-2" },
  { title: "Sample Project Two", text: "Placeholder: the problem this project solved and the outcome it achieved.", tags: ["eCommerce", "Frontend", "Launch"], tone: "bg-tape", rot: "rotate-1" },
  { title: "Sample Project Three", text: "Placeholder: the problem this project solved and the outcome it achieved.", tags: ["Fintech", "AI", "0 → 1"], tone: "bg-muted", rot: "-rotate-1" },
];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return y;
}

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} fill="none" aria-hidden>
      <path d="M2 12 C 25 2, 45 20, 70 10 S 115 2, 140 12 S 180 18, 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <path d="M20 3 L24 16 L37 20 L24 24 L20 37 L16 24 L3 20 L16 16 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

const btn = "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-[4px_4px_0_var(--teal)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--teal)] active:translate-y-0 active:shadow-[2px_2px_0_var(--teal)]";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Please add a valid email").max(255),
  message: z.string().trim().min(1, "Please write a message").max(1000),
});

function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const r = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [i.path[0], i.message])));
      return;
    }
    setErrors({});
    const { name, email, message } = r.data;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Hello from ${name}`)}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
  };
  const field = "w-full rounded-lg border-2 border-foreground/80 bg-background px-4 py-3 outline-none transition focus:border-primary focus:shadow-[3px_3px_0_var(--plum)]";
  return (
    <form onSubmit={submit} noValidate className="relative rotate-1 space-y-4 rounded-2xl border-2 border-foreground bg-card p-6 shadow-[8px_8px_0_var(--plum)] sm:p-8">
      <span className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-3 bg-tape" aria-hidden />
      {(["name", "email"] as const).map((n) => (
        <label key={n} className="block">
          <span className="font-hand text-2xl capitalize">{n}</span>
          <input name={n} type={n === "email" ? "email" : "text"} maxLength={n === "email" ? 255 : 100} className={field} />
          {errors[n] && <span className="text-sm text-destructive">{errors[n]}</span>}
        </label>
      ))}
      <label className="block">
        <span className="font-hand text-2xl">message</span>
        <textarea name="message" rows={4} maxLength={1000} className={field} />
        {errors["message"] && <span className="text-sm text-destructive">{errors["message"]}</span>}
      </label>
      <button type="submit" className={btn}>Send it ✉</button>
    </form>
  );
}

function Index() {
  const y = useScrollY();
  return (
    <main className="overflow-x-hidden">
      <nav className="sticky top-0 z-20 flex items-center justify-between bg-background/80 px-6 py-4 backdrop-blur sm:px-12">
        <a href="#top" className="font-hand text-3xl font-bold text-primary">lynn.</a>
        <div className="flex gap-5 text-sm font-semibold">
          <a href="#work" className="hover:text-primary">Work</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
      </nav>

      {/* Intro */}
      <section id="top" className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-20 sm:px-12">
        <Star className="floaty absolute right-[8%] top-16 h-14 w-14 text-teal" />
        <div className="absolute right-[12%] top-1/3 hidden h-48 w-48 rounded-full bg-secondary md:block" style={{ transform: `translateY(${y * 0.3}px)` }} aria-hidden />
        <div className="absolute bottom-24 right-[30%] hidden h-24 w-24 rotate-12 rounded-2xl bg-tape md:block" style={{ transform: `translateY(${y * -0.2}px) rotate(12deg)` }} aria-hidden />
        <p className="rise font-hand text-3xl text-teal">hi there, I'm</p>
        <h1 className="rise relative text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-8xl" style={{ animationDelay: ".1s" }}>
          Lynn<br />Mugambi
          <Squiggle className="mt-2 w-56 text-primary sm:w-80" />
        </h1>
        <p className="rise mt-6 inline-block w-fit -rotate-1 rounded bg-secondary px-3 py-1 font-semibold" style={{ animationDelay: ".2s" }}>
          Product Engineer &amp; Strategist
        </p>
        <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: ".3s" }}>
          I create, build and launch products customers can't stop talking about. I'm an engineer, strategist and entrepreneur — a sum of many things — and I love turning ideas into products that matter.
        </p>
        <div className="rise mt-10 flex items-center gap-4" style={{ animationDelay: ".4s" }}>
          <a href="#contact" className={btn}>Get in touch →</a>
          <span className="hidden font-hand text-2xl text-primary sm:inline">← say hello!</span>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24 sm:px-12">
        <h2 className="text-4xl font-extrabold sm:text-5xl">Featured work</h2>
        <p className="mt-2 font-hand text-2xl text-teal">sample projects — real ones coming soon!</p>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className={`group relative ${p.rot} rounded-2xl border-2 border-foreground bg-card p-4 shadow-[6px_6px_0_var(--teal)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-2`}>
              <span className="absolute -top-3 left-6 h-6 w-20 -rotate-6 bg-tape" aria-hidden />
              <div className={`flex aspect-[4/3] items-center justify-center rounded-xl ${p.tone} font-hand text-2xl text-muted-foreground`}>image coming soon</div>
              <span className="mt-4 inline-block rounded-full border border-primary px-2 text-xs font-semibold uppercase text-primary">Sample</span>
              <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => <li key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">{t}</li>)}
              </ul>
              <p className="mt-4 font-hand text-xl text-primary">link coming soon</p>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative bg-primary py-24 text-primary-foreground">
        <Star className="floaty absolute left-[6%] top-10 h-10 w-10 text-secondary" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-12 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-4xl font-extrabold sm:text-5xl">About me</h2>
            <p className="mt-3 -rotate-2 font-hand text-3xl text-secondary">engineer · strategist · founder</p>
          </div>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>I'm a software engineer with over 8 years of experience building customer-facing products across eCommerce, Fintech and impact-led industries — working with early- to late-stage startups to take features from 0 to 1.</p>
            <p>I have a strong creative and entrepreneurial spirit: I've been part of various founding teams and started my own non-tech business.</p>
            <p>I'm currently pursuing an MSc in Management of Technology at NYU, focusing on strategy, product, AI and entrepreneurship — pairing my technical expertise with the business knowledge that drives decisions and impact.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto grid max-w-6xl gap-14 px-6 py-24 sm:px-12 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold sm:text-5xl">Let's make something</h2>
          <Squiggle className="mt-2 w-48 text-teal" />
          <p className="mt-6 text-lg text-muted-foreground">Drop me a note — I'd love to hear from you.</p>
          <ul className="mt-8 space-y-3 text-lg">
            <li>✉ <a href={`mailto:${EMAIL}`} className="font-semibold underline decoration-teal decoration-2 underline-offset-4 hover:text-primary">{EMAIL}</a></li>
            <li>📍 New York, New York</li>
            <li>in <a href="https://linkedin.com/in/lynnmugambi" target="_blank" rel="noreferrer" className="font-semibold underline decoration-teal decoration-2 underline-offset-4 hover:text-primary">linkedin.com/in/lynnmugambi</a></li>
            <li>⌘ <a href="https://github.com/lynnmugambi" target="_blank" rel="noreferrer" className="font-semibold underline decoration-teal decoration-2 underline-offset-4 hover:text-primary">github.com/lynnmugambi</a></li>
          </ul>
        </div>
        <ContactForm />
      </section>

      <footer className="pb-10 text-center font-hand text-2xl text-muted-foreground">made with curiosity in NYC ✿</footer>
    </main>
  );
}
