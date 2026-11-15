import { createFileRoute } from "@tanstack/react-router";
import { CasePlaceholder } from "@/components/case-study";

export const Route = createFileRoute("/work/sign-up")({
  head: () => ({
    meta: [
      { title: "The shortest way to the first order — Lynn Mugambi" },
      { name: "description", content: "One question about sign-up, and registrations up 30%." },
      { property: "og:title", content: "The shortest way to the first order — Lynn Mugambi" },
      { property: "og:description", content: "One question about sign-up, and registrations up 30%." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CasePlaceholder tag="Product sense" title="The shortest way to the first order" />,
});
