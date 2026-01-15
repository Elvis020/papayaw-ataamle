"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // All photos
  const photos = [
    "/images/image001.webp",
    "/images/image002.webp",
    "/images/image003.webp",
    "/images/image004.webp",
    "/images/image005.webp",
    "/images/image006.webp",
    "/images/image007.webp",
    "/images/image035.webp",
    "/images/image051.webp",
    "/images/image00001.webp",
    "/images/image00002.webp",
    "/images/image00003.webp",
    "/images/image00004.webp",
    "/images/image00005.webp",
    "/images/image00006.webp",
    "/images/image00007.webp",
    "/images/image00008.webp",
    "/images/image00009.webp",
    "/images/image00010.webp",
    "/images/image00011.webp",
    "/images/image00012.webp",
  ];

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
    setModalImageLoaded(false);
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalImageLoaded(false);
  }, []);

  const goToNext = useCallback(() => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setModalImageLoaded(false);
    }
  }, [currentIndex, photos.length]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setModalImageLoaded(false);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, goToNext, goToPrev, closeModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // Auto-scroll current thumbnail into view
  useEffect(() => {
    if (modalOpen && thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex, modalOpen]);

  return (
    <div className="bg-white min-h-screen flex flex-col font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      {isMobile ? (
        /* ===== MOBILE LAYOUT ===== */
        <main className="pb-8 flex-1 flex flex-col">
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
                <div
                  key={i}
                  className="aspect-square overflow-hidden cursor-pointer relative"
                  onClick={() => openModal(i)}
                >
                  {!loadedImages.has(i) && (
                    <div className="absolute inset-0 shimmer" />
                  )}
                  <img
                    src={photo}
                    alt={`Gallery photo ${i + 1}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      loadedImages.has(i) ? "opacity-100" : "opacity-0"
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(i)}
                  />
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
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-[var(--color-light-gray)] overflow-hidden cursor-pointer relative"
                    onClick={() => openModal(index)}
                  >
                    {!loadedImages.has(index) && (
                      <div className="absolute inset-0 shimmer" />
                    )}
                    <img
                      src={photo}
                      alt={`Gallery photo ${index + 1}`}
                      className={`w-full h-full object-cover hover:scale-105 transition-all duration-500 ${
                        loadedImages.has(index) ? "opacity-100" : "opacity-0"
                      }`}
                      loading="lazy"
                      onLoad={() => handleImageLoad(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      )}

      {/* Image Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-50 text-white/60 text-sm">
            {currentIndex + 1} / {photos.length}
          </div>

          {/* Main image */}
          <div
            className="relative max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {!modalImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-3xl aspect-[4/3] shimmer-dark rounded-lg" />
              </div>
            )}
            <img
              src={photos[currentIndex]}
              alt={`Gallery photo ${currentIndex + 1}`}
              className={`max-w-full max-h-[85vh] object-contain transition-opacity duration-300 ${
                modalImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setModalImageLoaded(true)}
            />
          </div>

          {/* Navigation arrows */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          {currentIndex < photos.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full"
            >
              <svg
                className="w-8 h-8"
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
            </button>
          )}

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl">
            <div className="flex gap-2 overflow-x-auto pb-2 px-2 scroll-smooth scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent hover:scrollbar-thumb-white/50">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  ref={(el) => {
                    thumbnailRefs.current[i] = el;
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(i);
                    setModalImageLoaded(false);
                  }}
                  className={`flex-shrink-0 w-16 h-16 overflow-hidden rounded transition-all relative ${
                    i === currentIndex
                      ? "ring-2 ring-white opacity-100"
                      : "opacity-50 hover:opacity-75"
                  }`}
                >
                  {!loadedImages.has(i) && (
                    <div className="absolute inset-0 shimmer-dark" />
                  )}
                  <img
                    src={photo}
                    alt={`Thumbnail ${i + 1}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      loadedImages.has(i) ? "opacity-100" : "opacity-0"
                    }`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
