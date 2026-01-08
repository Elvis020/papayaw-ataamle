"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import ScrollToTop from "../components/ScrollToTop";

export default function Shows() {
  const shows = [
    {
      date: "Jan 15",
      year: "2026",
      venue: "Comedy Cellar",
      city: "New York, NY",
    },
    {
      date: "Jan 22",
      year: "2026",
      venue: "The Laugh Factory",
      city: "Los Angeles, CA",
    },
    {
      date: "Feb 03",
      year: "2026",
      venue: "Zanies Comedy Club",
      city: "Chicago, IL",
    },
    { date: "Feb 14", year: "2026", venue: "Comedy Works", city: "Denver, CO" },
    {
      date: "Feb 28",
      year: "2026",
      venue: "Cap City Comedy",
      city: "Austin, TX",
    },
    {
      date: "Mar 12",
      year: "2026",
      venue: "Helium Comedy Club",
      city: "Portland, OR",
    },
    {
      date: "Mar 25",
      year: "2026",
      venue: "Improv Comedy Club",
      city: "San Francisco, CA",
    },
    {
      date: "Apr 08",
      year: "2026",
      venue: "Comedy Store",
      city: "Los Angeles, CA",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      <section className="pt-32 pb-24 px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h1 className="text-6xl md:text-7xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-8">
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
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
