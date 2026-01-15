"use client";

import Image from "next/image";
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
            <div className="space-y-8">
              {shows.map((show, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="group border border-gray-200 rounded-lg overflow-hidden hover:border-[var(--color-accent)] transition-colors">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Flyer Image */}
                      {show.flyer && (
                        <div className="md:w-64 h-64 md:h-auto relative bg-gray-100 shrink-0">
                          <Image
                            src={show.flyer}
                            alt={`${show.venue} flyer`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 256px"
                          />
                        </div>
                      )}

                      {/* Event Details */}
                      <div className="flex-1 p-6 md:py-8">
                        <div className="flex flex-col h-full">
                          <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-4">
                            {show.venue}
                          </h3>

                          {/* Schedule Info */}
                          <div className="space-y-2 mb-6">
                            {show.location && (
                              <div className="flex items-center gap-2 text-[var(--color-gray)]">
                                <svg
                                  className="w-5 h-5 text-[var(--color-accent)]"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                <span>{show.location}</span>
                              </div>
                            )}
                            {show.recurring ? (
                              <>
                                <div className="flex items-center gap-2 text-[var(--color-charcoal)]">
                                  <svg
                                    className="w-5 h-5 text-[var(--color-accent)]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                  <span className="font-medium">
                                    {show.recurring.schedule}
                                  </span>
                                </div>
                                {show.recurring.time && (
                                  <div className="flex items-center gap-2 text-[var(--color-gray)]">
                                    <svg
                                      className="w-5 h-5 text-[var(--color-accent)]"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    <span>{show.recurring.time}</span>
                                  </div>
                                )}
                              </>
                            ) : (
                              <div className="flex items-center gap-2 text-[var(--color-charcoal)]">
                                <svg
                                  className="w-5 h-5 text-[var(--color-accent)]"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                <span className="font-medium">
                                  {show.date} {show.year}
                                </span>
                              </div>
                            )}
                            {show.rate && (
                              <div className="flex items-center gap-2 text-[var(--color-accent)] font-semibold">
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                                  />
                                </svg>
                                <span>{show.rate}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
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
