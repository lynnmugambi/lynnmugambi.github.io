import { useState } from "react";
import { Arrow } from "@/components/doodles";
import resume from "@/assets/Lynn_Mugambi_Resume.pdf.asset.json";

export const EMAIL_ADDRESS = "lynnlmugambi@gmail.com";
export const EMAIL = `mailto:${EMAIL_ADDRESS}`;

export const footerLinks: { label: string; href: string; external?: boolean; download?: boolean }[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/lynnmugambi", external: true },
  { label: "GitHub", href: "https://github.com/lynnmugambi", external: true },
  { label: "Resume", href: resume.url, download: true },
  { label: EMAIL_ADDRESS, href: EMAIL },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL_ADDRESS).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2500);
      },
      () => {},
    );
  };
  return (
    <>
      <section id="contact" className="bg-[var(--lavender)] text-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-16 px-5 py-20 sm:px-8 md:flex-row md:items-end md:justify-between md:gap-10">
          <div>
            <h2 className="headline max-w-3xl text-4xl !leading-[1.02] sm:text-5xl lg:text-6xl">
              Excited to work together?<br />Let's talk!
            </h2>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={`label-mono text-ink transition-colors hover:text-primary focus-visible:text-primary ${l.href === EMAIL ? "normal-case underline underline-offset-4" : ""}`}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    {...(l.download ? { download: "Lynn_Mugambi_Resume.pdf" } : {})}
                    {...(l.href === EMAIL ? { onClick: copyEmail } : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative shrink-0">
            <Arrow className="pointer-events-none absolute -top-14 left-2 h-12 w-16 rotate-[30deg] md:-left-24 md:-top-16 md:h-16 md:w-24 md:rotate-0" />
            <a
              href="https://linkedin.com/in/lynnmugambi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:rotate-[-1deg] active:translate-y-0"
            >
              <svg
                aria-hidden
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full overflow-visible"
              >
                <path
                  d="M30 4 C80 1 130 3 172 5 C192 7 198 22 196 32 C194 48 182 56 160 56 C110 59 70 57 32 55 C12 54 3 44 4 30 C5 14 14 5 30 4 Z"
                  className="fill-primary"
                />
                <path
                  d="M28 7 C80 2 140 4 174 3 C195 8 199 26 194 38 C189 52 170 58 150 57 C100 60 60 58 30 57 C9 55 1 42 3 27 C5 13 16 6 34 6"
                  className="fill-none stroke-foreground transition-transform duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[2px]"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <span className="relative">Get in touch</span>
            </a>
            <p role="status" aria-live="polite" className="mt-2 h-6 font-hand text-sm text-teal">
              {copied ? "copied to clipboard!" : ""}
            </p>
          </div>
        </div>
      </section>
      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <p className="text-sm text-muted-foreground">Built with ❤️, 💻 and 🥨 by Lynn Mugambi ©</p>
        <a href="#top" className="label-mono text-primary hover:underline">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
