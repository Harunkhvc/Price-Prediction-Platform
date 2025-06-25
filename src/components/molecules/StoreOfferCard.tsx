import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { getVendorLogo } from '../../utils/vendorLogos';

export interface StoreOffer {
  vendor: string;
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
      <Box
        component="img"
        src={getVendorLogo(offer.vendor)}
        alt={offer.vendor}
        sx={{
          width: 100,
          height: 'auto',
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
