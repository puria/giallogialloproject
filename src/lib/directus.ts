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

const directus = createDirectus<Schema>("http://127.0.0.1:8055").with(rest());

export default directus;
