// src/components/molecules/CategoriesProductCard.tsx

import React from 'react';
import { Box, Card, CardMedia, Typography, Button, Paper } from '@mui/material';
import { ProductCardResponse } from '../../types/ProductTypes';

interface CategoriesProductCardProps {
  product: {
    name: string;
    imageUrl: string;
    offers: ProductCardResponse[];
  };
}

const CategoriesProductCard: React.FC<CategoriesProductCardProps> = ({ product }) => {
  const cheapest3 = product.offers.slice(0, 3);

  return (
    <Card sx={{ display: 'flex', p: 3, borderRadius: 3, boxShadow: 3, minHeight: 200 }}>
      {/* Sol: Ürün görseli */}
      <Box
        sx={{
          width: 160,
          height: 160,
          bgcolor: '#fafafa',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          flexShrink: 0,
        }}
      >
        <CardMedia
          component="img"
          image={product.imageUrl}
          alt={product.name}
          sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      </Box>

      {/* Sağ: Ürün detay */}
      <Box sx={{ ml: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" fontWeight={600} mb={1}>
          {product.name}
        </Typography>

        {/* Fiyat kutucukları */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
          {cheapest3.map((o, i) => (
            <Paper
              key={i}
              component="a"
              href={o.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              elevation={0}
              sx={{
                border: '1px solid #ddd',
                borderRadius: 2,
                p: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                transition: 'box-shadow 0.2s ease',
                '&:hover': {
                  boxShadow: 3,
                }
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                {o.price.toLocaleString('tr-TR')} TL
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {o.siteName} / {o.seller}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Alt kısım: toplam fiyat sayısı ve mağazaya git */}
        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption">
            {product.offers.length} farklı fiyat seçeneği
          </Typography>
          <Button
            size="small"
            variant="contained"
            sx={{ borderRadius: 2, px: 3 }}
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

export default CategoriesProductCard;
