'use client';

import { Box, Typography, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
  subtitle?: string;
}

const Timeline = ({ items, title, subtitle }: TimelineProps) => {
  return (
    <Box sx={{ py: 4 }}>
      {title && (
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      )}
      
      <Box sx={{ position: 'relative' }}>
        {/* Timeline line */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 20, md: '50%' },
            top: 0,
            bottom: 0,
            width: 2,
            bgcolor: 'primary.main',
            transform: { xs: 'none', md: 'translateX(-50%)' },
            zIndex: 1,
          }}
        />

        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                mb: 4,
                '&:last-child': { mb: 0 },
                flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                gap: 3,
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 20, md: '50%' },
                  top: 20,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  border: 3,
                  borderColor: 'background.paper',
                  transform: { xs: 'translateX(-50%)', md: 'translateX(-50%)' },
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.75rem',
                }}
              >
                {item.icon || index + 1}
              </Box>

              {/* Content */}
              <Box
                sx={{
                  width: { xs: '100%', md: '45%' },
                  ml: { xs: 6, md: 0 },
                }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    border: 1,
                    borderColor: 'divider',
                    '&:hover': {
                      elevation: 4,
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    {item.category && (
                      <Chip
                        label={item.category}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    )}
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  
                  <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    {item.date}
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Timeline; 