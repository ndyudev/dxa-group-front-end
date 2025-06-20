"use client";

import { motion } from "framer-motion";
import { Box, Container, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const CTASection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background: (theme) => theme.palette.mode === "dark"
          ? "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)"
          : "linear-gradient(135deg, #bbdefb 0%, #90caf9 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#fff",
                mb: 3,
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              Ready to Grow Your Business?
            </Typography>

            <Typography
              variant="h5"
              paragraph
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                mb: 6,
                maxWidth: "800px",
                mx: "auto",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              Let's create a digital strategy that drives results for your business
            </Typography>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              href="/contact"
              sx={{
                py: 2,
                px: 6,
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
                transition: "all 0.3s ease-in-out",
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </Box>

        {/* Background decoration */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "200%",
            height: "200%",
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
            pointerEvents: "none",
          }}
        />
      </Container>
    </Box>
  );
};

export default CTASection; 