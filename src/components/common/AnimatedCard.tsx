'use client';

import { Card, CardProps } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedCardProps extends CardProps {
  delay?: number;
}

export default function AnimatedCard({ children, delay = 0, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card
        {...props}
        sx={{
          height: '100%',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: (theme) => theme.shadows[8],
          },
          ...props.sx,
        }}
      >
        {children}
      </Card>
    </motion.div>
  );
} 