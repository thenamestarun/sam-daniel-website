"use client";
import { useState } from "react";

type Event = { _id: string; name: string; dateLabel?: string; date?: string };

export function EventsButton({ events }: { events: Event[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2.5 text-sm font-semibold tracking-wide text-white hover:opacity-90 transition-all rounded-sm font-montserrat"  style={{ background: "linear-gradient(135deg, #f43f8a, #e11d7a)" }}
      >
        Upcoming Events
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/10 rounded-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/6">
              <h2 className="font-montserrat font-bold text-xl uppercase tracking-tight">Upcoming Events</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-white/40 hover:text-white transition-colors text-lg leading-none"
              >
                ✕
              </button>
            </div>

            {/* Events list */}
            <div className="max-h-[60vh] overflow-y-auto divide-y divide-white/6">
              {events.map((e) => (
                <div key={e._id} className="flex items-center justify-between px-6 py-4 hover:bg-white/3 transition-colors">
                  <span className="font-medium text-sm tracking-wide">{e.name}</span>
                  <span className="text-white/35 text-xs font-light tracking-wide ml-4 flex-shrink-0">{e.dateLabel ?? e.date}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/6">
              <a
                href="/events"
                className="text-[#f43f8a] text-sm hover:text-[#ec4899] transition-colors tracking-wide font-montserrat"
              >
                View all events →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
