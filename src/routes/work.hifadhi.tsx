import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/case-study";
import { hifadhiCase } from "@/components/featured-work";

export const Route = createFileRoute("/work/hifadhi")({
  head: () => ({
    meta: [
      { title: "The pitch that stalled, and the product that didn't — Lynn Mugambi" },
      { name: "description", content: "How a stalled pitch became the inventory system a Nairobi school runs on." },
      { property: "og:title", content: "The pitch that stalled, and the product that didn't — Lynn Mugambi" },
      { property: "og:description", content: "How a stalled pitch became the inventory system a Nairobi school runs on." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CaseStudy data={hifadhiCase} />,
});
