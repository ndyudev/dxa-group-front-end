'use client';

import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
  variant?: 'default' | 'overlay' | 'inline';
  color?: 'primary' | 'secondary' | 'white';
}

const LoadingSpinner = ({ 
  size = 'medium', 
  message, 
  variant = 'default',
  color = 'primary'
}: LoadingSpinnerProps) => {
  const theme = useTheme();

  const sizeMap = {
    small: 24,
    medium: 40,
    large: 60
  };

  const colorMap = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    white: '#ffffff'
  };

  const spinner = (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CircularProgress
        size={sizeMap[size]}
        sx={{
          color: colorMap[color],
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          }
        }}
      />
    </motion.div>
  );

  if (variant === 'overlay') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            p: 4,
            borderRadius: 3,
            bgcolor: 'background.paper',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          {spinner}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  textAlign: 'center',
                  maxWidth: 200,
                }}
              >
                {message}
              </Typography>
            </motion.div>
          )}
        </Box>
      </motion.div>
    );
  }

  if (variant === 'inline') {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          py: 2,
        }}
      >
        {spinner}
        {message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                textAlign: 'center',
              }}
            >
              {message}
            </Typography>
          </motion.div>
        )}
      </Box>
    );
  }

  // Default variant
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        gap: 2,
      }}
    >
      {spinner}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
            }}
          >
            {message}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
};

export default LoadingSpinner; 