'use client';

import { Box, Divider } from '@mui/material';
import HeroSection from '@/components/common/HeroSection';
import StatsSection from '@/components/common/StatsSection';
import ServicesSection from '@/components/common/ServicesSection';
import WhyChooseUsSection from '@/components/common/WhyChooseUsSection';
import TestimonialsSection from '@/components/common/TestimonialsSection';
import CTASection from '@/components/common/CTASection';

export default function HomePage() {
  return (
    <Box>
      <HeroSection
        title="Elevate Your Digital Presence"
        subtitle="Full-Service Digital Marketing Agency"
        description="We help businesses grow online with cutting-edge digital marketing strategies, from SEO and content creation to social media and advertising."
        ctaText="Get Started"
        ctaLink="/contact"
        imageUrl="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1470&q=80"
      />
      <StatsSection />
      <Divider />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </Box>
  );
}