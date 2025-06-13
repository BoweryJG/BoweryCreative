import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-spacing bg-bowery-gray-50">
      <div className="container-bowery">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-bowery-gray-600 leading-relaxed">
              <p className="text-lg font-light">
                Founded in 2010, Bowery Creative emerged from a simple observation: 
                medical aesthetics practices deserved marketing as sophisticated as 
                their treatments.
              </p>
              <p>
                We've spent 15 years perfecting the intersection of medical expertise 
                and creative excellence. Our approach combines deep industry knowledge 
                with cutting-edge technology to create campaigns that don't just capture 
                attention—they command respect.
              </p>
              <p>
                Today, we partner with the world's most innovative medical aesthetic 
                brands and practices, helping them connect with discerning patients 
                who value quality, expertise, and results.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-light mb-12">
              Our Values
            </h3>
            <div className="space-y-12">
              <div>
                <h4 className="text-refined text-bowery-accent mb-3">
                  Excellence in Execution
                </h4>
                <p className="text-bowery-gray-600">
                  Every detail matters. From strategy to implementation, we maintain 
                  the highest standards of quality and precision.
                </p>
              </div>
              <div>
                <h4 className="text-refined text-bowery-accent mb-3">
                  Ethical Marketing
                </h4>
                <p className="text-bowery-gray-600">
                  We believe in transparent, honest communication that respects both 
                  practitioners and patients.
                </p>
              </div>
              <div>
                <h4 className="text-refined text-bowery-accent mb-3">
                  Innovation with Purpose
                </h4>
                <p className="text-bowery-gray-600">
                  We embrace new technologies and strategies, but only when they 
                  genuinely enhance outcomes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl font-light mb-2">15</div>
            <p className="text-refined text-bowery-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl font-light mb-2">200+</div>
            <p className="text-refined text-bowery-gray-600">Successful Campaigns</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl font-light mb-2">$3.2B</div>
            <p className="text-refined text-bowery-gray-600">Revenue Generated</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl font-light mb-2">98%</div>
            <p className="text-refined text-bowery-gray-600">Client Retention</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};