"use client";

import { motion } from "framer-motion";
import { Box, Container, Typography, Paper, useTheme } from "@mui/material";
import { Speed, Security, EmojiObjects, Headset, Timeline, Psychology } from "@mui/icons-material";
import SectionHeader from "./SectionHeader";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const features: Feature[] = [
  {
    icon: <Speed />,
    title: "Fast Delivery",
    description: "Quick turnaround time for all projects with consistent updates and milestones."
  },
  {
    icon: <Security />,
    title: "Reliable & Secure",
    description: "Your data and projects are handled with the highest level of security and confidentiality."
  },
  {
    icon: <EmojiObjects />,
    title: "Innovative Solutions",
    description: "Creative and cutting-edge solutions tailored to your unique business needs."
  },
  {
    icon: <Headset />,
    title: "24/7 Support",
    description: "Round-the-clock support to address your concerns and queries promptly."
  },
  {
    icon: <Timeline />,
    title: "Data-Driven",
    description: "Strategic decisions backed by comprehensive data analysis and insights."
  },
  {
    icon: <Psychology />,
    title: "Expert Team",
    description: "Skilled professionals with years of experience in digital marketing."
  }
];

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ height: '100%' }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          height: "100%",
          background: theme.palette.mode === "dark"
            ? "linear-gradient(45deg, rgba(26, 35, 126, 0.9) 0%, rgba(13, 71, 161, 0.9) 100%)"
            : "linear-gradient(45deg, rgba(187, 222, 251, 0.9) 0%, rgba(144, 202, 249, 0.9) 100%)",
          borderRadius: 2,
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: theme.palette.mode === "dark"
              ? "0 8px 16px rgba(0, 0, 0, 0.4)"
              : "0 8px 16px rgba(0, 0, 0, 0.1)",
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2
          }}
        >
          <Box
            sx={{
              mr: 2,
              p: 1.5,
              borderRadius: "12px",
              background: theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(25, 118, 210, 0.1)",
              "& > svg": {
                fontSize: 32,
                color: theme.palette.mode === "dark"
                  ? "#90caf9"
                  : "#1976d2"
              }
            }}
          >
            {feature.icon}
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: theme.palette.mode === "dark"
                ? "#fff"
                : "#0d47a1"
            }}
          >
            {feature.title}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.7)"
              : "rgba(0, 0, 0, 0.7)"
          }}
        >
          {feature.description}
        </Typography>
      </Paper>
    </motion.div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background: (theme) => theme.palette.mode === "dark"
          ? "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(25,118,210,0.05) 100%)"
          : "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(25,118,210,0.05) 100%)"
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          overline="Why Choose Us"
          title="What Sets Us Apart"
          subtitle="We combine expertise, innovation, and dedication to deliver exceptional results for your business"
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
            gridAutoRows: '1fr', // Make all cards equal height
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUsSection; 