import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    phase: 'Discovery',
    title: 'Understanding Your Vision',
    description: 'We begin with deep listening. Understanding your practice, your patients, and your aspirations forms the foundation of everything we create.',
    duration: '2 weeks',
  },
  {
    phase: 'Strategy',
    title: 'Crafting Your Blueprint',
    description: 'Data-driven insights meet creative intuition. We develop a comprehensive strategy that positions you distinctively in the market.',
    duration: '3 weeks',
  },
  {
    phase: 'Creation',
    title: 'Bringing Ideas to Life',
    description: 'Our team of specialists craft every element with precision—from brand identity to digital experiences that resonate with your audience.',
    duration: '4-6 weeks',
  },
  {
    phase: 'Launch',
    title: 'Making Your Mark',
    description: 'Strategic deployment across channels, with real-time optimization to ensure maximum impact from day one.',
    duration: 'Ongoing',
  },
];

export const Process: React.FC = () => {
  return (
    <section className="section-spacing">
      <div className="container-bowery">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-24"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Our Process
          </h2>
          <p className="text-lg text-bowery-gray-600 font-light">
            A proven methodology refined over 15 years of practice.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-24">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-12 gap-8 items-start"
            >
              {/* Step Number */}
              <div className="md:col-span-2">
                <span className="font-display text-6xl md:text-7xl font-light text-bowery-gray-200">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-7">
                <div className="mb-4">
                  <span className="text-refined text-bowery-accent">
                    {step.phase}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-light mb-4">
                  {step.title}
                </h3>
                <p className="text-bowery-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Duration */}
              <div className="md:col-span-3 md:text-right">
                <span className="text-sm text-bowery-gray-500 tracking-refined uppercase">
                  {step.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center"
        >
          <p className="text-bowery-gray-600 mb-8">
            Ready to begin your transformation?
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};