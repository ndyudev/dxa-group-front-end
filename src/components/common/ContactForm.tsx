'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
} from '@mui/material';
import { Send, Phone, Email, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  showContactInfo?: boolean;
}

const services = [
  'SEO Optimization',
  'PPC Advertising',
  'Social Media Marketing',
  'Content Marketing',
  'Email Marketing',
  'Web Development',
  'Branding',
  'Analytics & Reporting',
  'Other',
];

const contactInfo = [
  {
    icon: <Phone />,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    subtitle: 'Mon-Fri 9AM-6PM',
  },
  {
    icon: <Email />,
    title: 'Email',
    content: 'hello@dxagroup.com',
    subtitle: 'We reply within 24 hours',
  },
  {
    icon: <LocationOn />,
    title: 'Office',
    content: '123 Business Ave, Suite 100',
    subtitle: 'New York, NY 10001',
  },
];

const ContactForm = ({ onSubmit, showContactInfo = true }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | { value: unknown }>
  ) => {
    const value = e.target.value as string;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Box sx={{ py: 4 }}>
      <Grid container spacing={6}>
        {/* Contact Form */}
        <Grid item xs={12} lg={8}>
          <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Get In Touch
            </Typography>
            
            {submitStatus === 'success' && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for your message! We'll get back to you within 24 hours.
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert severity="error" sx={{ mb: 3 }}>
                Something went wrong. Please try again or contact us directly.
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange('name')}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    placeholder="(555) 123-4567"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company"
                    value={formData.company}
                    onChange={handleChange('company')}
                    placeholder="Your Company Name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Service of Interest</InputLabel>
                    <Select
                      value={formData.service}
                      label="Service of Interest"
                      onChange={handleChange('service')}
                    >
                      <MenuItem value="">
                        <em>Select a service</em>
                      </MenuItem>
                      {services.map((service) => (
                        <MenuItem key={service} value={service}>
                          {service}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange('message')}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                    placeholder="Tell us about your project, goals, or any questions you have..."
                  />
                </Grid>

                <Grid item xs={12}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={isSubmitting}
                      startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Information */}
        {showContactInfo && (
          <Grid item xs={12} lg={4}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                Contact Information
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: 'primary.light',
                          color: 'primary.contrastText',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {info.title}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500, mb: 0.5 }}>
                          {info.content}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {info.subtitle}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              <Box sx={{ mt: 6, p: 3, bgcolor: 'primary.light', borderRadius: 2, color: 'primary.contrastText' }}>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 2 }}>
                  Ready to Get Started?
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Schedule a free consultation call to discuss your project and see how we can help you achieve your goals.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{
                    fontWeight: 600,
                    textTransform: 'none',
                  }}
                >
                  Schedule Consultation
                </Button>
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ContactForm; 