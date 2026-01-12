'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

function ContactContent() {
  const searchParams = useSearchParams();
  const directToForm = searchParams.get('direct') === 'form';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xdaaokyy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <>
      <section className="pt-32 pb-16 px-5 md:px-8">
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

      {/* Contact Options - only show if not direct to form */}
      {!directToForm && (
      <section className="pb-12 px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {/* WhatsApp Option */}
              <a
                href="https://wa.me/233503287620"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 border-2 border-gray-200 hover:border-[#25D366] transition-colors rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-charcoal)] group-hover:text-[#25D366] transition-colors">WhatsApp</p>
                  <p className="text-sm text-[var(--color-gray)]">Quick response, chat directly</p>
                </div>
              </a>

              {/* Form Option */}
              <div className="flex items-center gap-4 p-6 border-2 border-[var(--color-accent)] bg-[var(--color-accent)]/5 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-charcoal)]">Contact Form</p>
                  <p className="text-sm text-[var(--color-gray)]">Send a detailed message below</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      )}

      <section className="pb-32 px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={directToForm ? 0.1 : 0.2}>
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
              {formStatus === 'error' && (
                <p className="text-red-500 text-center">
                  Something went wrong. Please try again or use WhatsApp.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default function Contact() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-[family-name:var(--font-dm-sans)]">
      <Navigation />

      <div className="flex-1">
        <Suspense fallback={
          <div className="pt-32 pb-16 px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="animate-pulse">
                <div className="h-12 bg-gray-200 rounded w-3/4 mb-8"></div>
                <div className="w-16 h-0.5 bg-gray-200 mb-8"></div>
                <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        }>
          <ContactContent />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}
