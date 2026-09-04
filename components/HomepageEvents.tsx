"use client";
import { useState } from "react";
import { formatEventDate } from "@/lib/eventDate";

type Event = {
  _id: string;
  name: string;
  dateLabel?: string;
  date?: string;
  location?: string;
  address?: string;
  time?: string;
  description?: string;
  moreInfoLink?: string;
};

export default function HomepageEvents({ events }: { events: Event[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {events.map((e) => {
        const isOpen = openId === e._id;
        const hasDetails = e.location || e.time || e.address || e.description;

        return (
          <div key={e._id} className="border-b border-white/6">
            <button
              onClick={() => setOpenId(isOpen ? null : e._id)}
              className={`w-full flex flex-col sm:flex-row sm:items-center justify-between px-2 py-3 transition-all group gap-0.5 sm:gap-0 text-left ${
                isOpen ? "bg-white/4" : "hover:bg-white/3"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`text-base font-light transition-all duration-200 text-white/40 leading-none ${isOpen ? "text-[#f43f8a]" : ""}`}>{isOpen ? "×" : "+"}</span>
                <span className="font-medium tracking-wide group-hover:text-[#f43f8a] transition-colors text-base sm:text-lg">{e.name}</span>
              </div>
              <span className="text-[#f43f8a] text-xs tracking-wide uppercase pl-4 sm:pl-0">{e.dateLabel || (e.date ? formatEventDate(e.date) : "")}</span>
            </button>

            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="min-h-0 overflow-hidden px-4 sm:px-6 pb-4 pt-2 bg-white/4 flex flex-col gap-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  {e.location && (
                    <div>
                      <p className="text-[#f43f8a] text-[10px] tracking-widest uppercase mb-0.5 font-medium">Location</p>
                      <p className="text-white/60 text-sm">{e.location}</p>
                    </div>
                  )}
                  {e.time && (
                    <div>
                      <p className="text-[#f43f8a] text-[10px] tracking-widest uppercase mb-0.5 font-medium">Time</p>
                      <p className="text-white/60 text-sm">{e.time}</p>
                    </div>
                  )}
                  {e.address && (
                    <div className="sm:col-span-2">
                      <p className="text-[#f43f8a] text-[10px] tracking-widest uppercase mb-0.5 font-medium">Address</p>
                      <p className="text-white/60 text-sm">{e.address}</p>
                    </div>
                  )}
                  {e.description && (
                    <div className="sm:col-span-2">
                      <p className="text-[#f43f8a] text-[10px] tracking-widest uppercase mb-0.5 font-medium">About</p>
                      <p className="text-white/60 text-sm leading-relaxed">{e.description}</p>
                    </div>
                  )}
                  {!hasDetails && (
                    <p className="text-white/30 text-sm">No further details available.</p>
                  )}
                </div>
                {e.moreInfoLink && (
                  <a
                    href={e.moreInfoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start px-4 py-1.5 rounded-sm text-xs font-semibold tracking-wide backdrop-blur-md bg-[#f43f8a]/15 border border-[#f43f8a]/30 text-[#f43f8a] hover:bg-[#f43f8a]/25 hover:border-[#f43f8a]/50 transition-all"
                  >
                    More Info →
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
