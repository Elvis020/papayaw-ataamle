"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import ScrollToTop from "../components/ScrollToTop";
import { upcomingShows, hasEvents } from "../data/events";

export default function Shows() {
  const shows = upcomingShows;

  return (
    <div className="bg-white min-h-screen flex flex-col font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      <div className="flex-1">
        <section className="pt-32 pb-24 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-8">
              Shows
            </h1>
            <div className="w-16 h-0.5 bg-[var(--color-accent)] mb-8" />
            <p className="text-xl text-[var(--color-gray)] max-w-2xl">
              Catch me live at these upcoming shows. Get your tickets before
              they sell out!
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32 px-8">
        <div className="max-w-5xl mx-auto">
          {hasEvents ? (
            <div className="space-y-1">
              {shows.map((show, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="group border-b border-gray-200 py-8 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-baseline gap-8">
                        <div className="text-sm text-[var(--color-gray)] font-mono min-w-[80px]">
                          {show.date}
                          <span className="ml-2 text-xs">{show.year}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] mb-1">
                            {show.venue}
                          </h3>
                          <p className="text-[var(--color-gray)]">{show.city}</p>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm text-[var(--color-accent)] hover:text-[#a33d1e] transition-colors font-medium group-hover:translate-x-1 inline-block transition-transform"
                      >
                        Get Tickets →
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <div className="bg-[var(--color-light-gray)] rounded-xl p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-[var(--color-charcoal)]/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-[var(--color-gray)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] mb-3">
                  No upcoming shows
                </h2>
                <p className="text-[var(--color-gray)] max-w-md mx-auto">
                  There are no scheduled shows at the moment. Check back soon for new dates and locations!
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
