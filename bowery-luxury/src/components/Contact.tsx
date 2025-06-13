import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
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

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-16"
          >
            {/* Email */}
            <div>
              <p className="text-refined text-bowery-gray-600 mb-4">Email</p>
              <a 
                href="mailto:hello@bowerycreative.com" 
                className="text-xl md:text-2xl font-light hover:text-bowery-accent transition-colors duration-300"
              >
                hello@bowerycreative.com
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="text-refined text-bowery-gray-600 mb-4">Location</p>
              <p className="text-xl md:text-2xl font-light">
                New York City
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-24"
          >
            <a 
              href="mailto:hello@bowerycreative.com?subject=New Project Inquiry" 
              className="btn-primary inline-block"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};