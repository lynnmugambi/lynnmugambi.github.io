import { fireEvent, render, screen } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { Beyond, notes } from "@/components/beyond";

describe("Beyond code", () => {
  beforeAll(() => {
    vi.stubGlobal("ResizeObserver", class {
      observe() {}
      disconnect() {}
    });
  });
  afterAll(() => vi.unstubAllGlobals());
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
