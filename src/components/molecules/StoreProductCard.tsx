// src/components/molecules/StoreProductCard.tsx
import React from 'react';
import { Box, Card, CardMedia, Typography, Button, Paper } from '@mui/material';

// StoreProduct tipi genişletildi:
export interface StoreProduct {
  id: string;
  name: string;
  imageUrl: string;
  seller: string;
  siteName: string;
  price: string;
  productUrl: string;
  stok: string;        // 🟢 yeni eklendi
  kampanya?: string;   // 🟢 yeni eklendi
}

interface StoreProductCardProps {
  product: StoreProduct;
}

const StoreProductCard: React.FC<StoreProductCardProps> = ({ product }) => (
  <Card
    sx={{
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 3,
      boxShadow: 2,
      overflow: 'hidden',
      bgcolor: 'background.paper',
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 4
      }
    }}
  >
    <Box
      sx={{
        height: 220,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 1.5,
        bgcolor: '#fafafa',
      }}
    >
      <CardMedia
        component="img"
        image={product.imageUrl}
        alt={product.name}
        sx={{
          maxHeight: '100%',
          maxWidth: '100%',
          objectFit: 'contain',
        }}
      />
    </Box>

    <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }} noWrap>
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" noWrap>
        {product.siteName} / {product.seller}
      </Typography>

      <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }} color="primary">
        {product.price}
      </Typography>

      {/* Kampanya bilgisi varsa göster */}
      {product.kampanya && product.kampanya.toLowerCase() !== 'yok' && (
        <Paper sx={{ bgcolor: '#f57c00', color: 'white', px: 1.5, py: 0.5, borderRadius: 1 }}>
          <Typography variant="body2" fontWeight={600}>
            Kampanya: {product.kampanya}
          </Typography>
        </Paper>
      )}

      {/* Stok bilgisi */}
      <Typography variant="body2" sx={{ mt: 0.5 }} color="text.secondary">
        Stok: {product.stok}
      </Typography>
    </Box>

    <Box sx={{ p: 3, pt: 0 }}>
      <Button
        component="a"
        href={product.productUrl}
        target="_blank"
        rel="noopener"
        fullWidth
        variant="contained"
        sx={{ textTransform: 'none', fontWeight: 600, py: 1.2, fontSize: 15 }}
        endIcon={<Box component="span" sx={{ fontSize: '1.2rem', ml: 0.5 }}>→</Box>}
      >
        Mağazaya Git
      </Button>
    </Box>
  </Card>
);

export default StoreProductCard;
