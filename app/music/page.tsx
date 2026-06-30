import { client } from "@/sanity/lib/client";
import { musicQuery } from "@/sanity/lib/queries";
import FadeIn from "@/components/FadeIn";
import BlurImage from "@/components/BlurImage";

const fallbackReleases = [
  { _id: "1", title: "Victorious", imageUrl: "/images/music/victorious.png", spotifyUrl: "https://open.spotify.com/album/7LbvUeIK4p80xbEuZoEh5l", appleUrl: "https://music.apple.com/gb/album/victorious-single/1886911197", type: "Single" },
  { _id: "2", title: "H1M", imageUrl: "/images/music/h1m.jpg", spotifyUrl: "https://open.spotify.com/album/6lPQcQHgEJyXYp1k1kISbM", appleUrl: "https://music.apple.com/gb/album/h1m/1866938005", type: "Album" },
  { _id: "3", title: "Avalukena Ennodu Nee Irundhaal", imageUrl: "/images/music/avalukena.jpg", spotifyUrl: "https://open.spotify.com/album/3uava86wJexgWiaXexrKnf", appleUrl: "https://music.apple.com/us/album/avalukena-ennodu-nee-irundhaal-single/1876544092", type: "Single" },
  { _id: "4", title: "As We Cry Beauty, Beauty (feat. Jemimah Paine)", imageUrl: "/images/music/as-we-cry.webp", spotifyUrl: "https://open.spotify.com/track/2kHujvQTf3wI26AMQoav8H", appleUrl: "https://music.apple.com/us/album/as-we-cry-beauty-beauty-feat-jemimah-paine-single/1848537022", type: "Single" },
  { _id: "5", title: "Rising Sun (feat. Emmanuel Smith)", imageUrl: "/images/music/rising-sun.png", spotifyUrl: "https://open.spotify.com/track/4iMvAD3qY1ORm4ltA0q18L", appleUrl: "https://music.apple.com/gb/album/rising-sun-feat-emmanuel-smith-single/1830643587", type: "Single" },
  { _id: "6", title: "Never Lost Champion (Live)", imageUrl: "/images/music/never-lost.png", spotifyUrl: "https://open.spotify.com/album/1ycPerBCJOYCDOA7XyTdv5", appleUrl: "https://music.apple.com/gb/album/never-lost-champion-live-single/1719779319", type: "Live" },
  { _id: "7", title: "Thaneero Kaanal", imageUrl: "/images/music/thaneero.jpg", spotifyUrl: "https://open.spotify.com/track/7eSMyr5f7tIfydSmwasaxL", appleUrl: "https://music.apple.com/gb/album/thaneero-kaanal/1616934444?i=1616934449", type: "Single" },
  { _id: "8", title: "Found In You (feat. MightyBoy, Lurine Cato)", imageUrl: "/images/music/found-in-you.jpg", spotifyUrl: "https://open.spotify.com/album/7nfSw2SoLwjLASxTCD6j4U", appleUrl: "https://music.apple.com/gb/album/found-in-you-feat-mightyboy-lurine-cato-single/1578181715", type: "Single" },
  { _id: "9", title: "Homecoming II (Live)", imageUrl: "/images/music/homecoming-2.jpg", spotifyUrl: "https://open.spotify.com/album/5HiCECoJui2jY6Tdik60PU", appleUrl: "https://music.apple.com/gb/album/homecoming-ii-live/1550232020", type: "Live" },
  { _id: "10", title: "Thattu Thadumaari (feat. Daniel Yogathas, Tripla)", imageUrl: "/images/music/thattu.jpg", spotifyUrl: "https://open.spotify.com/track/7nDKvGi2xs0gmb0wI7bTso", appleUrl: "https://music.apple.com/gb/album/thattu-thadumaari-feat-daniel-yogathas-tripla/1514509631?i=1514509638", type: "Single" },
  { _id: "11", title: "Ithu Thaan Aarambam (feat. Tripla, Jerome, Prince, Jab, Yakshan)", imageUrl: "/images/music/ithu-thaan.png", spotifyUrl: "https://open.spotify.com/album/5XjnwErTuaOdFwM1Edi9kY", appleUrl: "https://music.apple.com/gb/album/ithu-thaan-aarambam-feat-tripla-jerome-prince-jab-yakshan/1462177376?i=1462177386", type: "Single" },
  { _id: "12", title: "Homecoming (Live)", imageUrl: "/images/music/homecoming.jpg", spotifyUrl: "https://open.spotify.com/album/3BvplV1DrScyyYhTTVLGij", appleUrl: "https://music.apple.com/gb/album/homecoming-live/1452980421", type: "Live" },
  { _id: "13", title: "Love & Grace", imageUrl: "/images/music/love-grace.jpg", spotifyUrl: "https://open.spotify.com/album/7uMrocBXpIHuI7f5zocJhV", appleUrl: "https://music.apple.com/gb/album/love-grace/1177716196", type: "Album" },
  { _id: "14", title: "Who Is Like You, None Can Compare (feat. Jaye Thomas)", imageUrl: "/images/music/who-is-like-you.jpg", spotifyUrl: "https://open.spotify.com/track/6Wd3huD7Y8dqFKYB29Xp17", appleUrl: "https://music.apple.com/gb/album/who-is-like-you-none-can-compare-feat-jaye-thomas/1177716196?i=1177716359", type: "Single" },
  { _id: "15", title: "Yeshuve Bhangra Remix (feat. Kingdom Warrior Soldier)", imageUrl: "/images/music/yeshuve.jpg", spotifyUrl: "https://open.spotify.com/track/4ikOIiWWCU7hdngkn5CMyq", appleUrl: "https://music.apple.com/gb/album/yeshuve-bhangra-remix-feat-kingdom-warrior-soldier/534529748?i=534529904", type: "Single" },
];

const typeColors: Record<string, string> = {
  Album: "bg-[#f43f8a]/10 text-[#f43f8a] border-[#f43f8a]/20",
  Single: "bg-white/4 text-white/40 border-white/8",
  Live: "bg-amber-400/10 text-amber-300/70 border-amber-400/15",
};

export default async function MusicPage() {
  const sanityReleases = await client.fetch(musicQuery).catch(() => []);
  const releases = sanityReleases.length > 0 ? sanityReleases : fallbackReleases;

  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <div className="mb-12">
          <p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-3 font-medium">Discography</p>
          <h1 className="text-7xl font-bold tracking-tighter uppercase">Music</h1>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {releases.map((r: typeof fallbackReleases[0], i: number) => (
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
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  {r.spotifyUrl && (
                    <a href={r.spotifyUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-sm bg-[#1DB954] text-black text-xs font-bold hover:opacity-90 tracking-wide">Spotify</a>
                  )}
                  {r.appleUrl && (
                    <a href={r.appleUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-sm bg-white text-black text-xs font-bold hover:opacity-90 tracking-wide">Apple</a>
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium leading-snug line-clamp-2 tracking-wide">{r.title}</p>
                <span className={`inline-block mt-1 px-2 py-0.5 rounded-sm text-xs border ${typeColors[r.type] ?? typeColors.Single}`}>
                  {r.type}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
