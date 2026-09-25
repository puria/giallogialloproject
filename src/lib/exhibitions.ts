export type Exhibition = {
  slug: string;
  title: string;
  venue?: string | null;
  year?: number | null;
};

/** Builds the "(Venue, City 2025)" caption; empty when neither field is set. */
export function formatVenueYear({ venue, year }: Exhibition): string {
  const parts = [venue?.trim(), year ? String(year) : ""].filter(Boolean);
  return parts.length ? `(${parts.join(" ")})` : "";
}
