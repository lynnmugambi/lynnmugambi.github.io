import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Beyond, notes } from "@/components/beyond";

describe("Beyond code", () => {
  it("has the four notes", () => {
    expect(notes.map((n) => n.title)).toEqual(["Travel", "Side projects", "My heart", "Art"]);
  });
  it("tap opens a note and tap again closes it", () => {
    render(<Beyond />);
    const b = screen.getByRole("button", { name: /travel/i });
    fireEvent.click(b); expect(b.getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(b); expect(b.getAttribute("aria-expanded")).toBe("false");
  });
});
