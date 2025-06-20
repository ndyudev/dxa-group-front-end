'use client';

import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  useTheme,
  Avatar
} from '@mui/material';
import { motion } from 'framer-motion';
import { CalendarToday, Person, ArrowForward } from '@mui/icons-material';
import Link from 'next/link';
import { BlogPost } from '@/app/blog/page';

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const BlogCard = ({ post, index }: { post: BlogPost, index: number }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ height: '100%' }}
    >
      <Card sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        }
      }}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="200"
            image={post.image}
            alt={post.title}
            sx={{ objectFit: 'cover' }}
          />
          <Chip 
            label={post.category}
            size="small"
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              bgcolor: 'rgba(0,0,0,0.5)',
              color: 'white',
              fontWeight: 600,
              backdropFilter: 'blur(4px)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontSize: '0.7rem'
            }}
          />
        </Box>
        <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ 
                fontWeight: 700, 
                lineHeight: 1.4,
                '& a': {
                    color: 'inherit',
                    textDecoration: 'none',
                    '&:hover': {
                        color: 'primary.main'
                    }
                }
            }}
          >
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1, mb: 3 }}>
            {post.excerpt}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', mt: 'auto' }}>
            <Avatar sx={{ width: 32, height: 32, mr: 1.5, fontSize: '0.8rem' }}>
                {post.author.split(' ').map(n => n[0]).join('')}
            </Avatar>
            <Box>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {post.author}
                </Typography>
                <Typography variant="caption">
                    {formatDate(post.publishDate)} &middot; {post.readTime}
                </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogCard; 