import { useRef, useState, type KeyboardEvent } from "react";
import {
  siReact,
  siTypescript,
  siVuedotjs,
  siTailwindcss,
  siGraphql,
  siSupabase,
  siFigma,
  siClaude,
  siGit,
  siStorybook,
  siGrafana,
  siVercel,
} from "simple-icons";

type Icon = { path: string; hex: string };
const siChatgpt: Icon = {
  hex: "000000",
  path: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z",
};
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
  { name: "Codex", icon: siChatgpt },
  { name: "Git", icon: siGit },
  { name: "Storybook", icon: siStorybook },
  { name: "Grafana", icon: siGrafana },
  { name: "Vercel", icon: siVercel },
];

const tilts = [-4, 3, -2, 5, -5, 2, -3, 4, -2, 3, -4, 2, 5, -3];

function Sticker({ i, name, icon }: { i: number; name: string; icon?: Icon | undefined }) {
  const wave = Math.sin(i * 0.9) * 14;
  return (
    <li
      className="sticker-slot shrink-0"
      style={{ transform: `translateY(${wave}px)`, ["--bob-delay" as string]: `${-i * 0.45}s` }}
    >
      <div
        tabIndex={0}
        className="sticker card-ink flex w-24 flex-col items-center gap-2 rounded-xl px-3 py-3 shadow-[2px_2px_0_var(--ink)]"
        style={{ ["--tilt" as string]: `${tilts[i % tilts.length]}deg` }}
      >
        <div className="flex h-10 items-center justify-center">
          {icon ? (
            <svg viewBox="0 0 24 24" className="h-9 w-9" role="img" aria-hidden fill={`#${icon.hex}`}>
              <path d={icon.path} />
            </svg>
          ) : (
            <span className="headline text-xl">{name}</span>
          )}
        </div>
        {icon && <span className="label-mono !text-[0.6rem] !tracking-[0.1em] text-center leading-tight">{name}</span>}
      </div>
    </li>
  );
}

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex items-center gap-6 pr-6" aria-hidden={hidden || undefined}>
      {tools.map((t, i) => (
        <Sticker key={t.name} i={i} name={t.name} icon={t.icon} />
      ))}
    </ul>
  );
}

type Entry = { title: string; text: string };
export const skillTabs: { id: string; label: string; entries: Entry[] }[] = [
  {
    id: "build",
    label: "Build",
    entries: [
      {
        title: "Web and mobile from one codebase.",
        text: "React, React Native and TypeScript, shipped to iOS, Android and web.",
      },
      {
        title: "Design systems.",
        text: "Reusable components, documented in Storybook, that keep a product consistent.",
      },
      { title: "APIs and services.", text: "GraphQL, Node and Java services, with Supabase on newer builds." },
      { title: "Safe releases.", text: "Feature flags, staged rollouts and Grafana dashboards." },
    ],
  },
  {
    id: "think",
    label: "Think",
    entries: [
      { title: "Product sense and strategy.", text: "I ask why a user would do this before I build it." },
      { title: "Experiments and measurement.", text: "A/B tests, funnels, and tracking on every step." },
      { title: "Discovery.", text: "I map how people really work before I design for them." },
      { title: "Leading delivery.", text: "Specs, test plans, bug bashes and handoff documents." },
    ],
  },
  {
    id: "ai",
    label: "AI",
    entries: [
      { title: "AI in my daily workflow.", text: "Claude Code and Codex for building and reviewing." },
      {
        title: "AI-powered features.",
        text: "I built the interface for search recommendations driven by an AI model.",
      },
      { title: "Building with Claude.", text: "Preparing for the Claude Certified Architect exam." },
    ],
  },
];

export function SkillsExplorer() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const go = (i: number) => {
    const n = (i + skillTabs.length) % skillTabs.length;
    setActive(n);
    refs.current[n]?.focus();
  };
  const onKey = (e: KeyboardEvent) => {
    const map: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: skillTabs.length - 1,
    };
    if (e.key in map) {
      e.preventDefault();
      go(map[e.key]!);
    }
  };
  const tab = skillTabs[active]!;
  return (
    <div className="mt-10">
      <div role="tablist" aria-label="Skills" className="flex flex-wrap justify-center gap-3" onKeyDown={onKey}>
        {skillTabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={
              "inline-flex items-center gap-2 rounded-full px-5 py-2 font-semibold transition-colors " +
              (i === active
                ? "border-[1.5px] border-primary text-primary"
                : "border-[1.5px] border-ink text-foreground hover:bg-muted")
            }
          >
            <span aria-hidden className={"h-2 w-2 rounded-full " + (i === active ? "bg-primary" : "bg-teal")} />
            {t.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`panel-${tab.id}`}
        aria-labelledby={`tab-${tab.id}`}
        tabIndex={0}
        className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-2"
      >
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
    <section id="skills" className="pb-20 pt-10">
      <div className="marquee overflow-hidden pb-10 pt-8" aria-label="Tools I use">
        <div className="marquee-track flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-hand mt-6 text-center text-2xl leading-relaxed text-teal sm:text-3xl lg:text-4xl">
          Framework agnostic. Product obsessed.
        </h2>
        <SkillsExplorer />
      </div>
    </section>
  );
}
