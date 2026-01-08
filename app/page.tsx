"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  // Initialize to true to prevent flash of desktop layout on mobile devices during hydration
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Mark as mounted and check if mobile
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Throttled scroll handler - only for desktop
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

  return (
    <>
      <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">
        <Navigation />

        {/* Hero Section - Editorial Split with Parallax */}
        <section
          ref={heroRef}
          className="relative min-h-screen overflow-hidden"
          style={mounted && !isMobile ? {
            position: "sticky",
            top: 0,
            zIndex: 0,
          } : {}}
        >
          {/* Dark overlay on scroll - desktop only */}
          {mounted && !isMobile && (
            <div
              className="absolute inset-0 bg-[var(--color-charcoal)] pointer-events-none z-20"
              style={{
                opacity: Math.min(scrollY / 600, 0.85),
              }}
            />
          )}

          {/* Mobile-first: Stack vertically, Desktop: Side by side */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-screen">
            {/* Left Side - Typography */}
            <div
              className="flex flex-col justify-center px-6 md:px-8 lg:px-16 py-16 md:py-32 lg:py-20 relative z-10 order-2 lg:order-1"
              style={mounted && !isMobile ? {
                transform: `translateY(${scrollY * 0.3}px)`,
              } : {}}
            >
              {/* Vertical accent line - desktop */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-[var(--color-accent)] hidden lg:block" />

              <ScrollReveal>
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4 md:mb-6 font-medium">
                  Stand-Up Comedian
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] leading-[0.9] mb-6 md:mb-8">
                  Papa Yaw
                  <br />
                  <span className="relative inline-block">
                    Ataamle
                    <svg
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3"
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
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-gray)] leading-relaxed mb-8 md:mb-10 max-w-md">
                  Comedian. Creator. Brand Ambassador. Making millions laugh
                  across stages, screens, and feeds.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex gap-3 md:gap-4 flex-wrap">
                  <Link
                    href="/shows"
                    className="group relative px-6 md:px-8 py-3 md:py-4 bg-[var(--color-charcoal)] text-white text-xs md:text-sm uppercase tracking-widest overflow-hidden"
                  >
                    <span className="relative z-10">Upcoming Shows</span>
                    <div className="absolute inset-0 bg-[var(--color-accent)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="/videos"
                    className="group px-6 md:px-8 py-3 md:py-4 border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] text-xs md:text-sm uppercase tracking-widest hover:bg-[var(--color-charcoal)] hover:text-white transition-all flex items-center gap-2"
                  >
                    <span>Watch Clips</span>
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
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>

              {/* Mini stats */}
              <ScrollReveal delay={0.4}>
                <div className="flex gap-6 md:gap-8 mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200">
                  <div>
                    <div className="text-2xl md:text-3xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                      10M+
                    </div>
                    <div className="text-[10px] md:text-xs uppercase tracking-wider text-[var(--color-gray)]">
                      Followers
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                      500+
                    </div>
                    <div className="text-[10px] md:text-xs uppercase tracking-wider text-[var(--color-gray)]">
                      Shows
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                      100M+
                    </div>
                    <div className="text-[10px] md:text-xs uppercase tracking-wider text-[var(--color-gray)]">
                      Views
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Side - Image Showcase */}
            <div
              className="relative bg-[var(--color-charcoal)] order-1 lg:order-2 overflow-hidden"
              style={mounted && !isMobile ? {
                transform: `translateY(${scrollY * 0.15}px)`,
                minHeight: '100vh',
              } : {}}
            >
              {/* Mobile: Full-width image with overlay text */}
              {isMobile ? (
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&h=450&fit=crop&crop=faces&q=80"
                    alt="Papa Yaw Ataamle"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-transparent to-transparent" />

                  {/* Next Show badge on mobile */}
                  <div className="absolute bottom-4 left-4 bg-white text-[var(--color-charcoal)] p-3 shadow-lg">
                    <div className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-0.5 font-medium">
                      Next Show
                    </div>
                    <div className="text-lg font-[family-name:var(--font-fraunces)] font-bold">
                      Jan 15
                    </div>
                    <div className="text-[10px] text-[var(--color-gray)]">
                      New York, NY
                    </div>
                  </div>
                </div>
              ) : (
                /* Desktop: Centered image with decorative elements */
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-charcoal)]/60 z-10 pointer-events-none" />
                  <ScrollReveal delay={0.2} className="h-full">
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div className="relative group w-full max-w-md">
                        <div className="relative aspect-[3/4] bg-[var(--color-light-gray)] overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                          <img
                            src="https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800&h=1000&fit=crop&crop=faces&q=80"
                            alt="Papa Yaw Ataamle"
                            loading="eager"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>

                        <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[var(--color-accent)] -z-10" />

                        <div className="absolute -bottom-6 -left-6 bg-white text-[var(--color-charcoal)] p-6 shadow-2xl z-20">
                          <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-1 font-medium">
                            Next Show
                          </div>
                          <div className="text-2xl font-[family-name:var(--font-fraunces)] font-bold">
                            Jan 15
                          </div>
                          <div className="text-sm text-[var(--color-gray)]">
                            New York, NY
                          </div>
                        </div>

                        <div className="absolute top-4 -right-8 bg-[var(--color-accent)] text-white px-4 py-3 shadow-xl z-20">
                          <div className="text-xs uppercase tracking-widest opacity-80">
                            Sold Out
                          </div>
                          <div className="text-base font-bold">
                            12 Shows
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <div className="absolute bottom-8 right-8 text-[12rem] font-[family-name:var(--font-fraunces)] font-bold text-white/5 leading-none select-none pointer-events-none">
                    HA
                  </div>

                  <div className="absolute top-1/4 left-8 w-2 h-2 bg-[var(--color-accent)] rounded-full opacity-60 animate-pulse" />
                  <div className="absolute bottom-1/3 right-12 w-3 h-3 bg-[var(--color-accent)]/40 rounded-full" />
                  <div className="absolute top-1/2 right-1/4 w-1 h-8 bg-[var(--color-accent)]/30" />
                </>
              )}
            </div>
          </div>
        </section>

        {/* Content Preview Sections - Scrolls over hero */}
        <div
          className="relative bg-white"
          style={{
            zIndex: 10,
            boxShadow: mounted && !isMobile ? '0 -30px 60px rgba(0,0,0,0.15), 0 -10px 20px rgba(0,0,0,0.1)' : 'none',
          }}
        >
          {/* Top edge accent - desktop only */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-50 hidden md:block" />

          {/* Featured Video Section - YouTube Style */}
          <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <ScrollReveal>
                <div className="flex items-center justify-between mb-8 md:mb-12">
                  <div>
                    <p className="text-xs md:text-sm uppercase tracking-widest text-[var(--color-accent)] mb-2">
                      Watch
                    </p>
                    <h2 className="text-2xl md:text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                      Latest Special
                    </h2>
                  </div>
                  <Link
                    href="/videos"
                    className="group flex items-center gap-2 text-[var(--color-charcoal)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span className="text-xs md:text-sm uppercase tracking-widest">
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
              </ScrollReveal>

              {/* YouTube-style Featured Video */}
              <ScrollReveal delay={0.1}>
                <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
                  {/* Main Featured Video - Takes 3 columns */}
                  <Link href="/videos" className="lg:col-span-3 group block">
                    <div className="relative aspect-video bg-[var(--color-charcoal)] rounded-xl overflow-hidden shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1468234847176-28606331216a?w=600&h=338&fit=crop&q=80"
                        srcSet="https://images.unsplash.com/photo-1468234847176-28606331216a?w=600&h=338&fit=crop&q=80 600w, https://images.unsplash.com/photo-1468234847176-28606331216a?w=1200&h=675&fit=crop&q=80 1200w"
                        sizes="(max-width: 768px) 600px, 1200px"
                        alt="Life's Too Short - Comedy Special"
                        loading="lazy"
                        className="w-full h-full object-cover md:group-hover:scale-105 md:transition-transform md:duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                          <svg className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded font-medium">
                        1:02:34
                      </div>

                      {/* Live/New badge */}
                      <div className="absolute top-3 left-3 bg-[var(--color-accent)] text-white text-[10px] md:text-xs uppercase tracking-wider px-2 md:px-3 py-1 rounded font-medium">
                        New
                      </div>
                    </div>

                    {/* Video Info - Below thumbnail */}
                    <div className="mt-4">
                      <h3 className="text-xl md:text-2xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                        Life's Too Short | Full Comedy Special
                      </h3>
                      <p className="text-sm text-[var(--color-gray)] mb-2">
                        Papa Yaw Ataamle
                      </p>
                      <div className="flex items-center gap-2 text-xs text-[var(--color-gray)]">
                        <span>4.2M views</span>
                        <span>•</span>
                        <span>2 weeks ago</span>
                      </div>
                    </div>
                  </Link>

                  {/* Side videos - Takes 2 columns */}
                  <div className="lg:col-span-2 space-y-4">
                    {[
                      {
                        title: "Dating in 2024",
                        views: "2.1M views",
                        time: "8:45",
                        ago: "1 month ago",
                        image: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?w=400&h=225&fit=crop",
                      },
                      {
                        title: "Airport Security",
                        views: "1.8M views",
                        time: "6:22",
                        ago: "2 months ago",
                        image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=225&fit=crop",
                      },
                      {
                        title: "Family Dinners",
                        views: "1.2M views",
                        time: "5:17",
                        ago: "3 months ago",
                        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=225&fit=crop",
                      },
                    ].map((video, i) => (
                      <Link key={i} href="/videos" className="group flex gap-3 md:gap-4">
                        {/* Thumbnail */}
                        <div className="relative w-32 md:w-44 flex-shrink-0">
                          <div className="aspect-video bg-[var(--color-charcoal)] rounded-lg overflow-hidden">
                            <img
                              src={video.image}
                              alt={video.title}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded">
                            {video.time}
                          </div>
                        </div>
                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm md:text-base font-medium text-[var(--color-charcoal)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2 mb-1">
                            {video.title}
                          </h4>
                          <p className="text-xs text-[var(--color-gray)] mb-0.5">
                            Papa Yaw Ataamle
                          </p>
                          <div className="flex items-center gap-1 text-xs text-[var(--color-gray)]">
                            <span>{video.views}</span>
                            <span>•</span>
                            <span>{video.ago}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Shows Section */}
          <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center justify-between mb-8 md:mb-12">
                  <div>
                    <p className="text-xs md:text-sm uppercase tracking-widest text-[var(--color-accent)] mb-2">
                      On Tour
                    </p>
                    <h2 className="text-2xl md:text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                      Upcoming Shows
                    </h2>
                  </div>
                  <Link
                    href="/shows"
                    className="group flex items-center gap-2 text-[var(--color-charcoal)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span className="text-xs md:text-sm uppercase tracking-widest">
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
                </div>
              </ScrollReveal>

              {/* Shows List */}
              <div className="space-y-4">
                {[
                  {
                    date: "Jan 15",
                    day: "Sat",
                    venue: "Madison Square Garden",
                    city: "New York, NY",
                    status: "Few Left",
                  },
                  {
                    date: "Jan 22",
                    day: "Sat",
                    venue: "The Comedy Store",
                    city: "Los Angeles, CA",
                    status: "On Sale",
                  },
                  {
                    date: "Feb 5",
                    day: "Sat",
                    venue: "Ryman Auditorium",
                    city: "Nashville, TN",
                    status: "On Sale",
                  },
                ].map((show, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <Link
                      href="/shows"
                      className="group flex items-center gap-4 md:gap-8 p-4 md:p-6 border border-gray-200 hover:border-[var(--color-accent)] hover:shadow-lg transition-all"
                    >
                      {/* Date */}
                      <div className="text-center min-w-[60px] md:min-w-[80px]">
                        <div className="text-2xl md:text-3xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                          {show.date.split(" ")[1]}
                        </div>
                        <div className="text-xs uppercase text-[var(--color-gray)]">
                          {show.date.split(" ")[0]}
                        </div>
                      </div>
                      {/* Divider */}
                      <div className="w-px h-12 bg-gray-200 hidden md:block" />
                      {/* Venue Info */}
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-accent)] transition-colors">
                          {show.venue}
                        </h3>
                        <p className="text-sm text-[var(--color-gray)]">
                          {show.city}
                        </p>
                      </div>
                      {/* Status & CTA */}
                      <div className="text-right">
                        <span
                          className={`text-xs uppercase tracking-wider px-3 py-1 ${show.status === "Few Left" ? "bg-[var(--color-accent)] text-white" : "bg-gray-100 text-[var(--color-charcoal)]"}`}
                        >
                          {show.status}
                        </span>
                      </div>
                      {/* Arrow */}
                      <svg
                        className="w-5 h-5 text-[var(--color-gray)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all hidden md:block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="py-16 md:py-24 px-6 md:px-8 bg-[var(--color-light-gray)]">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center justify-between mb-8 md:mb-12">
                  <div>
                    <p className="text-xs md:text-sm uppercase tracking-widest text-[var(--color-accent)] mb-2">
                      Behind The Scenes
                    </p>
                    <h2 className="text-2xl md:text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                      Gallery
                    </h2>
                  </div>
                  <Link
                    href="/gallery"
                    className="group flex items-center gap-2 text-[var(--color-charcoal)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span className="text-xs md:text-sm uppercase tracking-widest">
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
              </ScrollReveal>

              {/* Photo Grid - 4 items */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  {
                    span: "col-span-1",
                    image:
                      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=500&fit=crop",
                    label: "On Stage",
                  },
                  {
                    span: "col-span-1",
                    image:
                      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop",
                    label: "Backstage",
                  },
                  {
                    span: "col-span-1",
                    image:
                      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=500&fit=crop",
                    label: "With Fans",
                  },
                  {
                    span: "col-span-1",
                    image:
                      "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=500&fit=crop",
                    label: "Behind Scenes",
                  },
                ].map((photo, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} className={photo.span}>
                    <Link
                      href="/gallery"
                      className="group block relative aspect-[4/5] bg-white overflow-hidden shadow-sm md:hover:shadow-xl md:transition-shadow"
                    >
                      <img
                        src={photo.image}
                        alt={photo.label}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Label overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-[var(--color-charcoal)]/80 to-transparent">
                        <span className="text-white text-xs md:text-sm font-medium">
                          {photo.label}
                        </span>
                      </div>
                      {/* Hover overlay - desktop only */}
                      <div className="hidden md:flex absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/20 transition-colors items-center justify-center">
                        <svg
                          className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Brands Section */}
          <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center justify-between mb-8 md:mb-12">
                  <div>
                    <p className="text-xs md:text-sm uppercase tracking-widest text-[var(--color-accent)] mb-2">
                      Partnerships
                    </p>
                    <h2 className="text-2xl md:text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                      Brand Partners
                    </h2>
                  </div>
                  <Link
                    href="/brands"
                    className="group flex items-center gap-2 text-[var(--color-charcoal)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span className="text-xs md:text-sm uppercase tracking-widest">
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
              </ScrollReveal>

              {/* Brand Logos */}
              <ScrollReveal delay={0.1}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                  {[
                    { name: "Nike", campaign: "Just Laugh" },
                    { name: "Netflix", campaign: "Comedy Special" },
                    { name: "Apple", campaign: "Think Funny" },
                    { name: "Spotify", campaign: "Podcast Series" },
                  ].map((brand, i) => (
                    <Link
                      key={i}
                      href="/brands"
                      className="group p-6 md:p-8 border border-gray-200 hover:border-[var(--color-accent)] hover:shadow-lg transition-all text-center"
                    >
                      <div className="text-3xl md:text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                        {brand.name}
                      </div>
                      <p className="text-xs text-[var(--color-gray)] uppercase tracking-wider">
                        {brand.campaign}
                      </p>
                    </Link>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* About Preview - With Image */}
          <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Image */}
                <ScrollReveal direction="left">
                  <div className="relative aspect-[4/3] md:aspect-square overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=faces&q=80"
                      alt="Papa Yaw backstage"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </ScrollReveal>

                {/* Text Content */}
                <ScrollReveal direction="right">
                  <div>
                    <p className="text-xs md:text-sm uppercase tracking-widest text-[var(--color-accent)] mb-2">
                      The Story
                    </p>
                    <h2 className="text-2xl md:text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-6">
                      About Papa Yaw
                    </h2>
                    <p className="text-[var(--color-gray)] leading-relaxed mb-6">
                      From open mics in college basements to sold-out arenas, my
                      journey in comedy has been anything but ordinary. What
                      started as a way to cope with the chaos of everyday life
                      turned into a career making millions of people laugh.
                    </p>
                    <Link
                      href="/about"
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-charcoal)] text-white text-sm uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors"
                    >
                      <span>Read My Story</span>
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
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Contact CTA - Dark section with centered content */}
          <section className="py-20 md:py-32 px-6 md:px-8 bg-[var(--color-charcoal)] text-center">
            <div className="max-w-2xl mx-auto">
              <ScrollReveal>
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
                <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-fraunces)] font-bold text-white mb-4">
                  Let's Work Together
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  For bookings, brand partnerships, or media inquiries, I'd love to hear from you.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white text-sm uppercase tracking-widest hover:bg-white hover:text-[var(--color-charcoal)] transition-all"
                >
                  <span>Get in Touch</span>
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
              </ScrollReveal>
            </div>
          </section>

          {/* Footer inside wrapper to cover hero */}
          <Footer />
        </div>
      </div>

      <style jsx global>{`
        :root {
          --color-charcoal: #1a1a1a;
          --color-accent: #c7522a;
          --color-gray: #6b6b6b;
          --color-light-gray: #e8e8e8;
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

        /* Disable animations on mobile for performance */
        @media (max-width: 767px) {
          .animate-draw {
            animation: none;
            stroke-dashoffset: 0;
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
