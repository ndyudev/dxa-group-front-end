'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  useTheme,
  IconButton,
  Chip,
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight,
  FormatQuote,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  category: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechStart Inc.",
    content: "DXA Group transformed our digital presence completely. Our website traffic increased by 300% and our lead generation improved dramatically. Their team is professional, creative, and results-driven.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    category: "Digital Marketing",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "GreenLife Solutions",
    content: "Working with DXA Group was a game-changer for our brand. They helped us develop a cohesive brand identity and digital strategy that perfectly represents our values and mission.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    category: "Brand Strategy",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder",
    company: "Fashion Forward",
    content: "The social media management services from DXA Group exceeded our expectations. Our engagement rates skyrocketed and we've seen a significant increase in online sales.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    category: "Social Media",
  },
  {
    id: 4,
    name: "David Kim",
    position: "Operations Manager",
    company: "HealthTech Solutions",
    content: "DXA Group's SEO expertise helped us dominate our market. We're now ranking #1 for our main keywords and our organic traffic has increased by 400%. Outstanding results!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    category: "SEO",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Marketing Manager",
    company: "InnovateCorp",
    content: "The content marketing strategy developed by DXA Group has been incredibly effective. Our thought leadership position has strengthened and we're generating high-quality leads consistently.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    category: "Content Marketing",
  },
  {
    id: 6,
    name: "Alex Wong",
    position: "E-commerce Director",
    company: "TasteBuds Restaurant Group",
    content: "DXA Group's web design and development services are top-notch. Our new website is not only beautiful but also highly functional and user-friendly. Sales have increased by 200%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    category: "Web Design",
  },
];

export default function TestimonialsCarousel() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)'
          : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="overline"
              color="primary"
              sx={{ display: 'block', mb: 2, fontWeight: 600 }}
            >
              TESTIMONIALS
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              What Our Clients Say
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Don't just take our word for it. Here's what our clients have to say about 
              their experience working with DXA Group.
            </Typography>
          </Box>

          {/* Testimonial Carousel */}
          <Box sx={{ position: 'relative', maxWidth: '800px', mx: 'auto' }}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                style={{
                  position: 'absolute',
                  width: '100%',
                }}
              >
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.3)'}`,
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 0 }}>
                    <Box sx={{ mb: 3 }}>
                      <FormatQuote
                        sx={{
                          fontSize: 60,
                          color: theme.palette.primary.main,
                          opacity: 0.3,
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h6"
                      paragraph
                      sx={{
                        fontStyle: 'italic',
                        mb: 4,
                        lineHeight: 1.8,
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
                      }}
                    >
                      "{testimonials[currentIndex].content}"
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      <Rating
                        value={testimonials[currentIndex].rating}
                        readOnly
                        size="large"
                        sx={{ color: theme.palette.warning.main }}
                      />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                      <Avatar
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        sx={{ width: 60, height: 60 }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}
                        >
                          {testimonials[currentIndex].name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                        </Typography>
                        <Chip
                          label={testimonials[currentIndex].category}
                          size="small"
                          color="primary"
                          sx={{ mt: 0.5 }}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: 'absolute',
                left: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: theme.palette.background.paper,
                boxShadow: 2,
                '&:hover': {
                  backgroundColor: theme.palette.background.paper,
                },
              }}
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: theme.palette.background.paper,
                boxShadow: 2,
                '&:hover': {
                  backgroundColor: theme.palette.background.paper,
                },
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>

          {/* Dots Indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: index === currentIndex 
                    ? theme.palette.primary.main 
                    : theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.3)' 
                      : 'rgba(0, 0, 0, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    transform: 'scale(1.2)',
                  },
                }}
              />
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
} 