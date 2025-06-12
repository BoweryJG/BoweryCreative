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
    title: 'Branding & Creative Strategy',
    description: 'Craft a distinctive identity that resonates with your elite clientele and sets you apart in the medical aesthetics market.',
    features: [
      'Brand identity development',
      'Visual storytelling',
      'Positioning & messaging',
      'Creative campaign design'
    ],
    color: 'from-luxury-gold/20 to-transparent',
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    description: 'Leverage our proprietary Sphere OS platform to automate workflows and unlock AI-driven insights.',
    features: [
      'Sphere OS integration',
      'Custom AI automations',
      'Intelligent workflows',
      'Data-driven decisions'
    ],
    color: 'from-blue-500/20 to-transparent',
    featured: true,
  },
  {
    icon: TrendingUp,
    title: 'Content & Campaigns',
    description: 'Execute multi-channel campaigns that convert prospects into patients and drive measurable ROI.',
    features: [
      'Multi-channel content',
      'Social media strategy',
      'Campaign management',
      'Performance analytics'
    ],
    color: 'from-emerald-500/20 to-transparent',
  },
  {
    icon: Users,
    title: 'Education & Training',
    description: 'Empower your team with industry-leading training and resources to maximize your investment.',
    features: [
      'On-demand modules',
      'Live workshops',
      'Certification programs',
      'Resource library'
    ],
    color: 'from-purple-500/20 to-transparent',
  },
];

export const Services: React.FC = () => {
  return (
    <AnimatedSection className="section-padding bg-gradient-dark">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold text-sm font-medium tracking-[0.3em] uppercase mb-4"
          >
            Solutions & Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-luxury-white mb-6"
          >
            Comprehensive Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-luxury-white/60 max-w-3xl mx-auto"
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
                    className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/20 transition-colors"
                  >
                    <service.icon className="w-8 h-8 text-luxury-gold" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-medium text-luxury-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-luxury-white/70 mb-6">
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
                        className="flex items-center text-luxury-white/60 text-sm"
                      >
                        <Sparkles className="w-4 h-4 text-luxury-gold mr-2" />
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
          <p className="text-luxury-white/60 mb-6">
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