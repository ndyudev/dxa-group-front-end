'use client';

import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Pagination,
} from '@mui/material';
import PageHeader from '@/components/common/PageHeader';
import BlogCard from '@/components/blog/BlogCard'; 
import Sidebar from '@/components/blog/Sidebar'; 
import { BlogPost } from '@/types/blog'; 

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Future of Digital Marketing in 2024",
        excerpt: "Discover the latest trends and technologies that will shape the digital marketing landscape in 2024 and beyond.",
        author: "Sarah Johnson",
        publishDate: "2024-01-15",
        category: "Digital Marketing",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        tags: ["Digital Marketing", "Trends", "2024"],
        featured: true,
    },
    {
        id: 2,
        title: "SEO Strategies That Actually Work in 2024",
        excerpt: "Learn the most effective SEO techniques that will help your website rank higher in search results.",
        author: "Mike Chen",
        publishDate: "2024-01-12",
        category: "SEO",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        tags: ["SEO", "Search", "Strategy"],
        featured: true,
    },
    {
        id: 3,
        title: "Building a Strong Brand Identity Online",
        excerpt: "Your brand identity is more than just a logo. Learn how to create a cohesive brand presence across all digital channels.",
        author: "Emily Rodriguez",
        publishDate: "2024-01-10",
        category: "Branding",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
        tags: ["Branding", "Identity", "Design"],
        featured: false,
    },
    {
        id: 4,
        title: "Social Media Marketing: Beyond the Basics",
        excerpt: "Take your social media marketing to the next level with advanced strategies and techniques.",
        author: "David Kim",
        publishDate: "2024-01-08",
        category: "Social Media",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop",
        tags: ["Social Media", "Marketing", "Strategy"],
        featured: false,
    },
    {
        id: 5,
        title: "The Power of Content Marketing for B2B",
        excerpt: "How B2B companies can leverage content marketing to generate leads and build authority.",
        author: "Lisa Thompson",
        publishDate: "2024-01-05",
        category: "Content Marketing",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
        tags: ["B2B", "Content Marketing", "Lead Generation"],
        featured: false,
    },
    {
        id: 6,
        title: "Web Design Trends That Convert",
        excerpt: "Modern web design trends that not only look great but also drive conversions and user engagement.",
        author: "Alex Wong",
        publishDate: "2024-01-03",
        category: "Web Design",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        tags: ["Web Design", "UX", "Conversion"],
        featured: false,
    },
    {
        id: 7,
        title: "Email Marketing Automation for Beginners",
        excerpt: "A comprehensive guide to getting started with email marketing automation to nurture leads and save time.",
        author: "Sarah Johnson",
        publishDate: "2023-12-28",
        category: "Digital Marketing",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1586953208448-b95a898d92de?w=400&h=250&fit=crop",
        tags: ["Email Marketing", "Automation", "Beginners"],
        featured: false,
    }
];

export const categories = Array.from(new Set(blogPosts.map(post => post.category)))
  .map(category => ({
    name: category,
    count: blogPosts.filter(post => post.category === category).length
  }));

export const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );
  
  return (
    <>
      <PageHeader
        title="Our Blog"
        subtitle="Insights & Updates"
        description="Stay updated with the latest trends, tips, and insights in digital marketing, web design, and business growth."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <Box>
              <Grid container spacing={4}>
                {currentPosts.length > 0 ? (
                  currentPosts.map((post, index) => (
                    <Grid item xs={12} sm={6} key={post.id}>
                      <BlogCard post={post} index={index} />
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Typography variant="h6" align="center" sx={{ py: 10 }}>
                      No posts found. Try a different search or category.
                    </Typography>
                  </Grid>
                )}
              </Grid>

              {totalPages > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    size="large"
                    showFirstButton
                    showLastButton
                  />
                </Box>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Sidebar 
              onSearch={handleSearch}
              onSelectCategory={handleSelectCategory}
              selectedCategory={selectedCategory}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}