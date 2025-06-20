'use client';

import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Chip,
  Button,
  useTheme,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton
} from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '@/components/common/PageHeader';
import AnimatedCard from '@/components/common/AnimatedCard';

// Import icons
import { 
    Assessment, 
    Brush, 
    Code, 
    Share, 
    TrendingUp, 
    Campaign, 
    Create, 
    ArrowForward 
} from '@mui/icons-material';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  client: string;
  duration: string;
  technologies: string[];
  results: string[];
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    const theme = useTheme();
    return (
        <AnimatedCard delay={index * 0.1}>
            <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'box-shadow 0.3s, transform 0.3s',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[8],
                }
            }}>
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image={project.image}
                        alt={project.title}
                        sx={{ objectFit: 'cover' }}
                    />
                    <Chip 
                        label={project.category}
                        size="small"
                        color="primary"
                        sx={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            bgcolor: 'rgba(0,0,0,0.6)',
                            color: 'white',
                            fontWeight: 600
                        }}
                    />
                </Box>
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: 600, mb: 2 }}
                    >
                        {project.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                    >
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0, justifyContent: 'space-between' }}>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForward />}
                        href="#"
                        sx={{ textTransform: 'none' }}
                    >
                        View Case Study
                    </Button>
                    <IconButton>
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
        </AnimatedCard>
    )
}

export default function PortfolioPage() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'TechStart Social Media Campaign',
      description: 'Comprehensive social media management and advertising campaign for a tech startup.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop',
      category: 'Social Media',
      client: 'TechStart Inc.',
      duration: '6 months',
      technologies: ['Facebook Ads', 'Instagram', 'LinkedIn', 'Google Analytics'],
      results: ['300% increase in engagement', '150% growth in followers', '25% increase in website traffic'],
    },
    {
      id: 2,
      title: 'GreenLife Brand Identity',
      description: 'Complete brand identity development and digital presence for an eco-friendly company.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      category: 'Brand Strategy',
      client: 'GreenLife Solutions',
      duration: '3 months',
      technologies: ['Brand Strategy', 'Logo Design', 'Website Design', 'Content Creation'],
      results: ['New brand identity launched', 'Website traffic increased by 200%', 'Brand recognition improved'],
    },
    {
      id: 3,
      title: 'InnovateCorp Content Marketing',
      description: 'Content marketing strategy and execution for a B2B technology company.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      category: 'Content Creation',
      client: 'InnovateCorp',
      duration: '12 months',
      technologies: ['Blog Writing', 'Email Marketing', 'SEO', 'Social Media'],
      results: ['500+ blog posts published', 'Email list grew by 300%', 'Organic traffic increased by 150%'],
    },
    {
      id: 4,
      title: 'Fashion Forward E-commerce',
      description: 'Digital advertising and social media management for a fashion e-commerce brand.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      category: 'Digital Advertising',
      client: 'Fashion Forward',
      duration: '8 months',
      technologies: ['Google Ads', 'Facebook Ads', 'Instagram Shopping', 'TikTok'],
      results: ['ROAS improved by 250%', 'Sales increased by 180%', 'Customer acquisition cost reduced'],
    },
    {
      id: 5,
      title: 'HealthTech Lead Generation',
      description: 'Lead generation campaign for a healthcare technology company.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      category: 'Digital Advertising',
      client: 'HealthTech Solutions',
      duration: '4 months',
      technologies: ['LinkedIn Ads', 'Content Marketing', 'Email Automation', 'CRM Integration'],
      results: ['500+ qualified leads generated', 'Conversion rate of 15%', 'Revenue increased by 300%'],
    },
    {
      id: 6,
      title: 'Restaurant Chain Social Media',
      description: 'Social media management for a multi-location restaurant chain.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      category: 'Social Media',
      client: 'TasteBuds Restaurant Group',
      duration: '10 months',
      technologies: ['Instagram', 'Facebook', 'TikTok', 'Local SEO'],
      results: ['Social media engagement up 400%', 'Foot traffic increased by 25%', 'Online orders grew by 200%'],
    },
  ];

  const categories = [
    { name: 'All', icon: <TrendingUp /> },
    { name: 'Social Media', icon: <Campaign /> },
    { name: 'Brand Strategy', icon: <Brush /> },
    { name: 'Content Creation', icon: <Create /> },
    { name: 'Digital Advertising', icon: <Assessment /> },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <PageHeader
        title="Our Portfolio"
        subtitle="Success Stories"
        description="Explore our successful projects and see how we've helped businesses achieve their digital marketing goals."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Category Filter */}
        <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
          {categories.map((category) => {
            const count = category.name === 'All'
              ? projects.length
              : projects.filter(p => p.category === category.name).length;
            
            const isActive = selectedCategory === category.name;

            return (
              <Button
                key={category.name}
                startIcon={category.icon}
                variant={isActive ? "contained" : "outlined"}
                onClick={() => setSelectedCategory(category.name)}
                sx={{
                  m: 0.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  py: 1.5,
                  px: 3,
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? theme.shadows[3] : 'none',
                  ...(isActive ? {} : {
                    color: theme.palette.mode === 'dark' ? 'grey.300' : 'text.secondary',
                    borderColor: theme.palette.mode === 'dark' ? 'grey.700' : 'divider',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: theme.shadows[4],
                      backgroundColor: theme.palette.mode === 'dark' ? 'grey.800' : 'action.hover',
                      borderColor: theme.palette.mode === 'dark' ? 'grey.600' : 'text.primary',
                    }
                  })
                }}
              >
                {`${category.name} (${count})`}
              </Button>
            );
          })}
        </Box>

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
            gridAutoRows: '1fr', // This makes all rows have the same height
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Box>
      </Container>
    </>
  );
} 