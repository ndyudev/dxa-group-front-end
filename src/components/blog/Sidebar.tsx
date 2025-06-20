'use client';

import { Box, Paper } from '@mui/material';
import SearchWidget from './SearchWidget';
import CategoriesWidget from './CategoriesWidget';
import FeaturedPostsWidget from './FeaturedPostsWidget';
import TagsWidget from './TagsWidget';

interface SidebarProps {
    onSearch: (query: string) => void;
    onSelectCategory: (category: string) => void;
    selectedCategory: string;
}

const Sidebar = ({ onSearch, onSelectCategory, selectedCategory }: SidebarProps) => {
  return (
    <Box component="aside" sx={{ position: 'sticky', top: 88, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <SearchWidget onSearch={onSearch} />
        <CategoriesWidget onSelectCategory={onSelectCategory} selectedCategory={selectedCategory} />
        <FeaturedPostsWidget />
        <TagsWidget />
    </Box>
  );
};

export default Sidebar; 