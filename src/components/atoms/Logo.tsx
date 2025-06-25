// src/components/atoms/Logo.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

const Logo: React.FC = () => (
  <Typography
    component={RouterLink}
    to="/"
    variant="h5"
    sx={{
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
      letterSpacing: '0.1em',
      background: 'linear-gradient(90deg, #006400 0%, #00B300 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
      textDecoration: 'none',           // Remove underline
      '&:hover': {
        opacity: 0.8,                   // Subtle feedback on hover
      }
    }}
  >
    PİNTİ
  </Typography>
);

export default Logo;
