'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import ScrollToTop from '../components/ScrollToTop';

export default function Videos() {
  const videos = [
    { title: 'Late Night Set', venue: 'The Tonight Show', year: '2025' },
    { title: 'Festival Highlight', venue: 'Just for Laughs', year: '2024' },
    { title: 'Special Preview', venue: 'Comedy Central', year: '2024' },
    { title: 'Live Performance', venue: 'Comedy Cellar', year: '2023' },
    { title: 'Podcast Appearance', venue: 'Joe Rogan Experience', year: '2023' },
    { title: 'Stand-Up Special', venue: 'Netflix', year: '2022' },
  ];

  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      <section className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="text-6xl md:text-7xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-8">
              Videos
            </h1>
            <div className="w-16 h-0.5 bg-[var(--color-accent)] mb-8" />
            <p className="text-xl text-[var(--color-gray)] max-w-2xl">
              Watch my latest performances, comedy specials, and featured appearances.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {videos.map((video, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-[var(--color-light-gray)] rounded-sm overflow-hidden mb-6 relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          className="w-6 h-6 ml-1 text-[var(--color-charcoal)]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] mb-2">
                    {video.title}
                  </h3>
                  <p className="text-[var(--color-gray)]">
                    {video.venue} • {video.year}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="text-center mt-16">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[var(--color-charcoal)] hover:text-white transition-all"
              >
                View All on YouTube
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
