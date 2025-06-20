'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: { xs: 6, md: 10 },
        pb: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: 'radial-gradient(circle at 50% 50%, primary.main 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" position="relative">
            {subtitle && (
              <Typography
                variant="overline"
                color="primary"
                sx={{
                  mb: 2,
                  display: 'block',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {subtitle}
              </Typography>
            )}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              {title}
            </Typography>
            {description && (
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  maxWidth: 800,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                {description}
              </Typography>
            )}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}