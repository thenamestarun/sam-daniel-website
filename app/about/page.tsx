import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { aboutQuery } from "@/sanity/lib/queries";
import FadeIn from "@/components/FadeIn";
import BlurImage from "@/components/BlurImage";

const portableComponents = {
  marks: {
    link: ({ value, children }: { value?: { href: string }; children: React.ReactNode }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-[#f472b6] hover:text-[#ec4899] underline underline-offset-2 transition-colors">
        {children}
      </a>
    ),
  },
};

const fallbackBio = [
  {
    para: (<>Sam Daniel is an independent recording artist, songwriter, producer, worship leader, and speaker. Sam is a husband to{" "}<a href="https://www.youtube.com/channel/UCOB_kCXF-AHH-BHQqSB7Tww" target="_blank" rel="noopener noreferrer" className="text-[#f472b6] hover:text-[#ec4899] underline underline-offset-2 transition-colors">Naomi Daniel</a>, who is also a singer/songwriter. Together, along with their beautiful daughters Everlyn and Imara, they are currently located in London, UK. They serve on the leadership team in the worship, youth, and young adults ministry within the Elim Pentecostal movement. As of 2015, Sam has been faithfully ministering around the nations through his gift in leading spontaneous & prophetic worship in which many have encountered the presence of God. His heart is for all to intimately experience and know Jesus personally.</>),
  },
  {
    para: (<>Being a culture shifter, the music he creates brings those of different tribes and tongues together as an act of unity, which is reflected within his sound. He is the founder of{" "}<a href="/studio" className="text-[#f472b6] hover:text-[#ec4899] underline underline-offset-2 transition-colors">Revival Sounds</a>, a production company that produces high quality music and resources for the music industry, as well as raising up artists and musicians to become world changers. Together, Sam and Naomi visit churches, schools, universities, prisons, and conferences where they lead worship, train worship teams, share their testimonies of faith and disciple young people.</>),
  },
  { para: <>Sam has been involved in the music industry for over 15 years. Self-taught, he plays various instruments — primarily keys — and has developed as a worship leader and musical director. He began creating compositions, writing lyrics and rapping from the age of 11.</> },
  { para: <>His sound blends hip hop, afrobeats, contemporary Christian music, gospel, pop, film score, and Indian classical influences. He has worked as a session keys player for billboard artists and produces across Europe and South Asia.</> },
  { para: <>Notable milestones include performing at major events such as Renewal (led by Noel Robinson) and The Gathering (featuring Bethel Music). Under his former stage name Da Sargeant, he released "Yeshuve (Bhangra Remix)" — featuring six languages — making him the first Asian Christian Artist to reach the top 10 of the iTunes Charts worldwide.</> },
  { para: <>Sam has a heart to see people of all nations — both young and old — set free, changed, discipled and become lovers of Jesus.</> },
];

export default async function AboutPage() {
  const data = await client.fetch(aboutQuery).catch(() => null);
  const heroImageUrl = data?.heroImageUrl ?? "/images/about/about-1.jpg";
  const photos: string[] = data?.photos?.length ? data.photos : [
    "/images/about/about-2.jpg",
    "/images/about/about-3.jpg",
    "/images/about/about-4.jpg",
  ];

  return (
    <div className="pt-20 pb-20">

      {/* Full-bleed hero */}
      <div className="relative h-[65vh] overflow-hidden mb-16">
        <Image src={heroImageUrl} alt="Sam Daniel" fill className="object-cover object-top" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080810]/40 via-transparent to-[#080810]" />
        <div className="absolute bottom-10 left-0 right-0 px-8 max-w-6xl mx-auto">
          <p className="text-[#f472b6] text-xs tracking-widest uppercase mb-2 font-medium">Story</p>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter uppercase leading-none">About Sam</h1>
        </div>
      </div>

      {/* Bio */}
      <FadeIn>
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-6 text-white/55 text-base leading-relaxed">
          {data?.bioSections ? (
            <PortableText value={data.bioSections} components={portableComponents} />
          ) : (
            fallbackBio.map((b, i) => <p key={i}>{b.para}</p>)
          )}
        </div>
      </FadeIn>

      {/* Photo grid — bigger, edge to edge feel */}
      <FadeIn delay={80}>
        <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-3 gap-3">
          {photos.map((src, i) => (
            <div key={i} className={`relative rounded-sm overflow-hidden ${i === 1 ? "aspect-[3/5]" : "aspect-[3/4]"}`}>
              <BlurImage
                src={src}
                alt={`Sam Daniel ${i + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={120}>
        <div className="max-w-3xl mx-auto px-6 mt-12 flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@sam-daniel.com" className="px-6 py-3 rounded-sm text-sm font-semibold text-center tracking-wide transition-all backdrop-blur-md bg-[#f472b6]/15 border border-[#f472b6]/30 text-[#f472b6] hover:bg-[#f472b6]/25 hover:border-[#f472b6]/50">
            Ministry Booking
          </a>
          <a href="https://instagram.com/officialsamdaniel" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-sm border border-white/10 text-white/50 text-sm text-center tracking-wide bg-white/3 hover:bg-white/6 hover:text-white hover:border-white/20 transition-all">
            @officialsamdaniel
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
