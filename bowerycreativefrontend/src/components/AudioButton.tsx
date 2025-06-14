import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import audioManager from '../utils/audioManager';

interface AudioButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  soundFrequency?: number;
  onClick?: () => void;
}

export const AudioButton: React.FC<AudioButtonProps> = ({ 
  children, 
  soundFrequency = 600,
  onClick,
  ...props 
}) => {
  const handleClick = () => {
    audioManager.playClickSound();
    onClick?.();
  };

  const handleHover = () => {
    audioManager.playHoverSound(soundFrequency, '64n');
  };

  return (
    <motion.button
      onHoverStart={handleHover}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};