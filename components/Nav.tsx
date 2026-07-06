"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import AppLink from "@/components/AppLink";

const links = [
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/videos", label: "Videos" },
  { href: "/events", label: "Events" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://open.spotify.com/artist/5qCmiCJixflA5aXSdH8GXB", label: "Spotify", icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
  )},
  { href: "https://music.apple.com/gb/artist/sam-daniel/1177716347", appUrl: "music://music.apple.com/gb/artist/sam-daniel/1177716347", label: "Apple Music", icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
  )},
  { href: "https://www.youtube.com/@samdanielmusic", label: "YouTube", icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  )},
  { href: "https://instagram.com/officialsamdaniel", appUrl: "instagram://user?username=officialsamdaniel", label: "Instagram", icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  )},
];

export default function Nav() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const [adminNavVisible, setAdminNavVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  if (isAdmin) {
    return (
      <div className="fixed top-4 right-4 z-[9999]">
        <button
          onClick={() => setAdminNavVisible((v) => !v)}
          className="flex items-center gap-2 px-3 py-2 rounded-sm text-xs font-medium backdrop-blur-md bg-white/8 border border-white/15 text-white/50 hover:text-white hover:bg-white/12 transition-all"
        >
          {adminNavVisible ? "Hide Site Nav ↓" : "Show Site Nav ↑"}
        </button>
        {adminNavVisible && (
          <div className="absolute top-10 right-0 mt-1 flex flex-col gap-0.5 p-2 rounded-sm backdrop-blur-md bg-black/80 border border-white/10 min-w-40">
            <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-white/8 transition-colors">
              <Image src="/images/logo.png" alt="Sam Daniel" width={20} height={20} style={{ width: 20, height: "auto" }} className="object-contain opacity-70" />
              <span className="text-white/60 text-xs">Home</span>
            </Link>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="px-3 py-2 rounded-sm text-white/55 text-xs hover:text-white hover:bg-white/8 transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-3 sm:py-4 md:py-5 backdrop-blur-sm bg-black/20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-10">
          <Image
            src="/images/logo.png"
            alt="Sam Daniel"
            width={38}
            height={38}
            className="object-contain w-7 sm:w-8 md:w-[38px]"
            style={{ height: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ textTransform: "uppercase" }}
              className={`text-sm tracking-wide transition-all duration-200 ${
                pathname === l.href ? "text-[#f43f8a]" : "text-white/40 hover:text-[#f43f8a]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop right: social icons + email */}
        <div className="hidden md:flex items-center gap-3">
          {socials.map((s) => (
            s.appUrl ? (
              <AppLink key={s.label} appUrl={s.appUrl} webUrl={s.href} className="text-white/30 hover:text-[#f43f8a] transition-colors" aria-label={s.label}>
                {s.icon}
              </AppLink>
            ) : (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="text-white/30 hover:text-[#f43f8a] transition-colors" aria-label={s.label}>
                {s.icon}
              </a>
            )
          ))}
          <span className="text-white/15 mx-1">|</span>
          <a href="mailto:info@sam-daniel.com" className="text-white/35 hover:text-white text-sm transition-colors tracking-wide">
            info@sam-daniel.com
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden z-10 flex flex-col justify-center gap-[5px] w-8 h-8 group"
        >
          <span className={`block h-px bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-px bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(16px)" }}
      >
        <div className="flex flex-col justify-start h-full px-8 pt-24 gap-0">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`py-2 text-2xl font-bold tracking-tighter uppercase border-b border-white/6 transition-all duration-200 ${
                pathname === l.href ? "text-[#f43f8a]" : "text-white/70 hover:text-[#f43f8a]"
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
          <a href="mailto:info@sam-daniel.com" className="mt-6 text-[#f43f8a] text-sm tracking-wide hover:text-[#ec4899] transition-colors">
            info@sam-daniel.com
          </a>
          <div className="flex items-center gap-5 mt-4">
            <a href="https://open.spotify.com/artist/5qCmiCJixflA5aXSdH8GXB" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#f43f8a] transition-colors" aria-label="Spotify">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
            </a>
            <AppLink appUrl="music://music.apple.com/gb/artist/sam-daniel/1177716347" webUrl="https://music.apple.com/gb/artist/sam-daniel/1177716347" className="text-white/40 hover:text-[#f43f8a] transition-colors" aria-label="Apple Music">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
            </AppLink>
            <a href="https://www.youtube.com/@samdanielmusic" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#f43f8a] transition-colors" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <AppLink appUrl="instagram://user?username=officialsamdaniel" webUrl="https://instagram.com/officialsamdaniel" className="text-white/40 hover:text-[#f43f8a] transition-colors" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </AppLink>
          </div>
        </div>
      </div>
    </>
  );
}
