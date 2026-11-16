import { Arrow } from "@/components/doodles";
import resume from "@/assets/Lynn_Mugambi_Resume.pdf.asset.json";

export const EMAIL = "mailto:lynnlmugambi@gmail.com";

export const footerLinks: { label: string; href: string; external?: boolean; download?: boolean }[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/lynnmugambi", external: true },
  { label: "GitHub", href: "https://github.com/lynnmugambi", external: true },
  { label: "Email", href: EMAIL },
  { label: "Resume", href: resume.url, download: true },
];

export function Contact() {
  return (
    <>
      <section id="contact" className="bg-[var(--lavender)] text-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-16 px-5 py-20 sm:px-8 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2 className="headline max-w-3xl text-4xl !leading-[1.02] sm:text-5xl lg:text-6xl">
            Excited to work together?<br />Let's talk!
          </h2>
          <div className="relative shrink-0">
            <Arrow className="pointer-events-none absolute -top-14 left-2 h-12 w-16 rotate-[30deg] md:-left-24 md:-top-16 md:h-16 md:w-24 md:rotate-0" />
            <a
              href={EMAIL}
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
          </div>
        </div>
      </section>
      <footer className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="label-mono hover:text-primary"
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(l.download ? { download: "Lynn_Mugambi_Resume.pdf" } : {})}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">Built with ❤️, 💻 and 🥨 by Lynn Mugambi ©</p>
        <a href="#top" className="label-mono text-primary hover:underline">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
