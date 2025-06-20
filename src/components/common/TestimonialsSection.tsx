"use client";

import { motion } from "framer-motion";
import { Box, Container, Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO",
    company: "Tech Solutions Inc.",
    testimonial: "DXA Group transformed our digital presence completely. Their strategic approach and creative solutions helped us achieve remarkable growth in our online business.",
    rating: 5,
    image: "/testimonials/john.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Global Innovations",
    testimonial: "Working with DXA Group has been a game-changer for our marketing efforts. Their team's expertise and dedication to results is truly impressive.",
    rating: 5,
    image: "/testimonials/sarah.jpg"
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StartUp Hub",
    testimonial: "The level of professionalism and creativity that DXA Group brings to the table is outstanding. They've helped us establish a strong online presence from scratch.",
    rating: 5,
    image: "/testimonials/michael.jpg"
  },
  {
    name: "Emily Brown",
    role: "E-commerce Manager",
    company: "Retail Plus",
    testimonial: "DXA Group's digital marketing strategies have significantly improved our online sales and customer engagement. They truly understand our business needs.",
    rating: 5,
    image: "/testimonials/emily.jpg"
  }
];

const TestimonialsSection = () => {
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
          overline="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear what our clients have to say about their experience working with DXA Group"
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
            gridAutoRows: '1fr',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection; 