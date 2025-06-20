'use client';

import { useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '4rem', fontWeight: 700 }}>
          Oops!
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Something went wrong
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
          We're sorry, but something unexpected happened. Please try again.
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<RefreshIcon />}
          onClick={reset}
          sx={{
            px: 4,
            py: 2,
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: 2,
            textTransform: 'none',
          }}
        >
          Try Again
        </Button>
      </Box>
    </Container>
  );
} 