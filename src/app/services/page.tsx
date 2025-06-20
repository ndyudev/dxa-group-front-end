"use client";

import { motion } from "framer-motion";
import { Box, Container, Typography, Card, CardContent, useTheme } from "@mui/material";
import { Campaign, Code, Brush, Analytics, Language, Speed, Security, Support } from "@mui/icons-material";
import PageHeader from '@/components/common/PageHeader';

const services = [
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to grow your online presence and reach your target audience effectively.",
    icon: <Campaign />,
    features: ["SEO Optimization", "Social Media Marketing", "Email Campaigns", "Content Strategy"]
  },
  {
    title: "Web Development",
    description: "Custom web development services using cutting-edge technologies to create responsive and user-friendly websites.",
    icon: <Code />,
    features: ["Custom Websites", "E-commerce Solutions", "Web Applications", "API Integration"]
  },
  {
    title: "Creative Design",
    description: "Creative design services that help your brand stand out with visually appealing and engaging content.",
    icon: <Brush />,
    features: ["Brand Identity", "UI/UX Design", "Graphic Design", "Motion Graphics"]
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive analytics and reporting to track your digital performance and make data-driven decisions.",
    icon: <Analytics />,
    features: ["Performance Tracking", "Custom Reports", "Data Analysis", "Insights & Recommendations"]
  },
  {
    title: "SEO Services",
    description: "Search engine optimization services to improve your website's visibility and organic traffic.",
    icon: <Language />,
    features: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building"]
  },
  {
    title: "Performance Optimization",
    description: "Website performance optimization to ensure fast loading times and smooth user experience.",
    icon: <Speed />,
    features: ["Speed Optimization", "Code Optimization", "Cache Management", "CDN Integration"]
  },
  {
    title: "Security Solutions",
    description: "Comprehensive security solutions to protect your website and data from threats.",
    icon: <Security />,
    features: ["SSL Certificates", "Security Audits", "Malware Protection", "Backup Solutions"]
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support to ensure your digital assets are always running smoothly.",
    icon: <Support />,
    features: ["Technical Support", "Maintenance", "Updates", "Emergency Response"]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
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
        <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2
            }}
          >
            <Box
              sx={{
                p: 2,
                borderRadius: "50%",
                background: theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(25, 118, 210, 0.1)",
                "& > svg": {
                  fontSize: 40,
                  color: theme.palette.mode === "dark"
                    ? "#90caf9"
                    : "#1976d2"
                }
              }}
            >
              {service.icon}
            </Box>
          </Box>

          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            align="center"
            sx={{
              fontWeight: 600,
              color: theme.palette.mode === "dark"
                ? "#fff"
                : "#0d47a1"
            }}
          >
            {service.title}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            paragraph
            sx={{
              mb: 3,
              color: theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(0, 0, 0, 0.7)",
              flexGrow: 1
            }}
          >
            {service.description}
          </Typography>

          <Box sx={{ mt: "auto", pt: 2 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0px 8px', justifyContent: 'center' }}>
              {service.features.map((feature, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.7)"
                      : "rgba(0, 0, 0, 0.7)",
                    "&::before": {
                      content: '"•"',
                      color: theme.palette.primary.main,
                      fontWeight: "bold",
                      fontSize: "1.2em",
                      display: 'inline-block',
                      marginRight: '0.5em',
                    }
                  }}
                >
                  {feature}
                </Typography>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="What We Offer"
        description="Comprehensive digital marketing solutions tailored to your business needs, designed to elevate your brand and drive growth."
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
            gridAutoRows: '1fr',
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default ServicesPage;