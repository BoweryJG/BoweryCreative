import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'CoolSculpting', logo: '/icons/coolsculpting.png' },
  { name: 'MiraDry', logo: '/icons/miradry.png' },
  { name: 'Fraxel', logo: '/icons/fraxel.png' },
  { name: 'Thermage', logo: '/icons/thermage.png' },
  { name: 'AbbVie', logo: '/icons/abbvie.png' },
  { name: 'Cynosure', logo: '/icons/cynosure.png' },
  { name: 'Valeant', logo: '/icons/valeant.png' },
];

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 bg-luxury-charcoal/30 backdrop-blur-sm">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-luxury-gold text-sm font-medium tracking-[0.3em] uppercase mb-2">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-light text-luxury-white">
            Powering Growth for Global Brands
          </h2>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-luxury-white/5 rounded-lg p-6 hover:bg-luxury-white/10 transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-12 bg-luxury-white/20 rounded opacity-60 group-hover:opacity-100 transition-opacity" />
                <p className="text-xs text-luxury-white/40 mt-2 text-center">{client.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-display font-bold text-luxury-gold">500+</div>
            <div className="text-sm text-luxury-white/60">Campaigns Launched</div>
          </div>
          <div>
            <div className="text-3xl font-display font-bold text-luxury-gold">$3.2B</div>
            <div className="text-sm text-luxury-white/60">Revenue Generated</div>
          </div>
          <div>
            <div className="text-3xl font-display font-bold text-luxury-gold">847%</div>
            <div className="text-sm text-luxury-white/60">Average ROI</div>
          </div>
          <div>
            <div className="text-3xl font-display font-bold text-luxury-gold">15</div>
            <div className="text-sm text-luxury-white/60">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};