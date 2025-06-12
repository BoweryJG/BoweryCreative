import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook,
  ArrowUpRight
} from 'lucide-react';

const footerLinks = {
  solutions: [
    { label: 'Branding & Strategy', href: '#branding' },
    { label: 'AI & Automation', href: '#ai' },
    { label: 'Content & Campaigns', href: '#content' },
    { label: 'Education & Training', href: '#education' },
  ],
  company: [
    { label: 'Our Story', href: '#about' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Blog', href: '#blog' },
    { label: 'Podcast', href: '#podcast' },
    { label: 'Events', href: '#events' },
    { label: 'Membership', href: '#members' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/bowerycreativeagency/', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-luxury-black pt-20 pb-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-luxury relative z-10">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <img 
              src="/bowery-creative-refined-logo.svg" 
              alt="Bowery Creative" 
              className="h-10 w-auto mb-6 filter brightness-0 invert opacity-90"
            />
            <p className="text-luxury-white/60 mb-6">
              Transformative AI-driven creative solutions for the medical aesthetics industry.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-luxury-white/10 flex items-center justify-center hover:bg-luxury-gold/20 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-luxury-white group-hover:text-luxury-gold transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-luxury-white font-display font-medium tracking-wider uppercase mb-6">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-luxury-white/60 hover:text-luxury-gold transition-colors flex items-center group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-t border-luxury-white/10 border-b mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-light text-luxury-white mb-2">
                Stay Ahead of the Curve
              </h3>
              <p className="text-luxury-white/60">
                Get the latest insights, trends, and innovations delivered to your inbox.
              </p>
            </div>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-luxury-white/5 border border-luxury-white/20 rounded-full text-luxury-white placeholder-luxury-white/40 focus:outline-none focus:border-luxury-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-luxury-gold text-luxury-black font-medium rounded-full hover:bg-luxury-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-luxury-white/40 text-sm">
          <p>© 2025 Bowery Creative Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-luxury-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-luxury-gold transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-luxury-gold transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};