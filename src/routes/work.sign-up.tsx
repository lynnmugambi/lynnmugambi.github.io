import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/case-study";
import { signUpCase } from "@/components/featured-work";

export const Route = createFileRoute("/work/sign-up")({
  head: () => ({
    meta: [
      { title: "The shortest way to the first order — Lynn Mugambi" },
      { name: "description", content: "New users were leaving during sign-up. One questioned step lifted registrations and first orders by 30%." },
      { property: "og:title", content: "The shortest way to the first order — Lynn Mugambi" },
      { property: "og:description", content: "New users were leaving during sign-up. One questioned step lifted registrations and first orders by 30%." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CaseStudy data={signUpCase} />,
});
