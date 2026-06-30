import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <div className="mb-12">
          <p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-3 font-medium">Get in Touch</p>
          <h1 className="text-7xl font-bold tracking-tighter uppercase">Contact</h1>
        </div>
      </FadeIn>

      <FadeIn delay={80}>
        <div className="grid sm:grid-cols-2 gap-px bg-white/6 rounded-sm overflow-hidden mb-8">
          <a href="mailto:info@sam-daniel.com" className="p-7 bg-[#080808] hover:bg-white/3 transition-colors group">
            <p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-3 font-medium">General &amp; Bookings</p>
            <p className="font-semibold text-lg tracking-wide group-hover:text-white transition-colors">info@sam-daniel.com</p>
          </a>
          <a href="mailto:revivalsoundsuk@gmail.com" className="p-7 bg-[#080808] hover:bg-white/3 transition-colors group">
            <p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-3 font-medium">Studio Bookings</p>
            <p className="font-semibold text-lg tracking-wide group-hover:text-white transition-colors">revivalsoundsuk@gmail.com</p>
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={120}>
        <div className="mb-8">
          <p className="text-white/25 text-xs tracking-widest uppercase mb-5 font-medium">Follow</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Instagram", href: "https://instagram.com/officialsamdaniel" },
              { label: "YouTube", href: "https://youtube.com/samdanielmusic" },
              { label: "Facebook", href: "https://facebook.com/SamDanielMusic" },
              { label: "Spotify", href: "https://open.spotify.com/artist/5qCmiCJixflA5aXSdH8GXB" },
              { label: "Apple Music", href: "https://music.apple.com/gb/artist/sam-daniel/1177716347" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-sm border border-white/10 text-white/50 text-sm tracking-wide hover:text-white hover:border-white/25 transition-all"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={160}>
        <div className="p-7 rounded-sm bg-white/3 border border-white/6">
          <p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-3 font-medium">Support</p>
          <p className="text-white/50 text-sm leading-relaxed mb-5">
            10% of all donations go towards The Paalam Project — a Sri Lankan charity supporting vulnerable children.
          </p>
          <a
            href="https://paypal.me/officialsamdaniel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 rounded-sm bg-[#003087] text-white text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Donate via PayPal
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
