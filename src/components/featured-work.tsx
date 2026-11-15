import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { CaseData } from "@/components/case-study";

export const cards = [
  { tag: "Technical depth", title: "The sign-in that was quietly failing", line: "Usable Facebook sign-ins from under 1% to about 55%.", to: "/work/sign-in" },
  { tag: "Product sense", title: "The shortest way to the first order", line: "One question about sign-up, and registrations up 30%.", to: "/work/sign-up" },
  { tag: "Founder instinct", title: "The pitch that stalled, and the product that didn't", line: "A school's supply requests from 3 hours to 30 minutes.", to: "/work/hifadhi" },
] as const;

const wins = [
  { n: "592%", t: "more app store reviews in two weeks, with the rating up from 2.3 to 4.25 stars." },
  { n: "5%", t: "more revenue from a related-products row in search." },
  { n: "3 days", t: "to ship a disaster-relief donation feature that reached 2M+ users." },
];

export const signInCase: CaseData = {
  label: "Technical depth · A consumer app with millions of users · 2025",
  title: "The sign-in that was quietly failing",
  summary: "A social sign-in route was failing without anyone noticing. I measured it, found the cause, and took usable sign-ins from under 1% to about 55%.",
  role: "I owned the investigation and the fix.",
  sections: [
    { heading: "The challenge", text: "People chose \u201cContinue with Facebook\u201d, finished the Facebook step, and returned to a page that behaved as if nothing had happened. It failed on Safari and some Android browsers, and it could not be reproduced reliably. Every failure was a new customer lost at the first step, and nobody knew how many there were." },
    { heading: "My approach", text: "I measured the flow before changing it. The data showed the sign-in token was arriving, but the app had already stopped waiting for it. I redesigned the hand-off between the sign-in popup and the app, and added safeguards because the new design holds a token in the browser for a few seconds." },
    { heading: "The outcome", text: "Within a week, usable sign-ins rose from under 1% to about 55%, roughly 80 times more. The flow is now tracked step by step, so a future failure shows up straight away. Some errors remained, and I documented them as the next thing to investigate." },
  ],
  steps: [
    { title: "Measure first.", text: "I added tracking to every step of the flow and charted a week of real use." },
    { title: "Find the real failure.", text: "The chart showed people were not closing the popup. The token arrived after the app had given up." },
    { title: "Redesign the hand-off.", text: "The app now collects the token from a short-lived store instead of relying on a fragile link between two browser windows." },
    { title: "Keep it safe and small.", text: "The token is checked against the original request, expires quickly, and is deleted after use. I limited the change to this one sign-in route." },
  ],
  tools: ["React Native for web", "TypeScript", "OAuth", "Grafana"],
  note: "Details are simplified to protect the company's information.",
};

export function FeaturedWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8">
      <div className="flex flex-wrap items-end gap-x-5 gap-y-2">
        <h2 className="headline text-4xl sm:text-5xl lg:text-6xl">Featured work</h2>
        <span className="font-hand -rotate-3 pb-1 text-sm text-teal sm:text-base">three stories, picked on purpose</span>
      </div>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <li key={c.to}>
            <Link to={c.to} className="card-ink group flex h-full flex-col gap-4 p-6 shadow-[3px_3px_0_var(--ink)] transition-transform duration-200 hover:-translate-y-1">
              <span className="label-mono self-start rounded-full border border-ink bg-teal/10 px-2.5 py-1 !text-[0.6rem]">{c.tag}</span>
              <h3 className="headline text-2xl !leading-[1.05] lg:text-3xl">{c.title}</h3>
              <p className="text-muted-foreground">{c.line}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 font-semibold text-primary group-hover:underline underline-offset-4">
                Read the story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="font-hand mt-14 text-sm text-teal sm:text-base">quick wins</p>
      <ul className="mt-3 grid gap-6 border-y border-ink/15 py-6 sm:grid-cols-3">
        {wins.map((w) => (
          <li key={w.n}>
            <p className="headline text-4xl">{w.n}</p>
            <p className="mt-1 text-sm text-muted-foreground">{w.t}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
