"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export default function LazyVideo({ src, className = "", poster }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Start as visible
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to play immediately
    const playVideo = () => {
      video.play().catch(() => {
        // Autoplay blocked - wait for user interaction
      });
    };

    // Play on load
    video.addEventListener("loadeddata", playVideo);

    // IntersectionObserver for pause/play on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    observer.observe(video);

    // Handle user interaction to enable autoplay
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (isVisible) {
          video.play().catch(() => {});
        }
      }
    };

    document.addEventListener("touchstart", handleInteraction, { once: true });
    document.addEventListener("click", handleInteraction, { once: true });

    return () => {
      observer.disconnect();
      video.removeEventListener("loadeddata", playVideo);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
    };
  }, [isVisible, hasInteracted]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
    />
  );
}
