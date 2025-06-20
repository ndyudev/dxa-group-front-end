'use client';

import { Paper, Typography, Box, Divider } from '@mui/material';

interface WidgetPaperProps {
    title: string;
    children: React.ReactNode;
}

const WidgetPaper = ({ title, children }: WidgetPaperProps) => {
    return (
        <Paper elevation={0} sx={{ 
            border: 1, 
            borderColor: 'divider', 
            borderRadius: 2,
            overflow: 'hidden'
        }}>
            <Box sx={{ p: 2, bgcolor: 'action.hover' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {title}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
                {children}
            </Box>
        </Paper>
    );
};

export default WidgetPaper;
