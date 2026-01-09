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

  // Shorts/Clips data - vertical format
  const shorts = [
    { title: "Dating in Ghana", views: "2.1M", image: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?w=300&h=533&fit=crop" },
    { title: "Airport Security", views: "1.8M", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=300&h=533&fit=crop" },
    { title: "Family Dinners", views: "1.2M", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=533&fit=crop" },
    { title: "Uber Drivers", views: "3.5M", image: "https://images.unsplash.com/photo-1468234847176-28606331216a?w=300&h=533&fit=crop" },
    { title: "Wedding Speech", views: "2.8M", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=533&fit=crop" },
    { title: "Job Interview", views: "1.5M", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=533&fit=crop" },
    { title: "First Date", views: "2.3M", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=300&h=533&fit=crop" },
    { title: "Gym Culture", views: "1.9M", image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=300&h=533&fit=crop" },
  ];

  // Full specials
  const specials = [
    { title: "Life's Too Short", year: "2025", duration: "1:02:34", views: "4.2M", image: "https://images.unsplash.com/photo-1468234847176-28606331216a?w=600&h=338&fit=crop" },
    { title: "No Filter", year: "2024", duration: "58:21", views: "8.1M", image: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?w=600&h=338&fit=crop" },
    { title: "Raw & Uncut", year: "2023", duration: "1:05:47", views: "12.3M", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&h=338&fit=crop" },
  ];

  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      {isMobile ? (
        /* ===== MOBILE LAYOUT ===== */
        <main className="pb-8">
          {/* Header */}
          <section className="pt-20 pb-6 px-5 bg-[var(--color-charcoal)]">
            <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2 animate-fade-in">
              Watch
            </p>
            <h1 className="text-3xl font-[family-name:var(--font-fraunces)] font-bold text-white animate-slide-up">
              Videos
            </h1>
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

            <div className="flex gap-3 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-hide">
              {shorts.map((short, i) => (
                <div key={i} className="flex-shrink-0 snap-start">
                  <div className="relative w-28 aspect-[9/16] rounded-xl overflow-hidden bg-[var(--color-charcoal)]">
                    <img
                      src={short.image}
                      alt={short.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-xs font-medium line-clamp-1">{short.title}</p>
                      <p className="text-white/70 text-[10px]">{short.views} views</p>
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
                      <img
                        src={special.image}
                        alt={special.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded">
                      {special.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[var(--color-charcoal)] mb-1">{special.title}</h3>
                    <p className="text-xs text-[var(--color-gray)] mb-1">Full Special • {special.year}</p>
                    <p className="text-xs text-[var(--color-gray)]">{special.views} views</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* YouTube CTA */}
          <section className="px-5 py-6">
            <a
              href="https://youtube.com/@papayaw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-red-600 text-white rounded-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="font-medium">Subscribe on YouTube</span>
            </a>
          </section>
        </main>
      ) : (
        /* ===== DESKTOP LAYOUT ===== */
        <>
          <section className="pt-32 pb-16 px-8">
            <div className="max-w-7xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-4">
                Watch
              </p>
              <h1 className="text-6xl md:text-7xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-6">
                Videos
              </h1>
              <div className="w-16 h-0.5 bg-[var(--color-accent)] mb-6" />
              <p className="text-xl text-[var(--color-gray)] max-w-2xl">
                Watch my latest clips, comedy specials, and featured appearances.
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

              <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
                {shorts.map((short, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-[var(--color-charcoal)] shadow-lg group-hover:shadow-xl transition-shadow">
                      <img
                        src={short.image}
                        alt={short.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                          <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white text-sm font-medium line-clamp-1">{short.title}</p>
                        <p className="text-white/70 text-xs">{short.views} views</p>
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

              <div className="grid md:grid-cols-3 gap-8">
                {specials.map((special, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-[var(--color-charcoal)] shadow-lg mb-4">
                      <img
                        src={special.image}
                        alt={special.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
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
                Subscribe to my YouTube channel for weekly clips, behind-the-scenes content, and full specials.
              </p>
              <a
                href="https://youtube.com/@papayaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="font-medium uppercase tracking-wider">Subscribe on YouTube</span>
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
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
