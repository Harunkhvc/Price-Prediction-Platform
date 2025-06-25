// src/components/molecules/BrandProductCard.tsx
import React from 'react';
import { Box, Card, CardMedia, Typography, Button, Paper } from '@mui/material';
import { ProductCardResponse } from '../../types/ProductTypes';

interface BrandProductCardProps {
  product: {
    name: string;
    imageUrl: string;
    offers: ProductCardResponse[];
    stok: string;
    kampanya?: string;
  };
}

const BrandProductCard: React.FC<BrandProductCardProps> = ({ product }) => {
  const cheapest3 = product.offers.slice(0, 3);
  return (
    <Card sx={{ display: 'flex', p: 2, borderRadius: 2, boxShadow: 1 }}>
      <CardMedia
        component="img"
        image={product.imageUrl}
        alt={product.name}
        sx={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 1 }}
      />

      <Box sx={{ ml: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="subtitle1" fontWeight={600} noWrap>
          {product.name}
        </Typography>

        {/* Kampanya */}
        {product.kampanya && product.kampanya.toLowerCase() !== 'yok' && (
          <Paper sx={{ bgcolor: '#f57c00', color: 'white', px: 1.5, py: 0.5, borderRadius: 1, mt: 1 }}>
            <Typography variant="body2" fontWeight={600}>
              Kampanya: {product.kampanya}
            </Typography>
          </Paper>
        )}

        {/* Stok */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Stok: {product.stok}
        </Typography>

        <Box sx={{ mt: 1 }}>
          {cheapest3.map((o, i) => (
            <Typography key={i} variant="body2" noWrap>
              {o.price.toLocaleString('tr-TR')} TL — {o.siteName} / {o.seller}
            </Typography>
          ))}
        </Box>

        <Box
          sx={{
            mt: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant="caption">
            {product.offers.length} fiyatı incele
          </Typography>
          <Button
            size="small"
            component="a"
            href={product.offers[0].productUrl}
            target="_blank"
            rel="noopener"
          >
            Mağazaya Git
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default BrandProductCard;
