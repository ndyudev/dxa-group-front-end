'use client';

import { useState } from 'react';
import { 
  Fab, 
  SpeedDial, 
  SpeedDialAction, 
  SpeedDialIcon,
  Box,
  Tooltip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  KeyboardArrowUp, 
  Chat, 
  Brightness4, 
  Brightness7,
  Phone,
  Email
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeMode } from '@/app/providers';

const FloatingActionButton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleTheme } = useThemeMode();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const actions = [
    {
      icon: <Chat />,
      name: 'Chat Support',
      action: () => {
        // TODO: Implement chat functionality
        console.log('Open chat support');
      }
    },
    {
      icon: <Phone />,
      name: 'Call Us',
      action: () => {
        window.location.href = 'tel:+1234567890';
      }
    },
    {
      icon: <Email />,
      name: 'Email Us',
      action: () => {
        window.location.href = 'mailto:info@dxagroup.com';
      }
    },
    {
      icon: theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />,
      name: 'Toggle Theme',
      action: toggleTheme
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isMobile) {
    return (
      <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
        <SpeedDial
          ariaLabel="Quick actions"
          sx={{
            '& .MuiFab-primary': {
              width: 56,
              height: 56,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              }
            }
          }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => {
                action.action();
                handleClose();
              }}
              sx={{
                bgcolor: 'background.paper',
                '&:hover': {
                  bgcolor: 'action.hover',
                }
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  }

  return (
    <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
      <AnimatePresence>
        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginBottom: 16 }}
        >
          <Tooltip title="Back to top" placement="left">
            <Fab
              color="primary"
              size="medium"
              onClick={scrollToTop}
              sx={{
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              }}
            >
              <KeyboardArrowUp />
            </Fab>
          </Tooltip>
        </motion.div>

        {/* Theme Toggle Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          style={{ marginBottom: 16 }}
        >
          <Tooltip title="Toggle theme" placement="left">
            <Fab
              color="secondary"
              size="medium"
              onClick={toggleTheme}
              sx={{
                bgcolor: 'secondary.main',
                '&:hover': {
                  bgcolor: 'secondary.dark',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              }}
            >
              {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </Fab>
          </Tooltip>
        </motion.div>

        {/* Chat Support Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Tooltip title="Chat support" placement="left">
            <Fab
              color="default"
              size="medium"
              onClick={() => console.log('Open chat support')}
              sx={{
                bgcolor: 'success.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'success.dark',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Chat />
            </Fab>
          </Tooltip>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default FloatingActionButton; 