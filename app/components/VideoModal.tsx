"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface VideoData {
  youtubeId: string;
}

interface VideoModalProps {
  videos: VideoData[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({
  videos,
  initialIndex,
  isOpen,
  onClose,
}: VideoModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isClosing, setIsClosing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentVideo = videos[currentIndex];

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsClosing(false);
    }
  }, [isOpen, initialIndex]);

  // Handle escape key and arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if ((e.key === "ArrowLeft" || e.key === "ArrowUp") && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
      if ((e.key === "ArrowRight" || e.key === "ArrowDown") && currentIndex < videos.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, videos.length]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  }, [onClose]);

  // Navigate to next/previous video
  const goToNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 transition-opacity duration-200 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
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

      {/* Main video container */}
      <div
        ref={containerRef}
        className="relative max-w-sm w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* YouTube Short */}
        <div className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            key={currentVideo.youtubeId}
            src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&loop=1&playlist=${currentVideo.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Tap zones for mobile navigation */}
          <div
            className="absolute top-0 left-0 w-1/3 h-full md:hidden z-30"
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            onTouchEnd={(e) => {
              e.stopPropagation();
              e.preventDefault();
              goToPrev();
            }}
          />
          <div
            className="absolute top-0 right-0 w-1/3 h-full md:hidden z-30"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            onTouchEnd={(e) => {
              e.stopPropagation();
              e.preventDefault();
              goToNext();
            }}
          />

          {/* Progress bars (stories style) */}
          <div className="absolute top-3 left-3 right-3 flex gap-1 z-40">
            {videos.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 flex-1 rounded-full transition-colors ${
                  i === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation arrows (desktop) */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute top-1/2 -left-14 -translate-y-1/2 w-10 h-10 hidden md:flex items-center justify-center text-white/60 hover:text-white transition-colors"
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
        {currentIndex < videos.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute top-1/2 -right-14 -translate-y-1/2 w-10 h-10 hidden md:flex items-center justify-center text-white/60 hover:text-white transition-colors"
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
      </div>
    </div>
  );
}
