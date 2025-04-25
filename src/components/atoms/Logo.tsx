import React from 'react'
import Typography from '@mui/material/Typography'

const Logo: React.FC = () => (
  <Typography
    variant="h5"                     // boyut
    sx={{
      color: 'primary.main',          // tema rengi (yeşil)
      fontWeight: 'bold',
      fontFamily: 'sans-serif',       // dilediğin fontu kullanabilirsin
      letterSpacing: '.1em',          // biraz aralık
    }}
  >
    PİNTİ
  </Typography>
)

export default Logo
