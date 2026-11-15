import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { tools, SkillsExplorer } from "@/components/skills";

describe("Skills", () => {
  it("lists the 14 tools in the requested order", () => {
    expect(tools.map((t) => t.name)).toEqual(["React","React Native","TypeScript","Vue","Tailwind CSS","GraphQL","Supabase","Figma","Claude Code","Codex","Git","Storybook","Grafana","Vercel"]);
  });
  it("switches tabs with arrow keys", () => {
    render(<SkillsExplorer />);
    const build = screen.getByRole("tab", { name: "Build" });
    fireEvent.keyDown(build, { key: "ArrowRight" });
    expect(screen.getByRole("tab", { name: "Think" })).toHaveAttribute("aria-selected", "true");
    fireEvent.keyDown(build, { key: "End" });
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
  });
});
