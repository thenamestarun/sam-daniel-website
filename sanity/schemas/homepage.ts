import { defineField, defineType } from "sanity";

export const homepageSchema = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroTagline", title: "Hero Tagline", type: "string", description: "e.g. Worship Leader · Artist · Producer · Speaker" }),
    defineField({
      name: "featuredRelease",
      title: "Featured Release",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "label", title: "Label", type: "string", description: "e.g. Latest Single" }),
        defineField({ name: "artwork", title: "Artwork", type: "image", options: { hotspot: true } }),
        defineField({ name: "spotifyUrl", title: "Spotify URL", type: "url" }),
        defineField({ name: "appleUrl", title: "Apple Music URL", type: "url" }),
      ],
    }),
    defineField({ name: "aboutHeading", title: "About Heading", type: "string" }),
    defineField({ name: "aboutText", title: "About Text (short)", type: "text", rows: 4, description: "Short bio shown on homepage" }),
    defineField({ name: "aboutImage", title: "About Image", type: "image", options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: "Homepage" }) },
});
