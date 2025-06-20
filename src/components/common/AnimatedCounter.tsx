'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
  color?: string;
  fontWeight?: number | string;
  sx?: any;
}

const AnimatedCounter = ({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  variant = 'h2',
  color = 'primary.main',
  fontWeight = 600,
  sx = {}
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(value * progress);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [value, duration, isInView]);

  return (
    <Box ref={ref} sx={sx}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant={variant}
          sx={{
            color,
            fontWeight,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default AnimatedCounter; 