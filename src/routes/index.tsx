import { createFileRoute } from "@tanstack/react-router";
import { getRequestOrigin } from "@/lib/origin.functions";
import { Nav } from "@/components/nav";
import { Skills } from "@/components/skills";
import { FeaturedWork } from "@/components/featured-work";
import { Beyond } from "@/components/beyond";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import portrait from "@/assets/lynn_portrait.png.asset.json";
import { Arrow, ClickCursor, CoffeeMug, Frame, HandNote, TerminalPrompt, Underline } from "@/components/doodles";

export const Route = createFileRoute("/")({
  loader: () => getRequestOrigin(),
  head: ({ loaderData }) => {
    const img = loaderData ? `${loaderData}/og-image.jpg` : undefined;
    return {
      meta: [
        { title: "Lynn Mugambi | Product Engineer" },
        { name: "description", content: "Engineer by trade. Product thinker by nature. Featured work, skills and how to reach me." },
        { property: "og:title", content: "Lynn Mugambi | Product Engineer" },
        { property: "og:description", content: "Engineer by trade. Product thinker by nature. Featured work, skills and how to reach me." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(img ? [{ property: "og:image", content: img }, { name: "twitter:image", content: img }] : []),
      ],
    };
  },
  component: Index,
});

export const buttonClass =
  "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0";

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-6 px-5 pb-10 pt-10 sm:px-8 md:grid-cols-[1.2fr_0.9fr] md:gap-10 lg:gap-16 lg:pt-16"
    >
      <div className="relative z-10">
        <p className="label-mono rise text-muted-foreground">Engineer by trade · Product thinker by nature</p>
        <h1
          className="headline rise mt-4 !leading-[1.12] text-[3.5rem] sm:text-[4.75rem] md:text-[5rem] lg:text-[7rem]"
          style={{ animationDelay: ".1s" }}
        >
          <span className="whitespace-nowrap">Hey there,</span>
          <br />
          I'm{" "}
          <span className="relative inline-block">
            Lynn.
            <Underline className="absolute -bottom-3 left-0 h-5 w-full sm:-bottom-4 sm:h-7" delay={0.6} />
          </span>
        </h1>
        <div className="rise mt-10 flex flex-wrap items-center gap-6" style={{ animationDelay: ".4s" }}>
          <a
            href="#work"
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
            <span className="relative">See my work</span>
          </a>
          <a href="#contact" className="font-semibold text-primary underline underline-offset-4 hover:decoration-2">
            Get in touch
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full min-w-0 max-w-sm px-3 pb-8 md:max-w-md lg:pl-2">
        <div className="relative z-10 mb-2 flex items-end gap-0">
          <HandNote rotate={-8} className="-mr-3 -translate-y-3 text-lg sm:text-xl">
            yep, that's me
          </HandNote>
          <Arrow className="h-10 w-14 rotate-[35deg] translate-y-[6px]" delay={1.3} />
        </div>
        <div className="relative px-4 pt-6 sm:px-6">
          <Frame className="pointer-events-none absolute inset-0 h-full w-full" delay={0.3} />
          <TerminalPrompt
            className="absolute right-6 top-10 z-20 h-10 w-12 rotate-6 sm:right-9 sm:h-12 sm:w-14"
            delay={1}
          />
          <ClickCursor
            className="absolute bottom-3 right-6 z-20 h-9 w-9 -rotate-12 sm:right-9 sm:h-10 sm:w-10"
            delay={1.6}
          />
          <CoffeeMug
            className="absolute -bottom-10 -left-10 z-20 h-12 w-12 -rotate-6 sm:-left-14 sm:h-14 sm:w-14"
            delay={1.1}
          />
          <img
            src={portrait.url}
            alt="Lynn Mugambi smiling, wearing a white top and a red floral skirt"
            width={795}
            height={768}
            fetchPriority="high"
            decoding="async"
            className="rise relative w-full"
            style={{ animationDelay: ".2s" }}
          />
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <Hero />
        <Skills />
        <FeaturedWork />
        <Beyond />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
