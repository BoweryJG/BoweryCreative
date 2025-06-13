import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bowery-white via-bowery-gray-50 to-bowery-white opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 container-bowery text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Small tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-bowery-gray-600 text-xs tracking-luxury uppercase mb-8"
          >
            Bowery Creative
          </motion.p>

          {/* Main headline - refined serif */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8"
          >
            <span className="block">Where Medical</span>
            <span className="block mt-2">Excellence Meets</span>
            <span className="block mt-2 text-bowery-accent">Digital Mastery</span>
          </motion.h1>

          {/* Minimalist subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-bowery-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            15 years of expertise. 200+ successful campaigns. $3.2B in revenue generated.
            <span className="block mt-2">Transform your practice with marketing that commands respect.</span>
          </motion.p>

          {/* Single, refined CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a 
              href="#contact" 
              className="btn-primary inline-block"
            >
              Begin Your Journey
            </a>
          </motion.div>
        </motion.div>

        {/* Minimal scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-bowery-gray-300 mx-auto">
            <motion.div
              animate={{ y: [0, 32, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-[1px] h-8 bg-bowery-black"
            />
          </div>
        </motion.div>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bowery-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
    </section>
  );
};