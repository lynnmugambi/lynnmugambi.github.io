import { Fragment, useRef, useState, type KeyboardEvent } from "react";
import {
  siReact, siTypescript, siVuedotjs, siTailwindcss, siGraphql, siSupabase, siFigma,
  siClaude, siGit, siStorybook, siGrafana, siVercel,
} from "simple-icons";
import { Arrow } from "@/components/doodles";

type Icon = { path: string; hex: string };
export const tools: { name: string; icon?: Icon | undefined }[] = [
  { name: "React", icon: siReact },
  { name: "React Native", icon: siReact },
  { name: "TypeScript", icon: siTypescript },
  { name: "Vue", icon: siVuedotjs },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "GraphQL", icon: siGraphql },
  { name: "Supabase", icon: siSupabase },
  { name: "Figma", icon: siFigma },
  { name: "Claude Code", icon: siClaude },
  { name: "Codex" },
  { name: "Git", icon: siGit },
  { name: "Storybook", icon: siStorybook },
  { name: "Grafana", icon: siGrafana },
  { name: "Vercel", icon: siVercel },
];

const tilts = [-4, 3, -2, 5, -5, 2, -3, 4, -2, 3, -4, 2, 5, -3];

function Sticker({ i, name, icon }: { i: number; name: string; icon?: Icon | undefined }) {
  const wave = Math.sin(i * 0.9) * 14;
  return (
    <li className="sticker-slot shrink-0" style={{ transform: `translateY(${wave}px)`, ["--bob-delay" as string]: `${-i * 0.45}s` }}>
      <div tabIndex={0} className="sticker card-ink flex w-24 flex-col items-center gap-2 rounded-xl px-3 py-3 shadow-[2px_2px_0_var(--ink)]" style={{ ["--tilt" as string]: `${tilts[i % tilts.length]}deg` }}>
        <div className="flex h-10 items-center justify-center">
          {icon ? (
            <svg viewBox="0 0 24 24" className="h-9 w-9" role="img" aria-hidden fill={`#${icon.hex}`}><path d={icon.path} /></svg>
          ) : (
            <span className="headline text-xl">{name}</span>}
          )}
        </div>
        {icon && <span className="label-mono !text-[0.6rem] !tracking-[0.1em] text-center leading-tight">{name}</span>}
      </div>
    </li>
  );
}

function AiNote() {
  return (
    <li aria-hidden className="ai-note relative flex shrink-0 items-start self-start -ml-2 mr-2 -mt-6">
      <Arrow className="h-10 w-12 -scale-x-100 rotate-[200deg]" />
      <span className="font-hand text-2xl font-semibold text-teal -rotate-6 whitespace-nowrap">AI in my daily workflow</span>
    </li>
  );
}

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex items-center gap-6 pr-6" aria-hidden={hidden || undefined}>
      {tools.map((t, i) => (
        <Fragment key={t.name}>
          <Sticker i={i} name={t.name} icon={t.icon} />
          {t.name === "Codex" && <AiNote />}
        </Fragment>
      ))}
    </ul>
  );
}

type Entry = { title: string; text: string };
export const skillTabs: { id: string; label: string; entries: Entry[] }[] = [
  { id: "build", label: "Build", entries: [
    { title: "Web and mobile from one codebase.", text: "React, React Native and TypeScript, shipped to iOS, Android and web." },
    { title: "Design systems.", text: "Reusable components, documented in Storybook, that keep a product consistent." },
    { title: "APIs and services.", text: "GraphQL, Node and Java services, with Supabase on newer builds." },
    { title: "Safe releases.", text: "Feature flags, staged rollouts and Grafana dashboards." },
  ]},
  { id: "think", label: "Think", entries: [
    { title: "Product sense and strategy.", text: "I ask why a user would do this before I build it." },
    { title: "Experiments and measurement.", text: "A/B tests, funnels, and tracking on every step." },
    { title: "Discovery.", text: "I map how people really work before I design for them." },
    { title: "Leading delivery.", text: "Specs, test plans, bug bashes and handoff documents." },
  ]},
  { id: "ai", label: "AI", entries: [
    { title: "AI in my daily workflow.", text: "Claude Code and Codex for building and reviewing." },
    { title: "AI-powered features.", text: "I built the interface for search recommendations driven by an AI model." },
    { title: "Building with Claude.", text: "Preparing for the Claude Certified Architect exam." },
  ]},
];

export function SkillsExplorer() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const go = (i: number) => { const n = (i + skillTabs.length) % skillTabs.length; setActive(n); refs.current[n]?.focus(); };
  const onKey = (e: KeyboardEvent) => {
    const map: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: skillTabs.length - 1 };
    if (e.key in map) { e.preventDefault(); go(map[e.key]!); }
  };
  const tab = skillTabs[active]!;
  return (
    <div className="mt-16">
      <div role="tablist" aria-label="Skills" className="flex flex-wrap gap-3" onKeyDown={onKey}>
        {skillTabs.map((t, i) => (
          <button key={t.id} ref={(el) => { refs.current[i] = el; }} role="tab" id={`tab-${t.id}`} aria-selected={i === active} aria-controls={`panel-${t.id}`} tabIndex={i === active ? 0 : -1} onClick={() => setActive(i)}
            className={"inline-flex items-center gap-2 rounded-full px-5 py-2 font-semibold transition-colors " + (i === active ? "border-[1.5px] border-primary bg-primary text-primary-foreground" : "border-[1.5px] border-ink text-foreground hover:bg-muted")}>
            <span aria-hidden className="h-2 w-2 rounded-full bg-teal" />
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${tab.id}`} aria-labelledby={`tab-${tab.id}`} tabIndex={0} className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-2">
        {tab.entries.map((e) => (
          <div key={e.title}>
            <h3 className="font-bold">{e.title}</h3>
            <p className="mt-1 text-muted-foreground">{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="headline text-4xl sm:text-5xl lg:text-6xl">Framework agnostic. Product obsessed.</h2>
      </div>
      <div className="marquee mt-10 overflow-hidden py-10" aria-label="Tools I use">
        <div className="marquee-track flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SkillsExplorer />
      </div>
    </section>
  );
}
