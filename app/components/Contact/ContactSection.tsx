'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-section" className="w-full py-20 px-4 md:px-8" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-archivo-black)' }}>
            Ready to <span className="text-amber-400">Commit?</span>
          </h2>
          <p className="text-white/70 text-sm md:text-base">
            Don't wait for tomorrow. Drop your details below, and one of our elite coaches will reach out to schedule your free facility tour and consultation
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="eg: John Doe"
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              style={{ backgroundColor: '#2C2C2C' }}
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-white font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="eg: 078 3260789"
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              style={{ backgroundColor: '#2C2C2C' }}
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="eg: JohnDoe@gmail.com"
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              style={{ backgroundColor: '#2C2C2C' }}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-6 rounded-full transition-colors duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Sending...' : 'Send Inquiry'}
            </button>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="text-center text-green-400 text-sm font-semibold">
              Thank you! We'll be in touch shortly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
