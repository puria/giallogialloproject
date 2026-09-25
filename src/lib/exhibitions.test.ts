import { describe, expect, test } from "bun:test";
import { formatVenueYear } from "./exhibitions";

const base = { slug: "007", title: "Uno di Voi" };

describe("formatVenueYear", () => {
  test("joins venue and year inside parentheses", () => {
    expect(
      formatVenueYear({ ...base, venue: "Castiglioni, Milan", year: 2025 }),
    ).toBe("(Castiglioni, Milan 2025)");
  });

  test("renders a lone venue or a lone year", () => {
    expect(formatVenueYear({ ...base, venue: " Bozar, Brussels " })).toBe(
      "(Bozar, Brussels)",
    );
    expect(formatVenueYear({ ...base, year: 2024 })).toBe("(2024)");
  });

  test("renders nothing when both fields are empty", () => {
    expect(formatVenueYear({ ...base, venue: "  ", year: null })).toBe("");
    expect(formatVenueYear(base)).toBe("");
  });
});
