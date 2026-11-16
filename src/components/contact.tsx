import { Arrow } from "@/components/doodles";

export const EMAIL = "mailto:lynnlmugambi@gmail.com";

export const footerLinks: { label: string; href: string; external?: boolean; download?: boolean }[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/lynnmugambi", external: true },
  { label: "GitHub", href: "https://github.com/lynnmugambi", external: true },
  { label: "Email", href: EMAIL },
];

export function Contact() {
  return (
    <>
      <section id="contact" className="bg-primary text-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-5 py-20 sm:px-8 md:flex-row md:items-end md:justify-between">
          <h2 className="headline max-w-3xl text-4xl !leading-[1.02] sm:text-5xl lg:text-6xl">Got a problem worth solving? Let's talk.</h2>
          <div className="relative shrink-0">
            <Arrow className="pointer-events-none absolute -left-24 -top-16 h-16 w-24 !text-background" />
            <a href={EMAIL} className="inline-flex items-center rounded-full bg-background px-7 py-3.5 font-semibold text-primary transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background">
              Get in touch
            </a>
          </div>
        </div>
      </section>
      <footer className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="label-mono hover:text-primary" {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...(l.download ? { download: "" } : {})}>{l.label}</a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">Built with ❤️, 💻 and 🥨 by Lynn Mugambi ©</p>
        <a href="#top" className="label-mono text-primary hover:underline">Back to top ↑</a>
      </footer>
    </>
  );
}
