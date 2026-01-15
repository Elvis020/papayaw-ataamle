"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef, Suspense } from "react";

function LoadingBarInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Reset loading state when route changes
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsLoading(false);
    setProgress(0);
  }, [pathname, searchParams]);

  // Fake progress animation
  useEffect(() => {
    if (isLoading) {
      setProgress(0);

      // Quick start
      setTimeout(() => setProgress(30), 50);

      // Gradual progress with diminishing speed
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            // Slow down near the end
            return prev + 0.5;
          } else if (prev >= 80) {
            return prev + 1;
          } else if (prev >= 60) {
            return prev + 2;
          } else {
            return prev + 4;
          }
        });
      }, 300);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isLoading]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.href) {
        // Check if it's an internal link (same origin)
        try {
          const url = new URL(anchor.href);
          const isInternal =
            url.origin === window.location.origin &&
            url.pathname !== pathname;

          // Start loading animation for internal navigation
          if (isInternal && !anchor.target) {
            console.log('🚀 Starting navigation loading bar to:', url.pathname);
            setIsLoading(true);
          }
        } catch (err) {
          // Invalid URL, ignore
          console.log('Invalid URL clicked');
        }
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="loading-bar-container">
      <div
        className="loading-bar-fill"
        style={{ width: `${Math.min(progress, 99)}%` }}
      />
    </div>
  );
}

export default function TopLoadingBar() {
  return (
    <Suspense fallback={null}>
      <LoadingBarInner />
    </Suspense>
  );
}
