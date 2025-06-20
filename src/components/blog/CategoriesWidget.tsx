'use client';

import { 
    List, 
    ListItemButton, 
    ListItemText, 
    ListItemIcon, 
    Chip, 
    Typography 
} from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import WidgetPaper from './WidgetPaper';
import { categories } from '@/app/blog/page';

interface CategoriesWidgetProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

const CategoriesWidget = ({ onSelectCategory, selectedCategory }: CategoriesWidgetProps) => {
  return (
    <WidgetPaper title="Categories">
      <List component="nav" disablePadding>
        <ListItemButton
            onClick={() => onSelectCategory("All")}
            selected={selectedCategory === "All"}
        >
          <ListItemIcon sx={{ minWidth: 32 }}>
            <ChevronRight />
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body2" sx={{ fontWeight: 500 }}>All</Typography>} />
          <Chip label={categories.reduce((acc, cat) => acc + cat.count, 0)} size="small" />
        </ListItemButton>
        {categories.map((category) => (
          <ListItemButton
            key={category.name}
            selected={selectedCategory === category.name}
            onClick={() => onSelectCategory(category.name)}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <ChevronRight />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body2" sx={{ fontWeight: 500 }}>{category.name}</Typography>} />
            <Chip label={category.count} size="small" />
          </ListItemButton>
        ))}
      </List>
    </WidgetPaper>
  );
};

export default CategoriesWidget;
