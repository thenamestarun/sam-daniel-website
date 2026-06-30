import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { homepageQuery, eventsQuery } from "@/sanity/lib/queries";
import FadeIn from "@/components/FadeIn";
import BlurImage from "@/components/BlurImage";

const fallbackFeatured = {
  title: "Victorious",
  label: "Latest Single",
  artworkUrl: "/images/music/victorious.png",
  spotifyUrl: "https://open.spotify.com/album/7LbvUeIK4p80xbEuZoEh5l",
  appleUrl: "https://music.apple.com/gb/album/victorious-single/1886911197",
};

function isPast(sortDate: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(sortDate) < today;
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
    <div className="pt-24">

      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 gap-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero.jpg" alt="Sam Daniel" fill className="object-cover object-center opacity-25" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#09090f]" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-white/50 text-xs tracking-widest uppercase">
            London, UK
          </div>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none">Sam Daniel</h1>
          <p className="text-white/55 text-base md:text-lg tracking-[0.2em] uppercase">{tagline}</p>
          <div className="flex items-center gap-3 mt-2">
            <Link href="/music" className="px-6 py-3 rounded-full backdrop-blur-md bg-[#f472b6]/15 border border-[#f472b6]/30 text-[#f472b6] font-semibold text-sm hover:bg-[#f472b6]/25 hover:border-[#f472b6]/50 transition-all">
              Listen Now
            </Link>
            <Link href="/events" className="px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:bg-white/8 transition-all">
              Upcoming Events
            </Link>
          </div>
          <div className="flex items-center gap-4 mt-2 flex-wrap justify-center">
            <a href="https://open.spotify.com/artist/5qCmiCJixflA5aXSdH8GXB" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white/70 text-xs tracking-widest uppercase transition-colors">Spotify</a>
            <span className="text-white/20">·</span>
            <a href="https://music.apple.com/gb/artist/sam-daniel/1177716347" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white/70 text-xs tracking-widest uppercase transition-colors">Apple Music</a>
            <span className="text-white/20">·</span>
            <a href="https://youtube.com/samdanielmusic" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white/70 text-xs tracking-widest uppercase transition-colors">YouTube</a>
            <span className="text-white/20">·</span>
            <a href="https://instagram.com/officialsamdaniel" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white/70 text-xs tracking-widest uppercase transition-colors">Instagram</a>
          </div>
        </div>
      </section>

      {/* Featured Release */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs tracking-widest uppercase text-white/35">Featured Release</span>
            <div className="h-px flex-1 bg-white/8" />
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <BlurImage
              src={featured.artworkUrl ?? "/images/music/victorious.png"}
              alt={featured.title ?? "Featured"}
              width={220}
              height={220}
              className="rounded-2xl shadow-2xl flex-shrink-0"
              sizes="220px"
            />
            <div className="flex flex-col gap-5 pt-2">
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-2">{featured.label ?? "Latest Release"}</p>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight">{featured.title}</h2>
              </div>
              <div className="flex gap-3 flex-wrap">
                {featured.spotifyUrl && (
                  <a href={featured.spotifyUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-[#1DB954] text-black font-semibold text-sm hover:opacity-90 transition-opacity">Spotify</a>
                )}
                {featured.appleUrl && (
                  <a href={featured.appleUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-white/8 border border-white/15 text-white text-sm hover:bg-white/15 transition-all">Apple Music</a>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Featured Video */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs tracking-widest uppercase text-white/35">Featured Video</span>
            <div className="h-px flex-1 bg-white/8" />
            <Link href="/videos" className="text-[#f472b6] hover:text-[#ec4899] text-sm transition-colors flex-shrink-0">
              All Videos →
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/7oUg3xlFeRU"
              title="Sam Daniel — Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </FadeIn>
      </section>

      {/* About section */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs tracking-widest uppercase text-white/35">About</span>
            <div className="h-px flex-1 bg-white/8" />
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <BlurImage src={aboutImageUrl} alt="Sam Daniel" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-bold tracking-tight">{aboutHeading}</h2>
              <p className="text-white/60 leading-relaxed">{aboutText}</p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#f472b6] hover:text-[#ec4899] text-sm font-medium transition-colors">
                Read More →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Performance image divider */}
      <section className="relative h-56 md:h-80 overflow-hidden my-20">
        <Image src="/images/performance.jpg" alt="Sam Daniel performing" fill className="object-cover object-top opacity-35" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090f] via-transparent to-[#09090f]" />
      </section>

      {/* Events Preview */}
      <section className="max-w-5xl mx-auto px-6 py-10 pb-24">
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-xs tracking-widest uppercase text-white/35">Upcoming</span>
              <h2 className="text-2xl font-bold">Events</h2>
            </div>
            <Link href="/events" className="text-[#f472b6] hover:text-[#ec4899] text-sm transition-colors">
              View all →
            </Link>
          </div>
        </FadeIn>
        <div className="grid gap-2">
          {displayEvents.map((e: { _id: string; name: string; dateLabel?: string; date?: string }, i: number) => (
            <FadeIn key={e._id} delay={i * 60}>
              <div className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/4 border border-white/6 hover:border-[#f472b6]/20 hover:bg-white/6 transition-all">
                <span className="font-medium">{e.name}</span>
                <span className="text-white/40 text-sm">{e.dateLabel ?? e.date}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </div>
  );
}
