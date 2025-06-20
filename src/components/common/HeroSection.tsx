'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Button, Container, Typography, useTheme, Chip, IconButton } from "@mui/material";
import { ArrowForward, PlayArrow, TrendingUp, Star } from "@mui/icons-material";
import Link from 'next/link';
import { useRef } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

const HeroSection = ({ title, subtitle, description, ctaText, ctaLink, imageUrl }: HeroSectionProps) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Box
      ref={containerRef}
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(16, 185, 129, 0.8) 100%)`,
          zIndex: 1,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url(${imageUrl}) no-repeat center center`,
          backgroundSize: 'cover',
          opacity: 0.3,
          zIndex: 0,
        }
      }}
    >
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          zIndex: 2,
        }}
      >
        <Chip
          icon={<TrendingUp />}
          label="500+ Projects Completed"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          position: "absolute",
          top: "60%",
          right: "15%",
          zIndex: 2,
        }}
      >
        <Chip
          icon={<Star />}
          label="98% Client Satisfaction"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        />
      </motion.div>

      <Container maxWidth="lg">
        <motion.div
          style={{ y, opacity }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              zIndex: 3,
              color: '#fff',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontWeight: 600,
                  letterSpacing: 3,
                  mb: 3,
                  display: "block",
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  opacity: 0.9,
                }}
              >
                {subtitle}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "5rem" },
                  fontWeight: 800,
                  mb: 3,
                  lineHeight: 1.1,
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  background: "linear-gradient(45deg, #ffffff 30%, #f0f9ff 90%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {title}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 5,
                  maxWidth: { xs: "100%", md: "70%", lg: "60%" },
                  mx: 'auto',
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  lineHeight: 1.6,
                  opacity: 0.95,
                  fontWeight: 400,
                }}
              >
                {description}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
            >
              <Button
                component={Link}
                href={ctaLink}
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  py: 2,
                  px: 4,
                  borderRadius: 3,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  fontWeight: 600,
                  background: "linear-gradient(45deg, #ffffff 30%, #f0f9ff 90%)",
                  color: "#1e293b",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #f0f9ff 30%, #ffffff 90%)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                {ctaText}
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayArrow />}
                sx={{
                  py: 2,
                  px: 4,
                  borderRadius: 3,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  fontWeight: 600,
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "white",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ cursor: "pointer" }}
              >
                <Box
                  sx={{
                    width: 2,
                    height: 40,
                    bgcolor: "rgba(255, 255, 255, 0.5)",
                    borderRadius: 1,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "60%",
                      background: "linear-gradient(to top, white, transparent)",
                      borderRadius: 1,
                    }
                  }}
                />
              </motion.div>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;