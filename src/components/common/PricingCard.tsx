'use client';

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { Check, Star } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
  buttonVariant?: 'contained' | 'outlined';
  onSelect?: () => void;
  sx?: any;
}

const PricingCard = ({
  title,
  price,
  period = '/month',
  description,
  features,
  popular = false,
  buttonText = 'Get Started',
  buttonVariant = 'contained',
  onSelect,
  sx = {},
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Card
        sx={{
          height: '100%',
          position: 'relative',
          border: popular ? 2 : 1,
          borderColor: popular ? 'primary.main' : 'divider',
          borderRadius: 3,
          overflow: 'visible',
          ...sx,
        }}
      >
        {popular && (
          <Chip
            icon={<Star />}
            label="Most Popular"
            color="primary"
            sx={{
              position: 'absolute',
              top: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              fontWeight: 600,
            }}
          />
        )}

        <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {description}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 0.5 }}>
              <Typography variant="h3" component="span" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {period}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Features */}
          <List sx={{ flex: 1, mb: 3 }}>
            {features.map((feature, index) => (
              <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  {feature.included ? (
                    <Check color="primary" sx={{ fontSize: 20 }} />
                  ) : (
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        bgcolor: 'grey.300',
                      }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={feature.text}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: feature.included ? 'text.primary' : 'text.disabled',
                      textDecoration: feature.included ? 'none' : 'line-through',
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>

          {/* Button */}
          <Button
            variant={buttonVariant}
            size="large"
            fullWidth
            onClick={onSelect}
            sx={{
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
            }}
          >
            {buttonText}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PricingCard; 