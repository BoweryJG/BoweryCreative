import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'branding',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: 'branding',
        message: '',
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatedSection className="section-padding bg-gradient-soft">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-elegant-accent text-sm font-medium tracking-[0.3em] uppercase mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-elegant-dark mb-6"
          >
            Start Your Transformation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-elegant-dark/60 max-w-3xl mx-auto"
          >
            Ready to elevate your practice with sophisticated marketing strategies?
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card gradient="subtle" className="h-full">
              <h3 className="text-2xl font-display font-medium text-elegant-dark mb-8">
                Let's Create Something Extraordinary
              </h3>
              
              <div className="space-y-6 mb-12">
                <motion.a
                  href="mailto:jgolden@bowerycreativeagency.com"
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full bg-elegant-accent/10 flex items-center justify-center group-hover:bg-elegant-accent/20 transition-colors">
                    <Mail className="w-6 h-6 text-elegant-accent" />
                  </div>
                  <div>
                    <p className="text-elegant-dark/60 text-sm mb-1">Email</p>
                    <p className="text-elegant-dark group-hover:text-elegant-accent transition-colors">
                      jgolden@bowerycreativeagency.com
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full bg-elegant-accent/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-elegant-accent" />
                  </div>
                  <div>
                    <p className="text-elegant-dark/60 text-sm mb-1">Phone</p>
                    <p className="text-elegant-dark">Schedule a call</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full bg-elegant-accent/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-elegant-accent" />
                  </div>
                  <div>
                    <p className="text-elegant-dark/60 text-sm mb-1">Location</p>
                    <p className="text-elegant-dark">New York City</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8 border-t border-elegant-dark/10">
                <h4 className="text-lg font-display text-elegant-dark mb-4">
                  Why Choose Bowery?
                </h4>
                <ul className="space-y-3">
                  {[
                    '15 years of industry expertise',
                    'Proven track record of success',
                    'Advanced technology platform',
                    'Dedicated support team',
                    'Tailored strategic approach'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-elegant-dark/80"
                    >
                      <Sparkles className="w-4 h-4 text-elegant-accent mr-3" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card gradient="dark" className="relative overflow-hidden">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[600px]"
                >
                  <CheckCircle className="w-20 h-20 text-elegant-accent mb-6" />
                  <h3 className="text-2xl font-display text-elegant-dark mb-4">
                    Thank You!
                  </h3>
                  <p className="text-elegant-dark/60 text-center">
                    We'll be in touch within 24 hours to discuss your project.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-elegant-dark/60 text-sm mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-elegant-dark/5 border border-elegant-dark/20 rounded-lg text-elegant-dark placeholder-elegant-dark/40 focus:outline-none focus:border-elegant-accent transition-colors"
                        placeholder="Dr. Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-elegant-dark/60 text-sm mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-elegant-dark/5 border border-elegant-dark/20 rounded-lg text-elegant-dark placeholder-elegant-dark/40 focus:outline-none focus:border-elegant-accent transition-colors"
                        placeholder="jane@clinic.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-elegant-dark/60 text-sm mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-elegant-dark/5 border border-elegant-dark/20 rounded-lg text-elegant-dark placeholder-elegant-dark/40 focus:outline-none focus:border-elegant-accent transition-colors"
                        placeholder="Premier Aesthetics"
                      />
                    </div>
                    <div>
                      <label className="block text-elegant-dark/60 text-sm mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-elegant-dark/5 border border-elegant-dark/20 rounded-lg text-elegant-dark placeholder-elegant-dark/40 focus:outline-none focus:border-elegant-accent transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-elegant-dark/60 text-sm mb-2">
                      I'm interested in
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-elegant-dark/5 border border-elegant-dark/20 rounded-lg text-elegant-dark focus:outline-none focus:border-elegant-accent transition-colors"
                    >
                      <option value="branding">Branding & Creative Strategy</option>
                      <option value="ai">AI & Automation (Sphere OS)</option>
                      <option value="content">Content & Campaigns</option>
                      <option value="education">Education & Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-elegant-dark/60 text-sm mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-elegant-dark/5 border border-elegant-dark/20 rounded-lg text-elegant-dark placeholder-elegant-dark/40 focus:outline-none focus:border-elegant-accent transition-colors resize-none"
                      placeholder="Tell us about your goals and challenges..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-elegant-white/30 border-t-elegant-white rounded-full animate-spin mr-2" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};