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
    "/images/image001.jpeg",
    "/images/image035.jpeg",
    "/images/image051.jpeg",
    "/images/image00005.jpeg",
  ];

  // Desktop photos with captions
  const allPhotos = [
    {
      image: "/images/image001.jpeg",
      caption: "On Stage",
      location: "Accra, Ghana",
    },
    {
      image: "/images/image035.jpeg",
      caption: "Comedy Night",
      location: "Accra, Ghana",
    },
    {
      image: "/images/image051.jpeg",
      caption: "Backstage Moments",
      location: "Accra, Ghana",
    },
    {
      image: "/images/image00005.jpeg",
      caption: "Fan Meet & Greet",
      location: "Accra, Ghana",
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
              Gallery
            </h1>
            <div className="w-12 h-0.5 bg-[var(--color-accent)] mb-4" />
            <p className="text-sm text-[var(--color-gray)]">Photos & Moments</p>
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

          <Footer />
        </main>
      ) : (
        /* ===== DESKTOP LAYOUT ===== */
        <>
          <section className="pt-32 pb-16 px-5 md:px-8">
            <div className="max-w-7xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-4">
                Photos & Moments
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-6">
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
