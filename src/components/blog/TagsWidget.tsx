'use client';

import { Box, Chip } from '@mui/material';
import WidgetPaper from './WidgetPaper';
import { allTags } from '@/app/blog/page';
import Link from 'next/link';

const TagsWidget = () => {
  return (
    <WidgetPaper title="Tags">
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {allTags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            component={Link}
            href={`/blog/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
            clickable
            size="small"
            variant="outlined"
            sx={{
                '&:hover': {
                    backgroundColor: 'action.hover'
                }
            }}
          />
        ))}
      </Box>
    </WidgetPaper>
  );
};

export default TagsWidget;
