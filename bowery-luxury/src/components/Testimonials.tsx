import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { Card } from './ui/Card';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Chief Marketing Officer',
    company: 'CoolSculpting',
    image: '/img/testimonials/testimonial-1.jpg',
    quote: "Bowery's campaign strategy completely transformed our market position. Their deep understanding of the aesthetics industry combined with cutting-edge AI tools delivered results that exceeded our expectations by 215%.",
    stats: {
      roi: '243%',
      leads: '3.2M',
      conversion: '68%'
    },
    rating: 5,
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Founder & CEO',
    company: 'Premier Aesthetics Clinic',
    image: '/img/testimonials/testimonial-2.jpg',
    quote: "Implementing Sphere OS revolutionized our practice. The AI-driven workflow automation saved us countless hours while significantly improving our patient acquisition and retention rates.",
    stats: {
      timeSaved: '62%',
      growth: '47%',
      revenue: '$1.2M'
    },
    rating: 5,
  },
  {
    id: 3,
    name: 'Jennifer Martinez',
    role: 'VP of Sales',
    company: 'MiraDry',
    image: '/img/testimonials/testimonial-3.jpg',
    quote: "The RepSpheres platform transformed how our sales team operates. The AI-powered insights and automation have made our reps 3x more effective. It's like having a genius sales coach for every rep.",
    stats: {
      efficiency: '3x',
      deals: '+127%',
      cycle: '-40%'
    },
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <AnimatedSection className="section-padding bg-gradient-light">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-elegant-accent text-sm font-medium tracking-[0.3em] uppercase mb-4"
          >
            Client Success
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-elegant-dark mb-6"
          >
            Transformative Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-elegant-dark/60 max-w-3xl mx-auto"
          >
            Hear from industry leaders who have revolutionized their businesses
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card gradient="subtle" className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Quote Section */}
                  <div className="md:col-span-2">
                    <Quote className="w-12 h-12 text-elegant-accent/30 mb-6" />
                    <p className="text-xl md:text-2xl text-elegant-dark/90 font-light leading-relaxed mb-8">
                      {testimonials[currentIndex].quote}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(testimonials[currentIndex].stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl md:text-3xl font-display font-bold text-elegant-accent">
                            {value}
                          </div>
                          <div className="text-sm text-elegant-dark/60 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Author Section */}
                  <div className="flex flex-col items-center justify-center text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-elegant-accent/20"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-elegant-accent/20 to-elegant-cream" />
                    </motion.div>

                    <h4 className="text-xl font-display font-medium text-elegant-dark mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-elegant-accent text-sm mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-elegant-dark/60 text-sm mb-4">
                      {testimonials[currentIndex].company}
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-elegant-accent fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-elegant-dark/10 flex items-center justify-center hover:bg-elegant-dark/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-elegant-dark" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-elegant-accent'
                      : 'bg-elegant-dark/30 hover:bg-elegant-dark/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-elegant-dark/10 flex items-center justify-center hover:bg-elegant-dark/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-elegant-dark" />
            </motion.button>
          </div>
        </div>

        {/* Case Studies CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-elegant-dark/10"
        >
          <h3 className="text-2xl font-display font-medium text-elegant-dark mb-4">
            Want to see detailed case studies?
          </h3>
          <p className="text-elegant-dark/60 mb-8">
            Explore in-depth analyses of our most successful campaigns
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {['CoolSculpting Campaign', 'MiraDry Launch', 'Thermage Rebrand'].map((study, index) => (
              <motion.div
                key={study}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark rounded-lg p-6 hover:bg-elegant-dark/10 transition-colors cursor-pointer group"
              >
                <h4 className="text-elegant-dark mb-2 group-hover:text-elegant-accent transition-colors">
                  {study}
                </h4>
                <p className="text-sm text-elegant-dark/60 mb-4">
                  See how we generated ${(index + 1) * 100}M+ in revenue
                </p>
                <span className="text-elegant-accent text-sm font-medium">
                  Read Case Study →
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};