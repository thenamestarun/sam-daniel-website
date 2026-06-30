import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "sam-daniel",
  title: "Sam Daniel",
  projectId: "ouxg4bbm",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  basePath: "/admin",
});
