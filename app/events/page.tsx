"use client";
import { useState } from "react";

type Event = {
  name: string;
  date: string;
  sortDate: string; // ISO date for comparison e.g. "2026-07-02"
  location: string;
  address?: string;
  time?: string;
  description?: string;
  moreInfoLink?: string;
  moreInfoType?: "url" | "email";
};

const events: Event[] = [
  {
    name: "Katowice, Poland",
    date: "Thu 02 Jul 2026",
    sortDate: "2026-07-02",
    location: "Katowice, Poland",
    address: "Katowice, Poland",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "Imprint Church, Croydon",
    date: "Sat 11 Jul 2026",
    sortDate: "2026-07-11",
    location: "Croydon, UK",
    address: "Imprint Church, Croydon, UK",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "St Michaels Chester Square",
    date: "Sun 12 Jul 2026",
    sortDate: "2026-07-12",
    location: "London, UK",
    address: "St Michael's Church, Chester Square, London SW1W 9HH",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "Yth Ministry Night, Ilford",
    date: "Fri 17 Jul 2026",
    sortDate: "2026-07-17",
    location: "Ilford, UK",
    address: "Ilford, Essex, UK",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "The Scattering 2026",
    date: "Sat–Sun 18–19 Jul 2026",
    sortDate: "2026-07-18",
    location: "Enfield, UK",
    address: "Enfield, London, UK",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "Festival of Joy",
    date: "Sat 18 Jul 2026",
    sortDate: "2026-07-18",
    location: "Canvey Island, UK",
    address: "Canvey Island, SS8, UK",
    time: "10:00 AM",
    moreInfoLink: "https://www.sam-daniel.com/events/festival-of-joy-canvey-island",
    moreInfoType: "url",
  },
  {
    name: "Central Church Youth Camp",
    date: "Sun 19 Jul 2026",
    sortDate: "2026-07-19",
    location: "Canvey Island, UK",
    address: "Canvey Island, Essex, UK",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "Enfield Baptist Church Youth Event",
    date: "Thu 24 Jul 2026",
    sortDate: "2026-07-24",
    location: "Enfield, UK",
    address: "Enfield Baptist Church, Enfield, London, UK",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "Pitstone House of Worship",
    date: "Fri 31 Jul 2026",
    sortDate: "2026-07-31",
    location: "Pitstone, UK",
    address: "Pitstone, Leighton Buzzard, LU7, UK",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "Foursquare UK Youth Camp",
    date: "Mon 03 Aug 2026",
    sortDate: "2026-08-03",
    location: "UK",
    address: "UK — venue TBC",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "Catch The Fire, Bournemouth",
    date: "Fri 25 Sep 2026",
    sortDate: "2026-09-25",
    location: "Bournemouth, UK",
    address: "Bournemouth, Dorset, UK",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "Cardiff",
    date: "Sat 26 Sep 2026",
    sortDate: "2026-09-26",
    location: "Cardiff, UK",
    address: "Cardiff, Wales, UK",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "Elim Sound Conference 2026",
    date: "Thu–Sat 01–03 Oct 2026",
    sortDate: "2026-10-01",
    location: "Birmingham, UK",
    address: "Birmingham, UK — venue TBC",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "Houston, Texas",
    date: "31 Oct – 30 Nov 2026",
    sortDate: "2026-10-31",
    location: "Houston, TX, USA",
    address: "Houston, Texas, USA",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
  {
    name: "Peniel Church, Chelmsford",
    date: "Date TBD",
    sortDate: "2099-01-01", // TBD — far future so it shows in upcoming
    location: "Chelmsford, UK",
    address: "Peniel Church, Chelmsford, Essex, UK",
    moreInfoLink: "mailto:info@sam-daniel.com",
    moreInfoType: "email",
  },
];

function isPast(sortDate: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(sortDate) < today;
}

function SharpButton({ children, onClick, active }: { children: React.ReactNode; onClick: () => void; active?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-sm text-xs font-medium tracking-widest uppercase transition-all duration-200 border ${
        active
          ? "bg-[#f43f8a]/15 border-[#f43f8a]/35 text-[#f43f8a]"
          : "bg-white/4 border-white/10 text-white/45 hover:bg-white/8 hover:border-white/18 hover:text-white/80"
      }`}
    >
      {children}
    </button>
  );
}

function EventCard({ event, past }: { event: Event; past?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b transition-all overflow-hidden ${
      past ? "border-white/4 opacity-40" : "border-white/8 hover:border-white/15"
    }`}>
      <div className={`py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${open ? "pb-4" : ""}`}>
        <div className="flex flex-col gap-1 flex-1">
          <p className={`font-semibold text-base tracking-wide ${past ? "text-white/50" : ""}`}>{event.name}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-white/30 tracking-wide uppercase">
            <span>{event.date}</span>
            <span>·</span>
            <span>{event.location}</span>
            {event.time && <><span>·</span><span>{event.time}</span></>}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-1.5 rounded-sm text-xs tracking-widest uppercase transition-all duration-200 bg-white/4 border border-white/8 text-white/35 hover:bg-white/8 hover:border-white/15 hover:text-white/65"
            aria-expanded={open}
          >
            {open ? "Close ↑" : "Details ↓"}
          </button>
          {!past && event.moreInfoLink && (
            <a
              href={event.moreInfoLink}
              target={event.moreInfoType === "url" ? "_blank" : undefined}
              rel={event.moreInfoType === "url" ? "noopener noreferrer" : undefined}
              className="px-4 py-1.5 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-200 backdrop-blur-md bg-[#f43f8a]/15 border border-[#f43f8a]/30 text-[#f43f8a] hover:bg-[#f43f8a]/25 hover:border-[#f43f8a]/50"
            >
              Info
            </a>
          )}
        </div>
      </div>

      {open && (
        <div className="pb-5 grid sm:grid-cols-2 gap-4">
          {event.address && (
            <div>
              <p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-1 font-medium">Address</p>
              <p className="text-white/50 text-sm">{event.address}</p>
            </div>
          )}
          {event.time && (
            <div>
              <p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-1 font-medium">Time</p>
              <p className="text-white/50 text-sm">{event.time}</p>
            </div>
          )}
          {event.description && (
            <div className="sm:col-span-2">
              <p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-1 font-medium">About</p>
              <p className="text-white/50 text-sm leading-relaxed">{event.description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function EventsPage() {
  const [showPast, setShowPast] = useState(false);

  const upcoming = events.filter((e) => !isPast(e.sortDate));
  const past = events.filter((e) => isPast(e.sortDate)).reverse();

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-3 font-medium">2026 Tour</p>
          <h1 className="font-montserrat text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase">Events</h1>
        </div>
        {past.length > 0 && (
          <SharpButton onClick={() => setShowPast(!showPast)} active={showPast}>
            {showPast ? "Hide Past" : `Past Events (${past.length})`}
          </SharpButton>
        )}
      </div>

      {showPast && past.length > 0 && (
        <div className="mb-10">
          <p className="text-white/20 text-xs tracking-widest uppercase mb-4 font-medium">Past</p>
          {past.map((e) => <EventCard key={e.name + e.date} event={e} past />)}
          <div className="h-px bg-white/6 mt-8 mb-6" />
        </div>
      )}

      {upcoming.length > 0 ? (
        <div>
          {upcoming.map((e) => <EventCard key={e.name + e.date} event={e} />)}
        </div>
      ) : (
        <div className="text-center py-20 text-white/25">
          <p className="text-lg tracking-wide">No upcoming events right now.</p>
          <p className="text-sm mt-2">Follow on Instagram for updates.</p>
        </div>
      )}

      <div className="mt-16 p-8 rounded-sm bg-white/3 border border-white/6 text-center">
        <p className="text-white/55 mb-1 font-semibold tracking-wide">Want to book Sam?</p>
        <p className="text-white/30 text-sm mb-6 tracking-wide">Ministry bookings, conferences, youth events and more.</p>
        <a href="mailto:info@sam-daniel.com" className="inline-block px-6 py-2.5 rounded-sm backdrop-blur-md bg-[#f43f8a]/15 border border-[#f43f8a]/30 text-[#f43f8a] font-semibold text-sm tracking-wide hover:bg-[#f43f8a]/25 hover:border-[#f43f8a]/50 transition-all">
          Get in Touch
        </a>
      </div>
    </div>
  );
}
