import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";

describe("Before you ask", () => {
  it("opens 01 by default and keeps only one row open", () => {
    render(<Faq />);
    const q1 = screen.getByRole("button", { name: /how soon can you start/i });
    const q3 = screen.getByRole("button", { name: /why a master's/i });
    expect(q1.getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(q3);
    expect(q3.getAttribute("aria-expanded")).toBe("true");
    expect(q1.getAttribute("aria-expanded")).toBe("false");
  });
});
describe("Contact", () => {
  it("emails Lynn", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: "Get in touch" }).getAttribute("href")).toBe("mailto:lynnlmugambi@gmail.com");
  });
});
