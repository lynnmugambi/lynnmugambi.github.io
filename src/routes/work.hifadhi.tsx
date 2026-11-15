import { createFileRoute } from "@tanstack/react-router";
import { CasePlaceholder } from "@/components/case-study";

export const Route = createFileRoute("/work/hifadhi")({
  head: () => ({
    meta: [
      { title: "The pitch that stalled, and the product that didn't — Lynn Mugambi" },
      { name: "description", content: "A school's supply requests from 3 hours to 30 minutes." },
      { property: "og:title", content: "The pitch that stalled, and the product that didn't — Lynn Mugambi" },
      { property: "og:description", content: "A school's supply requests from 3 hours to 30 minutes." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CasePlaceholder tag="Founder instinct" title="The pitch that stalled, and the product that didn't" />,
});
