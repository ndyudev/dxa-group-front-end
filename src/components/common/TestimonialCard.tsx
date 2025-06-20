'use client';

import { motion } from "framer-motion";
import { Box, Card, CardContent, Typography, Avatar, Rating, useTheme } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  image?: string;
  index: number;
}

const TestimonialCard = ({
  name,
  role,
  company,
  testimonial,
  rating,
  image,
  index
}: TestimonialCardProps) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: theme.palette.mode === "dark"
            ? "linear-gradient(45deg, rgba(26, 35, 126, 0.9) 0%, rgba(13, 71, 161, 0.9) 100%)"
            : "linear-gradient(45deg, rgba(187, 222, 251, 0.9) 0%, rgba(144, 202, 249, 0.9) 100%)",
          borderRadius: 2,
          position: "relative",
          overflow: "visible",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: theme.palette.mode === "dark"
              ? "0 8px 16px rgba(0, 0, 0, 0.4)"
              : "0 8px 16px rgba(0, 0, 0, 0.1)",
          }
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1
          }}
        >
          <Avatar
            src={image}
            alt={name}
            sx={{
              width: 64,
              height: 64,
              border: `4px solid ${theme.palette.background.paper}`,
              boxShadow: theme.palette.mode === "dark"
                ? "0 4px 8px rgba(0, 0, 0, 0.4)"
                : "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>

        <CardContent sx={{ pt: 6, pb: 3, px: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Box
            sx={{
              position: "absolute",
              top: 40,
              right: 20,
              color: theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(25, 118, 210, 0.1)",
            }}
          >
            <FormatQuote sx={{ fontSize: 40 }} />
          </Box>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontStyle: "italic",
              color: theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.9)"
                : "rgba(0, 0, 0, 0.7)",
              flexGrow: 1,
            }}
          >
            "{testimonial}"
          </Typography>

          <Box sx={{ mt: "auto" }}>
            <Rating
              value={rating}
              readOnly
              sx={{
                mb: 2,
                "& .MuiRating-iconFilled": {
                  color: theme.palette.mode === "dark"
                    ? "#90caf9"
                    : "#1976d2"
                }
              }}
            />

            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                color: theme.palette.mode === "dark"
                  ? "#fff"
                  : "#0d47a1"
              }}
            >
              {name}
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.7)"
                  : "rgba(0, 0, 0, 0.6)",
                fontWeight: 500
              }}
            >
              {role} at {company}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;