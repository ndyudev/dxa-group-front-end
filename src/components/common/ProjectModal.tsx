'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  Chip,
  Card,
  CardMedia,
  useTheme,
  IconButton,
} from '@mui/material';
import {
  Close,
  Launch,
  CalendarToday,
  Business,
  Code,
  TrendingUp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

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
  longDescription?: string;
  challenges?: string[];
  solutions?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  const theme = useTheme();

  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          maxHeight: '90vh',
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
              {project.title}
            </Typography>
            <Chip
              label={project.category}
              color="primary"
              size="small"
              sx={{ mr: 1 }}
            />
            <Chip
              label={project.client}
              variant="outlined"
              size="small"
            />
          </Box>
          <IconButton onClick={onClose} size="large">
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ pt: 0 }}>
        <Grid container spacing={4}>
          {/* Project Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card sx={{ overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            </motion.div>
          </Grid>

          {/* Project Details */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarToday sx={{ fontSize: 20 }} />
                  Project Duration
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {project.duration}
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Code sx={{ fontSize: 20 }} />
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{ borderRadius: 1 }}
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TrendingUp sx={{ fontSize: 20 }} />
                  Key Results
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {project.results.map((result, index) => (
                    <Typography
                      key={index}
                      component="li"
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.5 }}
                    >
                      {result}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Project Description */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Project Overview
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {project.longDescription || project.description}
              </Typography>

              {project.challenges && project.challenges.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: theme.palette.error.main }}>
                    Challenges Faced
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {project.challenges.map((challenge, index) => (
                      <Typography
                        key={index}
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        {challenge}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              )}

              {project.solutions && project.solutions.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: theme.palette.success.main }}>
                    Our Solutions
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {project.solutions.map((solution, index) => (
                      <Typography
                        key={index}
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        {solution}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              )}
            </motion.div>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0 }}>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
        <Button
          variant="contained"
          endIcon={<Launch />}
          sx={{ borderRadius: 2 }}
        >
          View Case Study
        </Button>
      </DialogActions>
    </Dialog>
  );
}