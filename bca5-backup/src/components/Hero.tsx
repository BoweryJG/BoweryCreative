import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedText, SplitText } from './ui/AnimatedText';
import { Button } from './ui/Button';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slow motion effect
    }
  }, []);

  const stats = [
    { value: '15', label: 'Years' },
    { value: '$3.2B', label: 'Generated' },
    { value: '847%', label: 'Avg ROI' },
    { value: '1', label: 'Agency' },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/New Smile Guide 2.mov" type="video/quicktime" />
          <source src="/New Smile Guide 2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center container-luxury">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-5xl"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-luxury-gold text-sm font-medium tracking-[0.3em] uppercase mb-6"
          >
            Bowery Creative Agency
          </motion.p>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-tight mb-6">
            <SplitText 
              text="Where Medical Excellence" 
              className="text-luxury-white"
              delay={0.6}
            />
            <SplitText 
              text="Meets Digital Mastery" 
              className="text-gradient text-shadow-luxury mt-2"
              delay={0.8}
            />
          </h1>

          {/* Subheadline */}
          <AnimatedText
            text="AI-powered campaigns that transform practices and generate extraordinary results"
            className="text-xl md:text-2xl text-luxury-white/80 font-light max-w-3xl mb-12"
            delay={1.2}
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="lg" className="min-w-[200px]">
              Start Your Campaign
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              Calculate Your ROI
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-20 left-0 right-0"
        >
          <div className="container-luxury">
            <div className="glass-dark rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold text-luxury-gold">
                      {stat.value}
                    </div>
                    <div className="text-sm text-luxury-white/60 uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-luxury-white/60 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};