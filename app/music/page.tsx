import { client } from "@/sanity/lib/client";
import { musicQuery } from "@/sanity/lib/queries";
import FadeIn from "@/components/FadeIn";
import BlurImage from "@/components/BlurImage";

const fallbackReleases = [
  { _id: "1", title: "Victorious", imageUrl: "/images/music/victorious.jpg", spotifyUrl: "https://open.spotify.com/album/7LbvUeIK4p80xbEuZoEh5l", appleUrl: "https://music.apple.com/gb/album/victorious-single/1886911197", type: "Single" },
  { _id: "2", title: "H1M", imageUrl: "/images/music/h1m.jpg", spotifyUrl: "https://open.spotify.com/album/6lPQcQHgEJyXYp1k1kISbM", appleUrl: "https://music.apple.com/gb/album/h1m/1866938005", type: "Album" },
  { _id: "3", title: "Avalukena Ennodu Nee Irundhaal", imageUrl: "/images/music/avalukena.jpg", spotifyUrl: "https://open.spotify.com/album/3uava86wJexgWiaXexrKnf", appleUrl: "https://music.apple.com/us/album/avalukena-ennodu-nee-irundhaal-single/1876544092", type: "Single" },
  { _id: "4", title: "As We Cry Beauty, Beauty (feat. Jemimah Paine)", imageUrl: "/images/music/as-we-cry.webp", spotifyUrl: "https://open.spotify.com/track/2kHujvQTf3wI26AMQoav8H", appleUrl: "https://music.apple.com/us/album/as-we-cry-beauty-beauty-feat-jemimah-paine-single/1848537022", type: "Single" },
  { _id: "5", title: "Rising Sun (feat. Emmanuel Smith)", imageUrl: "/images/music/rising-sun.jpg", spotifyUrl: "https://open.spotify.com/track/4iMvAD3qY1ORm4ltA0q18L", appleUrl: "https://music.apple.com/gb/album/rising-sun-feat-emmanuel-smith-single/1830643587", type: "Single" },
  { _id: "6", title: "Never Lost Champion (Live)", imageUrl: "/images/music/never-lost.jpg", spotifyUrl: "https://open.spotify.com/album/1ycPerBCJOYCDOA7XyTdv5", appleUrl: "https://music.apple.com/gb/album/never-lost-champion-live-single/1719779319", type: "Live Album" },
  { _id: "7", title: "Thaneero Kaanal", imageUrl: "/images/music/thaneero.jpg", spotifyUrl: "https://open.spotify.com/track/7eSMyr5f7tIfydSmwasaxL", appleUrl: "https://music.apple.com/gb/album/thaneero-kaanal/1616934444?i=1616934449", type: "Single" },
  { _id: "8", title: "Found In You (feat. MightyBoy, Lurine Cato)", imageUrl: "/images/music/found-in-you.jpg", spotifyUrl: "https://open.spotify.com/album/7nfSw2SoLwjLASxTCD6j4U", appleUrl: "https://music.apple.com/gb/album/found-in-you-feat-mightyboy-lurine-cato-single/1578181715", type: "Single" },
  { _id: "9", title: "Homecoming II (Live)", imageUrl: "/images/music/homecoming-2.jpg", spotifyUrl: "https://open.spotify.com/album/5HiCECoJui2jY6Tdik60PU", appleUrl: "https://music.apple.com/gb/album/homecoming-ii-live/1550232020", type: "Live Album" },
  { _id: "10", title: "Thattu Thadumaari (feat. Daniel Yogathas, Tripla)", imageUrl: "/images/music/thattu.jpg", spotifyUrl: "https://open.spotify.com/track/7nDKvGi2xs0gmb0wI7bTso", appleUrl: "https://music.apple.com/gb/album/thattu-thadumaari-feat-daniel-yogathas-tripla/1514509631?i=1514509638", type: "Single" },
  { _id: "11", title: "Ithu Thaan Aarambam (feat. Tripla, Jerome, Prince, Jab, Yakshan)", imageUrl: "/images/music/ithu-thaan.jpg", spotifyUrl: "https://open.spotify.com/album/5XjnwErTuaOdFwM1Edi9kY", appleUrl: "https://music.apple.com/gb/album/ithu-thaan-aarambam-feat-tripla-jerome-prince-jab-yakshan/1462177376?i=1462177386", type: "Single" },
  { _id: "12", title: "Homecoming (Live)", imageUrl: "/images/music/homecoming.jpg", spotifyUrl: "https://open.spotify.com/album/3BvplV1DrScyyYhTTVLGij", appleUrl: "https://music.apple.com/gb/album/homecoming-live/1452980421", type: "Live Album" },
  { _id: "13", title: "Love & Grace", imageUrl: "/images/music/love-grace.jpg", spotifyUrl: "https://open.spotify.com/album/7uMrocBXpIHuI7f5zocJhV", appleUrl: "https://music.apple.com/gb/album/love-grace/1177716196", type: "Album" },
  { _id: "14", title: "Who Is Like You, None Can Compare (feat. Jaye Thomas)", imageUrl: "/images/music/who-is-like-you.jpg", spotifyUrl: "https://open.spotify.com/track/6Wd3huD7Y8dqFKYB29Xp17", appleUrl: "https://music.apple.com/gb/album/who-is-like-you-none-can-compare-feat-jaye-thomas/1177716196?i=1177716359", type: "Single" },
  { _id: "15", title: "Yeshuve Bhangra Remix (feat. Kingdom Warrior Soldier)", imageUrl: "/images/music/yeshuve.jpg", spotifyUrl: "https://open.spotify.com/track/4ikOIiWWCU7hdngkn5CMyq", appleUrl: "https://music.apple.com/gb/album/yeshuve-bhangra-remix-feat-kingdom-warrior-soldier/534529748?i=534529904", type: "Single" },
];

