import type { ReactNode } from "react";
import { CircleMark, Star } from "@/components/doodles";
export type CaseData = {
  label: string; title: string; summary: string; role: string;
  sections: { heading: string; text: string }[];
  steps: { title: string; text: string }[];
  tools: string[]; note?: string;
  challengeDoodle?: ReactNode; outcomeDoodle?: ReactNode;
};

export function readTime(d: CaseData) {
  const words = [d.summary, d.role, ...d.sections.map((s) => s.text), ...d.steps.map((s) => s.title + " " + s.text)].join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function BackLink() {
  return <a href="/#work" className="font-semibold text-primary underline-offset-4 hover:underline">← Back to featured work</a>;
}

export function CaseStudy({ data }: { data: CaseData }) {
  return (
    <main className="relative mx-auto max-w-[760px] px-5 py-12 sm:px-8 sm:py-16">
      <BackLink />
      <p className="label-mono mt-10 text-muted-foreground">{data.label}</p>
      <p className="label-mono mt-2 text-muted-foreground">{readTime(data)} min read</p>
      <h1 className="headline mt-5 text-5xl !leading-[1.02] sm:text-6xl">{data.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-teal sm:text-xl">{data.summary}</p>
      <div className="relative">
        <p className="label-mono mt-10 text-muted-foreground">My role</p>
      <p className="mt-2">{data.role}</p>
      </div>
      {data.sections.map((s, i) => (
        <section key={s.heading} className="relative mt-14">
          {i === 0 && data.challengeDoodle}
          {i === data.sections.length - 1 && data.outcomeDoodle}
          <h2 className="text-lg font-bold">{s.heading}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
        </section>
      ))}
      <section className="relative mt-20">
        <Star aria-hidden className="pointer-events-none absolute -left-20 -top-4 hidden h-12 w-12 text-teal lg:block" />
        <h2 className="headline text-3xl sm:text-4xl">How I got there</h2>
        <ol className="relative mt-10 space-y-10">
          {data.steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-6">
              <span className="headline relative h-fit w-14 shrink-0 text-center text-4xl">
                {String(i + 1).padStart(2, "0")}
                <CircleMark className="pointer-events-none absolute -left-3 -top-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)]" style={{ rotate: `${[-6, 4, -2, 7][i % 4]}deg` }} delay={0.1} />
              </span>
              <div className="pt-1">
                <h3 className="font-bold">{s.title}</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <ul className="mt-16 flex flex-wrap gap-2" aria-label="Tools">
        {data.tools.map((t) => <li key={t} className="label-mono rounded-full border border-ink px-3 py-1 !text-[0.65rem]">{t}</li>)}
      </ul>
      {data.note && <p className="mt-8 text-sm italic text-muted-foreground">{data.note}</p>}
    </main>
  );
}

export function CasePlaceholder({ tag, title }: { tag: string; title: string }) {
  return (
    <main className="mx-auto max-w-[760px] px-5 py-12 sm:px-8 sm:py-16">
      <BackLink />
      <p className="label-mono mt-10 text-muted-foreground">{tag}</p>
      <h1 className="headline mt-5 text-5xl !leading-[1.02] sm:text-6xl">{title}</h1>
      <p className="mt-6 text-xl">Full story coming soon.</p>
    </main>
  );
}
