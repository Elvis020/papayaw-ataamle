'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      <section className="pt-32 pb-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-fraunces)] font-bold text-[var(--color-charcoal)] mb-8">
              Get in Touch
            </h1>
            <div className="w-16 h-0.5 bg-[var(--color-accent)] mb-8" />
            <p className="text-xl text-[var(--color-gray)] max-w-2xl">
              Interested in booking me for your event, venue, or exploring partnership opportunities?
              Let's talk.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32 px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--color-gray)] mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 bg-transparent text-[var(--color-charcoal)] focus:border-[var(--color-accent)] focus:outline-none transition-colors text-lg"
                  placeholder="Papa Yaw Ataamle"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[var(--color-gray)] mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 bg-transparent text-[var(--color-charcoal)] focus:border-[var(--color-accent)] focus:outline-none transition-colors text-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[var(--color-gray)] mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 bg-transparent text-[var(--color-charcoal)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none text-lg"
                  placeholder="Tell me about your event, brand partnership, or booking inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="group relative w-full bg-[var(--color-charcoal)] text-white py-6 text-sm uppercase tracking-widest overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {formStatus === 'sending'
                    ? 'Sending...'
                    : formStatus === 'success'
                    ? 'Message Sent!'
                    : 'Send Message'}
                </span>
                <div className="absolute inset-0 bg-[var(--color-accent)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>

              {formStatus === 'success' && (
                <p className="text-[var(--color-accent)] text-center">
                  Thanks for reaching out. I'll respond soon.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
