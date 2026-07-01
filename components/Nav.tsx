"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [adminNavVisible, setAdminNavVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll when menu open
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-5 backdrop-blur-sm bg-black/20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-10">
          <Image
            src="/images/logo.png"
            alt="Sam Daniel"
            width={38}
            height={38}
            className="object-contain"
            style={{ width: 38, height: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-montserrat text-sm tracking-wide transition-all duration-200 ${
                pathname === l.href
                  ? "text-[#f43f8a]"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop email */}
        <a href="mailto:info@sam-daniel.com" className="hidden md:block text-white/35 hover:text-white text-sm transition-colors tracking-wide">
          info@sam-daniel.com
        </a>

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
        <div className="flex flex-col justify-center h-full px-8 gap-0">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-montserrat py-2 text-xl font-bold tracking-tighter uppercase border-b border-white/6 transition-all duration-200 ${
                pathname === l.href ? "text-[#f43f8a]" : "text-white/70 hover:text-white"
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:info@sam-daniel.com"
            className="mt-6 text-white/30 text-sm tracking-widest uppercase hover:text-white/60 transition-colors"
          >
            info@sam-daniel.com
          </a>
        </div>
      </div>
    </>
  );
}
