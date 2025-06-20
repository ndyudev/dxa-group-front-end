'use client';

import { useState, useEffect } from 'react';
import { 
  Snackbar, 
  Alert, 
  AlertTitle, 
  Box, 
  IconButton, 
  useTheme 
} from '@mui/material';
import { Close, CheckCircle, Error, Warning, Info } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface NotificationProps {
  open: boolean;
  message: string;
  title?: string;
  type?: NotificationType;
  duration?: number;
  onClose: () => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

const Notification = ({
  open,
  message,
  title,
  type = 'info',
  duration = 6000,
  onClose,
  position = 'top-right'
}: NotificationProps) => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    }
  }, [open]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle />;
      case 'error':
        return <Error />;
      case 'warning':
        return <Warning />;
      case 'info':
        return <Info />;
      default:
        return <Info />;
    }
  };

  const getPosition = () => {
    switch (position) {
      case 'top-left':
        return { top: 16, left: 16 };
      case 'top-center':
        return { top: 16, left: '50%', transform: 'translateX(-50%)' };
      case 'top-right':
        return { top: 16, right: 16 };
      case 'bottom-left':
        return { bottom: 16, left: 16 };
      case 'bottom-center':
        return { bottom: 16, left: '50%', transform: 'translateX(-50%)' };
      case 'bottom-right':
        return { bottom: 16, right: 16 };
      default:
        return { top: 16, right: 16 };
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            y: position.includes('top') ? -50 : 50,
            x: position.includes('left') ? -50 : position.includes('right') ? 50 : 0
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: 0,
            x: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.8,
            y: position.includes('top') ? -50 : 50,
            x: position.includes('left') ? -50 : position.includes('right') ? 50 : 0
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
          style={{
            position: 'fixed',
            zIndex: 9999,
            maxWidth: 400,
            width: '100%',
            ...getPosition()
          }}
        >
          <Alert
            severity={type}
            icon={getIcon()}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleClose}
                sx={{
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                <Close fontSize="inherit" />
              </IconButton>
            }
            sx={{
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              border: `1px solid ${theme.palette.divider}`,
              backdropFilter: 'blur(10px)',
              '& .MuiAlert-icon': {
                fontSize: 24,
              },
              '& .MuiAlert-message': {
                width: '100%',
              }
            }}
          >
            {title && (
              <AlertTitle sx={{ fontWeight: 600, mb: 0.5 }}>
                {title}
              </AlertTitle>
            )}
            <Box sx={{ wordBreak: 'break-word' }}>
              {message}
            </Box>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Hook để sử dụng notification
export const useNotification = () => {
  const [notification, setNotification] = useState<{
    open: boolean;
    message: string;
    title?: string;
    type: NotificationType;
    duration?: number;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  }>({
    open: false,
    message: '',
    type: 'info'
  });

  const showNotification = (
    message: string,
    type: NotificationType = 'info',
    title?: string,
    duration?: number,
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
  ) => {
    setNotification({
      open: true,
      message,
      title,
      type,
      duration,
      position
    });
  };

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  const success = (message: string, title?: string, duration?: number, position?: any) => 
    showNotification(message, 'success', title, duration, position);
  
  const error = (message: string, title?: string, duration?: number, position?: any) => 
    showNotification(message, 'error', title, duration, position);
  
  const warning = (message: string, title?: string, duration?: number, position?: any) => 
    showNotification(message, 'warning', title, duration, position);
  
  const info = (message: string, title?: string, duration?: number, position?: any) => 
    showNotification(message, 'info', title, duration, position);

  return {
    notification,
    showNotification,
    hideNotification,
    success,
    error,
    warning,
    info
  };
};

export default Notification; 