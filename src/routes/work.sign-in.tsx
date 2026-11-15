import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/case-study";
import { signInCase } from "@/components/featured-work";

export const Route = createFileRoute("/work/sign-in")({
  head: () => ({
    meta: [
      { title: "The sign-in that was quietly failing — Lynn Mugambi" },
      { name: "description", content: "How Lynn took usable Facebook sign-ins from under 1% to about 55%." },
      { property: "og:title", content: "The sign-in that was quietly failing — Lynn Mugambi" },
      { property: "og:description", content: "How Lynn took usable Facebook sign-ins from under 1% to about 55%." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CaseStudy data={signInCase} />,
});
