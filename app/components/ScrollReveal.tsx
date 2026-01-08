'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile once on mount
    setIsMobile(window.innerWidth < 768);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '20px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mobile: simpler, faster animations
  const getTransform = () => {
    const distance = isMobile ? '15px' : '30px';
    if (direction === 'up') return `translateY(${distance})`;
    if (direction === 'down') return `translateY(-${distance})`;
    if (direction === 'left') return `translateX(${distance})`;
    if (direction === 'right') return `translateX(-${distance})`;
    return 'none';
  };

  // Mobile: shorter duration, no delays
  const duration = isMobile ? 0.4 : 0.8;
  const actualDelay = isMobile ? 0 : delay;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transition: `opacity ${duration}s ease-out ${actualDelay}s, transform ${duration}s ease-out ${actualDelay}s`,
      }}
    >
      {children}
    </div>
  );
}
