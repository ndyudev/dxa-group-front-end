'use client';

import { motion } from "framer-motion";
import { Box, Container, Typography, useTheme } from "@mui/material";
import CountUp from "react-countup";
import { PeopleAlt, Assignment, ThumbUp, Support } from "@mui/icons-material";

interface StatItemProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatItem = ({ value, label, icon }: StatItemProps) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          textAlign: "center",
          p: 3,
          borderRadius: 2,
          backgroundColor: theme.palette.mode === "dark" 
            ? "rgba(255, 255, 255, 0.05)" 
            : "rgba(0, 0, 0, 0.02)",
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
            mb: 2,
            display: "flex",
            justifyContent: "center",
            "& > svg": {
              fontSize: 48,
              color: "primary.main",
            }
          }}
        >
          {icon}
        </Box>
        <Typography 
          variant="h3" 
          component="div" 
          sx={{ 
            fontWeight: "bold",
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          <CountUp end={parseInt(value)} duration={2.5} suffix="+" />
        </Typography>
        <Typography 
          variant="subtitle1" 
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {label}
        </Typography>
      </Box>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "500", label: "Happy Clients", icon: <PeopleAlt /> },
    { value: "1000", label: "Projects Completed", icon: <Assignment /> },
    { value: "95", label: "Client Satisfaction", icon: <ThumbUp /> },
    { value: "24", label: "Support Available", icon: <Support /> }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: 8,
        background: (theme) => theme.palette.mode === "dark"
          ? "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(25,118,210,0.05) 100%)"
          : "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(25,118,210,0.05) 100%)"
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <Typography
            variant="overline"
            component="div"
            align="center"
            color="primary"
            gutterBottom
          >
            OUR SUCCESS
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              fontWeight: "bold",
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Numbers That Speak
          </Typography>
        </motion.div>
        
        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            },
            gap: 4
          }}
        >
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StatsSection;