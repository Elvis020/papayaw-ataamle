'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import ScrollToTop from '../components/ScrollToTop';
import Link from 'next/link';

export default function Brands() {
  const partnerships = [
    {
      brand: 'Nike',
      role: 'Brand Ambassador',
      description: 'Creating comedy content around sports culture and athlete lifestyle',
    },
    {
      brand: 'Netflix',
      role: 'Content Partner',
      description: 'Developing original comedy specials and behind-the-scenes content',
    },
    {
      brand: 'Apple',
      role: 'Creative Collaborator',
      description: 'Producing podcast series and exclusive digital content',
    },
    {
      brand: 'Coca-Cola',
      role: 'Campaign Ambassador',
      description: 'Multi-platform advertising and social media activations',
    },
    {
      brand: 'Samsung',
      role: 'Tech Partner',
      description: 'Product integration and innovative content creation',
    },
    {
      brand: 'Airbnb',
      role: 'Travel Ambassador',
      description: 'Showcasing unique stays and travel experiences with humor',
    },
  ];

  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      <section className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="text-6xl md:text-7xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-8">
              Brand Partnerships
            </h1>
            <div className="w-16 h-0.5 bg-[var(--color-accent)] mb-8" />
            <p className="text-xl text-[var(--color-gray)] max-w-2xl">
              Collaborating with leading brands to create authentic, engaging content that connects
              with audiences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {partnerships.map((partnership, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group">
                  <div className="aspect-video bg-[var(--color-light-gray)] rounded-sm mb-6 flex items-center justify-center hover:bg-[var(--color-charcoal)] transition-colors duration-300">
                    <span className="text-[var(--color-charcoal)] group-hover:text-white text-2xl font-[family-name:var(--font-fraunces)] font-bold transition-colors">
                      {partnership.brand}
                    </span>
                  </div>
                  <h3 className="text-[var(--color-accent)] text-sm uppercase tracking-wider mb-2">
                    {partnership.role}
                  </h3>
                  <p className="text-[var(--color-charcoal)] leading-relaxed">
                    {partnership.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="text-center mt-20 pt-20 border-t border-gray-200">
              <h2 className="text-3xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] mb-6">
                Interested in collaborating?
              </h2>
              <p className="text-[var(--color-gray)] mb-8 max-w-2xl mx-auto">
                I'm always open to creative partnerships and brand collaborations that align with
                my values and resonate with my audience.
              </p>
              <Link
                href="/contact"
                className="inline-block border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[var(--color-charcoal)] hover:text-white transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
