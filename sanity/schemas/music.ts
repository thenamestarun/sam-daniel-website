import { defineField, defineType } from "sanity";

export const musicSchema = defineType({
  name: "music",
  title: "Music",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "artwork", title: "Artwork", type: "image", options: { hotspot: true } }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: { list: ["Single", "Album", "Live"], layout: "radio" },
    }),
    defineField({ name: "spotifyUrl", title: "Spotify URL", type: "url" }),
    defineField({ name: "appleUrl", title: "Apple Music URL", type: "url" }),
    defineField({ name: "order", title: "Order", type: "number", description: "Lower number = shown first" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "type", media: "artwork" },
  },
});
