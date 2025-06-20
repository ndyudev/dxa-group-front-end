'use client';

import { useState, useEffect } from 'react';
import { Fab, Tooltip, useTheme, useMediaQuery } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
          style={{
            position: 'fixed',
            bottom: isMobile ? 80 : 24,
            right: isMobile ? 16 : 24,
            zIndex: 1000,
          }}
        >
          <Tooltip 
            title="Back to top" 
            placement="left"
            arrow
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Fab
                color="primary"
                size={isMobile ? "small" : "medium"}
                onClick={scrollToTop}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <KeyboardArrowUp />
              </Fab>
            </motion.div>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 