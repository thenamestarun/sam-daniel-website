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
    <div className="pt-20">

      {/* Hero — full bleed, massive type */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 gap-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero.jpg" alt="Sam Daniel" fill className="object-cover object-center opacity-20" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#080810]" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-5">
          <span className="text-[#f472b6] text-xs tracking-[0.35em] uppercase font-medium">London, UK</span>
          <h1 className="text-[clamp(4rem,14vw,11rem)] font-bold tracking-tighter leading-[0.9] uppercase">Sam<br/>Daniel</h1>
          <p className="text-white/40 text-sm md:text-base tracking-[0.25em] uppercase font-light">{tagline}</p>
          <div className="flex items-center gap-3 mt-3">
            <Link href="/music" className="px-6 py-2.5 text-sm font-semibold tracking-wide backdrop-blur-md bg-[#f472b6]/15 border border-[#f472b6]/30 text-[#f472b6] hover:bg-[#f472b6]/25 hover:border-[#f472b6]/50 transition-all rounded-sm">
              Listen Now
            </Link>
            <Link href="/events" className="px-6 py-2.5 border border-white/15 text-white/60 text-sm tracking-wide hover:bg-white/6 hover:text-white transition-all rounded-sm">
              Upcoming Events
            </Link>
          </div>
          <div className="flex items-center gap-5 mt-1">
            {[
              ["Spotify", "https://open.spotify.com/artist/5qCmiCJixflA5aXSdH8GXB"],
              ["Apple Music", "https://music.apple.com/gb/artist/sam-daniel/1177716347"],
              ["YouTube", "https://youtube.com/samdanielmusic"],
              ["Instagram", "https://instagram.com/officialsamdaniel"],
            ].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/70 text-xs tracking-widest uppercase transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Release */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#f472b6] text-xs tracking-widest uppercase font-medium">Featured Release</span>
            <div className="h-px flex-1 bg-white/6" />
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <BlurImage
              src={featured.artworkUrl ?? "/images/music/victorious.png"}
              alt={featured.title ?? "Featured"}
              width={260}
              height={260}
              className="rounded-sm shadow-2xl flex-shrink-0"
              sizes="260px"
            />
            <div className="flex flex-col gap-4 pt-1">
              <p className="text-white/30 text-xs uppercase tracking-widest">{featured.label ?? "Latest Release"}</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">{featured.title}</h2>
              <div className="flex gap-3 flex-wrap mt-2">
                {featured.spotifyUrl && (
                  <a href={featured.spotifyUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-sm bg-[#1DB954] text-black font-semibold text-sm hover:opacity-90 transition-opacity tracking-wide">Spotify</a>
                )}
                {featured.appleUrl && (
                  <a href={featured.appleUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-sm bg-white/6 border border-white/12 text-white text-sm hover:bg-white/12 transition-all tracking-wide">Apple Music</a>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Featured Video */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#f472b6] text-xs tracking-widest uppercase font-medium">Featured Video</span>
            <div className="h-px flex-1 bg-white/6" />
            <Link href="/videos" className="text-white/35 hover:text-white text-xs tracking-widest uppercase transition-colors flex-shrink-0">All Videos →</Link>
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="relative w-full rounded-sm overflow-hidden" style={{ paddingBottom: "56.25%" }}>
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

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#f472b6] text-xs tracking-widest uppercase font-medium">About</span>
            <div className="h-px flex-1 bg-white/6" />
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-sm">
            <div className="relative aspect-[4/3] md:aspect-auto min-h-[360px]">
              <BlurImage src={aboutImageUrl} alt="Sam Daniel" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="flex flex-col justify-center gap-5 p-8 md:p-12 bg-white/3 border border-white/6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">{aboutHeading}</h2>
              <p className="text-white/55 leading-relaxed text-sm md:text-base">{aboutText}</p>
              <Link href="/about" className="text-[#f472b6] hover:text-[#ec4899] text-sm font-medium transition-colors tracking-wide self-start">
                Read More →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Performance divider */}
      <section className="relative h-48 md:h-64 overflow-hidden my-16">
        <Image src="/images/performance.jpg" alt="Sam Daniel performing" fill className="object-cover object-top opacity-30" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080810] via-transparent to-[#080810]" />
      </section>

      {/* Events */}
      <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-[#f472b6] text-xs tracking-widest uppercase font-medium">Upcoming</span>
              <h2 className="text-2xl font-bold tracking-tight uppercase">Events</h2>
            </div>
            <Link href="/events" className="text-white/35 hover:text-white text-xs tracking-widest uppercase transition-colors">View all →</Link>
          </div>
        </FadeIn>
        <div className="flex flex-col">
          {displayEvents.map((e: { _id: string; name: string; dateLabel?: string; date?: string }, i: number) => (
            <FadeIn key={e._id} delay={i * 50}>
              <div className="flex items-center justify-between px-0 py-4 border-b border-white/6 hover:bg-white/3 transition-all group cursor-default px-2">
                <span className="font-medium tracking-wide group-hover:text-[#f472b6] transition-colors">{e.name}</span>
                <span className="text-white/35 text-sm font-light tracking-wide">{e.dateLabel ?? e.date}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </div>
  );
}
