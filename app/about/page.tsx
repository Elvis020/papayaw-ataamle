"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import ScrollToTop from "../components/ScrollToTop";

export default function About() {
  const [isMobile, setIsMobile] = useState(true);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Stats data
  const stats = [
    { number: "10+", label: "Years" },
    { number: "500+", label: "Shows" },
    { number: "10M+", label: "Followers" },
    { number: "15+", label: "Partners" },
  ];

  // Achievements data for accordion
  const achievements = [
    {
      id: "television",
      title: "Television",
      items: ["The Tonight Show", "Comedy Central", "Late Night appearances"],
    },
    {
      id: "venues",
      title: "Venues",
      items: ["Comedy Cellar NYC", "Just for Laughs", "500+ shows nationwide"],
    },
    {
      id: "digital",
      title: "Digital",
      items: ["10M+ social followers", "100M+ video views", "Weekly podcast"],
    },
    {
      id: "brands",
      title: "Brands",
      items: ["Nike Partnership", "Netflix Specials", "15+ collaborations"],
    },
  ];

  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      {isMobile ? (
        /* ===== MOBILE LAYOUT ===== */
        <main className="pb-8">
          {/* Header with Photo */}
          <section className="relative bg-[var(--color-charcoal)]">
            <div className="relative h-[50vh] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                alt="Papa Yaw Ataamle"
                className="w-full h-full object-cover animate-fade-in"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[var(--color-charcoal)]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 pb-6">
                <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-1 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  The Story
                </p>
                <h1 className="text-3xl font-[family-name:var(--font-fraunces)] font-bold text-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  About Me
                </h1>
              </div>
            </div>
          </section>

          {/* Stats Row */}
          <section className="py-4 px-5 border-b border-gray-100">
            <div className="flex justify-between animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)]">
                    {stat.number}
                  </div>
                  <div className="text-[10px] text-[var(--color-gray)] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bio Summary */}
          <section className="px-5 py-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-[var(--color-charcoal)] leading-relaxed mb-4">
              Stand-up comedian with over a decade of experience, blending sharp
              observational humor with personal storytelling. Featured at Comedy
              Cellar NYC, Just for Laughs, and major late-night shows.
            </p>
            <p className="text-sm text-[var(--color-gray)] leading-relaxed">
              Digital creator connecting with millions through social media,
              podcasts, and viral video content.
            </p>
          </section>

          {/* Achievements Accordion */}
          <section className="px-5 pb-6">
            <h2 className="text-xs uppercase tracking-widest text-[var(--color-gray)] mb-3">
              Highlights
            </h2>
            <div className="space-y-2">
              {achievements.map((section) => (
                <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)]">
                      {section.title}
                    </span>
                    <svg
                      className={`w-5 h-5 text-[var(--color-gray)] transition-transform ${expandedSection === section.id ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedSection === section.id && (
                    <div className="px-4 pb-4 pt-0">
                      <ul className="space-y-1">
                        {section.items.map((item, i) => (
                          <li key={i} className="text-sm text-[var(--color-gray)] flex items-center gap-2">
                            <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Social Links */}
          <section className="px-5 py-4">
            <div className="flex gap-3">
              <a
                href="https://youtube.com/@papayaw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-600 text-white rounded-lg text-sm font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a
                href="https://instagram.com/papayaw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg text-sm font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
                Instagram
              </a>
            </div>
          </section>
        </main>
      ) : (
        /* ===== DESKTOP LAYOUT ===== */
        <>
          {/* Hero Section - Asymmetric Layout */}
          <section className="pt-32 px-8 pb-0 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left Column - Title */}
                <div className="lg:col-span-7">
                  <ScrollReveal>
                    <div className="relative">
                      <h1 className="text-[clamp(4rem,12vw,10rem)] font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] leading-[0.9] mb-8">
                        About
                        <br />
                        <span className="text-[var(--color-accent)]">Me</span>
                      </h1>
                      <div className="absolute -bottom-4 left-0 w-32 h-1 bg-[var(--color-accent)]" />
                    </div>
                  </ScrollReveal>
                </div>

                {/* Right Column - Image overlapping */}
                <div className="lg:col-span-5 relative">
                  <ScrollReveal delay={0.2}>
                    <div className="relative lg:absolute lg:-top-20 lg:right-0 w-full lg:w-[400px]">
                      <div className="aspect-[3/4] bg-[var(--color-light-gray)] rounded-sm overflow-hidden relative">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                          alt="Papa Yaw Ataamle"
                          className="w-full h-full object-cover"
                        />
                        {/* Decorative element */}
                        <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-[var(--color-accent)] rounded-sm" />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="py-16 px-8">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal delay={0.3}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-200">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl md:text-5xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-[var(--color-gray)] uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Story Section - Two Column Layout */}
          <section className="py-16 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Left Column */}
                <ScrollReveal delay={0.1}>
                  <div>
                    <h2 className="text-sm uppercase tracking-widest text-[var(--color-gray)] mb-6">
                      The Journey
                    </h2>
                    <p className="text-xl text-[var(--color-charcoal)] leading-relaxed mb-8">
                      I've been performing stand-up comedy for over a decade,
                      bringing laughter to audiences across the country. My comedy
                      blends sharp observational humor with personal storytelling,
                      creating moments that resonate long after the show ends.
                    </p>
                    <p className="text-xl text-[var(--color-charcoal)] leading-relaxed">
                      Beyond the stage, I've built a thriving digital presence as a
                      content creator, connecting with millions through social
                      media, podcasts, and video content.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Right Column */}
                <ScrollReveal delay={0.2}>
                  <div>
                    <h2 className="text-sm uppercase tracking-widest text-[var(--color-gray)] mb-6">
                      The Work
                    </h2>
                    <p className="text-xl text-[var(--color-charcoal)] leading-relaxed mb-8">
                      My performances have been featured at the Comedy Cellar,
                      Caroline's on Broadway, and the Just for Laughs festival. I've
                      headlined tours, opened for industry legends, and created
                      content that's been viewed over 100 million times.
                    </p>
                    <p className="text-xl text-[var(--color-charcoal)] leading-relaxed">
                      My work spans comedy specials, brand collaborations, and
                      creative partnerships with leading companies, always with the
                      goal of connecting with audiences through authentic,
                      thoughtful humor.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Achievements Grid */}
          <section className="py-24 px-8">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal>
                <h2 className="text-sm uppercase tracking-widest text-[var(--color-gray)] mb-12">
                  Highlights
                </h2>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Television",
                    items: [
                      "The Tonight Show",
                      "Comedy Central",
                      "Late Night appearances",
                    ],
                  },
                  {
                    title: "Venues",
                    items: [
                      "Comedy Cellar NYC",
                      "Just for Laughs",
                      "500+ shows nationwide",
                    ],
                  },
                  {
                    title: "Digital",
                    items: [
                      "10M+ social followers",
                      "100M+ video views",
                      "Weekly podcast",
                    ],
                  },
                  {
                    title: "Brands",
                    items: [
                      "Nike Partnership",
                      "Netflix Specials",
                      "15+ collaborations",
                    ],
                  },
                  {
                    title: "Tours",
                    items: ["Headlined 5 tours", "50+ cities", "Sold-out shows"],
                  },
                  {
                    title: "Recognition",
                    items: [
                      "Festival awards",
                      "Industry acclaim",
                      "Growing fanbase",
                    ],
                  },
                ].map((section, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="p-8 border border-gray-200 hover:border-[var(--color-accent)] transition-colors group">
                      <h3 className="text-xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] mb-4">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-[var(--color-gray)] group-hover:text-[var(--color-charcoal)] transition-colors"
                          >
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          <Footer />
          <ScrollToTop />
        </>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.5s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-slide-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
