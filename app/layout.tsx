import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sam Daniel — Worship Leader · Artist · Producer",
  description: "Independent recording artist, songwriter, producer and worship leader based in London, UK.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="relative min-h-screen">
        <Nav />
        <main className="relative z-10">{children}</main>
        <footer className="relative z-10 border-t border-white/8 mt-24 py-10 px-6 text-center">
          <p className="text-white/30 text-sm">© 2026 Sam Daniel · Site by <a href="https://chkn.media" className="hover:text-white/60 transition-colors">Chkn Media</a></p>
        </footer>
      </body>
    </html>
  );
}
