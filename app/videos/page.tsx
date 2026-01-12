"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import VideoModal from "../components/VideoModal";

export default function Videos() {
  const [isMobile, setIsMobile] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [video1Playing, setVideo1Playing] = useState(false);
  const [video2Playing, setVideo2Playing] = useState(false);
  const [video3Playing, setVideo3Playing] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openVideoModal = (index: number) => {
    setSelectedVideoIndex(index);
    setModalOpen(true);
  };

  // Shorts/Clips data - YouTube Shorts
  const shorts = [
    { youtubeId: "5Kttehrq4wY" },
    { youtubeId: "ntipniWCRUs" },
    { youtubeId: "dpTo6kUtvEQ" },
    { youtubeId: "ntipniWCRUs" },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      {isMobile ? (
        /* ===== MOBILE LAYOUT ===== */
        <main className="pb-8 flex-1 flex flex-col">
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
                href="https://youtube.com/@papayawataamle?si=aRybYkIJSxUS-rYY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-[var(--color-accent)]"
              >
                YouTube
              </a>
            </div>

            <div className="flex gap-3 overflow-x-auto pl-5 pr-5 pb-2 snap-x snap-mandatory scroll-pl-5 scrollbar-hide">
              {shorts.map((short, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 snap-start cursor-pointer"
                  onClick={() => openVideoModal(i)}
                >
                  <div className="relative w-28 aspect-[9/16] rounded-sm overflow-hidden bg-[var(--color-charcoal)]">
                    <img
                      src={`https://img.youtube.com/vi/${short.youtubeId}/hqdefault.jpg`}
                      alt="YouTube Short"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    {/* Play icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comedy Specials */}
          <section className="px-5 py-6">
            <h2 className="text-lg font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-4">
              Featured
            </h2>

            <div className="space-y-4">
              {/* YouTube Videos */}
              {[
                {
                  id: "sdTk6npMR_8",
                  title: "Stand Up Comedy Special",
                  playing: video1Playing,
                  setPlaying: setVideo1Playing,
                  start: 15,
                },
                {
                  id: "mQcZYhHsgL8",
                  title: "Live at 2927 Comedy Club",
                  playing: video2Playing,
                  setPlaying: setVideo2Playing,
                  start: 0,
                },
                {
                  id: "0Wt-TlAY5-s",
                  title: "Best of Papa Yaw",
                  playing: video3Playing,
                  setPlaying: setVideo3Playing,
                  start: 0,
                },
              ].map((video, index) => (
                <div key={index}>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-[var(--color-charcoal)] shadow-lg">
                    {video.playing ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?start=${video.start}&autoplay=1`}
                        title="Comedy Special"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        className="relative w-full h-full cursor-pointer group"
                        onClick={() => video.setPlaying(true)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                          alt="Comedy Special Thumbnail"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-medium text-[var(--color-charcoal)] mt-2 truncate">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-auto">
            <Footer />
          </div>
        </main>
      ) : (
        /* ===== DESKTOP LAYOUT ===== */
        <div className="flex-1 flex flex-col">
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
                  href="https://youtube.com/@papayawataamle?si=aRybYkIJSxUS-rYY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-wider text-[var(--color-accent)] hover:underline"
                >
                  View All on YouTube
                </a>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {shorts.map((short, i) => (
                  <div
                    key={i}
                    className="group cursor-pointer"
                    onClick={() => openVideoModal(i)}
                  >
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-[var(--color-charcoal)] shadow-lg group-hover:shadow-xl transition-shadow">
                      <img
                        src={`https://img.youtube.com/vi/${short.youtubeId}/hqdefault.jpg`}
                        alt="YouTube Short"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {/* Play icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
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

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* YouTube Videos */}
                {[
                  {
                    id: "sdTk6npMR_8",
                    title: "Stand Up Comedy Special",
                    playing: video1Playing,
                    setPlaying: setVideo1Playing,
                    start: 15,
                  },
                  {
                    id: "mQcZYhHsgL8",
                    title: "Live at 2927 Comedy Club",
                    playing: video2Playing,
                    setPlaying: setVideo2Playing,
                    start: 0,
                  },
                  {
                    id: "0Wt-TlAY5-s",
                    title: "Best of Papa Yaw",
                    playing: video3Playing,
                    setPlaying: setVideo3Playing,
                    start: 0,
                  },
                ].map((video, index) => (
                  <div key={index}>
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-[var(--color-charcoal)] shadow-lg">
                      {video.playing ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}?start=${video.start}&autoplay=1`}
                          title="Comedy Special"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div
                          className="relative w-full h-full cursor-pointer group"
                          onClick={() => video.setPlaying(true)}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                            alt="Comedy Special Thumbnail"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="text-base font-medium text-[var(--color-charcoal)] mt-3 truncate">
                      {video.title}
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
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-charcoal)] text-white overflow-hidden"
              >
                <svg
                  className="w-6 h-6 relative z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="font-medium uppercase tracking-wider relative z-10">
                  Subscribe on YouTube
                </span>
                <div className="absolute inset-0 bg-[var(--color-accent)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
            </div>
          </section>

          <div className="mt-auto">
            <Footer />
          </div>
        </div>
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

      {/* Video Modal */}
      <VideoModal
        videos={shorts}
        initialIndex={selectedVideoIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
