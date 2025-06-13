import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-bowery-gray-200">
      <div className="container-bowery py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-display text-3xl font-light mb-6">Bowery</h3>
            <p className="text-bowery-gray-600 font-light">
              Sophisticated marketing for forward-thinking medical professionals.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-right"
          >
            <nav className="space-y-2 mb-8">
              <a href="#work" className="block text-bowery-gray-600 hover:text-bowery-black transition-colors">
                Work
              </a>
              <a href="#services" className="block text-bowery-gray-600 hover:text-bowery-black transition-colors">
                Services
              </a>
              <a href="#contact" className="block text-bowery-gray-600 hover:text-bowery-black transition-colors">
                Contact
              </a>
            </nav>
            
            <p className="text-sm text-bowery-gray-400">
              © 2025 Bowery Creative
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};