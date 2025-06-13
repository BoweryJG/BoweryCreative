import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code2, 
  Database, 
  Bot, 
  Cog, 
  Film
} from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'AI Infrastructure & Machine Learning',
    description: 'Custom LLM development, fine-tuning, and neural architecture design for enterprise-grade intelligence.',
    features: ['Custom Model Training', 'AGI Research & Implementation', 'Augmented Intelligence Systems', 'Neural Network Optimization'],
    color: 'from-electric to-sapphire'
  },
  {
    icon: Code2,
    title: 'Full-Stack Engineering',
    description: 'Enterprise applications with real-time performance, cloud-native architectures, and scalable solutions.',
    features: ['React/Node.js Applications', 'Cloud Infrastructure', 'API Development', 'Performance Optimization'],
    color: 'from-champagne to-[#FFD700]'
  },
  {
    icon: Database,
    title: 'Data Synthesis & Analytics',
    description: 'Live Three.js dashboards, predictive modeling, and real-time visualization systems.',
    features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom BI Solutions', 'Data Pipeline Engineering'],
    color: 'from-racing-silver to-platinum'
  },
  {
    icon: Cog,
    title: 'Automation & Workflows',
    description: 'Intelligent process automation with custom AI agents and workflow orchestration.',
    features: ['AI Agent Development', 'Process Automation', 'Workflow Orchestration', 'Integration Engineering'],
    color: 'from-graphite to-carbon'
  },
  {
    icon: Bot,
    title: 'Custom AI Agent Design',
    description: 'Autonomous agents for research, customer service, and complex workflow implementation.',
    features: ['Research Agent Design', 'Conversational AI', 'Multi-Agent Systems', 'Custom Training Pipelines'],
    color: 'from-electric to-champagne'
  },
  {
    icon: Film,
    title: 'Creative Technology',
    description: 'Interactive experiences, generative AI applications, and immersive digital twins.',
    features: ['Interactive Experiences', 'Generative AI', 'Digital Twin Development', '3D Visualizations'],
    color: 'from-sapphire to-electric'
  }
];

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="section-luxury bg-midnight relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-midnight to-obsidian" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-champagne" />
            <p className="text-champagne text-xs tracking-[0.3em] uppercase font-mono">
              Precision-Crafted Solutions
            </p>
            <div className="h-px w-20 bg-champagne" />
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-normal mb-8 tracking-tech"
          >
            <span className="text-gradient-gold">Engineering</span>
            <span className="block text-arctic mt-2">Intelligence</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-titanium font-light leading-relaxed"
          >
            From machine learning infrastructure to full-stack applications, 
            we craft bespoke solutions that push the boundaries of what's possible.
          </motion.p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group card-metallic p-8 hover-lift carbon-overlay"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-none bg-gradient-to-br ${capability.color} p-0.5 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-carbon flex items-center justify-center">
                    <capability.icon className="w-8 h-8 text-arctic" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border border-champagne/30" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-normal text-arctic mb-4 group-hover:text-champagne transition-colors duration-300">
                {capability.title}
              </h3>
              
              <p className="text-titanium leading-relaxed mb-6 text-sm">
                {capability.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.05) + 0.5 }}
                    className="flex items-center gap-3 text-racing-silver text-xs"
                  >
                    <div className="w-1 h-1 bg-champagne rounded-full flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-champagne group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 glass-morphism p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-mono text-champagne mb-2">99.9%</p>
              <p className="text-xs uppercase tracking-wide text-racing-silver">Uptime</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-mono text-champagne mb-2">&lt;100ms</p>
              <p className="text-xs uppercase tracking-wide text-racing-silver">Response</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-mono text-champagne mb-2">50+</p>
              <p className="text-xs uppercase tracking-wide text-racing-silver">AI Models</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-mono text-champagne mb-2">24/7</p>
              <p className="text-xs uppercase tracking-wide text-racing-silver">Support</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Racing accent lines */}
      <div className="absolute bottom-0 left-0 right-0 flex gap-2">
        <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent race-line" />
        <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-electric to-transparent race-line" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};