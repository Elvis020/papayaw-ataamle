'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import ScrollToTop from '../components/ScrollToTop';

export default function Gallery() {
  const photos = [
    { caption: 'Madison Square Garden', location: 'New York, NY' },
    { caption: 'Sold Out Show', location: 'Los Angeles, CA' },
    { caption: 'Comedy Festival', location: 'Montreal, QC' },
    { caption: 'Backstage Moments', location: 'Chicago, IL' },
    { caption: 'Fan Meet & Greet', location: 'Austin, TX' },
    { caption: 'Tour Life', location: 'Miami, FL' },
    { caption: 'Studio Recording', location: 'New York, NY' },
    { caption: 'Opening Night', location: 'Las Vegas, NV' },
    { caption: 'Special Guest', location: 'San Francisco, CA' },
    { caption: 'Theater Performance', location: 'Boston, MA' },
    { caption: 'Comedy Club', location: 'Seattle, WA' },
    { caption: 'Festival Headliner', location: 'Toronto, ON' },
  ];

  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      <section className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="text-6xl md:text-7xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-8">
              Gallery
            </h1>
            <div className="w-16 h-0.5 bg-[var(--color-accent)] mb-8" />
            <p className="text-xl text-[var(--color-gray)] max-w-2xl">
              Behind-the-scenes moments, show highlights, and tour memories.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="group relative aspect-square bg-[var(--color-light-gray)] rounded-sm overflow-hidden cursor-pointer">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl opacity-20">📸</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-[family-name:var(--font-fraunces)] font-semibold text-lg mb-1">
                      {photo.caption}
                    </h3>
                    <p className="text-sm opacity-90">{photo.location}</p>
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
