'use client';

import { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import WidgetPaper from './WidgetPaper';

interface SearchWidgetProps {
  onSearch: (query: string) => void;
}

const SearchWidget = ({ onSearch }: SearchWidgetProps) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    }

  return (
    <WidgetPaper title="Search">
        <Box component="form" onSubmit={handleSearch}>
            <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton type="submit" edge="end" aria-label="search">
                            <Search />
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
            />
        </Box>
    </WidgetPaper>
  );
};

export default SearchWidget; 