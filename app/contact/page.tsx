export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
      <div className="mb-14">
        <p className="text-xs tracking-widest uppercase text-white/40 mb-3">Get in Touch</p>
        <h1 className="text-6xl font-bold tracking-tight">Contact</h1>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        <a
          href="mailto:info@sam-daniel.com"
          className="p-6 rounded-2xl bg-white/4 border border-white/8 hover:bg-white/6 transition-colors group"
        >
          <p className="text-xs tracking-widest uppercase text-white/40 mb-2">General Enquiries & Bookings</p>
          <p className="font-medium group-hover:text-white/90 transition-colors">info@sam-daniel.com</p>
        </a>
        <a
          href="mailto:revivalsoundsuk@gmail.com"
          className="p-6 rounded-2xl bg-white/4 border border-white/8 hover:bg-white/6 transition-colors group"
        >
          <p className="text-xs tracking-widest uppercase text-white/40 mb-2">Studio Bookings</p>
          <p className="font-medium group-hover:text-white/90 transition-colors">revivalsoundsuk@gmail.com</p>
        </a>
      </div>

      <div className="mb-16">
        <p className="text-xs tracking-widest uppercase text-white/40 mb-6">Social</p>
        <div className="flex flex-wrap gap-3">
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
              className="px-5 py-2.5 rounded-full border border-white/12 text-white/60 text-sm hover:text-white hover:border-white/25 transition-all"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white/4 border border-white/8">
        <p className="text-xs tracking-widest uppercase text-white/40 mb-2">Support</p>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          10% of all donations go towards The Paalam Project — a Sri Lankan charity supporting vulnerable children.
        </p>
        <a
          href="https://paypal.me/officialsamdaniel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 rounded-full bg-[#003087] text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Donate via PayPal
        </a>
      </div>
    </div>
  );
}
