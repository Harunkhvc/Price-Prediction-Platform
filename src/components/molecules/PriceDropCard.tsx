import React from 'react';
import { Box, Typography, Card } from '@mui/material';

interface PriceDropCardProps {
  imageUrl: string;
  productName: string;
  oldPrice: string;
  newPrice: string;
}

const PriceDropCard: React.FC<PriceDropCardProps> = ({ imageUrl, productName, oldPrice, newPrice }) => {
  return (
    <Card sx={{ width: 250, p: 2, boxShadow: 3, borderRadius: 3 }}>
      <Box
        component="img"
        src={imageUrl}
        alt={productName}
        sx={{ width: '100%', height: 150, objectFit: 'contain', mb: 2 }}
      />
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {productName}
      </Typography>
      <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'gray' }}>
        {oldPrice} TL
      </Typography>
      <Typography variant="h6" color="success.main">
        {newPrice} TL
      </Typography>
    </Card>
  );
};

export default PriceDropCard;
