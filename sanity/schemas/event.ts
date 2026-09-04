import { defineField, defineType } from "sanity";

export const eventSchema = defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Event Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "dateLabel", title: "Date Range Label (optional)", type: "string", description: "Use only for a multi-day range. The website formats the Date field automatically for normal events, e.g. 'Sat 18 Jul 2026'." }),
    defineField({ name: "location", title: "Location (short)", type: "string" }),
    defineField({ name: "address", title: "Full Address", type: "string" }),
    defineField({ name: "time", title: "Time", type: "string", description: "e.g. 10:00 AM" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "moreInfoLink", title: "More Info Link", type: "string", description: "Full URL (https://...) or email (mailto:...)" }),
  ],
  orderings: [{ title: "Date", name: "dateAsc", by: [{ field: "date", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "date" },
  },
});
