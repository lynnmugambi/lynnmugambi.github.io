import { CrystalBall } from "@/components/doodles";

export const faqs = [
  { q: "How soon can you start?", a: "Full-time from May 2027, right after I graduate. For part-time or project work, sooner. Ask me." },
  { q: "Frontend, backend, or product?", a: "Yes. Frontend is home, backend is where I visit often, and product is how I think. I'll build with whatever stack is already there." },
  { q: "Why a master's after 8 years of engineering?", a: "Eight years in, I cared as much about why we build as how. So I went to NYU to study Management of Technology, across London, Paris and New York." },
  { q: "Where are you open to working?", a: "The US, London or elsewhere in Europe, or remote. I've worked with teams across time zones for most of my career." },
  { q: "Who should not hire you?", a: "If nobody on the team talks to users often, I'll be the annoying one who does." },
  { q: "What are you still learning?", a: "How to build AI, build with AI, and how the money works. I'm preparing for the Claude Certified Architect exam, and studying finance and strategy at NYU." },
];

export function Faq() {
  return (
    <section id="ask" className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8">
      <p className="label-mono text-muted-foreground">Q&amp;A</p>
      <div className="mt-2 flex flex-wrap items-end gap-x-6 gap-y-2">
        <h2 className="headline text-3xl sm:text-4xl lg:text-5xl">Questions, answered.</h2>
        <span className="flex rotate-[-4deg] items-center gap-2 pb-1 font-hand text-sm text-teal sm:text-base">
          yes, I read your mind <CrystalBall className="h-9 w-9" />
        </span>
      </div>
      <ol className="mt-10 grid gap-x-14 md:grid-flow-col md:grid-cols-2 md:grid-rows-3">
        {faqs.map((f, i) => (
          <li key={f.q} className="border-t border-ink py-7">
            <span className="label-mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 text-lg font-bold">{f.q}</h3>
            <p className="mt-2 leading-relaxed">{f.a}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
