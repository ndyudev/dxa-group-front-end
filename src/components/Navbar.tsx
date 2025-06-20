'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useTheme,
  useMediaQuery,
  Container,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { Brightness4, Brightness7, Person, Logout } from '@mui/icons-material';
import CTAButton from './common/CTAButton';
import { useThemeMode, useAuth } from '@/app/providers';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleTheme } = useThemeMode();
  const { isAuthenticated, user, logout, loading } = useAuth();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const authLinks = (
    <>
      <Button component={Link} href="/admin" startIcon={<Person />} sx={{ color: 'text.primary' }}>
        {user?.fullName || 'Admin'}
      </Button>
      <Button onClick={logout} startIcon={<Logout />} sx={{ color: 'text.primary' }}>
        Logout
      </Button>
    </>
  );

  const guestLinks = (
    <>
      <Button component={Link} href="/login" sx={{ color: 'text.primary', fontWeight: 500 }}>
        Login
      </Button>
      <CTAButton text="Register" href="/login" />
    </>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
          DXA Group
        </Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{
                textAlign: 'center',
                color: pathname === item.href ? 'primary.main' : 'text.primary',
                fontWeight: pathname === item.href ? 700 : 500,
                bgcolor: pathname === item.href ? 'action.selected' : 'transparent',
                borderRadius: 2,
                '&:hover': {
                  bgcolor: 'action.hover',
                  color: 'primary.main',
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        {isAuthenticated ? (
          <>
            <ListItemButton component={Link} href="/admin"><ListItemText primary="Admin" /></ListItemButton>
            <ListItemButton onClick={logout}><ListItemText primary="Logout" /></ListItemButton>
          </>
        ) : (
          <ListItemButton component={Link} href="/login"><ListItemText primary="Login" /></ListItemButton>
        )}
        <ListItem disablePadding>
          <ListItemButton onClick={toggleTheme} sx={{ justifyContent: 'center' }}>
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </ListItemIcon>
            <ListItemText primary={theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'} />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ justifyContent: 'center', pt: 2 }}>
            <CTAButton />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: 'background.default',
          transition: 'background-color 0.3s, box-shadow 0.3s',
          borderBottom: 1,
          borderColor: 'divider',
          boxShadow: scrolled ? '0 2px 16px 0 rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                color: 'text.primary',
                textDecoration: 'none',
                fontSize: '1.5rem',
              }}
            >
              DXA Group
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: pathname === item.href ? 'primary.main' : 'text.primary',
                      fontWeight: pathname === item.href ? 700 : 500,
                      bgcolor: pathname === item.href ? 'action.selected' : 'transparent',
                      fontSize: '1rem',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.2s',
                      '&:hover': {
                        bgcolor: 'action.hover',
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
                <IconButton sx={{ ml: 1, transition: 'all 0.2s' }} onClick={toggleTheme} color="inherit">
                  {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                {!loading && (isAuthenticated ? authLinks : guestLinks)}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
} 