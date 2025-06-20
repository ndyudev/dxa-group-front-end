"use client";

import { motion } from "framer-motion";
import { Box, Container, Typography, Card, CardContent, Button, useTheme, Chip } from "@mui/material";
import { Campaign, Code, Brush, Analytics, ArrowForward, CheckCircle } from "@mui/icons-material";
import SectionHeader from "./SectionHeader";

const services = [
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to grow your online presence and reach your target audience effectively.",
    icon: <Campaign />,
    features: ["SEO Optimization", "Social Media Marketing", "Email Campaigns", "Content Strategy"],
    color: "#2196F3",
    gradient: "linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)"
  },
  {
    title: "Web Development",
    description: "Custom web development services using cutting-edge technologies to create responsive and user-friendly websites.",
    icon: <Code />,
    features: ["Custom Websites", "E-commerce Solutions", "Web Applications", "API Integration"],
    color: "#10B981",
    gradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)"
  },
  {
    title: "Creative Design",
    description: "Creative design services that help your brand stand out with visually appealing and engaging content.",
    icon: <Brush />,
    features: ["Brand Identity", "UI/UX Design", "Graphic Design", "Motion Graphics"],
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)"
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive analytics and reporting to track your digital performance and make data-driven decisions.",
    icon: <Analytics />,
    features: ["Performance Tracking", "Custom Reports", "Data Analysis", "Insights & Recommendations"],
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)"
  }
];

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  index: number;
  color: string;
  gradient: string;
}

const ServiceCard = ({ title, description, icon, features, index, color, gradient }: ServiceCardProps) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ height: '100%' }}
      whileHover={{ y: -8 }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: theme.palette.mode === "dark"
            ? "linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.8) 100%)"
            : "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)",
          borderRadius: 3,
          border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
          backdropFilter: "blur(10px)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: gradient,
            transform: "scaleX(0)",
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          },
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: theme.palette.mode === "dark"
              ? "0 20px 40px rgba(0, 0, 0, 0.4)"
              : "0 20px 40px rgba(0, 0, 0, 0.15)",
            "&::before": {
              transform: "scaleX(1)",
            },
            "& .service-icon": {
              transform: "scale(1.1) rotate(5deg)",
              background: gradient,
            },
            "& .service-icon svg": {
              color: "white",
            }
          }
        }}
      >
        <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3
            }}
          >
            <motion.div
              className="service-icon"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "50%",
                  background: theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(25, 118, 210, 0.1)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "& > svg": {
                    fontSize: 48,
                    color: color,
                    transition: "color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }
                }}
              >
                {icon}
              </Box>
            </motion.div>
          </Box>

          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            align="center"
            sx={{
              fontWeight: 700,
              color: theme.palette.mode === "dark"
                ? "#fff"
                : "#1e293b",
              mb: 2,
              fontSize: { xs: "1.25rem", md: "1.5rem" }
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            align="center"
            paragraph
            sx={{
              mb: 4,
              color: theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.8)"
                : "rgba(0, 0, 0, 0.7)",
              lineHeight: 1.6,
              fontSize: { xs: "0.875rem", md: "1rem" }
            }}
          >
            {description}
          </Typography>

          <Box sx={{ mt: "auto", pt: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <CheckCircle 
                      sx={{ 
                        fontSize: 20, 
                        color: color,
                        flexShrink: 0
                      }} 
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.8)"
                          : "rgba(0, 0, 0, 0.7)",
                        fontWeight: 500,
                        fontSize: { xs: "0.8rem", md: "0.875rem" }
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  href={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: 3,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    background: gradient,
                    boxShadow: `0 4px 20px ${color}40`,
                    "&:hover": {
                      background: gradient,
                      transform: "translateY(-2px)",
                      boxShadow: `0 8px 30px ${color}60`,
                    },
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: (theme) => theme.palette.mode === "dark"
          ? "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(25,118,210,0.05) 100%)"
          : "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(25,118,210,0.05) 100%)"
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          overline="Our Services"
          title="What We Offer"
          subtitle="Comprehensive digital marketing solutions tailored to your business needs"
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: { xs: 3, md: 4 },
            gridAutoRows: '1fr',
            mt: { xs: 4, md: 6 }
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;