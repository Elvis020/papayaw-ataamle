"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LazyVideo from "./components/LazyVideo";
import VideoModal from "./components/VideoModal";
import { hasEvents } from "./data/events";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const openVideoModal = (index: number) => {
    setSelectedVideoIndex(index);
    setModalOpen(true);
  };

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

  // Shorts data - vertical video format (optimized local videos)
  const shorts = [
    {
      title: "FBI shorts",
      video: "/videos/optimized/video1.mp4",
    },
    {
      title: "The New False",
      video: "/videos/optimized/video2.mp4",
    },
    {
      title: "Soho Comedy Night",
      video: "/videos/optimized/video4.mp4",
    },
  ];

  return (
    <>
      <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">
        <Navigation />

        {/* ===== MOBILE LAYOUT ===== */}
        {isMobile ? (
          <main className="pb-8">
            {/* Hero - Compact Mobile with Dark Overlay */}
            <section className="relative bg-[var(--color-charcoal)] pt-14">
              {/* Hero Image with Dark Overlay */}
              <div className="relative h-[60vh] overflow-hidden">
                <img
                  src="/images/profile/image00012.jpeg"
                  alt="Papa Yaw Ataamle"
                  className="w-full h-full object-cover object-[center_30%] animate-fade-in"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[var(--color-charcoal)]/60 to-transparent" />

                {/* Content overlaid on image */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 pb-8">
                  <p
                    className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2 font-medium animate-slide-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    Stand-Up Comedian
                  </p>
                  <h1
                    className="text-4xl font-[family-name:var(--font-fraunces)] font-bold text-white leading-tight mb-3 animate-slide-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Papa Yaw
                    <br />
                    Ataamle
                  </h1>
                  <p
                    className="text-sm text-gray-300 mb-5 animate-slide-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    Making millions laugh across stages, screens, and feeds.
                  </p>

                  {/* Stats Row */}
                  <div
                    className="flex gap-6 py-4 border-t border-white/20 animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">10M+</div>
                      <div className="text-[10px] uppercase text-gray-400">
                        Followers
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">500+</div>
                      <div className="text-[10px] uppercase text-gray-400">
                        Shows
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">100M+</div>
                      <div className="text-[10px] uppercase text-gray-400">
                        Views
                      </div>
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
                <Link
                  href="/videos"
                  className="text-xs uppercase tracking-wider text-[var(--color-accent)]"
                >
                  See All
                </Link>
              </div>

              {/* Horizontal Scroll Container */}
              <div className="flex gap-3 overflow-x-auto pl-5 pr-5 pb-2 snap-x snap-mandatory scroll-pl-5 scrollbar-hide">
                {shorts.map((short, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 snap-start cursor-pointer"
                    onClick={() => openVideoModal(i)}
                  >
                    <div className="relative w-28 aspect-[9/16] rounded-sm overflow-hidden bg-[var(--color-charcoal)]">
                      <LazyVideo
                        src={short.video}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      {/* Info */}
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white text-xs font-medium line-clamp-1">
                          {short.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Shows */}
            <section className="px-5 py-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                  Upcoming Shows
                </h2>
                {hasEvents && (
                  <Link
                    href="/shows"
                    className="text-xs uppercase tracking-wider text-[var(--color-accent)]"
                  >
                    All Dates
                  </Link>
                )}
              </div>

              <div className="bg-[var(--color-light-gray)] rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-charcoal)]/10 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-[var(--color-gray)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-[var(--color-gray)] mb-1">
                  No upcoming shows
                </p>
                <p className="text-xs text-[var(--color-gray)]/70">
                  Check back soon for new dates!
                </p>
              </div>
            </section>

            {/* Gallery - Horizontal Scroll */}
            <section className="py-6">
              <div className="flex items-center justify-between px-5 mb-4">
                <h2 className="text-lg font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                  Gallery
                </h2>
                <Link
                  href="/gallery"
                  className="text-xs uppercase tracking-wider text-[var(--color-accent)]"
                >
                  See All
                </Link>
              </div>

              <div className="flex gap-3 overflow-x-auto pl-5 pr-5 pb-2 snap-x snap-mandatory scroll-pl-5 scrollbar-hide">
                {[
                  "/images/image001.jpeg",
                  "/images/image035.jpeg",
                  "/images/image051.jpeg",
                  "/images/image00005.jpeg",
                ].map((img, i) => (
                  <Link
                    key={i}
                    href="/gallery"
                    className="flex-shrink-0 snap-start"
                  >
                    <div className="w-24 h-24 rounded-sm overflow-hidden">
                      <img
                        src={img}
                        alt="Gallery"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Brand Partners - Infinite Carousel */}
            <section className="py-6 border-t border-gray-100 overflow-hidden">
              <p className="text-[10px] uppercase tracking-widest text-[var(--color-gray)] text-center mb-4">
                Brand Partners
              </p>
              <div className="marquee-mobile">
                <div className="marquee-content-mobile">
                  {[
                    "KS Electricals",
                    "Kantanka KHPRC",
                    "Benjamin Cargo",
                    "2927 Comedy Club",
                  ].map((brand, i) => (
                    <span
                      key={i}
                      className="text-lg font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]/40 whitespace-nowrap mx-6"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
                <div className="marquee-content-mobile" aria-hidden="true">
                  {[
                    "KS Electricals",
                    "Kantanka KHPRC",
                    "Benjamin Cargo",
                    "2927 Comedy Club",
                  ].map((brand, i) => (
                    <span
                      key={i}
                      className="text-lg font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]/40 whitespace-nowrap mx-6"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
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
              <div className="flex justify-center items-stretch gap-3">
                <Link
                  href="/contact?direct=form"
                  className="group w-36 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[var(--color-accent)] text-white text-xs uppercase tracking-widest font-medium hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-accent)]/30 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Form</span>
                </Link>
                <a
                  href="https://wa.me/233503287620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-36 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-[var(--color-charcoal)] hover:scale-105 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </section>

            <Footer />
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
                  style={
                    mounted
                      ? { transform: `translateY(${scrollY * 0.3}px)` }
                      : {}
                  }
                >
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-[var(--color-accent)]" />

                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6 font-medium">
                    Stand-Up Comedian
                  </p>
                  <h1 className="text-[clamp(3rem,8vw,8rem)] font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] leading-[0.9] mb-8">
                    Papa Yaw
                    <br />
                    <span className="relative inline-block">
                      Ataamle
                      <svg
                        className="absolute -bottom-2 left-0 w-full h-3"
                        viewBox="0 0 200 12"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,8 Q50,0 100,8 T200,8"
                          stroke="var(--color-accent)"
                          strokeWidth="3"
                          fill="none"
                          className="animate-draw"
                        />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-2xl text-[var(--color-gray)] leading-relaxed mb-10 max-w-md">
                    Comedian. Creator. Brand Ambassador. Making millions laugh
                    across stages, screens, and feeds.
                  </p>

                  <div className="flex gap-4">
                    {hasEvents && (
                      <Link
                        href="/shows"
                        className="group relative px-8 py-4 bg-[var(--color-charcoal)] text-white text-sm uppercase tracking-widest overflow-hidden"
                      >
                        <span className="relative z-10">Upcoming Shows</span>
                        <div className="absolute inset-0 bg-[var(--color-accent)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                      </Link>
                    )}
                    <Link
                      href="/videos"
                      className="group relative px-8 py-4 border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] text-sm uppercase tracking-widest overflow-hidden flex items-center gap-2 hover:text-white hover:border-[var(--color-accent)] transition-colors duration-300"
                    >
                      <span className="relative z-10">Watch Clips</span>
                      <svg
                        className="w-4 h-4 relative z-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="absolute inset-0 bg-[var(--color-accent)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </Link>
                  </div>

                  <div className="flex gap-8 mt-16 pt-8 border-t border-gray-200">
                    {[
                      { num: "10M+", label: "Followers" },
                      { num: "500+", label: "Shows" },
                      { num: "100M+", label: "Views" },
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="text-3xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                          {stat.num}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-[var(--color-gray)]">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Image */}
                <div
                  className="relative bg-[var(--color-charcoal)] overflow-hidden"
                  style={
                    mounted
                      ? {
                          transform: `translateY(${scrollY * 0.15}px)`,
                          minHeight: "100vh",
                        }
                      : {}
                  }
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-charcoal)]/60 z-10 pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="relative group w-full max-w-md">
                      <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                        <img
                          src="/images/profile/image00012.jpeg"
                          alt="Papa Yaw Ataamle"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[var(--color-accent)] -z-10" />
                      <div className="absolute -bottom-6 -left-6 bg-white text-[var(--color-charcoal)] p-6 shadow-2xl z-20">
                        <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-1">
                          Brand Ambassador
                        </div>
                        <div className="text-lg font-[family-name:var(--font-fraunces)] font-bold leading-tight">
                          KS Electricals
                        </div>
                        <div className="text-sm text-[var(--color-gray)]">
                          Logistics
                        </div>
                      </div>
                      <div className="absolute top-4 -right-8 bg-[var(--color-accent)] text-white px-4 py-3 shadow-xl z-20">
                        <div className="text-xs uppercase tracking-widest opacity-80">
                          Partnered
                        </div>
                        <div className="text-base font-bold">5+ Brands</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 right-8 text-[12rem] font-[family-name:var(--font-fraunces)] font-bold text-white/5 leading-none select-none pointer-events-none">
                    PYA
                  </div>
                </div>
              </div>
            </section>

            {/* Content Sections - Desktop */}
            <div
              className="relative bg-white"
              style={{
                zIndex: 10,
                boxShadow: mounted ? "0 -30px 60px rgba(0,0,0,0.15)" : "none",
              }}
            >
              {/* Shorts Section - Desktop */}
              <section className="py-24 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-center justify-between mb-12">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-2">
                        Watch
                      </p>
                      <h2 className="text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                        Latest Clips
                      </h2>
                    </div>
                    <Link
                      href="/videos"
                      className="group flex items-center gap-2 text-[var(--color-charcoal)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <span className="text-sm uppercase tracking-widest">
                        View All
                      </span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Shorts Grid - Vertical Format */}
                  <div className="grid grid-cols-3 gap-6">
                    {shorts.map((short, i) => (
                      <div
                        key={i}
                        className="group cursor-pointer"
                        onClick={() => openVideoModal(i)}
                      >
                        <div className="relative aspect-[9/16] rounded-sm overflow-hidden bg-[var(--color-charcoal)] shadow-lg group-hover:shadow-2xl transition-shadow">
                          <LazyVideo
                            src={short.video}
                            className="w-full h-full object-cover group-hover:scale-[1.075] transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-white font-medium mb-1">
                              {short.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Shows Section - Desktop */}
              <section className="py-24 px-8 bg-[var(--color-light-gray)]">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-center justify-between mb-12">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-2">
                        Live Events
                      </p>
                      <h2 className="text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                        Upcoming Shows
                      </h2>
                    </div>
                    {hasEvents && (
                      <Link
                        href="/shows"
                        className="group flex items-center gap-2 text-[var(--color-charcoal)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <span className="text-sm uppercase tracking-widest">
                          All Dates
                        </span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-charcoal)]/10 flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-[var(--color-gray)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] mb-2">
                      No upcoming shows
                    </h3>
                    <p className="text-[var(--color-gray)]">
                      Check back soon for new dates and locations!
                    </p>
                  </div>
                </div>
              </section>

              {/* Brands - Desktop Infinite Carousel */}
              <section className="py-24 bg-white overflow-hidden">
                <div className="text-center mb-8">
                  <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
                    Trusted By
                  </p>
                </div>
                <div className="marquee-desktop">
                  <div className="marquee-content-desktop">
                    {[
                      "KS Electricals",
                      "Kantanka KHPRC",
                      "Benjamin Cargo Logistics",
                      "2927 Comedy Club",
                    ].map((brand, i) => (
                      <span
                        key={i}
                        className="text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]/30 whitespace-nowrap mx-12"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                  <div className="marquee-content-desktop" aria-hidden="true">
                    {[
                      "KS Electricals",
                      "Kantanka KHPRC",
                      "Benjamin Cargo Logistics",
                      "2927 Comedy Club",
                    ].map((brand, i) => (
                      <span
                        key={i}
                        className="text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]/30 whitespace-nowrap mx-12"
                      >
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
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-5xl font-[family-name:var(--font-fraunces)] font-bold text-white mb-4">
                    Let's Work Together
                  </h2>
                  <p className="text-gray-400 text-lg mb-8">
                    For bookings, brand partnerships, or media inquiries.
                  </p>
                  <div className="flex justify-center items-stretch gap-5">
                    <Link
                      href="/contact?direct=form"
                      className="group w-52 inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white text-sm uppercase tracking-widest font-medium hover:scale-105 hover:shadow-xl hover:shadow-[var(--color-accent)]/40 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Form</span>
                    </Link>
                    <a
                      href="https://wa.me/233503287620"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-52 inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-[var(--color-charcoal)] hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
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
          from {
            stroke-dashoffset: 300;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-draw {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw 1.5s ease-out 0.5s forwards;
        }

        /* Mobile entrance animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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

        /* Infinite marquee - seamless loop */
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }

        .marquee-mobile,
        .marquee-desktop {
          display: flex;
          overflow: hidden;
        }

        .marquee-content-mobile {
          display: flex;
          flex-shrink: 0;
          animation: marquee 20s linear infinite;
        }

        .marquee-content-desktop {
          display: flex;
          flex-shrink: 0;
          animation: marquee 30s linear infinite;
        }

        /* Pause on hover */
        .marquee-mobile:hover .marquee-content-mobile,
        .marquee-desktop:hover .marquee-content-desktop {
          animation-play-state: paused;
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
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
          .animate-fade-in,
          .animate-slide-up,
          .animate-slide-down {
            opacity: 1;
            transform: none;
          }
          .marquee-content-mobile,
          .marquee-content-desktop {
            animation: none;
          }
        }
      `}</style>

      {/* Video Modal */}
      <VideoModal
        videos={shorts}
        initialIndex={selectedVideoIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
