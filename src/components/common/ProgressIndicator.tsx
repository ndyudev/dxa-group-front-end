'use client';

import { useState, useEffect } from 'react';
import { Box, LinearProgress, useTheme } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ProgressIndicatorProps {
  isLoading?: boolean;
  showScrollProgress?: boolean;
}

const ProgressIndicator = ({ 
  isLoading = false, 
  showScrollProgress = true 
}: ProgressIndicatorProps) => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            transformOrigin: '0%',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            height: 3,
            width: '100%',
          }}
        />
      </Box>
    );
  }

  if (!showScrollProgress) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -10
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        transformOrigin: '0%',
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
          height: '100%',
          width: '100%',
        }}
      />
    </motion.div>
  );
};

export default ProgressIndicator; 