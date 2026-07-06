import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <FadeIn>
        <div className="mb-10">
          <p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-3 font-medium">Get in Touch</p>
          <h1 className="font-montserrat text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase">Contact</h1>
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
                className="px-5 py-2 rounded-sm backdrop-blur-md bg-white/5 border border-white/12 text-white/60 text-sm tracking-wide hover:text-white hover:bg-white/8 hover:border-white/22 transition-all"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={160}>
        <div className="p-7 rounded-sm bg-white/3 border border-white/6 mb-6">
          <p className="text-[#f43f8a] text-xs tracking-widest uppercase mb-4 font-medium">Support Sam&apos;s Ministry</p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Sam travels across nations sharing his story, leading worship, training worship teams, training youth leaders, discipling young people, speaking at events, and releasing God&apos;s heart for people through the prophetic. Every year Sam gets to meet tens of thousands of people where he hopes his life and ministry may become of some impact. Alongside this Sam funds his own albums and mission trips whilst also supporting his family. To help support the work that he is doing, you can donate via PayPal by clicking on the button below. To make a monthly contribution please contact us on the General Enquiries form below.
          </p>
          <p className="text-[#f43f8a]/80 text-sm leading-relaxed mb-6">
            10% of all donations will go towards The Paalam Project, a Sri Lankan based charity which provides care, education and homes to children who lost their families in the Tsunami, children who have been abandoned, children who have been affected by the years of conflict in North Sri Lanka, and children referred by the Jaffna courts for various reasons.
          </p>
          <a
            href="https://paypal.me/officialsamdaniel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 rounded-sm backdrop-blur-md bg-[#003087]/80 border border-[#003087] text-white text-sm font-medium tracking-wide hover:bg-[#003087] transition-all"
          >
            Donate via PayPal
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
