// src/components/molecules/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActionArea, Typography, Box, Button, Paper } from '@mui/material';

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  cheapestStore: string;
  cheapestPrice: string;
  otherStore: string;
  otherPrice: string;
  offersCount: number;
  stok: string;
  kampanya: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Card
    sx={{
      maxWidth: 360,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      borderRadius: 4,
      boxShadow: 3,
      overflow: 'hidden',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: 6,
      },
      bgcolor: 'background.paper',
    }}
  >
    {/* Görsel bölümü, sabit yükseklik ve objectFit ile */}
    <Box
      component={Link}
      to={`/product/${product.id}`}
      sx={{
        display: 'block',
        width: '100%',
        height: 240,
        bgcolor: '#f5f5f5',
        overflow: 'hidden',
        textDecoration: 'none',
      }}
    >
      <Box
        component="img"
        src={product.imageUrl}
        alt={product.name}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </Box>

    {/* İçerik ve kampanya/stok */}
    <CardActionArea
      component={Link}
      to={`/product/${product.id}`}
      sx={{ textDecoration: 'none', flexGrow: 1 }}
    >
      <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            lineHeight: 1.2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.name}
        </Typography>

        {/* En ucuz mağaza */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="caption" color="text.secondary" noWrap>
            {product.cheapestStore}
          </Typography>
          <Box
            sx={{
              ml: 1,
              px: 1,
              py: 0.25,
              bgcolor: 'success.light',
              borderRadius: 1,
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="caption" color="success.dark" fontWeight="bold">
              EN UCUZ
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" fontWeight="bold" sx={{ color: 'success.main' }}>
          {product.cheapestPrice}
        </Typography>

        {/* Diğer mağaza ve eski fiyat */}
        <Typography variant="body2" color="text.secondary" noWrap>
          <Typography component="span" variant="body2" color="text.primary" fontWeight="500">
            {product.otherStore}:{' '}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: 'line-through' }}
          >
            {product.otherPrice}
          </Typography>
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
      </CardContent>
    </CardActionArea>

    {/* Fiyatları incele butonu */}
    <Box sx={{ p: 3, pt: 0 }}>
      <Button
        variant="contained"
        size="medium"
        fullWidth
        component={Link}
        to={`/product/${product.id}`}
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          fontWeight: 600,
          textTransform: 'none',
          py: 1.2,
          fontSize: 15,
          '&:hover': { bgcolor: 'primary.dark' },
        }}
      >
        {product.offersCount} fiyatı incele
      </Button>
    </Box>
  </Card>
);

export default ProductCard;
