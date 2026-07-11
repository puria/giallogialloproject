import { createDirectus, rest } from "@directus/sdk";

export const directusUrl =
  import.meta.env.DIRECTUS_URL || "https://admin.giallogialloproject.com";
const directus = createDirectus(directusUrl).with(rest());
export default directus;
