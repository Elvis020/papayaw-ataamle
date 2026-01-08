'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import ScrollToTop from '../components/ScrollToTop';

export default function About() {
  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Navigation />

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
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-8xl">🎭</span>
                    </div>
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
              {[
                { number: '10+', label: 'Years' },
                { number: '500+', label: 'Shows' },
                { number: '10M+', label: 'Followers' },
                { number: '15+', label: 'Partners' },
              ].map((stat, index) => (
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
                  I've been performing stand-up comedy for over a decade, bringing laughter to
                  audiences across the country. My comedy blends sharp observational humor with
                  personal storytelling, creating moments that resonate long after the show ends.
                </p>
                <p className="text-xl text-[var(--color-charcoal)] leading-relaxed">
                  Beyond the stage, I've built a thriving digital presence as a content creator,
                  connecting with millions through social media, podcasts, and video content.
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
                  My performances have been featured at the Comedy Cellar, Caroline's on Broadway,
                  and the Just for Laughs festival. I've headlined tours, opened for industry
                  legends, and created content that's been viewed over 100 million times.
                </p>
                <p className="text-xl text-[var(--color-charcoal)] leading-relaxed">
                  My work spans comedy specials, brand collaborations, and creative partnerships
                  with leading companies, always with the goal of connecting with audiences through
                  authentic, thoughtful humor.
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
                title: 'Television',
                items: ['The Tonight Show', 'Comedy Central', 'Late Night appearances'],
              },
              {
                title: 'Venues',
                items: ['Comedy Cellar NYC', 'Just for Laughs', '500+ shows nationwide'],
              },
              {
                title: 'Digital',
                items: ['10M+ social followers', '100M+ video views', 'Weekly podcast'],
              },
              {
                title: 'Brands',
                items: ['Nike Partnership', 'Netflix Specials', '15+ collaborations'],
              },
              {
                title: 'Tours',
                items: ['Headlined 5 tours', '50+ cities', 'Sold-out shows'],
              },
              {
                title: 'Recognition',
                items: ['Festival awards', 'Industry acclaim', 'Growing fanbase'],
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

      {/* Philosophy Section - Offset Layout */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 lg:col-start-2">
              <ScrollReveal>
                <h2 className="text-4xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-6">
                  My Approach
                </h2>
                <div className="w-16 h-0.5 bg-[var(--color-accent)]" />
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal delay={0.2}>
                <p className="text-2xl text-[var(--color-charcoal)] leading-relaxed mb-8">
                  Comedy is a conversation, not a monologue. I believe in finding the truth in
                  absurdity and the humor in everyday life.
                </p>
                <p className="text-lg text-[var(--color-gray)] leading-relaxed">
                  Whether I'm on stage, creating content, or working with brands, my goal is always
                  the same: to create genuine connections through laughter. Because at the end of
                  the day, we're all just trying to make sense of this weird, wonderful world—and
                  sometimes the best way to do that is to laugh about it together.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
