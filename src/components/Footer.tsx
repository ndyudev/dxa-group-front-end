'use client';

import { Box, Container, Typography, Link as MuiLink, IconButton, Stack, Divider } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Email, Phone, LocationOn } from '@mui/icons-material';
import NextLink from 'next/link';

const socialLinks = [
  { icon: <Facebook />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <Twitter />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <LinkedIn />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Instagram />, href: 'https://instagram.com', label: 'Instagram' },
];

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider', mt: 8, pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} justifyContent="space-between" alignItems="flex-start" sx={{ mb: 4 }}>
          {/* Logo & Description */}
          <Box sx={{ flex: 1, minWidth: 220 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'primary.main', letterSpacing: 1 }}>
              DXA Group
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Your partner in digital growth. We deliver innovative marketing solutions for businesses of all sizes.
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((item) => (
                <IconButton
                  key={item.label}
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={item.label}
                  sx={{
                    color: 'text.secondary',
                    bgcolor: 'grey.100',
                    transition: 'all 0.2s',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: 1, minWidth: 180 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((item) => (
                <MuiLink
                  key={item.name}
                  component={NextLink}
                  href={item.href}
                  underline="none"
                  color="text.secondary"
                  sx={{
                    fontWeight: 500,
                    fontSize: '1rem',
                    borderRadius: 1,
                    px: 1,
                    py: 0.5,
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  {item.name}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box sx={{ flex: 1, minWidth: 220 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contact
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Email fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary">
                  hello@dxagroup.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Phone fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary">
                  +1 (555) 123-4567
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOn fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary">
                  123 Business Ave, New York, NY
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} DXA Group. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
} 