'use client';

import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

interface SectionHeaderProps {
  overline: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({ overline, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="overline"
          color="primary"
          sx={{ display: 'block', mb: 2, fontWeight: 600 }}
        >
          {overline}
        </Typography>

        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: '800px', mx: 'auto' }}
        >
          {subtitle}
        </Typography>
      </Box>
    </motion.div>
  );
}