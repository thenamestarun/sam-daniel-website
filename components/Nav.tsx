"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/music", label: "Music" },
  { href: "/videos", label: "Videos" },
  { href: "/events", label: "Events" },
  { href: "/studio", label: "Studio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const [navVisible, setNavVisible] = useState(true);

  // On admin pages show a small floating toggle button only
  if (isAdmin) {
    return (
      <div className="fixed top-4 right-4 z-[9999]">
        <button
          onClick={() => setNavVisible((v) => !v)}
          className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium backdrop-blur-md bg-white/8 border border-white/15 text-white/50 hover:text-white hover:bg-white/12 transition-all"
        >
          {navVisible ? (
            <>
              <span>Hide Site Nav</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </>
          ) : (
            <>
              <span>Show Site Nav</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </>
          )}
        </button>

        {navVisible && (
          <div className="absolute top-10 right-0 mt-1 flex flex-col gap-1 p-2 rounded-2xl backdrop-blur-md bg-black/60 border border-white/10 min-w-40">
            <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/8 transition-colors">
              <Image src="/images/logo.png" alt="Sam Daniel" width={20} height={20} style={{ width: 20, height: "auto" }} className="object-contain opacity-70" />
              <span className="text-white/60 text-xs">Home</span>
            </Link>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-xl text-white/55 text-xs hover:text-white hover:bg-white/8 transition-all"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/images/logo.png"
          alt="Sam Daniel"
          width={44}
          height={44}
          className="object-contain"
          style={{ width: 44, height: "auto" }}
        />
      </Link>
      <div className="flex items-center gap-0.5 bg-white/5 border border-white/10 rounded-full px-2 py-2 backdrop-blur-md">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${
              pathname === l.href
                ? "bg-[#f472b6] text-white font-semibold"
                : "text-white/55 hover:text-white"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <a
        href="mailto:info@sam-daniel.com"
        className="text-white/40 hover:text-white text-sm transition-colors"
      >
        info@sam-daniel.com
      </a>
    </nav>
  );
}
