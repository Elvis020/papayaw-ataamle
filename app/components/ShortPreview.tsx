"use client";

import { useState } from "react";

interface ShortPreviewProps {
  youtubeId: string;
  onClick: () => void;
  className?: string;
}

export default function ShortPreview({ youtubeId, onClick, className = "" }: ShortPreviewProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[var(--color-charcoal)] cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Loading skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-400 via-gray-300 to-gray-200" />
        </div>
      )}

      {/* Thumbnail as fallback for slow connections */}
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt="YouTube Short"
        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
      />

      {/* YouTube iframe - always autoplay muted */}
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&playsinline=1`}
        className="w-full h-full absolute inset-0 z-10"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{ pointerEvents: "none" }}
      />

      {/* Clickable overlay */}
      <div className="absolute inset-0 z-20" />
    </div>
  );
}
