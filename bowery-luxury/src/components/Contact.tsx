import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'AI Infrastructure',
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
        interest: 'AI Infrastructure',
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
    <section id="contact" className="section-luxury bg-gradient-to-b from-midnight to-obsidian relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />

      <div className="container-luxury relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-champagne" />
              <p className="text-champagne text-xs tracking-[0.3em] uppercase font-mono">
                Ignite Partnership
              </p>
              <div className="h-px w-20 bg-champagne" />
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal mb-8 tracking-tech">
              <span className="text-gradient-gold">Accelerate</span>
              <span className="block text-arctic mt-2">Your Vision</span>
            </h2>
            
            <p className="text-xl text-titanium font-light leading-relaxed max-w-3xl mx-auto">
              Ready to engineer tomorrow's intelligence? Let's discuss your project and build something extraordinary together.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-morphism p-8 md:p-12 space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-champagne mb-3 font-mono">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-racing-silver focus:border-champagne transition-colors duration-300 outline-none text-arctic placeholder-racing-silver"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-champagne mb-3 font-mono">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-racing-silver focus:border-champagne transition-colors duration-300 outline-none text-arctic placeholder-racing-silver"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-champagne mb-3 font-mono">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-racing-silver focus:border-champagne transition-colors duration-300 outline-none text-arctic placeholder-racing-silver"
                  placeholder="Tech Innovations Inc."
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-champagne mb-3 font-mono">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-racing-silver focus:border-champagne transition-colors duration-300 outline-none text-arctic placeholder-racing-silver"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-champagne mb-3 font-mono">Project Type</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-racing-silver focus:border-champagne transition-colors duration-300 outline-none text-arctic"
              >
                <option value="AI Infrastructure" className="bg-carbon text-arctic">AI Infrastructure</option>
                <option value="Machine Learning" className="bg-carbon text-arctic">Machine Learning</option>
                <option value="Full-Stack Development" className="bg-carbon text-arctic">Full-Stack Development</option>
                <option value="Data Analytics" className="bg-carbon text-arctic">Data Analytics</option>
                <option value="Process Automation" className="bg-carbon text-arctic">Process Automation</option>
                <option value="Custom AI Agents" className="bg-carbon text-arctic">Custom AI Agents</option>
                <option value="Creative Technology" className="bg-carbon text-arctic">Creative Technology</option>
                <option value="Other" className="bg-carbon text-arctic">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-champagne mb-3 font-mono">Project Details *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-racing-silver focus:border-champagne transition-colors duration-300 outline-none resize-none text-arctic placeholder-racing-silver"
                placeholder="Describe your project goals, technical requirements, and vision..."
              />
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-electric font-mono text-sm"
              >
                ✓ Message sent successfully. We'll respond within 24 hours.
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 font-mono text-sm"
              >
                ✗ Error sending message. Please try again.
              </motion.p>
            )}

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-performance ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Processing...' : 'Launch Project'}
                </span>
              </button>
              
              <div className="flex items-center gap-4 text-racing-silver text-sm">
                <div className="w-2 h-2 bg-electric rounded-full animate-pulse" />
                Response within 24 hours
              </div>
            </div>
          </motion.form>

          {/* Contact Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-24 grid md:grid-cols-3 gap-12"
          >
            <div className="text-center">
              <div className="w-16 h-16 border border-champagne mx-auto mb-4 flex items-center justify-center">
                <span className="text-champagne font-mono text-sm">@</span>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-champagne mb-2 font-mono">Email</p>
              <a 
                href="mailto:hello@bowerycreative.com" 
                className="text-arctic hover:text-champagne transition-colors duration-300"
              >
                hello@bowerycreative.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 border border-champagne mx-auto mb-4 flex items-center justify-center">
                <span className="text-champagne font-mono text-sm">NYC</span>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-champagne mb-2 font-mono">Location</p>
              <p className="text-arctic">New York City</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 border border-champagne mx-auto mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-electric rounded-full animate-pulse" />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-champagne mb-2 font-mono">Status</p>
              <p className="text-arctic">Available for Projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};