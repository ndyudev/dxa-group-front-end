'use client';

import { 
    Box,
    Typography,
    Avatar,
    Link as MuiLink
} from '@mui/material';
import Link from 'next/link';
import WidgetPaper from './WidgetPaper';
import { blogPosts } from '@/app/blog/page';

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
};

const FeaturedPostsWidget = () => {
    const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  return (
    <WidgetPaper title="Featured Posts">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {featuredPosts.map(post => (
                <Box key={post.id} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Avatar 
                        variant="rounded"
                        src={post.image} 
                        alt={post.title} 
                        sx={{ width: 64, height: 64 }}
                    />
                    <Box>
                        <MuiLink 
                            component={Link} 
                            href={`/blog/${post.id}`} 
                            variant="body2"
                            sx={{
                                fontWeight: 600,
                                display: 'block',
                                textDecoration: 'none',
                                color: 'text.primary',
                                '&:hover': {
                                    color: 'primary.main'
                                }
                            }}
                        >
                            {post.title}
                        </MuiLink>
                        <Typography variant="caption" color="text.secondary">
                            {formatDate(post.publishDate)}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    </WidgetPaper>
  );
};

export default FeaturedPostsWidget;