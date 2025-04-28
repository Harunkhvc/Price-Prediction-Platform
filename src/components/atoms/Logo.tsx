// src/components/atoms/Logo.tsx
import React from 'react'
import Typography from '@mui/material/Typography'

const Logo: React.FC = () => (
  <Typography
    variant="h5"
    sx={{
      color: '#008000',    // logo rengi yeşil
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      letterSpacing: '.1em',
    }}
  >
    PİNTİ
  </Typography>
)

export default Logo
