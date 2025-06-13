import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Psychology,
  Code,
  Storage,
  Settings,
  SmartToy,
  Movie,
  FiberManualRecord,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const capabilities = [
  {
    icon: Psychology,
    title: 'AI Infrastructure & Machine Learning',
    description: 'Custom LLM development, fine-tuning, and neural architecture design for enterprise-grade intelligence.',
    features: ['Custom Model Training', 'AGI Research & Implementation', 'Augmented Intelligence Systems', 'Neural Network Optimization'],
    gradient: 'linear-gradient(135deg, #0080FF 0%, #0056B3 100%)'
  },
  {
    icon: Code,
    title: 'Full-Stack Engineering',
    description: 'Enterprise applications with real-time performance, cloud-native architectures, and scalable solutions.',
    features: ['React/Node.js Applications', 'Cloud Infrastructure', 'API Development', 'Performance Optimization'],
    gradient: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)'
  },
  {
    icon: Storage,
    title: 'Data Synthesis & Analytics',
    description: 'Live dashboards, predictive modeling, and real-time visualization systems.',
    features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom BI Solutions', 'Data Pipeline Engineering'],
    gradient: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 100%)'
  },
  {
    icon: Settings,
    title: 'Automation & Workflows',
    description: 'Intelligent process automation with custom AI agents and workflow orchestration.',
    features: ['AI Agent Development', 'Process Automation', 'Workflow Orchestration', 'Integration Engineering'],
    gradient: 'linear-gradient(135deg, #2D2D2D 0%, #1C1C1C 100%)'
  },
  {
    icon: SmartToy,
    title: 'Custom AI Agent Design',
    description: 'Autonomous agents for research, customer service, and complex workflow implementation.',
    features: ['Research Agent Design', 'Conversational AI', 'Multi-Agent Systems', 'Custom Training Pipelines'],
    gradient: 'linear-gradient(135deg, #0080FF 0%, #D4AF37 100%)'
  },
  {
    icon: Movie,
    title: 'Creative Technology',
    description: 'Interactive experiences, generative AI applications, and immersive digital solutions.',
    features: ['Interactive Experiences', 'Generative AI', 'Digital Twin Development', '3D Visualizations'],
    gradient: 'linear-gradient(135deg, #0056B3 0%, #0080FF 100%)'
  }
];

export const Capabilities: React.FC = () => {

  return (
    <Box
      id="capabilities"
      sx={{
        py: 16,
        background: 'linear-gradient(180deg, #0F0F0F 0%, #0A0A0A 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(0, 128, 255, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <Box textAlign="center" mb={10}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                mb: 3,
              }}
            >
              <Box sx={{ height: '1px', width: 60, bgcolor: '#D4AF37' }} />
              <Typography
                variant="caption"
                sx={{
                  color: '#D4AF37',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  fontFamily: 'monospace',
                  fontWeight: 500,
                }}
              >
                Precision-Crafted Solutions
              </Typography>
              <Box sx={{ height: '1px', width: 60, bgcolor: '#D4AF37' }} />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                fontWeight: 400,
                mb: 4,
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Engineering
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
                fontWeight: 400,
                color: '#FAFAFA',
                mb: 4,
              }}
            >
              Intelligence
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#E5E5E5',
                fontWeight: 300,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              From machine learning infrastructure to full-stack applications, 
              we craft bespoke solutions that push the boundaries of what's possible.
            </Typography>
          </motion.div>
        </Box>

        {/* Capabilities Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(28, 28, 28, 0.8)',
                      border: '1px solid rgba(45, 45, 45, 0.5)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.5s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        '& .capability-icon': {
                          transform: 'scale(1.1)',
                        },
                        '&::before': {
                          opacity: 0.1,
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: capability.gradient,
                        opacity: 0,
                        transition: 'opacity 0.5s ease',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, position: 'relative', zIndex: 2 }}>
                      {/* Icon */}
                      <Box sx={{ mb: 3 }}>
                        <Box
                          className="capability-icon"
                          sx={{
                            width: 64,
                            height: 64,
                            background: capability.gradient,
                            p: 0.5,
                            transition: 'transform 0.5s ease',
                          }}
                        >
                          <Box
                            sx={{
                              width: '100%',
                              height: '100%',
                              bgcolor: '#1C1C1C',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <IconComponent sx={{ fontSize: 32, color: '#FAFAFA' }} />
                          </Box>
                        </Box>
                      </Box>

                      {/* Content */}
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#FAFAFA',
                          fontWeight: 400,
                          mb: 2,
                          fontSize: '1.25rem',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {capability.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: '#E5E5E5',
                          lineHeight: 1.6,
                          mb: 3,
                        }}
                      >
                        {capability.description}
                      </Typography>

                      {/* Features */}
                      <List dense>
                        {capability.features.map((feature) => (
                          <ListItem key={feature} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 20 }}>
                              <FiberManualRecord
                                sx={{
                                  fontSize: 8,
                                  color: '#D4AF37',
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              primaryTypographyProps={{
                                variant: 'caption',
                                sx: { color: '#C0C0C0', fontSize: '0.75rem' }
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
            );
          })}
        </Box>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Box
            sx={{
              mt: 12,
              p: 6,
              background: 'rgba(28, 28, 28, 0.2)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(192, 192, 192, 0.2)',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gap: 4,
                textAlign: 'center',
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#D4AF37',
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  99.9%
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#C0C0C0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Uptime
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#D4AF37',
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  &lt;100ms
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#C0C0C0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Response
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#D4AF37',
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  50+
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#C0C0C0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  AI Models
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#D4AF37',
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  24/7
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#C0C0C0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Support
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};