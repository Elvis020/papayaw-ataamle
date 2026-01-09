"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Videos() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Shorts/Clips data - vertical format (local videos)
  const shorts = [
    {
      title: "Dating in Ghana",
      views: "2.1M",
      video: "/videos/video1.mp4",
    },
    {
      title: "Airport Security",
      views: "1.8M",
      video: "/videos/video2.mp4",
    },
    {
      title: "Uber Drivers",
      views: "3.5M",
      video: "/videos/video4.mov",
    },
  ];

  // Full specials
  const specials = [
    {
      title: "Life's Too Short",
      year: "2025",
      duration: "1:02:34",
      views: "4.2M",
      video: "/videos/video3.mp4",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      {isMobile ? (
        /* ===== MOBILE LAYOUT ===== */
        <main className="pb-8">
          {/* Header */}
          <section className="pt-24 pb-6 px-5">
            <h1 className="text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-4">
              Videos
            </h1>
            <div className="w-12 h-0.5 bg-[var(--color-accent)] mb-4" />
            <p className="text-sm text-[var(--color-gray)]">
              Watch my latest clips
            </p>
          </section>

          {/* Latest Clips - Horizontal Scroll */}
          <section className="py-6">
            <div className="flex items-center justify-between px-5 mb-4">
              <h2 className="text-lg font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                Latest Clips
              </h2>
              <a
                href="https://youtube.com/@papayaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-[var(--color-accent)]"
              >
                YouTube
              </a>
            </div>

            <div className="flex gap-3 overflow-x-auto pl-5 pr-5 pb-2 snap-x snap-mandatory scroll-pl-5 scrollbar-hide">
              {shorts.map((short, i) => (
                <div key={i} className="flex-shrink-0 snap-start">
                  <div className="relative w-28 aspect-[9/16] rounded-sm overflow-hidden bg-[var(--color-charcoal)]">
                    <video
                      src={short.video}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-xs font-medium line-clamp-1">
                        {short.title}
                      </p>
                      <p className="text-white/70 text-[10px]">
                        {short.views} views
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comedy Specials */}
          <section className="px-5 py-6">
            <h2 className="text-lg font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-4">
              Comedy Specials
            </h2>

            <div className="space-y-4">
              {specials.map((special, i) => (
                <div key={i} className="flex gap-3">
                  <div className="relative w-32 flex-shrink-0">
                    <div className="aspect-video rounded-lg overflow-hidden bg-[var(--color-charcoal)]">
                      <video
                        src={special.video}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded">
                      {special.duration}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-1">
                      {special.title}
                    </h3>
                    <p className="text-xs text-[var(--color-gray)] mb-1">
                      Full Special • {special.year}
                    </p>
                    <p className="text-xs text-[var(--color-gray)]">
                      {special.views} views
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      ) : (
        /* ===== DESKTOP LAYOUT ===== */
        <>
          <section className="pt-32 pb-16 px-5 md:px-8">
            <div className="max-w-7xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-4">
                Watch
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-6">
                Videos
              </h1>
              <div className="w-16 h-0.5 bg-[var(--color-accent)] mb-6" />
              <p className="text-xl text-[var(--color-gray)] max-w-2xl">
                Watch my latest clips, comedy specials, and featured
                appearances.
              </p>
            </div>
          </section>

          {/* Shorts Grid */}
          <section className="pb-16 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                  Latest Clips
                </h2>
                <a
                  href="https://youtube.com/@papayaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-wider text-[var(--color-accent)] hover:underline"
                >
                  View All on YouTube
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {shorts.map((short, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-[var(--color-charcoal)] shadow-lg group-hover:shadow-xl transition-shadow">
                      <video
                        src={short.video}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white text-sm font-medium line-clamp-1">
                          {short.title}
                        </p>
                        <p className="text-white/70 text-xs">
                          {short.views} views
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Comedy Specials */}
          <section className="py-16 px-8 bg-[var(--color-light-gray)]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-8">
                Comedy Specials
              </h2>

              <div className="max-w-2xl">
                {specials.map((special, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-[var(--color-charcoal)] shadow-lg mb-4">
                      <video
                        src={special.video}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                      <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {special.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                      {special.title}
                    </h3>
                    <p className="text-[var(--color-gray)]">
                      Full Special • {special.year} • {special.views} views
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* YouTube CTA */}
          <section className="py-16 px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-4">
                Want more laughs?
              </h2>
              <p className="text-[var(--color-gray)] mb-8">
                Subscribe to my YouTube channel for weekly clips,
                behind-the-scenes content, and full specials.
              </p>
              <a
                href="https://youtube.com/@papayaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="font-medium uppercase tracking-wider">
                  Subscribe on YouTube
                </span>
              </a>
            </div>
          </section>

          <Footer />
        </>
      )}

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

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

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
