import { client } from "@/sanity/lib/client";
import { eventsQuery } from "@/sanity/lib/queries";
import EventsList, { type Event } from "@/components/EventsList";

export const dynamic = "force-dynamic";

const fallbackEvents: Event[] = [
  { _id: "fallback-1", name: "Imprint Church, Croydon", date: "2026-07-11", location: "Croydon, UK", address: "Imprint Church, Croydon, UK", moreInfoLink: "mailto:info@sam-daniel.com" },
  { _id: "fallback-2", name: "St Michaels Chester Square", date: "2026-07-12", location: "London, UK", address: "St Michael's Church, Chester Square, London SW1W 9HH", moreInfoLink: "mailto:info@sam-daniel.com" },
  { _id: "fallback-3", name: "The Scattering 2026", date: "2026-07-18", location: "Enfield, UK", address: "Enfield, London, UK", moreInfoLink: "mailto:info@sam-daniel.com" },
  { _id: "fallback-4", name: "Festival of Joy", date: "2026-07-18", location: "Canvey Island, UK", address: "Canvey Island, SS8, UK", time: "10:00 AM", moreInfoLink: "https://www.sam-daniel.com/events/festival-of-joy-canvey-island" },
  { _id: "fallback-5", name: "Elim Sound Conference 2026", date: "2026-10-01", location: "Birmingham, UK", address: "Birmingham, UK — venue TBC", moreInfoLink: "mailto:info@sam-daniel.com" },
];

export default async function EventsPage() {
  const events = await client.fetch<Event[]>(eventsQuery).catch(() => []);

  return <EventsList events={events.length > 0 ? events : fallbackEvents} />;
}
