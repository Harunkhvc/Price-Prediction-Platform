// src/components/molecules/StoreOfferCard.tsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export interface StoreOffer {
  vendor: string;
  logoUrl: string;
  tagline: string;
  price: string;
  rating: string;
  url: string;
}

interface Props {
  offer: StoreOffer;
}

const StoreOfferCard: React.FC<Props> = ({ offer }) => {
  return (
    <Box
      component={Link}
      href={offer.url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 2,
        border: '1px solid #ddd',
        borderRadius: 2,
        textDecoration: 'none',
      }}
    >
      {/* Logo boyutunu büyüttük */}
      <Box
        component="img"
        src={offer.logoUrl}
        alt={offer.vendor}
        sx={{
          width: 100,        // ← Burada logo genişliğini piksel olarak ayarlayabilirsiniz
          height: 'auto',    // Oran korunsun
          objectFit: 'contain',
        }}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography variant="subtitle1" color="text.primary">
          {offer.vendor}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.tagline}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {offer.price}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {offer.rating} ★
        </Typography>
      </Box>
    </Box>
  );
};

export default StoreOfferCard;
