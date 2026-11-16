import { Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Zap } from "lucide-react";
import type { CaseData } from "@/components/case-study";
import { CrumpledForm, NameField, ResultNote } from "@/components/doodles";

export const cards = [
  { tag: "Technical depth", title: "The sign-in that was quietly failing", line: "Usable Facebook sign-ins from under 1% to about 55%.", to: "/work/sign-in" },
  { tag: "Product sense", title: "The shortest way to the first order", line: "One question about sign-up, and registrations up 30%.", to: "/work/sign-up" },
  { tag: "Founder instinct", title: "The pitch that stalled, and the product that didn't", line: "A school's supply requests from 3 hours to 30 minutes.", to: "/work/hifadhi" },
] as const;

const wins = [
  { n: "592%", icon: TrendingUp, t: "more app store reviews in two weeks, with the rating up from 2.3 to 4.25 stars." },
  { n: "5%", icon: TrendingUp, t: "more revenue from a related-products row in search." },
  { n: "3 days", icon: Zap, t: "to ship a disaster-relief donation feature that reached 2M+ users." },
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
  challengeDoodle: (
    <span aria-hidden className="pointer-events-none absolute -right-36 top-6 hidden -rotate-3 lg:block">
      <span className="fb-btn flex items-center gap-1.5 rounded-lg border-2 border-teal px-2 py-1 font-hand text-xs text-teal">
        <span className="grid h-4 w-4 place-items-center rounded-sm border-2 border-teal font-sans text-[0.6rem] font-bold leading-none">f</span>
        sign in
      </span>
      <svg viewBox="0 0 24 24" fill="none" className="fb-cursor absolute -bottom-5 right-2 h-6 w-6 text-teal">
        <path d="M5 3 L5 19 L9.5 14.5 L12.5 21 L15 20 L12 13.5 L18 13.5 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className="fill-background" />
      </svg>
    </span>
  ),
  outcomeDoodle: (
    <span aria-hidden className="pointer-events-none absolute -right-16 top-12 hidden lg:block">
      <svg viewBox="0 0 60 30" fill="none" className="absolute -left-12 -top-5 h-6 w-12 text-teal">
        <path d="M54 26 C48 12 34 8 8 10 M15 4 L8 10 L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="block rotate-[-8deg] font-hand text-lg text-teal">yay!</span>
    </span>
  ),
};

export const signUpCase: CaseData = {
  label: "Product sense · A consumer app with millions of users · 2023 to 2024",
  title: "The shortest way to the first order",
  summary: "New users were leaving during sign-up. I questioned one step, and the redesign that followed lifted registrations and first orders by 30%.",
  role: "Engineer on the growth team. I led the simplified sign-up flow from start to finish.",
  sections: [
    { heading: "The challenge", text: "Sign-up was already long, and a revamp that added explainer videos to each step made the drop-off worse. The team needed people to reach the homepage faster on iOS, Android and web. Many screens across the app assumed every user had already given a name." },
    { heading: "My approach", text: "The team held a design review to understand why sign-ups were falling and what had changed. We agreed the flow had to be shorter and simpler. My contribution was to question one step: sign-up did not need a name, so I proposed moving it to the order stage, where it is required anyway. I then led the build across iOS, Android and web." },
    { heading: "The outcome", text: "Registrations and first orders rose 30%, the best new-user numbers the company had seen at that point. I became the go-to owner of onboarding for the next two years." },
  ],
  steps: [
    { title: "Question the step.", text: "\u201cYou'll get my name when I order.\u201d The homepage is where people see the value, so sign-up should get them there fast." },
    { title: "Make it optional everywhere.", text: "I found every screen that assumed a name, including profile, addresses and order pages, and made each one work without it." },
    { title: "Ask at a better moment.", text: "The name request moved to the order-tracking screen after the first order. It can be dismissed, and it appears before promotions so small screens stay clear." },
    { title: "Shorten what was left.", text: "The steps follow the backend's order: fraud check, sign-in token, then address. People using Google, Facebook or Apple skip what we already know, and people who quit halfway through verification can pick up where they stopped." },
  ],
  tools: ["React Native", "TypeScript", "GraphQL", "Feature flags", "Product analytics"],
  note: "Details are simplified to protect the company's information.",
  challengeDoodle: <NameField className="pointer-events-none absolute -right-40 top-4 hidden h-16 w-32 -rotate-3 lg:block" />,
  outcomeDoodle: <ResultNote text="+30%!" className="pointer-events-none absolute -right-24 top-10 hidden lg:block" />,
};

export const hifadhiCase: CaseData = {
  label: "Business sense · Hifadhi, my own product · 2024 to present",
  title: "The pitch that stalled, and the product that didn't",
  summary: "A stalled pitch led to a passing complaint, and that complaint became the system an international school in Nairobi runs on. Hifadhi means \u201cinventory\u201d in Swahili.",
  role: "Founder. I led product and technology, with a team of three developers.",
  sections: [
    { heading: "The challenge", text: "The principal was signing a stack of paper requisition forms every day. Staff waited more than 3 hours between asking for supplies and collecting them. Nobody had a clear view of what the stores held or where it went." },
    { heading: "My approach", text: "I reused the inventory core of a POS system I had designed and rebuilt it around requests instead of sales. I mapped the real process with the storekeeper, the operations manager, the procurement manager and the principal. The first version was in use within six months." },
    { heading: "The outcome", text: "Time from request to pickup fell from more than 3 hours to 30 minutes. After an audit, the principal reported inventory costs down 32%, with less waste and loss. The whole school still uses it, and it has asked me to extend it to its other schools." },
  ],
  steps: [
    { title: "Hear the real problem.", text: "I had pitched the school on a different system. The board approved it, then it stalled. In that conversation the principal mentioned the paperwork that was wearing him down." },
    { title: "Reuse what I had.", text: "The approved system design already tracked stock, so I kept that core and replaced sales with requests and approvals." },
    { title: "Follow how the school really works.", text: "I adjusted who approves what after seeing how decisions were really made." },
    { title: "Grow with demand.", text: "Once the first department ran well, others across the school asked to join." },
  ],
  tools: ["PHP (first version, on the school's servers)", "Modern stack (cloud rebuild in progress)"],
  challengeDoodle: <CrumpledForm className="pointer-events-none absolute -right-40 top-2 hidden h-20 w-32 lg:block" />,
  outcomeDoodle: <ResultNote text="3 hrs → 30 min" className="pointer-events-none absolute -right-40 top-10 hidden lg:block" />,
};

export function FeaturedWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-x-3 gap-y-2">
        <h2 className="headline text-4xl sm:text-5xl lg:text-6xl">Featured work</h2>
        <span className="font-hand pb-1 text-sm text-teal sm:text-base">Three stories, picked with purpose</span>
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
      <p className="font-hand mt-14 text-lg text-teal sm:text-2xl">Quick Wins</p>
      <ul className="mt-3 grid gap-6 border-y border-ink/15 py-6 sm:grid-cols-3">
        {wins.map((w) => (
          <li key={w.n}>
            <p className="headline flex items-center gap-2 text-4xl">{w.n}<w.icon aria-hidden className="h-7 w-7 text-teal" strokeWidth={2.25} /></p>
            <p className="mt-1 text-sm text-muted-foreground">{w.t}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
