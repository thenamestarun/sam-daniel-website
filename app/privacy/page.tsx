export const metadata = {
  title: "Privacy Policy — Sam Daniel",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
      <p className="text-xs tracking-widest uppercase text-white/35 mb-3">Legal</p>
      <h1 className="text-5xl font-bold tracking-tight mb-12">Privacy Policy</h1>

      <div className="flex flex-col gap-8 text-white/65 leading-relaxed">
        <p className="text-white/40 text-sm">Last updated: 30 June 2026</p>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">1. Who we are</h2>
          <p>This website is operated by Sam Daniel (trading as Sam Daniel Music), based in London, UK. If you have any questions about how we handle your data, contact us at <a href="mailto:info@sam-daniel.com" className="text-[#f472b6] hover:text-[#ec4899] transition-colors">info@sam-daniel.com</a>.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">2. What information we collect</h2>
          <p>We collect minimal personal information. When you contact us via email or a booking enquiry, we receive your name and email address. We do not run contact forms that store data on this site.</p>
          <p>We may collect anonymous usage data (pages visited, time on site) through analytics tools. This data cannot identify you personally.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">3. Third-party services</h2>
          <p>This site embeds content from and links to third-party platforms including:</p>
          <ul className="list-disc list-inside flex flex-col gap-1.5 text-white/55 ml-2">
            <li><strong className="text-white/75">YouTube</strong> — embedded videos are subject to Google's Privacy Policy</li>
            <li><strong className="text-white/75">Spotify / Apple Music</strong> — streaming links redirect to their respective platforms</li>
            <li><strong className="text-white/75">Sanity.io</strong> — our content management system, hosted in the EU</li>
          </ul>
          <p>We are not responsible for the privacy practices of these third parties. We encourage you to review their policies.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">4. Cookies</h2>
          <p>This site does not use tracking or advertising cookies. Third-party embeds (such as YouTube) may set their own cookies when you interact with them.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">5. Your rights</h2>
          <p>Under UK GDPR, you have the right to access, correct, or request deletion of any personal data we hold about you. To exercise these rights, email <a href="mailto:info@sam-daniel.com" className="text-[#f472b6] hover:text-[#ec4899] transition-colors">info@sam-daniel.com</a>.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-semibold">6. Changes to this policy</h2>
          <p>We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of the site constitutes acceptance of any changes.</p>
        </section>
      </div>
    </div>
  );
}
