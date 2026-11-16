import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { cards, signInCase } from "@/components/featured-work";
import { CaseStudy } from "@/components/case-study";

describe("Featured work", () => {
  it("links the three cards to their case pages", () => {
    expect(cards.map((c) => c.to)).toEqual(["/work/sign-in", "/work/sign-up", "/work/hifadhi"]);
  });
  it("shows all sections and all four steps without clicking", () => {
    render(<CaseStudy data={signInCase} />);
    for (const h of ["The challenge", "My approach", "The outcome"]) expect(screen.getByRole("heading", { name: h })).toBeTruthy();
    for (const n of ["01", "02", "03", "04"]) expect(screen.getByText(n)).toBeTruthy();
    expect(screen.getByRole("link", { name: /back to featured work/i }).getAttribute("href")).toBe("/#work");
  });
});

import { hifadhiCase, signUpCase } from "@/components/featured-work";
describe("New case pages", () => {
  it.each([signUpCase, hifadhiCase])("shows all sections and four steps", (d) => {
    const { unmount } = render(<CaseStudy data={d} />);
    for (const h of ["The challenge", "My approach", "The outcome"]) expect(screen.getByRole("heading", { name: h })).toBeTruthy();
    expect(screen.getByText("04")).toBeTruthy();
    unmount();
  });
  it("Hifadhi has no note", () => {
    expect(hifadhiCase.note).toBeUndefined();
  });
});
