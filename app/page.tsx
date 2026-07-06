import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { homepageQuery, eventsQuery } from "@/sanity/lib/queries";
import FadeIn from "@/components/FadeIn";
import BlurImage from "@/components/BlurImage";
import { EventsButton } from "@/components/EventsModal";

const fallbackFeatured = {
  title: "Victorious",
  label: "Latest Single",
  artworkUrl: "/images/music/victorious.jpg",
  spotifyUrl: "https://open.spotify.com/album/7LbvUeIK4p80xbEuZoEh5l",
  appleUrl: "https://music.apple.com/gb/album/victorious-single/1886911197",
};

function isPast(sortDate: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(sortDate) < today;
}

function SpotifyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
}

function AppleMusicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default async function Home() {
  const [homepage, allEvents] = await Promise.all([
    client.fetch(homepageQuery).catch(() => null),
    client.fetch(eventsQuery).catch(() => null),
  ]);

  const featured = homepage?.featuredRelease ?? fallbackFeatured;
  const tagline = homepage?.heroTagline ?? "Worship Leader · Artist · Producer · Speaker";
  const aboutHeading = homepage?.aboutHeading ?? "Sam Daniel";
  const aboutText = homepage?.aboutText ?? "Sam Daniel is an independent recording artist, songwriter, producer, worship leader, and speaker. Based in London, he has been faithfully ministering around the nations since 2015 through his gift in leading spontaneous & prophetic worship.";
  const aboutImageUrl = homepage?.aboutImageUrl ?? "/images/about/about-1.jpg";

  const upcomingEvents = allEvents
    ? allEvents.filter((e: { date: string }) => !isPast(e.date)).slice(0, 6)
    : [];

  const fallbackEvents = [
    { _id: "1", name: "Imprint Church, Croydon", date: "2026-07-11", dateLabel: "Sat 11 Jul 2026" },
    { _id: "2", name: "St Michaels Chester Square", date: "2026-07-12", dateLabel: "Sun 12 Jul 2026" },
    { _id: "3", name: "The Scattering 2026, Enfield", date: "2026-07-18", dateLabel: "Sat–Sun 18–19 Jul 2026" },
    { _id: "4", name: "Festival of Joy, Canvey Island", date: "2026-07-18", dateLabel: "Sat 18 Jul 2026" },
    { _id: "5", name: "Elim Sound Conference, Birmingham", date: "2026-10-01", dateLabel: "Thu–Sat 01–03 Oct 2026" },
  ];

  const displayEvents = upcomingEvents.length > 0 ? upcomingEvents : fallbackEvents;

  return (
    <div>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 gap-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero.jpg" alt="Sam Daniel" fill className="object-cover object-center opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#080808]" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4 w-full max-w-5xl mx-auto">
          <span className="text-[#f43f8a] text-xs tracking-[0.35em] uppercase font-medium">London, UK</span>
          <h1 className="font-montserrat text-[clamp(2.5rem,8vw,7rem)] font-bold tracking-tighter leading-none uppercase">Sam Daniel</h1>
          <p className="text-white/40 text-[10px] md:text-sm tracking-[0.1em] md:tracking-[0.2em] uppercase font-light whitespace-nowrap">{tagline}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Link href="/music" className="px-5 py-2.5 text-sm font-semibold tracking-wide backdrop-blur-md bg-[#f43f8a]/15 border border-[#f43f8a]/30 text-[#f43f8a] hover:bg-[#f43f8a]/25 hover:border-[#f43f8a]/50 transition-all rounded-sm">
              View Music
            </Link>
            <EventsButton events={displayEvents} />
          </div>
          {/* Social icons */}
          <div className="flex items-center justify-center gap-6 mt-2">
            <a href="https://open.spotify.com/artist/5qCmiCJixflA5aXSdH8GXB" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#1DB954] transition-colors" aria-label="Spotify">
              <SpotifyIcon />
            </a>
            <a href="https://music.apple.com/gb/artist/sam-daniel/1177716347" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors" aria-label="Apple Music">
              <AppleMusicIcon />
            </a>
            <a href="https://www.youtube.com/@samdanielmusic" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#FF0000] transition-colors" aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>
        {/* Instagram — pinned to bottom of hero */}
        <a href="https://instagram.com/officialsamdaniel" target="_blank" rel="noopener noreferrer" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/30 hover:text-white/70 transition-colors text-[10px] tracking-widest uppercase z-10" aria-label="Instagram">
          <InstagramIcon />
          <span>Follow on Instagram</span>
        </a>
      </section>

      {/* Featured Release */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#f43f8a] text-sm tracking-widest uppercase font-semibold">Featured Release</span>
            <div className="h-px flex-1 bg-white/6" />
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex-shrink-0">
              <BlurImage
                src={featured.artworkUrl ?? "/images/music/victorious.jpg"}
                alt={featured.title ?? "Featured"}
                width={180}
                height={180}
                className="rounded-sm shadow-2xl w-[130px] sm:w-[180px]"
                sizes="180px"
              />
            </div>
            <div className="flex flex-col gap-1.5 min-w-0">
              <p className="text-white/30 text-[10px] uppercase tracking-widest">{featured.label ?? "Latest Release"}</p>
              <h2 className="font-montserrat text-xl sm:text-3xl md:text-4xl font-bold tracking-tighter leading-none uppercase">{featured.title}</h2>
              <div className="flex gap-2 flex-wrap">
                {featured.spotifyUrl && (
                  <a href={featured.spotifyUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-sm bg-[#1DB954] text-black font-semibold text-[11px] hover:opacity-90 transition-opacity tracking-wide whitespace-nowrap">Spotify</a>
                )}
                {featured.appleUrl && (
                  <a href={featured.appleUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-sm text-white text-[11px] font-semibold hover:opacity-90 transition-opacity tracking-wide whitespace-nowrap" style={{ background: "linear-gradient(135deg, #FA233B, #FB5C74)" }}>Apple Music</a>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Featured Video */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <FadeIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#f43f8a] text-sm tracking-widest uppercase font-semibold">Featured Video</span>
            <div className="h-px flex-1 bg-white/6" />
            <Link href="/videos" className="text-white/35 hover:text-white text-xs tracking-widest uppercase transition-colors flex-shrink-0">All Videos →</Link>
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="relative w-full rounded-sm overflow-hidden border border-white/6" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/4jys9RZpACg"
              title="Sam Daniel — Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </FadeIn>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <FadeIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#f43f8a] text-sm tracking-widest uppercase font-semibold">About</span>
            <div className="h-px flex-1 bg-white/6" />
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-sm">
            <div className="relative aspect-[4/3] md:aspect-auto min-h-[280px] md:min-h-[360px]">
              <BlurImage src={aboutImageUrl} alt="Sam Daniel" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="flex flex-col justify-center gap-4 p-4 sm:p-8 md:p-12 bg-white/3 border border-white/6 min-w-0">
              <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase">{aboutHeading}</h2>
              <p className="text-white/55 leading-relaxed text-sm">{aboutText}</p>
              <Link href="/about" className="text-[#f43f8a] hover:text-[#ec4899] text-sm font-medium transition-colors tracking-wide self-start">
                Read More →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Performance divider */}
      <section className="relative h-36 sm:h-48 md:h-64 overflow-hidden my-12 sm:my-16">
        <BlurImage src="/images/performance.jpg" alt="Sam Daniel performing" fill className="object-cover object-top opacity-30" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
      </section>

      {/* Events */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-20">
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <span className="text-[#f43f8a] text-sm tracking-widest uppercase font-semibold">Upcoming</span>
              <h2 className="font-montserrat text-xl sm:text-2xl font-bold tracking-tight uppercase">Events</h2>
            </div>
            <Link href="/events" className="text-white/35 hover:text-white text-xs tracking-widest uppercase transition-colors">View all →</Link>
          </div>
        </FadeIn>
        <div className="flex flex-col">
          {displayEvents.map((e: { _id: string; name: string; dateLabel?: string; date?: string }, i: number) => (
            <FadeIn key={e._id} delay={i * 50}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between px-2 py-2.5 border-b border-white/6 hover:bg-white/3 transition-all group cursor-default gap-0.5 sm:gap-0">
                <span className="font-medium tracking-wide group-hover:text-[#f43f8a] transition-colors text-sm sm:text-base">{e.name}</span>
                <span className="text-[#f43f8a] text-xs sm:text-sm font-light tracking-wide">{e.dateLabel ?? e.date}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </div>
  );
}
