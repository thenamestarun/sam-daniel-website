import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const client = createClient({
  projectId: "ouxg4bbm",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const releases = [
  { title: "Victorious", localImage: "victorious.png", spotifyUrl: "https://open.spotify.com/album/7LbvUeIK4p80xbEuZoEh5l", appleUrl: "https://music.apple.com/gb/album/victorious-single/1886911197", type: "Single", order: 1 },
  { title: "H1M", localImage: "h1m.jpg", spotifyUrl: "https://open.spotify.com/album/6lPQcQHgEJyXYp1k1kISbM", appleUrl: "https://music.apple.com/gb/album/h1m/1866938005", type: "Album", order: 2 },
  { title: "Avalukena Ennodu Nee Irundhaal", localImage: "avalukena.jpg", spotifyUrl: "https://open.spotify.com/album/3uava86wJexgWiaXexrKnf", appleUrl: "https://music.apple.com/us/album/avalukena-ennodu-nee-irundhaal-single/1876544092", type: "Single", order: 3 },
  { title: "As We Cry Beauty, Beauty (feat. Jemimah Paine)", localImage: "as-we-cry.webp", spotifyUrl: "https://open.spotify.com/track/2kHujvQTf3wI26AMQoav8H", appleUrl: "https://music.apple.com/us/album/as-we-cry-beauty-beauty-feat-jemimah-paine-single/1848537022", type: "Single", order: 4 },
  { title: "Rising Sun (feat. Emmanuel Smith)", localImage: "rising-sun.png", spotifyUrl: "https://open.spotify.com/track/4iMvAD3qY1ORm4ltA0q18L", appleUrl: "https://music.apple.com/gb/album/rising-sun-feat-emmanuel-smith-single/1830643587", type: "Single", order: 5 },
  { title: "Never Lost Champion (Live)", localImage: "never-lost.png", spotifyUrl: "https://open.spotify.com/album/1ycPerBCJOYCDOA7XyTdv5", appleUrl: "https://music.apple.com/gb/album/never-lost-champion-live-single/1719779319", type: "Live", order: 6 },
  { title: "Thaneero Kaanal", localImage: "thaneero.jpg", spotifyUrl: "https://open.spotify.com/track/7eSMyr5f7tIfydSmwasaxL", appleUrl: "https://music.apple.com/gb/album/thaneero-kaanal/1616934444?i=1616934449", type: "Single", order: 7 },
  { title: "Found In You (feat. MightyBoy, Lurine Cato)", localImage: "found-in-you.jpg", spotifyUrl: "https://open.spotify.com/album/7nfSw2SoLwjLASxTCD6j4U", appleUrl: "https://music.apple.com/gb/album/found-in-you-feat-mightyboy-lurine-cato-single/1578181715", type: "Single", order: 8 },
  { title: "Homecoming II (Live)", localImage: "homecoming-2.jpg", spotifyUrl: "https://open.spotify.com/album/5HiCECoJui2jY6Tdik60PU", appleUrl: "https://music.apple.com/gb/album/homecoming-ii-live/1550232020", type: "Live", order: 9 },
  { title: "Thattu Thadumaari (feat. Daniel Yogathas, Tripla)", localImage: "thattu.jpg", spotifyUrl: "https://open.spotify.com/track/7nDKvGi2xs0gmb0wI7bTso", appleUrl: "https://music.apple.com/gb/album/thattu-thadumaari-feat-daniel-yogathas-tripla/1514509631?i=1514509638", type: "Single", order: 10 },
  { title: "Ithu Thaan Aarambam (feat. Tripla, Jerome, Prince, Jab, Yakshan)", localImage: "ithu-thaan.png", spotifyUrl: "https://open.spotify.com/album/5XjnwErTuaOdFwM1Edi9kY", appleUrl: "https://music.apple.com/gb/album/ithu-thaan-aarambam-feat-tripla-jerome-prince-jab-yakshan/1462177376?i=1462177386", type: "Single", order: 11 },
  { title: "Homecoming (Live)", localImage: "homecoming.jpg", spotifyUrl: "https://open.spotify.com/album/3BvplV1DrScyyYhTTVLGij", appleUrl: "https://music.apple.com/gb/album/homecoming-live/1452980421", type: "Live", order: 12 },
  { title: "Love & Grace", localImage: "love-grace.jpg", spotifyUrl: "https://open.spotify.com/album/7uMrocBXpIHuI7f5zocJhV", appleUrl: "https://music.apple.com/gb/album/love-grace/1177716196", type: "Album", order: 13 },
  { title: "Who Is Like You, None Can Compare (feat. Jaye Thomas)", localImage: "who-is-like-you.jpg", spotifyUrl: "https://open.spotify.com/track/6Wd3huD7Y8dqFKYB29Xp17", appleUrl: "https://music.apple.com/gb/album/who-is-like-you-none-can-compare-feat-jaye-thomas/1177716196?i=1177716359", type: "Single", order: 14 },
  { title: "Yeshuve Bhangra Remix (feat. Kingdom Warrior Soldier)", localImage: "yeshuve.jpg", spotifyUrl: "https://open.spotify.com/track/4ikOIiWWCU7hdngkn5CMyq", appleUrl: "https://music.apple.com/gb/album/yeshuve-bhangra-remix-feat-kingdom-warrior-soldier/534529748?i=534529904", type: "Single", order: 15 },
];

const events = [
  { name: "Katowice, Poland", date: "2026-07-02", dateLabel: "Thu 02 Jul 2026", location: "Katowice, Poland", address: "Katowice, Poland", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "Imprint Church, Croydon", date: "2026-07-11", dateLabel: "Sat 11 Jul 2026", location: "Croydon, UK", address: "Imprint Church, Croydon, UK", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "St Michaels Chester Square", date: "2026-07-12", dateLabel: "Sun 12 Jul 2026", location: "London, UK", address: "St Michael's Church, Chester Square, London SW1W 9HH", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "Yth Ministry Night, Ilford", date: "2026-07-17", dateLabel: "Fri 17 Jul 2026", location: "Ilford, UK", address: "Ilford, Essex, UK", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "The Scattering 2026", date: "2026-07-18", dateLabel: "Sat–Sun 18–19 Jul 2026", location: "Enfield, UK", address: "Enfield, London, UK", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "Festival of Joy", date: "2026-07-18", dateLabel: "Sat 18 Jul 2026", location: "Canvey Island, UK", address: "Canvey Island, SS8, UK", time: "10:00 AM", moreInfoLink: "https://www.sam-daniel.com/events/festival-of-joy-canvey-island" },
  { name: "Central Church Youth Camp", date: "2026-07-19", dateLabel: "Sun 19 Jul 2026", location: "Canvey Island, UK", address: "Canvey Island, Essex, UK", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "Enfield Baptist Church Youth Event", date: "2026-07-24", dateLabel: "Thu 24 Jul 2026", location: "Enfield, UK", address: "Enfield Baptist Church, Enfield, London, UK", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "Pitstone House of Worship", date: "2026-07-31", dateLabel: "Fri 31 Jul 2026", location: "Pitstone, UK", address: "Pitstone, Leighton Buzzard, LU7, UK", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "Foursquare UK Youth Camp", date: "2026-08-03", dateLabel: "Mon 03 Aug 2026", location: "UK", address: "UK — venue TBC", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "Catch The Fire, Bournemouth", date: "2026-09-25", dateLabel: "Fri 25 Sep 2026", location: "Bournemouth, UK", address: "Bournemouth, Dorset, UK", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "Cardiff", date: "2026-09-26", dateLabel: "Sat 26 Sep 2026", location: "Cardiff, UK", address: "Cardiff, Wales, UK", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "Elim Sound Conference 2026", date: "2026-10-01", dateLabel: "Thu–Sat 01–03 Oct 2026", location: "Birmingham, UK", address: "Birmingham, UK — venue TBC", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "Houston, Texas", date: "2026-10-31", dateLabel: "31 Oct – 30 Nov 2026", location: "Houston, TX, USA", address: "Houston, Texas, USA", moreInfoLink: "mailto:info@sam-daniel.com" },
  { name: "Peniel Church, Chelmsford", date: "2099-01-01", dateLabel: "Date TBD", location: "Chelmsford, UK", address: "Peniel Church, Chelmsford, Essex, UK", moreInfoLink: "mailto:info@sam-daniel.com" },
];

async function uploadImage(filename) {
  const imagePath = resolve(__dirname, "../public/images/music", filename);
  const ext = filename.split(".").pop();
  const mimeTypes = { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp" };
  try {
    const asset = await client.assets.upload("image", createReadStream(imagePath), {
      filename,
      contentType: mimeTypes[ext] || "image/jpeg",
    });
    return asset._id;
  } catch (err) {
    console.warn(`  ⚠ Could not upload ${filename}:`, err.message);
    return null;
  }
}

async function migrate() {
  console.log("🎵 Migrating music releases...");
  for (const r of releases) {
    process.stdout.write(`  Uploading artwork for "${r.title}"... `);
    const assetId = await uploadImage(r.localImage);
    const doc = {
      _type: "music",
      title: r.title,
      type: r.type,
      spotifyUrl: r.spotifyUrl,
      appleUrl: r.appleUrl,
      order: r.order,
      ...(assetId && { artwork: { _type: "image", asset: { _type: "reference", _ref: assetId } } }),
    };
    await client.create(doc);
    console.log("✓");
  }

  console.log("\n📅 Migrating events...");
  for (const e of events) {
    process.stdout.write(`  Creating "${e.name}"... `);
    await client.create({ _type: "event", ...e });
    console.log("✓");
  }

  console.log("\n✅ Migration complete! Open /admin to see everything.");
}

migrate().catch(console.error);
