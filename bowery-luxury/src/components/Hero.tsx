import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import {
  KeyboardArrowRight,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

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
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #111111 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 50%)',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 80%, rgba(0, 191, 255, 0.08) 0%, transparent 50%)',
          zIndex: 1,
        }
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          '& .particle': {
            position: 'absolute',
            width: '2px',
            height: '2px',
            backgroundColor: '#FFD700',
            borderRadius: '50%',
            opacity: 0.3,
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' },
            }
          }
        }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <Box
            key={i}
            className="particle"
            sx={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        <Box textAlign="center">
          {/* Tech label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                mb: 4,
              }}
            >
              <Box sx={{ height: '1px', width: 60, bgcolor: '#FFD700' }} />
              <Typography
                variant="caption"
                sx={{
                  color: '#FFD700',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  fontFamily: 'monospace',
                  fontWeight: 500,
                }}
              >
                Engineering Tomorrow's Intelligence
              </Typography>
              <Box sx={{ height: '1px', width: 60, bgcolor: '#FFD700' }} />
            </Box>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '6rem', lg: '8rem' },
                fontWeight: 300,
                fontFamily: '"Bebas Neue", "Anton", sans-serif',
                letterSpacing: '0.15em',
                lineHeight: 0.9,
                mb: 4,
                background: 'linear-gradient(135deg, #FFD700 0%, #FFEF94 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200% auto',
                animation: 'shimmer 3s linear infinite',
                textShadow: '0 0 80px rgba(255, 215, 0, 0.5), 0 0 120px rgba(255, 215, 0, 0.3)',
                '@keyframes shimmer': {
                  '0%': { backgroundPosition: '-200% 0' },
                  '100%': { backgroundPosition: '200% 0' },
                }
              }}
            >
              BOWERY
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '5rem', lg: '6rem' },
                fontWeight: 200,
                fontFamily: '"Bebas Neue", "Anton", sans-serif',
                letterSpacing: '0.2em',
                color: '#F8F8FF',
                mt: 2,
                mb: 6,
                textShadow: '0 0 40px rgba(248, 248, 255, 0.3), 0 0 80px rgba(0, 191, 255, 0.2)',
              }}
            >
              CREATIVE
            </Typography>
          </motion.div>

          {/* Dynamic tech words */}
          <Box sx={{ height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 6 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#00BFFF',
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}
                >
                  {techWords[currentWord]}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Performance metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 4,
                maxWidth: 800,
                mx: 'auto',
                mb: 8,
              }}
            >
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  sx={{
                    color: '#FFD700',
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  $5.2B
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#C0C0C0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Revenue Generated
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  sx={{
                    color: '#FFD700',
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  98%
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#C0C0C0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  AI Accuracy
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  sx={{
                    color: '#FFD700',
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  0.3ms
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#C0C0C0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Response Time
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#E5E5E5',
                fontWeight: 300,
                maxWidth: 600,
                mx: 'auto',
                mb: 8,
                lineHeight: 1.6,
              }}
            >
              Full-stack development meets artificial intelligence.
              <Box component="span" sx={{ display: 'block', mt: 1, color: '#C0C0C0' }}>
                Custom AI infrastructure, machine learning solutions, and data synthesis at enterprise scale.
              </Box>
            </Typography>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<KeyboardArrowRight />}
                sx={{
                  bgcolor: '#FFD700',
                  color: '#000000',
                  px: 4,
                  py: 2,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    bgcolor: '#00BFFF',
                    color: '#000000',
                    transform: 'scale(1.05)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transition: 'left 0.5s',
                  },
                  '&:hover::before': {
                    left: '100%',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Accelerate Your Vision
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#FFD700',
                  color: '#FFD700',
                  px: 4,
                  py: 2,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  '&:hover': {
                    borderColor: '#FFD700',
                    bgcolor: '#FFD700',
                    color: '#000000',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Performance
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Racing stripe */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
          animation: 'race 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          '@keyframes race': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' },
          }
        }}
      />
    </Box>
  );
};