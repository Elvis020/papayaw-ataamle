"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking && !isMobile) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  // Shorts data - vertical video format
  const shorts = [
    { title: "Dating in Ghana", views: "2.1M", image: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?w=300&h=533&fit=crop" },
    { title: "Airport Security", views: "1.8M", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=300&h=533&fit=crop" },
    { title: "Family Dinners", views: "1.2M", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=533&fit=crop" },
    { title: "Uber Drivers", views: "3.5M", image: "https://images.unsplash.com/photo-1468234847176-28606331216a?w=300&h=533&fit=crop" },
    { title: "Wedding Speech", views: "2.8M", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=533&fit=crop" },
  ];

  return (
    <>
      <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">
        <Navigation />

        {/* ===== MOBILE LAYOUT ===== */}
        {isMobile ? (
          <main className="pb-20"> {/* Bottom padding for fixed nav */}

            {/* Hero - Compact Mobile with Dark Overlay */}
            <section className="relative bg-[var(--color-charcoal)]">
              {/* Hero Image with Dark Overlay */}
              <div className="relative h-[65vh] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&h=800&fit=crop&crop=faces&q=80"
                  alt="Papa Yaw Ataamle"
                  className="w-full h-full object-cover animate-fade-in"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[var(--color-charcoal)]/60 to-transparent" />

                {/* Content overlaid on image */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 pb-8">
                  {/* Next Show Badge */}
                  <div className="absolute top-4 right-4 bg-[var(--color-accent)] text-white px-3 py-2 animate-slide-down">
                    <div className="text-[10px] uppercase tracking-wider opacity-80">Next Show</div>
                    <div className="text-sm font-bold">Jan 15 • NYC</div>
                  </div>

                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2 font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    Stand-Up Comedian
                  </p>
                  <h1 className="text-4xl font-[family-name:var(--font-fraunces)] font-bold text-white leading-tight mb-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Papa Yaw<br />Ataamle
                  </h1>
                  <p className="text-sm text-gray-300 mb-5 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    Making millions laugh across stages, screens, and feeds.
                  </p>

                  {/* Stats Row */}
                  <div className="flex gap-6 py-4 border-t border-white/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">10M+</div>
                      <div className="text-[10px] uppercase text-gray-400">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">500+</div>
                      <div className="text-[10px] uppercase text-gray-400">Shows</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">100M+</div>
                      <div className="text-[10px] uppercase text-gray-400">Views</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Shorts Section - Horizontal Scroll */}
            <section className="py-6">
              <div className="flex items-center justify-between px-5 mb-4">
                <h2 className="text-lg font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                  Latest Clips
                </h2>
                <Link href="/videos" className="text-xs uppercase tracking-wider text-[var(--color-accent)]">
                  See All
                </Link>
              </div>

              {/* Horizontal Scroll Container */}
              <div className="flex gap-3 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-hide">
                {shorts.map((short, i) => (
                  <Link
                    key={i}
                    href="/videos"
                    className="flex-shrink-0 snap-start"
                  >
                    <div className="relative w-28 aspect-[9/16] rounded-xl overflow-hidden bg-[var(--color-charcoal)]">
                      <img
                        src={short.image}
                        alt={short.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      {/* Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white text-xs font-medium line-clamp-1">{short.title}</p>
                        <p className="text-white/70 text-[10px]">{short.views} views</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Next Show - Single Card */}
            <section className="px-5 py-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                  Next Show
                </h2>
                <Link href="/shows" className="text-xs uppercase tracking-wider text-[var(--color-accent)]">
                  All Dates
                </Link>
              </div>

              <Link
                href="/shows"
                className="block bg-[var(--color-charcoal)] text-white p-4 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-[family-name:var(--font-fraunces)] font-bold">15</div>
                    <div className="text-[10px] uppercase opacity-70">Jan</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Madison Square Garden</h3>
                    <p className="text-sm opacity-70">New York, NY</p>
                  </div>
                  <div className="bg-[var(--color-accent)] text-[10px] uppercase px-2 py-1 rounded">
                    Few Left
                  </div>
                </div>
              </Link>
            </section>

            {/* Gallery - Horizontal Scroll */}
            <section className="py-6">
              <div className="flex items-center justify-between px-5 mb-4">
                <h2 className="text-lg font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                  Gallery
                </h2>
                <Link href="/gallery" className="text-xs uppercase tracking-wider text-[var(--color-accent)]">
                  See All
                </Link>
              </div>

              <div className="flex gap-2 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-hide">
                {[
                  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop",
                  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
                  "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=200&h=200&fit=crop",
                  "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=200&h=200&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
                ].map((img, i) => (
                  <Link key={i} href="/gallery" className="flex-shrink-0 snap-start">
                    <div className="w-24 h-24 rounded-lg overflow-hidden">
                      <img src={img} alt="Gallery" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Brand Partners - Simple Row */}
            <section className="px-5 py-6 border-t border-gray-100">
              <p className="text-[10px] uppercase tracking-widest text-[var(--color-gray)] text-center mb-4">
                Brand Partners
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                {["Nike", "Netflix", "Apple", "Spotify"].map((brand, i) => (
                  <span key={i} className="text-lg font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]/40">
                    {brand}
                  </span>
                ))}
              </div>
            </section>

            {/* Contact Banner */}
            <section className="px-5 py-8 bg-[var(--color-charcoal)] text-center">
              <h2 className="text-xl font-[family-name:var(--font-fraunces)] font-bold text-white mb-2">
                Let's Work Together
              </h2>
              <p className="text-sm text-gray-400 mb-4">
                Bookings & partnerships
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white text-sm uppercase tracking-wider"
              >
                Get in Touch
              </Link>
            </section>

            {/* Compact Footer */}
            <footer className="px-5 py-6 text-center border-t border-gray-100">
              <div className="flex justify-center gap-4 mb-4">
                {[
                  { name: "Instagram", icon: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" },
                  { name: "Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { name: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                  { name: "TikTok", icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[var(--color-gray)]"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
              <p className="text-xs text-[var(--color-gray)]">
                © 2026 Papa Yaw Ataamle
              </p>
            </footer>

            {/* Fixed Bottom Navigation - Mobile Only */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
              <div className="flex justify-around py-2">
                <Link href="/shows" className="flex flex-col items-center py-2 px-4">
                  <svg className="w-5 h-5 text-[var(--color-charcoal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[10px] mt-1 text-[var(--color-charcoal)]">Shows</span>
                </Link>
                <Link href="/videos" className="flex flex-col items-center py-2 px-4">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[10px] mt-1 text-[var(--color-accent)] font-medium">Videos</span>
                </Link>
                <Link href="/contact" className="flex flex-col items-center py-2 px-4">
                  <svg className="w-5 h-5 text-[var(--color-charcoal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[10px] mt-1 text-[var(--color-charcoal)]">Contact</span>
                </Link>
              </div>
            </nav>
          </main>
        ) : (
          /* ===== DESKTOP LAYOUT ===== */
          <>
            {/* Hero Section - Desktop with Parallax */}
            <section
              ref={heroRef}
              className="relative min-h-screen overflow-hidden"
              style={mounted ? { position: "sticky", top: 0, zIndex: 0 } : {}}
            >
              {mounted && (
                <div
                  className="absolute inset-0 bg-[var(--color-charcoal)] pointer-events-none z-20"
                  style={{ opacity: Math.min(scrollY / 600, 0.85) }}
                />
              )}

              <div className="grid lg:grid-cols-2 min-h-screen">
                {/* Left - Typography */}
                <div
                  className="flex flex-col justify-center px-16 py-20 relative z-10"
                  style={mounted ? { transform: `translateY(${scrollY * 0.3}px)` } : {}}
                >
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-[var(--color-accent)]" />

                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6 font-medium">
                    Stand-Up Comedian
                  </p>
                  <h1 className="text-[clamp(3rem,8vw,8rem)] font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] leading-[0.9] mb-8">
                    Papa Yaw<br />
                    <span className="relative inline-block">
                      Ataamle
                      <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                        <path d="M0,8 Q50,0 100,8 T200,8" stroke="var(--color-accent)" strokeWidth="3" fill="none" className="animate-draw" />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-2xl text-[var(--color-gray)] leading-relaxed mb-10 max-w-md">
                    Comedian. Creator. Brand Ambassador. Making millions laugh across stages, screens, and feeds.
                  </p>

                  <div className="flex gap-4">
                    <Link href="/shows" className="group relative px-8 py-4 bg-[var(--color-charcoal)] text-white text-sm uppercase tracking-widest overflow-hidden">
                      <span className="relative z-10">Upcoming Shows</span>
                      <div className="absolute inset-0 bg-[var(--color-accent)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </Link>
                    <Link href="/videos" className="group px-8 py-4 border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] text-sm uppercase tracking-widest hover:bg-[var(--color-charcoal)] hover:text-white transition-all flex items-center gap-2">
                      <span>Watch Clips</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </Link>
                  </div>

                  <div className="flex gap-8 mt-16 pt-8 border-t border-gray-200">
                    {[
                      { num: "10M+", label: "Followers" },
                      { num: "500+", label: "Shows" },
                      { num: "100M+", label: "Views" },
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="text-3xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">{stat.num}</div>
                        <div className="text-xs uppercase tracking-wider text-[var(--color-gray)]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Image */}
                <div
                  className="relative bg-[var(--color-charcoal)] overflow-hidden"
                  style={mounted ? { transform: `translateY(${scrollY * 0.15}px)`, minHeight: "100vh" } : {}}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-charcoal)]/60 z-10 pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="relative group w-full max-w-md">
                      <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800&h=1000&fit=crop&crop=faces&q=80" alt="Papa Yaw Ataamle" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[var(--color-accent)] -z-10" />
                      <div className="absolute -bottom-6 -left-6 bg-white text-[var(--color-charcoal)] p-6 shadow-2xl z-20">
                        <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-1">Next Show</div>
                        <div className="text-2xl font-[family-name:var(--font-fraunces)] font-bold">Jan 15</div>
                        <div className="text-sm text-[var(--color-gray)]">New York, NY</div>
                      </div>
                      <div className="absolute top-4 -right-8 bg-[var(--color-accent)] text-white px-4 py-3 shadow-xl z-20">
                        <div className="text-xs uppercase tracking-widest opacity-80">Sold Out</div>
                        <div className="text-base font-bold">12 Shows</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 right-8 text-[12rem] font-[family-name:var(--font-fraunces)] font-bold text-white/5 leading-none select-none pointer-events-none">HA</div>
                </div>
              </div>
            </section>

            {/* Content Sections - Desktop */}
            <div className="relative bg-white" style={{ zIndex: 10, boxShadow: mounted ? "0 -30px 60px rgba(0,0,0,0.15)" : "none" }}>

              {/* Shorts Section - Desktop */}
              <section className="py-24 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-center justify-between mb-12">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-2">Watch</p>
                      <h2 className="text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">Latest Clips</h2>
                    </div>
                    <Link href="/videos" className="group flex items-center gap-2 text-[var(--color-charcoal)] hover:text-[var(--color-accent)] transition-colors">
                      <span className="text-sm uppercase tracking-widest">View All</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Shorts Grid - Vertical Format */}
                  <div className="grid grid-cols-5 gap-6">
                    {shorts.map((short, i) => (
                      <Link key={i} href="/videos" className="group">
                        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[var(--color-charcoal)] shadow-lg group-hover:shadow-2xl transition-shadow">
                          <img src={short.image} alt={short.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-white font-medium mb-1">{short.title}</p>
                            <p className="text-white/70 text-sm">{short.views} views</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              {/* Shows Section - Desktop */}
              <section className="py-24 px-8 bg-[var(--color-light-gray)]">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-center justify-between mb-12">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-2">On Tour</p>
                      <h2 className="text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">Upcoming Shows</h2>
                    </div>
                    <Link href="/shows" className="group flex items-center gap-2 text-[var(--color-charcoal)] hover:text-[var(--color-accent)] transition-colors">
                      <span className="text-sm uppercase tracking-widest">All Dates</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {[
                      { date: "Jan 15", venue: "Madison Square Garden", city: "New York, NY", status: "Few Left" },
                      { date: "Jan 22", venue: "The Comedy Store", city: "Los Angeles, CA", status: "On Sale" },
                      { date: "Feb 5", venue: "Ryman Auditorium", city: "Nashville, TN", status: "On Sale" },
                    ].map((show, i) => (
                      <Link key={i} href="/shows" className="group flex items-center gap-8 p-6 bg-white border border-gray-200 hover:border-[var(--color-accent)] hover:shadow-lg transition-all">
                        <div className="text-center min-w-[80px]">
                          <div className="text-3xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">{show.date.split(" ")[1]}</div>
                          <div className="text-xs uppercase text-[var(--color-gray)]">{show.date.split(" ")[0]}</div>
                        </div>
                        <div className="w-px h-12 bg-gray-200" />
                        <div className="flex-1">
                          <h3 className="text-xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-accent)] transition-colors">{show.venue}</h3>
                          <p className="text-sm text-[var(--color-gray)]">{show.city}</p>
                        </div>
                        <span className={`text-xs uppercase tracking-wider px-3 py-1 ${show.status === "Few Left" ? "bg-[var(--color-accent)] text-white" : "bg-gray-100 text-[var(--color-charcoal)]"}`}>
                          {show.status}
                        </span>
                        <svg className="w-5 h-5 text-[var(--color-gray)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              {/* Brands - Desktop */}
              <section className="py-24 px-8 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                  <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-4">Trusted By</p>
                  <div className="flex justify-center gap-16 flex-wrap">
                    {["Nike", "Netflix", "Apple", "Spotify"].map((brand, i) => (
                      <span key={i} className="text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]/30 hover:text-[var(--color-charcoal)] transition-colors cursor-pointer">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Contact CTA - Desktop */}
              <section className="py-32 px-8 bg-[var(--color-charcoal)] text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center mx-auto mb-8">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-5xl font-[family-name:var(--font-fraunces)] font-bold text-white mb-4">Let's Work Together</h2>
                  <p className="text-gray-400 text-lg mb-8">For bookings, brand partnerships, or media inquiries.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white text-sm uppercase tracking-widest hover:bg-white hover:text-[var(--color-charcoal)] transition-all">
                    <span>Get in Touch</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </section>

              <Footer />
            </div>
          </>
        )}
      </div>

      <style jsx global>{`
        :root {
          --color-charcoal: #1a1a1a;
          --color-accent: #c7522a;
          --color-gray: #6b6b6b;
          --color-light-gray: #f5f5f5;
        }

        @keyframes draw {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }

        .animate-draw {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw 1.5s ease-out 0.5s forwards;
        }

        /* Mobile entrance animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-down {
          animation: slideDown 0.4s ease-out forwards;
          opacity: 0;
        }

        /* Hide scrollbar for horizontal scroll */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
          .animate-fade-in,
          .animate-slide-up,
          .animate-slide-down {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
