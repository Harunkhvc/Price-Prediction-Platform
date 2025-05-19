// src/components/molecules/StoreOfferCard.tsx
import  { FC } from 'react';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export interface StoreOffer {
  vendor: string;
  logoUrl: string;
  tagline: string;
  price: string;
  url: string;
  rating: string;
}

interface StoreOfferCardProps {
  offer: StoreOffer;
}

const StoreOfferCard: FC<StoreOfferCardProps> = ({ offer }) => (
  <Box
    sx={{
      border: 1,
      borderColor: 'grey.300',
      borderRadius: 1,
      p: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'background.paper',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box
        component="img"
        src={offer.logoUrl}
        alt={offer.vendor}
        sx={{
          width: 100,
          height: 40,
          objectFit: 'contain',
          backgroundColor: 'grey.50',
          p: 1,
          borderRadius: 0.5,
        }}
      />
      <Box>
        <Typography
          variant="caption"
          sx={{ color: 'success.main', fontWeight: 600 }}
        >
          {offer.tagline.toUpperCase()}
        </Typography>
        <Typography variant="body2">{offer.vendor}</Typography>
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5 }}>
          {offer.price}
        </Typography>
      </Box>
    </Box>
    <Button
      variant="contained"
      endIcon={<ChevronRightIcon />}
      href={offer.url}
      target="_blank"
      sx={{ textTransform: 'none' }}
    >
      Mağazaya Git
    </Button>
  </Box>
);

export default StoreOfferCard;
