"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import ScrollToTop from "../components/ScrollToTop";
import Link from "next/link";

export default function Brands() {
  const partnerships = [
    {
      name: "KS Electricals",
      url: "http://kselectricalsgh.com/",
      description:
        "Located in the vibrant heart of Accra, Ghana, our company offers unparalleled lighting solutions for residential, commercial, and corporate clients.",
      image: "/images/brands/image00003.jpeg",
      role: "Creative Collaborator",
      imagePosition: "center 40%",
    },
    {
      name: "Kantanka Immulate Herbal Supplement",
      url: "https://www.kantankafarms.com/product-page/immulate-herbal-supplement",
      description:
        "Immulate Herbal Supplement is the maiden product from KANTANKA HERBAL PHARMACEUTICALS AND RESEARCH CENTRE (KHPRC).",
      image: "/images/brands/image00004.jpeg",
      role: "Campaign Ambassador",
      imagePosition: "center 20%",
    },
    {
      name: "Benjamin Cargo Logistics",
      url: "https://www.benjamincargo.com/",
      description:
        "Benjamin Cargo Logistics is a trusted logistics company in Ghana specializing in sea freight, air freight, warehousing, and container shipping.",
      image: "/images/brands/image00002.jpeg",
      role: "Brand Ambassador",
      imagePosition: "center 20%",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      <div className="flex-1">
        <section className="pt-32 pb-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-8">
              Brand Partnerships
            </h1>
            <div className="w-16 h-0.5 bg-[var(--color-accent)] mb-8" />
            <p className="text-xl text-[var(--color-gray)] max-w-2xl">
              Collaborating with leading brands to create authentic, engaging
              content that connects with audiences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {partnerships.map((partnership, index) => {
              const CardContent = (
                <>
                  <div className="h-64 rounded-sm mb-6 overflow-hidden">
                    <img
                      src={partnership.image}
                      alt={partnership.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: partnership.imagePosition }}
                    />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                    {partnership.name}
                  </h3>
                  <p className="text-[var(--color-accent)] text-sm uppercase tracking-wider mb-2">
                    {partnership.role}
                  </p>
                  <p className="text-[var(--color-gray)] leading-relaxed mb-3">
                    {partnership.description}
                  </p>
                  {partnership.url && (
                    <span className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] group-hover:underline">
                      Visit Website
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  )}
                </>
              );

              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  {partnership.url ? (
                    <a
                      href={partnership.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <div className="group">{CardContent}</div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="text-center mt-20 pt-20 border-t border-gray-200">
              <h2 className="text-3xl font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-charcoal)] mb-6">
                Interested in collaborating?
              </h2>
              <p className="text-[var(--color-gray)] mb-8 max-w-2xl mx-auto">
                I'm always open to creative partnerships and brand
                collaborations that align with my values and resonate with my
                audience.
              </p>
              <Link
                href="/contact"
                className="group relative inline-block border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] px-8 py-4 text-sm uppercase tracking-widest overflow-hidden hover:text-white hover:border-[var(--color-accent)] transition-colors duration-300"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-[var(--color-accent)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
