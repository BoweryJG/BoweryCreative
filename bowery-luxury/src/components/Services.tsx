import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { 
  Sparkles, 
  TrendingUp, 
  Users,
  Brain,
  Palette
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Excellence',
    description: 'Sophisticated brand development that establishes authority and connects with discerning clients.',
    features: [
      'Strategic brand architecture',
      'Premium visual identity',
      'Market positioning',
      'Creative direction'
    ],
    color: 'from-elegant-accent/20 to-transparent',
  },
  {
    icon: Brain,
    title: 'Technology Integration',
    description: 'Advanced automation and AI-powered solutions that streamline operations and enhance decision-making.',
    features: [
      'Intelligent automation',
      'Custom integrations',
      'Workflow optimization',
      'Data analytics'
    ],
    color: 'from-elegant-charcoal/20 to-transparent',
    featured: true,
  },
  {
    icon: TrendingUp,
    title: 'Strategic Marketing',
    description: 'Comprehensive marketing strategies designed to attract quality leads and drive sustainable growth.',
    features: [
      'Multi-channel strategy',
      'Content development',
      'Campaign optimization',
      'Performance tracking'
    ],
    color: 'from-elegant-soft/20 to-transparent',
  },
  {
    icon: Users,
    title: 'Team Development',
    description: 'Comprehensive training and development programs that elevate your team\'s expertise and performance.',
    features: [
      'Strategic workshops',
      'Skill development',
      'Best practices training',
      'Ongoing support'
    ],
    color: 'from-elegant-accent/15 to-transparent',
  },
];

export const Services: React.FC = () => {
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
            Solutions & Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-elegant-dark mb-6"
          >
            Comprehensive Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-elegant-dark/60 max-w-3xl mx-auto"
          >
            Powered by AI and backed by 15 years of industry expertise
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={service.featured ? 'md:col-span-2' : ''}
            >
              <Card 
                hover="tilt" 
                gradient={service.featured ? 'bold' : 'subtle'}
                className="h-full group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-elegant-accent/10 flex items-center justify-center mb-6 group-hover:bg-elegant-accent/20 transition-colors"
                  >
                    <service.icon className="w-8 h-8 text-elegant-accent" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-medium text-elegant-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-elegant-dark/70 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-center text-elegant-dark/60 text-sm"
                      >
                        <Sparkles className="w-4 h-4 text-elegant-accent mr-2" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant={service.featured ? 'primary' : 'secondary'} 
                    size="sm"
                    className="group-hover:scale-105 transition-transform"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-elegant-dark/60 mb-6">
            Ready to transform your practice?
          </p>
          <Button variant="primary" size="lg">
            Schedule a Strategy Call
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};