"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import ScrollToTop from "../components/ScrollToTop";
import { stats } from "../data/stats";

export default function About() {
  const [isMobile, setIsMobile] = useState(true);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [bioExpanded, setBioExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Achievement types
  type AchievementWithItems = {
    id: string;
    title: string;
    items: string[];
  };

  type AchievementWithSections = {
    id: string;
    title: string;
    sections: Array<{
      subtitle: string;
      items: string[];
    }>;
  };

  type Achievement = AchievementWithItems | AchievementWithSections;

  // Base achievements data
  const television: AchievementWithItems = {
    id: "television",
    title: "Television",
    items: [
      "Half Serious Show (GHOne tv)",
      "The hahaha show (Tarkwa)",
      "WMT Show 3fm - Radio",
    ],
  };

  const venues: AchievementWithItems = {
    id: "venues",
    title: "Venues",
    items: [
      "2927 comedy club (Accra)",
      "Comedy Express (Accra)",
      "Comedy Bar (Accra)",
      "Kumasi Comedy Show (Kumasi)",
      "Lemon Stand Comedy Club (Singapore)",
      "East Coast Comedy Club (Singapore)",
      "Jinx Comedy (Singapore)",
      "Jokeground (Togo)",
    ],
  };

  const digitalBrands: AchievementWithSections = {
    id: "digital-brands",
    title: "Digital & Brands",
    sections: [
      {
        subtitle: "Digital",
        items: ["100+ social followers"],
      },
      {
        subtitle: "Brands",
        items: ["5+ collaborations"],
      },
    ],
  };

  // Different ordering for mobile vs desktop
  const achievementsMobile: Achievement[] = [television, digitalBrands, venues];
  const achievementsDesktop: Achievement[] = [television, venues, digitalBrands];

  return (
    <div className="bg-white min-h-screen flex flex-col font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      {isMobile ? (
        /* ===== MOBILE LAYOUT ===== */
        <main className="pb-8 flex-1 flex flex-col">
          {/* Header with Photo */}
          <section className="relative bg-[var(--color-charcoal)]">
            <div className="relative h-[55vh] overflow-hidden">
              <img
                src="/images/image00005.webp"
                alt="Papa Yaw Ataamle"
                className="w-full h-full object-cover object-[50%_0%] animate-fade-in"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[var(--color-charcoal)]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 pb-6">
                <p
                  className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-1 animate-slide-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  The Story
                </p>
                <h1
                  className="text-3xl font-[family-name:var(--font-fraunces)] font-bold text-white animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  About Me
                </h1>
              </div>
            </div>
          </section>

          {/* Stats Row */}
          <section className="py-4 px-5 border-b border-gray-100">
            <div
              className="flex justify-between animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
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

          {/* Bio - Expandable on Mobile */}
          <section className="px-5 py-6">
            <div className="relative">
              {/* Content container */}
              <div
                className={`overflow-hidden transition-all ${
                  bioExpanded ? "max-h-[1000px] duration-500 ease-out" : "max-h-[280px] duration-200 ease-in"
                }`}
              >
                {/* The Journey */}
                <div className="mb-6">
                  <h2 className="text-xs uppercase tracking-widest text-[var(--color-gray)] mb-3">
                    The Journey
                  </h2>
                  <p className="text-sm text-[var(--color-charcoal)] leading-relaxed mb-3">
                    Papa Yaw Ataamle is a multi-award-winning stand-up
                    comedian, comic influencer, and brand communicator known
                    for transforming everyday realities into intelligent,
                    relatable humor that connects audiences across cultures.
                  </p>
                  <p className="text-sm text-[var(--color-charcoal)] leading-relaxed mb-3">
                    In 2025, he was named Comic Influencer of the Year at the
                    Ghana Comedy Awards, a recognition that reflects years of
                    consistency, growth, and impact. He has headlined four
                    comedy specials and performed on nearly every major comedy
                    stage in Ghana.
                  </p>
                  <p className="text-sm text-[var(--color-charcoal)] leading-relaxed">
                    His work has expanded beyond borders with the launch of
                    his international comedy world tour, which has already
                    recorded successful performances in Singapore and Togo,
                    marking a new chapter in taking Ghanaian comedy to global
                    audiences.
                  </p>
                </div>

                {/* The Work */}
                <div>
                  <h2 className="text-xs uppercase tracking-widest text-[var(--color-gray)] mb-3">
                    The Work
                  </h2>
                  <p className="text-sm text-[var(--color-charcoal)] leading-relaxed mb-3">
                    Beyond the stage, Papa Yaw Ataamle works with brands as a
                    trusted ambassador and strategic marketing partner. He
                    currently represents Kantanka Immulate Herbal Supplement,
                    KS Electricals, Benjamin Cargo Logistics, and Tealeys.
                    Through his digital marketing company, he helps brands
                    communicate effectively using humor, storytelling, and
                    insight that deliver measurable results.
                  </p>
                  <p className="text-sm text-[var(--color-charcoal)] leading-relaxed mb-3">
                    He has been featured on major media platforms including
                    TV3 Showbiz 360, GH One TV, Joy Prime, Adom TV, UTV,
                    Kantanka TV, and 3FM, and has appeared in national
                    advertising campaigns, including an Eazzy Paint TV
                    commercial.
                  </p>
                  <p className="text-sm text-[var(--color-charcoal)] leading-relaxed">
                    At the heart of his work is impact—making people laugh,
                    helping brands grow, and representing African comedy with
                    excellence on both local and international stages.
                  </p>
                </div>
              </div>

              {/* Gradient overlay when collapsed */}
              {!bioExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
              )}
            </div>

            {/* Show More/Less Button */}
            <button
              onClick={() => setBioExpanded(!bioExpanded)}
              className="mt-4 w-full py-3 text-sm uppercase tracking-wider text-[var(--color-accent)] font-medium flex items-center justify-center gap-2 hover:text-[var(--color-charcoal)] transition-colors"
            >
              {bioExpanded ? "Show Less" : "Show More"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  bioExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </section>

          {/* Achievements Grid */}
          <section className="px-5 pb-6">
            <h2 className="text-xs uppercase tracking-widest text-[var(--color-gray)] mb-3">
              Highlights
            </h2>
            <div className="grid grid-cols-2 gap-3 auto-rows-fr">
              {achievementsMobile.map((section) => (
                <div
                  key={section.id}
                  className={`border border-gray-200 rounded-lg p-4 ${
                    section.id === "venues" ? "col-span-2" : ""
                  }`}
                >
                  <h3 className="font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] mb-2">
                    {section.title}
                  </h3>

                  {/* Handle regular items or sections with subtitles */}
                  {'items' in section ? (
                    <ul className="space-y-1">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs text-[var(--color-gray)] flex items-start gap-2"
                        >
                          <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-3">
                      {section.sections.map((subsection, idx) => (
                        <div key={idx}>
                          <h4 className="text-xs font-semibold text-[var(--color-charcoal)] mb-1">
                            {subsection.subtitle}
                          </h4>
                          <ul className="space-y-1">
                            {subsection.items.map((item, i) => (
                              <li
                                key={i}
                                className="text-xs text-[var(--color-gray)] flex items-start gap-2"
                              >
                                <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full mt-1.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
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
          {/* Hero Section - Asymmetric Layout */}
          <section className="pt-32 px-5 md:px-8 pb-0 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left Column - Title */}
                <div className="lg:col-span-7">
                  <ScrollReveal>
                    <div className="relative">
                      <h1 className="text-4xl md:text-6xl lg:text-[clamp(4rem,12vw,10rem)] font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] leading-[0.9] mb-8">
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
                          src="/images/image00005.webp"
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
                      Papa Yaw Ataamle is a multi-award-winning stand-up
                      comedian, comic influencer, and brand communicator known
                      for transforming everyday realities into intelligent,
                      relatable humor that connects audiences across cultures.
                    </p>
                    <p className="text-xl text-[var(--color-charcoal)] leading-relaxed mb-8">
                      In 2025, he was named Comic Influencer of the Year at the
                      Ghana Comedy Awards, a recognition that reflects years of
                      consistency, growth, and impact. He has headlined four
                      comedy specials and performed on nearly every major comedy
                      stage in Ghana.
                    </p>
                    <p className="text-xl text-[var(--color-charcoal)] leading-relaxed">
                      His work has expanded beyond borders with the launch of
                      his international comedy world tour, which has already
                      recorded successful performances in Singapore and Togo,
                      marking a new chapter in taking Ghanaian comedy to global
                      audiences.
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
                      Beyond the stage, Papa Yaw Ataamle works with brands as a
                      trusted ambassador and strategic marketing partner. He
                      currently represents Kantanka Immulate Herbal Supplement,
                      KS Electricals, Benjamin Cargo Logistics, and Tealeys.
                      Through his digital marketing company, he helps brands
                      communicate effectively using humor, storytelling, and
                      insight that deliver measurable results.
                    </p>
                    <p className="text-xl text-[var(--color-charcoal)] leading-relaxed mb-8">
                      He has been featured on major media platforms including
                      TV3 Showbiz 360, GH One TV, Joy Prime, Adom TV, UTV,
                      Kantanka TV, and 3FM, and has appeared in national
                      advertising campaigns, including an Eazzy Paint TV
                      commercial.
                    </p>
                    <p className="text-xl text-[var(--color-charcoal)] leading-relaxed">
                      At the heart of his work is impact—making people laugh,
                      helping brands grow, and representing African comedy with
                      excellence on both local and international stages.
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

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {achievementsDesktop.map((section, index) => (
                  <ScrollReveal
                    key={index}
                    delay={index * 0.1}
                    className={section.id === "venues" ? "lg:col-span-2" : ""}
                  >
                    <div className="h-full p-8 border border-gray-200 hover:border-[var(--color-accent)] transition-colors group">
                      <h3 className="text-xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] mb-4">
                        {section.title}
                      </h3>

                      {/* Handle regular items or sections with subtitles */}
                      {'items' in section ? (
                        <ul
                          className={`space-y-2 ${section.id === "venues" ? "columns-2 gap-x-6" : ""}`}
                        >
                          {section.items.map((item, i) => (
                            <li
                              key={i}
                              className={`text-[var(--color-gray)] group-hover:text-[var(--color-charcoal)] transition-colors ${section.id === "venues" ? "break-inside-avoid" : ""}`}
                            >
                              • {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="space-y-4">
                          {section.sections.map((subsection, idx) => (
                            <div key={idx}>
                              <h4 className="text-sm font-semibold text-[var(--color-charcoal)] mb-2">
                                {subsection.subtitle}
                              </h4>
                              <ul className="space-y-2">
                                {subsection.items.map((item, i) => (
                                  <li
                                    key={i}
                                    className="text-[var(--color-gray)] group-hover:text-[var(--color-charcoal)] transition-colors"
                                  >
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-auto">
            <Footer />
          </div>
          <ScrollToTop />
        </div>
      )}

      <style jsx global>{`
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
