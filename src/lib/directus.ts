import { createDirectus, rest, type DirectusField } from "@directus/sdk";

type Global = {
  id: number;
  title: string;
  about: DirectusField;
};

type Exhibitions = {
  title: string;
  slug: string;
  content: string;
}

interface Schema {
  global: Global;
  exhibitions: Exhibitions;
}

const directusUrl = process.env.DIRECTUS_URL || "http://127.0.0.1:8055";
const directus = createDirectus<Schema>(directusUrl).with(rest());

export default directus;
