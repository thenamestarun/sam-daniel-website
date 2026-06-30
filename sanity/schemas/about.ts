import { defineField, defineType } from "sanity";

export const aboutSchema = defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "bioSections",
      title: "Bio Sections",
      type: "array",
      of: [{ type: "block" }],
      description: "Full bio — use the editor to bold, italicise or add links in pink",
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Gallery photos shown below the bio (drag to reorder)",
    }),
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
});
