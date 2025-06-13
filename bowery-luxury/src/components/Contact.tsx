import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'Brand Strategy',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: 'Brand Strategy',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section id="contact" className="section-spacing">
      <div className="container-bowery">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Let's Begin
            </h2>
            <p className="text-lg text-bowery-gray-600 font-light">
              Ready to elevate your practice? We'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-refined text-bowery-gray-600 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-bowery-gray-300 focus:border-bowery-black transition-colors duration-300 outline-none"
                  placeholder="Dr. Jane Smith"
                />
              </div>
              <div>
                <label className="block text-refined text-bowery-gray-600 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-bowery-gray-300 focus:border-bowery-black transition-colors duration-300 outline-none"
                  placeholder="jane@clinic.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-refined text-bowery-gray-600 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-bowery-gray-300 focus:border-bowery-black transition-colors duration-300 outline-none"
                  placeholder="Premier Aesthetics"
                />
              </div>
              <div>
                <label className="block text-refined text-bowery-gray-600 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-bowery-gray-300 focus:border-bowery-black transition-colors duration-300 outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-refined text-bowery-gray-600 mb-2">Interest</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-bowery-gray-300 focus:border-bowery-black transition-colors duration-300 outline-none"
              >
                <option value="Brand Strategy">Brand Strategy</option>
                <option value="Digital Excellence">Digital Excellence</option>
                <option value="Content Creation">Content Creation</option>
                <option value="Campaign Management">Campaign Management</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-refined text-bowery-gray-600 mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-transparent border border-bowery-gray-300 focus:border-bowery-black transition-colors duration-300 outline-none resize-none"
                placeholder="Tell us about your goals and challenges..."
              />
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-bowery-accent"
              >
                Thank you for contacting us. We'll be in touch within 24 hours.
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600"
              >
                There was an error submitting your message. Please try again.
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-24 grid md:grid-cols-2 gap-16"
          >
            <div>
              <p className="text-refined text-bowery-gray-600 mb-4">Email</p>
              <a 
                href="mailto:hello@bowerycreative.com" 
                className="text-xl font-light hover:text-bowery-accent transition-colors duration-300"
              >
                hello@bowerycreative.com
              </a>
            </div>
            <div>
              <p className="text-refined text-bowery-gray-600 mb-4">Location</p>
              <p className="text-xl font-light">New York City</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};