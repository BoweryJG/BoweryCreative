import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  alpha,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Twitter,
  Email,
  Code,
  Palette,
  TrendingUp,
  Psychology,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string;
  bio: string;
  achievements: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email: string;
  };
  icon: React.ReactNode;
  gradient: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Alexander Sterling',
    role: 'CEO & Founder',
    expertise: 'AI Strategy & Vision',
    bio: 'Serial entrepreneur with 3 successful exits. Former CTO at Fortune 500. Pioneering AI-first luxury experiences for the next generation of brands.',
    achievements: [
      '$150M+ in total exits',
      '15+ years in AI/ML',
      'Stanford MS Computer Science',
      'Forbes 30 Under 30',
    ],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'alex@bowery.ai',
    },
    icon: <TrendingUp />,
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
  },
  {
    id: 'cto',
    name: 'Dr. Sarah Chen',
    role: 'CTO',
    expertise: 'Neural Architecture & ML',
    bio: 'Former Google Brain researcher. Published 40+ papers on neural networks. Leading breakthrough implementations in production AI systems.',
    achievements: [
      'PhD MIT AI Lab',
      'Google Brain Alumni',
      '40+ research papers',
      '10 patents in AI/ML',
    ],
    social: {
      linkedin: '#',
      github: '#',
      email: 'sarah@bowery.ai',
    },
    icon: <Psychology />,
    gradient: 'linear-gradient(135deg, #00BFFF 0%, #0080FF 100%)',
  },
  {
    id: 'creative',
    name: 'Marcus Laurent',
    role: 'Creative Director',
    expertise: 'Luxury Brand Design',
    bio: 'Former Hermès digital lead. Revolutionizing how luxury brands connect with digital-native audiences through immersive AI experiences.',
    achievements: [
      'Ex-Hermès Digital',
      'Cannes Lions Winner',
      'D&AD Black Pencil',
      'Webby Awards Judge',
    ],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'marcus@bowery.ai',
    },
    icon: <Palette />,
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
  },
  {
    id: 'engineering',
    name: 'Elena Volkov',
    role: 'VP Engineering',
    expertise: 'Scalable Systems',
    bio: 'Built systems handling 1B+ requests/day at Meta. Expert in distributed AI systems and real-time processing at massive scale.',
    achievements: [
      'Ex-Meta Infrastructure',
      '1B+ requests/day systems',
      'Open source contributor',
      'Speaker at KubeCon',
    ],
    social: {
      linkedin: '#',
      github: '#',
      email: 'elena@bowery.ai',
    },
    icon: <Code />,
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
  },
];

