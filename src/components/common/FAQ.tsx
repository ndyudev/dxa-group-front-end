'use client';

import { useState } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
} from '@mui/material';
import { ExpandMore, HelpOutline } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  maxHeight?: number;
}

const FAQ = ({ items, title, subtitle, maxHeight = 400 }: FAQProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ py: 4 }}>
      {title && (
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <HelpOutline sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
            <Typography variant="h3" component="h2" sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
          </Box>
          {subtitle && (
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      <Paper
        elevation={2}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          maxHeight,
          overflowY: 'auto',
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Accordion
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{
                '&:before': {
                  display: 'none',
                },
                '&:not(:last-child)': {
                  borderBottom: 1,
                  borderColor: 'divider',
                },
                '&.Mui-expanded': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    alignItems: 'center',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 500, flex: 1 }}>
                    {item.question}
                  </Typography>
                  {item.category && (
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        bgcolor: 'primary.light',
                        color: 'primary.contrastText',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                      }}
                    >
                      {item.category}
                    </Box>
                  )}
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.6,
                    '& p': {
                      mb: 1,
                      '&:last-child': {
                        mb: 0,
                      },
                    },
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Paper>
    </Box>
  );
};

export default FAQ; 