const typeColors: Record<string, string> = {
  Album: "bg-[#f43f8a]/10 text-[#f43f8a] border-[#f43f8a]/20",
  Single: "bg-white/4 text-white/40 border-white/8",
  "Live Album": "bg-amber-400/10 text-amber-300/70 border-amber-400/15",
  Custom: "bg-white/4 text-white/40 border-white/8",
};

export default async function MusicPage() {
  const sanityReleases = await client.fetch(musicQuery).catch(() => []);
  const releases = sanityReleases.length > 0 ? sanityReleases : fallbackReleases;

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <FadeIn>
        <div className="mb-10">
          <p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-3 font-medium">Discography</p>
          <h1 className="font-montserrat text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase">Music</h1>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {releases.map((r: typeof fallbackReleases[0] & { customType?: string }, i: number) => (
          <FadeIn key={r._id} delay={(i % 4) * 60}>
            <div className="group flex flex-col gap-2.5">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-white/4">
                <BlurImage
                  src={r.imageUrl}
                  alt={r.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <p className="text-sm font-medium leading-snug line-clamp-2 tracking-wide">{r.title}</p>
                <span className={`inline-block mt-1 px-2 py-0.5 rounded-sm text-xs border ${typeColors[r.type] ?? typeColors.Single}`}>
                  {r.type === "Custom" ? (r.customType ?? "Release") : r.type}
                </span>
                <div className="flex gap-2 mt-2">
                  {r.spotifyUrl && (
                    <a href={r.spotifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-[#1DB954] text-black text-xs font-bold hover:opacity-90 tracking-wide">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                      <span className="hidden sm:inline">Spotify</span>
                    </a>
                  )}
                  {r.appleUrl && (
                    <a href={r.appleUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm text-white text-xs font-bold hover:opacity-90 tracking-wide" style={{ background: "linear-gradient(135deg, #FA233B, #FB5C74)" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                      <span className="hidden sm:inline">Apple Music</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
