'use client';

import { usePathname } from 'next/navigation';
import { 
  Breadcrumbs as MuiBreadcrumbs, 
  Link, 
  Typography, 
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Home, NavigateNext } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const Breadcrumbs = () => {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      {
        label: 'Home',
        href: '/',
        icon: <Home sx={{ fontSize: 16 }} />
      }
    ];

    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      const label = path.charAt(0).toUpperCase() + path.slice(1);
      breadcrumbs.push({
        label,
        href: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (pathname === '/') return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          py: 2,
          px: { xs: 2, md: 0 },
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <MuiBreadcrumbs
          separator={
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <NavigateNext 
                fontSize="small" 
                sx={{ color: 'text.secondary' }} 
              />
            </motion.div>
          }
          aria-label="breadcrumb"
          sx={{
            '& .MuiBreadcrumbs-ol': {
              flexWrap: 'nowrap',
              overflow: 'hidden',
            },
            '& .MuiBreadcrumbs-li': {
              minWidth: 0,
            }
          }}
        >
          {breadcrumbs.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1 
              }}
            >
              {index === breadcrumbs.length - 1 ? (
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.icon}
                  {item.label}
                </Typography>
              ) : (
                <Link
                  href={item.href}
                  underline="hover"
                  color="inherit"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    fontSize: isMobile ? '0.875rem' : '1rem',
                  }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}
        </MuiBreadcrumbs>
      </Box>
    </motion.div>
  );
};

export default Breadcrumbs; 