import { createDirectus, rest } from "@directus/sdk";

const directusUrl = import.meta.env.DIRECTUS_URL || "http://127.0.0.1:8055";
const directus = createDirectus(directusUrl).with(rest());
export default directus;
