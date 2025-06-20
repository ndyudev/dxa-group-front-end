'use client';

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '@/components/common/PageHeader';
import SectionHeader from '@/components/common/SectionHeader';
import Timeline from '@/components/common/Timeline';
import FAQ from '@/components/common/FAQ';
import AnimatedCounter from '@/components/common/AnimatedCounter';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

// Team members data
const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO & Founder',
    image: '/team/john.jpg',
    description: '10+ years of experience in digital marketing and business strategy.'
  },
  {
    name: 'Jane Smith',
    position: 'Creative Director',
    image: '/team/jane.jpg',
    description: 'Award-winning creative professional with expertise in brand development.'
  },
  {
    name: 'Mike Johnson',
    position: 'Technical Lead',
    image: '/team/mike.jpg',
    description: 'Digital technology expert specializing in marketing automation.'
  },
  {
    name: 'Sarah Williams',
    position: 'Marketing Strategist',
    image: '/team/sarah.jpg',
    description: 'Data-driven marketing professional with a focus on ROI optimization.'
  }
];

const values = [
  {
    title: 'Innovation',
    description: 'We stay ahead of digital trends to provide cutting-edge solutions that drive results.'
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality of work in every project we undertake.'
  },
  {
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and maintaining the highest ethical standards.'
  }
];

// Company timeline
const companyTimeline = [
  {
    id: '1',
    title: 'Company Founded',
    description: 'DXA Group was established with a vision to revolutionize digital marketing through innovative strategies and cutting-edge technology.',
    date: '2018',
    category: 'Foundation'
  },
  {
    id: '2',
    title: 'First Major Client',
    description: 'Successfully launched our first major campaign, achieving 300% ROI for a leading e-commerce brand.',
    date: '2019',
    category: 'Growth'
  },
  {
    id: '3',
    title: 'Team Expansion',
    description: 'Expanded our team to 15 professionals and opened our second office location.',
    date: '2020',
    category: 'Expansion'
  },
  {
    id: '4',
    title: 'Award Recognition',
    description: 'Received the "Best Digital Marketing Agency" award at the Digital Excellence Awards.',
    date: '2021',
    category: 'Recognition'
  },
  {
    id: '5',
    title: 'Global Expansion',
    description: 'Started serving international clients and established partnerships with global technology leaders.',
    date: '2022',
    category: 'Global'
  },
  {
    id: '6',
    title: 'Innovation Hub',
    description: 'Launched our innovation hub to develop next-generation marketing technologies and AI-driven solutions.',
    date: '2023',
    category: 'Innovation'
  }
];

// FAQ data
const faqItems = [
  {
    id: '1',
    question: 'What services does DXA Group offer?',
    answer: 'We offer comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content creation, email marketing, and marketing automation. We also provide web development, branding, and analytics services.',
    category: 'Services'
  },
  {
    id: '2',
    question: 'How long does it take to see results?',
    answer: 'Results vary depending on the service and your industry. SEO typically shows improvements in 3-6 months, while PPC campaigns can show immediate results. We provide detailed reporting and regular updates on progress.',
    category: 'Results'
  },
  {
    id: '3',
    question: 'Do you work with small businesses?',
    answer: 'Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. We customize our approach and pricing to fit your specific needs and budget.',
    category: 'Clients'
  },
  {
    id: '4',
    question: 'What makes DXA Group different from other agencies?',
    answer: 'Our unique combination of data-driven strategies, cutting-edge technology, and personalized approach sets us apart. We focus on measurable results and long-term partnerships rather than quick wins.',
    category: 'Differentiation'
  },
  {
    id: '5',
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we believe in building long-term relationships with our clients. We provide ongoing support, regular strategy reviews, and continuous optimization to ensure your success.',
    category: 'Support'
  }
];

// Company statistics
const stats = [
  { label: 'Happy Clients', value: 150, suffix: '+' },
  { label: 'Projects Completed', value: 500, suffix: '+' },
  { label: 'Team Members', value: 25, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About DXA Group"
        subtitle="Your Partner in Digital Growth"
        description="DXA Group is a leading digital marketing agency dedicated to helping businesses thrive in the digital age. With our innovative strategies and data-driven approach, we deliver exceptional results that drive growth and success for our clients."
      />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Statistics Section */}
        <Box mb={12}>
          <SectionHeader
            overline="Our Impact"
            title="Numbers That Matter"
            subtitle="The results speak for themselves"
          />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 4,
              mt: 4,
            }}
          >
            {stats.map((stat, index) => (
              <Box key={index} sx={{ textAlign: 'center' }}>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  variant="h2"
                  color="primary.main"
                  sx={{ mb: 1 }}
                />
                <Typography variant="h6" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Values Section */}
        <Box mb={12}>
          <SectionHeader
            overline="Our Core Principles"
            title="Our Values"
            subtitle="The principles that guide our work and relationships."
          />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
              gridAutoRows: '1fr',
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card sx={{ height: '100%', p: 2 }}>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Timeline Section */}
        <Box mb={12}>
          <Timeline
            items={companyTimeline}
            title="Our Journey"
            subtitle="From humble beginnings to industry leadership"
          />
        </Box>

        {/* Team Section */}
        <Box mb={12}>
          <SectionHeader
            overline="Meet the Experts"
            title="Our Team"
            subtitle="The talented professionals behind our success stories."
          />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 4,
              gridAutoRows: '1fr',
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Avatar
                      alt={member.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: 'primary.light',
                        fontSize: '3rem'
                      }}
                    >
                      {member.name.charAt(0)}
                    </Avatar>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="body1" color="primary" gutterBottom sx={{ fontWeight: 500 }}>
                      {member.position}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* FAQ Section */}
        <Box>
          <FAQ
            items={faqItems}
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about working with DXA Group"
          />
        </Box>
      </Container>
    </>
  );
} 