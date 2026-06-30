import BlurImage from "@/components/BlurImage";

const services = [
  { title: "Recording", description: "Vocals, Instruments, Voice Overs, Podcasts", price: "From £20/hr" },
  { title: "Production & Composition", description: "Music for Artists, Bands, Reels, Film Scores, Games, Films, Ads, Jingles", price: "From £100" },
  { title: "Instrument & Vocal Tuition", description: "Piano, Drums, Guitar, Bass and Vocals", price: "From £35/hr" },
  { title: "Logic Pro X Training", description: "Music Production, Recording, Mixing, Mastering, Vocal Editing, Tuning, Plugins", price: "From £30/hr" },
  { title: "Live Studio Session", description: "Musicians, DJ Services, Instrument and Equipment Hiring", price: "Contact for pricing" },
  { title: "Video Production & Editing", description: "Music Video, 3D, Lyrics Video, Animation, Reels", price: "From £30/hr" },
  { title: "Photography", description: "Professional photography for artists, events and brands", price: "From £100" },
  { title: "Graphic Design", description: "Artwork, branding, social media and visual identity", price: "From £50" },
];

const team = [
  {
    name: "Aron",
    role: "Graphic and Brand Designer",
    image: "/images/studio/team-aron.jpg",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/a_thava/" },
      { label: "Featured Work", href: "https://open.spotify.com/album/3BvplV1DrScyyYhTTVLGij" },
    ],
  },
  {
    name: "J K E Z",
    role: "Music Producer, Video Editor",
    image: "/images/studio/team-jkez.jpg",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/jkezofficial/" },
      { label: "Featured Work", href: "https://youtu.be/u8CFI6OCJqg" },
    ],
  },
  {
    name: "Tarun",
    role: "Content Creator, Photo and Video",
    image: "/images/studio/team-tarun.jpg",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/chknmedia/" },
      { label: "hello@chkn.media", href: "mailto:hello@chkn.media" },
    ],
  },
  {
    name: "JP",
    role: "Digital Media Technician",
    image: "/images/studio/team-jp.jpg",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/jaypaul_keys/" },
      { label: "Featured Work", href: "https://youtu.be/kl0MwuqFpHo" },
    ],
  },
  {
    name: "Ruth",
    role: "Vocal and Instrument Tutor",
    image: "/images/studio/team-ruth.jpg",
    links: [
      { label: "joyfulsound.co.uk", href: "http://www.joyfulsound.co.uk/" },
      { label: "info@joyfulsound.co.uk", href: "mailto:info@joyfulsound.co.uk" },
    ],
  },
  {
    name: "NK",
    role: "Film Director and Editor",
    image: "/images/studio/team-nk.jpg",
    links: [
      { label: "nickkofi.com", href: "https://www.nickkofi.com/" },
      { label: "Featured Work", href: "https://youtu.be/YBg-SXs7PU0" },
    ],
  },
  {
    name: "Tishon",
    role: "Photography and Videography",
    image: "/images/studio/team-tishon.jpg",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/tishndee_/" },
      { label: "Featured Work", href: "https://youtu.be/yrh-1-YxEuU" },
    ],
  },
];

export default function StudioPage() {
  return (
    <div className="pt-28 pb-24">

      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden mb-20">
        <BlurImage src="/images/studio/studio-main.png" alt="Revival Sounds Studio" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-black/30 to-[#050505]" />
        <div className="absolute bottom-10 left-0 right-0 px-8 max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#f43f8a] mb-2">Revival Sounds</p>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">Studio</h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-6 mb-20">
        <p className="text-white/60 text-lg leading-relaxed">
          Revival Sounds is Sam Daniel's creative hub — offering professional recording, production,
          tuition, video and design services to artists, churches, and creatives. Based in London, UK.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs tracking-widest uppercase text-white/35">What We Offer</span>
          <div className="h-px flex-1 bg-white/8" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl bg-white/4 border border-white/6 hover:border-[#f43f8a]/20 transition-all flex flex-col gap-3">
              <h3 className="font-bold text-base">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">{s.description}</p>
              <p className="text-[#f43f8a] text-sm font-medium">{s.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs tracking-widest uppercase text-white/35">The Team</span>
          <div className="h-px flex-1 bg-white/8" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col gap-3">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5">
                <BlurImage src={member.image} alt={member.name} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <p className="font-semibold text-sm">{member.name}</p>
                <p className="text-white/40 text-xs leading-snug mt-0.5 mb-2">{member.role}</p>
                <div className="flex flex-col gap-1">
                  {member.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[#f43f8a] text-xs hover:text-[#ec4899] transition-colors truncate"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-white/55 mb-1 font-medium text-lg">Ready to create something?</p>
        <p className="text-white/35 text-sm mb-8">Get in touch to book a session or discuss your project.</p>
        <a href="mailto:revivalsoundsuk@gmail.com" className="inline-block px-8 py-3.5 rounded-full bg-[#f43f8a] text-white font-semibold hover:bg-[#ec4899] transition-all">
          Book a Session
        </a>
      </div>

    </div>
  );
}
