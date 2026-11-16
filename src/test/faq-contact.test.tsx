import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";

describe("Questions, answered", () => {
  it("shows all six answers without clicking", () => {
    render(<Faq />);
    expect(screen.getAllByRole("listitem")).toHaveLength(6);
    expect(screen.getByText(/annoying one who does/)).toBeTruthy();
  });
});
describe("Contact", () => {
  it("opens LinkedIn", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: "Get in touch" }).getAttribute("href")).toBe("https://linkedin.com/in/lynnmugambi");
  });
});
describe("Footer", () => {
  it("has a Resume download", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: "Resume" }).getAttribute("download")).toBe("Lynn_Mugambi_Resume.pdf");
  });
});
