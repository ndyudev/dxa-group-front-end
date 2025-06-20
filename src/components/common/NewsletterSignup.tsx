'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
  useTheme,
} from '@mui/material';
import {
  Email,
  Send,
  TrendingUp,
  Business,
  Lightbulb,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function NewsletterSignup() {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSnackbar({
        open: true,
        message: 'Please enter your email address',
        severity: 'error',
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address',
        severity: 'error',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // TODO: Integrate with email service (Mailchimp, ConvertKit, etc.)
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSnackbar({
        open: true,
        message: 'Thank you for subscribing! Check your email for confirmation.',
        severity: 'success',
      });
      
      setEmail('');
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Sorry, there was an error. Please try again.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  const benefits = [
    {
      icon: <TrendingUp />,
      title: 'Latest Trends',
      description: 'Stay ahead with cutting-edge digital marketing insights',
    },
    {
      icon: <Business />,
      title: 'Industry Updates',
      description: 'Get notified about new strategies and best practices',
    },
    {
      icon: <Lightbulb />,
      title: 'Exclusive Tips',
      description: 'Receive actionable tips to grow your business',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)'
          : 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: theme.palette.mode === 'dark' ? '#fff' : '#0d47a1',
                mb: 2,
              }}
            >
              Stay Updated
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
                maxWidth: '600px',
                mx: 'auto',
                mb: 4,
              }}
            >
              Subscribe to our newsletter and get the latest digital marketing insights, 
              industry trends, and exclusive tips delivered to your inbox.
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="center">
            {/* Benefits */}
            <Grid item xs={12} md={5}>
              <Box sx={{ mb: { xs: 4, md: 0 } }}>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 3,
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.1)' 
                          : 'rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.primary.main,
                          color: '#fff',
                          mr: 2,
                          flexShrink: 0,
                        }}
                      >
                        {benefit.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.mode === 'dark' ? '#fff' : '#0d47a1',
                            mb: 0.5,
                          }}
                        >
                          {benefit.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                          }}
                        >
                          {benefit.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Grid>

            {/* Signup Form */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.3)'}`,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.mode === 'dark' ? '#fff' : '#0d47a1',
                      mb: 3,
                    }}
                  >
                    Join Our Newsletter
                  </Typography>
                  
                  <Box component="form" onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                      <TextField
                        fullWidth
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        type="email"
                        InputProps={{
                          startAdornment: (
                            <Email sx={{ mr: 1, color: 'text.secondary' }} />
                          ),
                          sx: {
                            borderRadius: 2,
                            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#fff',
                          },
                        }}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        endIcon={isSubmitting ? null : <Send />}
                        sx={{
                          px: 4,
                          py: 2,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 600,
                          minWidth: '140px',
                        }}
                      >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                      </Button>
                    </Box>
                    
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
                        display: 'block',
                        textAlign: 'center',
                      }}
                    >
                      We respect your privacy. Unsubscribe at any time.
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
} 