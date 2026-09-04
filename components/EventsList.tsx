"use client";

import { useState } from "react";
import { formatEventDate, isEventPast } from "@/lib/eventDate";

export type Event = {
  _id: string;
  name: string;
  date: string;
  dateLabel?: string;
  location?: string;
  address?: string;
  time?: string;
  description?: string;
  moreInfoLink?: string;
};

function EventCard({ event, past }: { event: Event; past?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b transition-all overflow-hidden ${past ? "border-white/4 opacity-40" : "border-white/8 hover:border-white/15"}`}>
      <div
        className={`py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer ${open ? "pb-4" : ""}`}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(!open);
          }
        }}
      >
        <div className="flex flex-col gap-1 flex-1">
          <p className={`font-semibold text-base tracking-wide ${past ? "text-white/50" : ""}`}>{event.name}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs tracking-wide uppercase">
            <span className={past ? "text-white/30" : "text-[#f43f8a]"}>{event.dateLabel || formatEventDate(event.date)}</span>
            {event.location && <><span>·</span><span>{event.location}</span></>}
            {event.time && <><span>·</span><span>{event.time}</span></>}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={(click) => {
              click.stopPropagation();
              setOpen(!open);
            }}
            className="px-4 py-1.5 rounded-sm text-xs tracking-widest uppercase backdrop-blur-md bg-white/5 border border-white/12 text-white/40 hover:text-white/70"
            aria-expanded={open}
          >
            {open ? "Close ↑" : "Details ↓"}
          </button>
          {!past && event.moreInfoLink && <a href={event.moreInfoLink} onClick={(click) => click.stopPropagation()} target={event.moreInfoLink.startsWith("http") ? "_blank" : undefined} rel={event.moreInfoLink.startsWith("http") ? "noopener noreferrer" : undefined} className="px-4 py-1.5 rounded-sm text-xs font-semibold tracking-widest uppercase bg-[#f43f8a]/15 border border-[#f43f8a]/30 text-[#f43f8a]">Info</a>}
        </div>
      </div>
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="min-h-0 overflow-hidden pb-5 grid sm:grid-cols-2 gap-4">
          {event.address && <div><p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-1 font-medium">Address</p><p className="text-white/50 text-sm">{event.address}</p></div>}
          {event.time && <div><p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-1 font-medium">Time</p><p className="text-white/50 text-sm">{event.time}</p></div>}
          {event.description && <div className="sm:col-span-2"><p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-1 font-medium">About</p><p className="text-white/50 text-sm leading-relaxed">{event.description}</p></div>}
        </div>
      </div>
    </div>
  );
}

export default function EventsList({ events }: { events: Event[] }) {
  const [today] = useState(() => new Date());

  const upcoming = events.filter((event) => !isEventPast(event.date, today));
  const past = events.filter((event) => isEventPast(event.date, today)).reverse();

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div><p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-3 font-medium">Events</p><h1 className="font-montserrat text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase">Events</h1></div>
        {past.length > 0 && <PastEvents events={past} />}
      </div>
      {upcoming.length > 0 ? upcoming.map((event) => <EventCard key={event._id} event={event} />) : <div className="text-center py-20 text-white/25"><p className="text-lg tracking-wide">No upcoming events right now.</p><p className="text-sm mt-2">Follow on Instagram for updates.</p></div>}
      <div className="mt-16 p-8 rounded-sm bg-white/3 border border-white/6 text-center"><p className="text-white/55 mb-1 font-semibold tracking-wide">Want to book Sam?</p><p className="text-white/30 text-sm mb-6 tracking-wide">Ministry bookings, conferences, youth events and more.</p><a href="mailto:info@sam-daniel.com" className="inline-block px-6 py-2.5 rounded-sm bg-[#f43f8a]/15 border border-[#f43f8a]/30 text-[#f43f8a] font-semibold text-sm">Get in Touch</a></div>
    </div>
  );
}

function PastEvents({ events }: { events: Event[] }) {
  const [showPast, setShowPast] = useState(false);
  return <>
    <button onClick={() => setShowPast(!showPast)} className="px-5 py-2 rounded-sm text-xs font-medium tracking-widest uppercase backdrop-blur-md border bg-white/5 border-white/12 text-white/50">{showPast ? "Hide Past" : `Past Events (${events.length})`}</button>
    {showPast && <div className="absolute left-4 right-4 top-52 sm:static sm:w-full sm:mt-6"><p className="text-white/20 text-xs tracking-widest uppercase mb-4 font-medium">Past</p>{events.map((event) => <EventCard key={event._id} event={event} past />)}</div>}
  </>;
}
