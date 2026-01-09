"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // All photos - simple flat list
  const photos = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1468234847176-28606331216a?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
  ];

  // Desktop photos with captions
  const allPhotos = [
    { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=600&fit=crop", caption: "Madison Square Garden", location: "New York, NY" },
    { image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop", caption: "Sold Out Show", location: "Los Angeles, CA" },
    { image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&h=600&fit=crop", caption: "Comedy Festival", location: "Montreal, QC" },
    { image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&h=600&fit=crop", caption: "Backstage Moments", location: "Chicago, IL" },
    { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop", caption: "Fan Meet & Greet", location: "Austin, TX" },
    { image: "https://images.unsplash.com/photo-1468234847176-28606331216a?w=600&h=600&fit=crop", caption: "Tour Life", location: "Miami, FL" },
    { image: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?w=600&h=600&fit=crop", caption: "Studio Recording", location: "New York, NY" },
    { image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&h=600&fit=crop", caption: "Opening Night", location: "Las Vegas, NV" },
    { image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=600&fit=crop", caption: "Special Guest", location: "San Francisco, CA" },
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
              Behind The Scenes
            </p>
            <h1 className="text-3xl font-[family-name:var(--font-fraunces)] font-bold text-white animate-slide-up">
              Gallery
            </h1>
          </section>

          {/* Simple Photo Grid */}
          <section className="p-3">
            <div className="grid grid-cols-3 gap-1">
              {photos.map((photo, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <img
                    src={photo}
                    alt={`Gallery photo ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Instagram CTA */}
          <section className="px-5 py-6">
            <a
              href="https://instagram.com/papayaw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
              <span className="font-medium">Follow on Instagram</span>
            </a>
          </section>
        </main>
      ) : (
        /* ===== DESKTOP LAYOUT ===== */
        <>
          <section className="pt-32 pb-16 px-8">
            <div className="max-w-7xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-4">
                Behind The Scenes
              </p>
              <h1 className="text-6xl md:text-7xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-6">
                Gallery
              </h1>
              <div className="w-16 h-0.5 bg-[var(--color-accent)] mb-6" />
              <p className="text-xl text-[var(--color-gray)] max-w-2xl">
                Behind-the-scenes moments, show highlights, and tour memories.
              </p>
            </div>
          </section>

          <section className="pb-32 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {allPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square bg-[var(--color-light-gray)] overflow-hidden cursor-pointer"
                  >
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-[family-name:var(--font-fraunces)] font-semibold text-lg mb-1">
                        {photo.caption}
                      </h3>
                      <p className="text-sm opacity-90">{photo.location}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-16">
                <a
                  href="https://instagram.com/papayaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                  </svg>
                  <span className="font-medium uppercase tracking-wider">Follow on Instagram</span>
                </a>
              </div>
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