export const Team: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  return (
    <Box
      id="team"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, transparent 60%)',
          filter: 'blur(100px)',
          animation: 'float 20s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 191, 255, 0.05) 0%, transparent 60%)',
          filter: 'blur(120px)',
          animation: 'float 25s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="caption"
              sx={{
                color: '#FFD700',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
              }}
            >
              Leadership
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mt: 2,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 300,
                background: 'linear-gradient(135deg, #FFD700 0%, #00BFFF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Visionaries & Craftsmen
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#C0C0C0',
                fontWeight: 300,
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              World-class talent from Google, Meta, and luxury brands, 
              united by a passion for exceptional AI experiences
            </Typography>
          </Box>
        </motion.div>

        {/* Team grid */}
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} lg={3} key={member.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'transparent',
                    position: 'relative',
                    cursor: 'pointer',
                    border: 'none',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 3,
                      padding: '1px',
                      background: hoveredMember === member.id
                        ? member.gradient
                        : `linear-gradient(135deg, ${alpha('#FFD700', 0.2)} 0%, ${alpha('#00BFFF', 0.2)} 100%)`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      transition: 'all 0.3s ease',
                    },
                  }}
                  onClick={() => setSelectedMember(member.id)}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: alpha('#0a0a0a', 0.8),
                      backdropFilter: 'blur(20px)',
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Holographic effect */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: `linear-gradient(45deg, transparent 30%, ${alpha(member.gradient.split(' ')[2], 0.1)} 50%, transparent 70%)`,
                        transform: hoveredMember === member.id ? 'rotate(0deg)' : 'rotate(-45deg)',
                        transition: 'transform 0.6s ease',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Icon */}
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '12px',
                        background: member.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        position: 'relative',
                        boxShadow: hoveredMember === member.id
                          ? `0 8px 32px ${alpha(member.gradient.split(' ')[2], 0.4)}`
                          : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {React.cloneElement(member.icon as React.ReactElement, {
                        sx: { color: '#000', fontSize: 32 },
                      })}
                    </Box>

                    {/* Name and role */}
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#F8F8FF',
                        fontWeight: 500,
                        mb: 0.5,
                        position: 'relative',
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#FFD700',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: '0.75rem',
                        mb: 1,
                        position: 'relative',
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#00BFFF',
                        fontFamily: 'monospace',
                        mb: 3,
                        position: 'relative',
                      }}
                    >
                      {member.expertise}
                    </Typography>

                    {/* Bio */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#C0C0C0',
                        lineHeight: 1.8,
                        mb: 3,
                        flex: 1,
                        position: 'relative',
                      }}
                    >
                      {member.bio}
                    </Typography>

                    {/* Achievements */}
                    <Box mb={3} position="relative">
                      {member.achievements.slice(0, 2).map((achievement, idx) => (
                        <Typography
                          key={idx}
                          variant="caption"
                          sx={{
                            display: 'block',
                            color: '#808080',
                            mb: 0.5,
                            '&::before': {
                              content: '"→"',
                              color: '#FFD700',
                              mr: 1,
                            },
                          }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                      {member.achievements.length > 2 && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#FFD700',
                            cursor: 'pointer',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          +{member.achievements.length - 2} more
                        </Typography>
                      )}
                    </Box>

                    {/* Social links */}
                    <Box
                      display="flex"
                      gap={1}
                      position="relative"
                      sx={{
                        opacity: hoveredMember === member.id ? 1 : 0.7,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      {member.social.linkedin && (
                        <IconButton
                          size="small"
                          sx={{
                            color: '#808080',
                            '&:hover': {
                              color: '#FFD700',
                              background: alpha('#FFD700', 0.1),
                            },
                          }}
                        >
                          <LinkedIn fontSize="small" />
                        </IconButton>
                      )}
                      {member.social.github && (
                        <IconButton
                          size="small"
                          sx={{
                            color: '#808080',
                            '&:hover': {
                              color: '#FFD700',
                              background: alpha('#FFD700', 0.1),
                            },
                          }}
                        >
                          <GitHub fontSize="small" />
                        </IconButton>
                      )}
                      {member.social.twitter && (
                        <IconButton
                          size="small"
                          sx={{
                            color: '#808080',
                            '&:hover': {
                              color: '#FFD700',
                              background: alpha('#FFD700', 0.1),
                            },
                          }}
                        >
                          <Twitter fontSize="small" />
                        </IconButton>
                      )}
                      <IconButton
                        size="small"
                        sx={{
                          color: '#808080',
                          '&:hover': {
                            color: '#FFD700',
                            background: alpha('#FFD700', 0.1),
                          },
                        }}
                      >
                        <Email fontSize="small" />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Culture section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 10,
              p: { xs: 4, md: 6 },
              background: alpha('#1a1a1a', 0.3),
              backdropFilter: 'blur(20px)',
              borderRadius: 3,
              border: '1px solid',
              borderColor: alpha('#FFD700', 0.2),
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#F8F8FF',
                mb: 4,
                fontWeight: 300,
              }}
            >
              Our Culture
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: 'Excellence',
                  description: 'We don\'t just meet standards, we set them. Every pixel, every algorithm, every interaction is crafted to perfection.',
                },
                {
                  title: 'Innovation',
                  description: 'We push boundaries daily. If it\'s been done before, we\'re already working on what\'s next.',
                },
                {
                  title: 'Collaboration',
                  description: 'Great minds achieve more together. We blend diverse expertise to create unprecedented solutions.',
                },
                {
                  title: 'Impact',
                  description: 'We measure success by transformation delivered. Real results for real businesses, every time.',
                },
              ].map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FFD700',
                        mb: 2,
                        fontWeight: 500,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#C0C0C0',
                        lineHeight: 1.8,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};