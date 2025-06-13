import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NeuralNetwork } from './NeuralNetwork';

export const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const techWords = ['Machine Learning', 'AGI', 'Augmented Intelligence', 'Neural Networks', 'Deep Learning'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % techWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [techWords.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian">
      {/* 3D Neural Network Background */}
      <NeuralNetwork />
      
      {/* Performance grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-5" />
      
      {/* Main Content */}
      <div className="relative z-10 container-luxury text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Tech label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-24 bg-champagne" />
            <p className="text-champagne text-xs tracking-[0.3em] uppercase font-mono">
              Engineering Tomorrow's Intelligence
            </p>
            <div className="h-px w-24 bg-champagne" />
          </motion.div>

          {/* Main headline with glitch effect */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-massive font-normal leading-none mb-8 tracking-tech"
          >
            <span className="block text-gradient-gold">BOWERY</span>
            <span className="block text-arctic mt-4 text-hero">CREATIVE</span>
          </motion.h1>

          {/* Dynamic tech words */}
          <div className="h-20 flex items-center justify-center mb-12">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-electric text-2xl md:text-3xl font-mono tracking-wide"
                data-text={techWords[currentWord]}
              >
                {techWords[currentWord]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Performance metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
          >
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-mono text-champagne mb-2">$4.7B</p>
              <p className="text-xs uppercase tracking-wide text-racing-silver">Revenue Generated</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-mono text-champagne mb-2">98%</p>
              <p className="text-xs uppercase tracking-wide text-racing-silver">AI Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-mono text-champagne mb-2">0.3ms</p>
              <p className="text-xs uppercase tracking-wide text-racing-silver">Response Time</p>
            </div>
          </motion.div>

          {/* Sophisticated subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-titanium text-xl md:text-2xl font-light max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Full-stack development meets artificial intelligence. 
            <span className="block mt-2 text-racing-silver">
              Custom AI infrastructure, machine learning solutions, and data synthesis at scale.
            </span>
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="btn-performance group">
              <span className="relative z-10 flex items-center gap-2">
                Accelerate Your Vision
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="btn-stealth">
              View Performance
            </button>
          </motion.div>
        </motion.div>

        {/* Advanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs uppercase tracking-wide text-racing-silver">Scroll to Explore</p>
            <div className="w-6 h-10 border border-champagne rounded-full p-1">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-champagne rounded-full mx-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Racing stripes */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent race-line" />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-champagne/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-champagne/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-champagne/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-champagne/20" />
    </section>
  );
};