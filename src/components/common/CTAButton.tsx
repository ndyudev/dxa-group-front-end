'use client';

import { Button } from '@mui/material';
import Link from 'next/link';

export default function CTAButton() {
  return (
    <Link href="/contact" passHref>
      <Button
        variant="contained"
        color="primary"
        sx={{
          ml: { md: 2 },
          px: 3,
          py: 1,
          borderRadius: 2,
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        Get Started
      </Button>
    </Link>
  );
} 