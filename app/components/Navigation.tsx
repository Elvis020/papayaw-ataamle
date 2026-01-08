'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/videos', label: 'Videos' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/brands', label: 'Brands' },
    { href: '/shows', label: 'Shows' },
    { href: '/contact', label: 'Contact', isAccent: true },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-4'
            : 'bg-white/95 backdrop-blur-md py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-accent)] transition-colors"
          >
            Papa Yaw Ataamle
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-10 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors relative group ${
                  link.isAccent
                    ? isActive(link.href)
                      ? 'text-[var(--color-accent)] font-medium'
                      : 'text-[var(--color-accent)] hover:text-[#a33d1e] font-medium'
                    : isActive(link.href)
                    ? 'text-[var(--color-charcoal)]'
                    : 'text-[var(--color-gray)] hover:text-[var(--color-charcoal)]'
                }`}
              >
                {link.label}
                {!link.isAccent && (
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 ${
                      isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[var(--color-charcoal)] transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[var(--color-charcoal)] transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[var(--color-charcoal)] transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg py-4 border-b border-gray-100 transition-colors ${
                    link.isAccent
                      ? 'text-[var(--color-accent)] font-medium'
                      : isActive(link.href)
                      ? 'text-[var(--color-charcoal)] font-semibold'
                      : 'text-[var(--color-gray)]'
                  }`}
                  style={{
                    animation: mobileMenuOpen
                      ? `slideInRight 0.5s ease-out ${index * 0.1}s backwards`
                      : 'none',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div
              className="mt-auto pb-8 text-center text-sm text-[var(--color-gray)]"
              style={{
                animation: mobileMenuOpen ? 'fadeIn 0.5s ease-out 0.6s backwards' : 'none',
              }}
            >
              <p>© {new Date().getFullYear()} Papa Yaw Ataamle</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
