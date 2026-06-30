export const metadata = {
  title: "Terms & Conditions — Sam Daniel",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
      <p className="text-xs tracking-widest uppercase text-white/35 mb-3">Legal</p>
      <h1 className="text-5xl font-bold tracking-tight mb-12">Terms &amp; Conditions</h1>

      <div className="flex flex-col gap-8 text-white/65 leading-relaxed">
        <p className="text-white/40 text-sm">Last updated: 30 June 2026</p>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">1. Acceptance of terms</h2>
          <p>By accessing and using sam-daniel.com, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use this site.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">2. Intellectual property</h2>
          <p>All content on this website — including music, lyrics, artwork, photographs, videos, written text, and branding — is the property of Sam Daniel or licensed to him. You may not reproduce, distribute, modify, or use any content for commercial purposes without prior written permission.</p>
          <p>Personal, non-commercial sharing (e.g. sharing a link to a song or video) is welcome and encouraged.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">3. Music and streaming</h2>
          <p>Music available through Spotify, Apple Music, and other streaming platforms is subject to the terms of those respective platforms. All rights in the sound recordings and compositions are reserved.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">4. Bookings and enquiries</h2>
          <p>Submitting a booking enquiry does not constitute a confirmed booking. All bookings are subject to availability and a separate booking agreement. Sam Daniel reserves the right to accept or decline any booking request.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">5. External links</h2>
          <p>This site contains links to third-party platforms including Spotify, Apple Music, YouTube, Instagram, and Facebook. These are provided for convenience only. We are not responsible for the content or practices of any external sites.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">6. Donations</h2>
          <p>Donations made via PayPal (paypal.me/officialsamdaniel) are voluntary and non-refundable. A portion of donations supports the Paalam Project charity. Donations do not entitle the donor to any goods, services, or privileges unless otherwise stated.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">7. Disclaimer</h2>
          <p>This website is provided on an "as is" basis. Sam Daniel makes no warranties, express or implied, regarding the accuracy or completeness of the content. We reserve the right to update, change, or remove content at any time without notice.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">8. Governing law</h2>
          <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">9. Contact</h2>
          <p>Questions about these terms? Email <a href="mailto:info@sam-daniel.com" className="text-[#f472b6] hover:text-[#ec4899] transition-colors">info@sam-daniel.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
