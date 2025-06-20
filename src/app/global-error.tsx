'use client';

import { Box, Button, Container, Typography } from "@mui/material";
import { Refresh } from "@mui/icons-material";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            py: 12,
            background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
          }}
        >
          <Container maxWidth="md">
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", md: "4rem" },
                  fontWeight: "bold",
                  color: "#fff",
                  mb: 2,
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}
              >
                Oops!
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  color: "rgba(255, 255, 255, 0.9)",
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)"
                }}
              >
                Something went wrong
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "1.1rem"
                }}
              >
                We're sorry, but something unexpected happened. Please try again.
              </Typography>
              <Button
                variant="contained"
                onClick={reset}
                startIcon={<Refresh />}
                sx={{
                  py: 1.5,
                  px: 4,
                  bgcolor: "#fff",
                  color: "#1976d2",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: 2,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    bgcolor: "#fff",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
                  },
                  transition: "all 0.3s ease-in-out"
                }}
              >
                Try Again
              </Button>
            </Box>
          </Container>
        </Box>
      </body>
    </html>
  );
} 