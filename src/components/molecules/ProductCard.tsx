// src/components/molecules/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  cheapestStore: string;
  cheapestPrice: string;
  otherStore: string;
  otherPrice: string;
  offersCount: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Card
    sx={{
      width: 240,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative',
      boxShadow: 3,
      borderRadius: 2,
      overflow: 'hidden',
    }}
  >
    {/* Zil ikonu */}
    <Box sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}>
      <IconButton size="small" color="default">
        <NotificationsNoneIcon fontSize="small" />
      </IconButton>
    </Box>

    {/* Tıklanabilir alan (görsel + içerik) */}
    <CardActionArea
      component={Link}
      to={`/product/${product.id}`}
      sx={{ flexGrow: 1 }}
    >
      {/* Ürün görseli */}
      <CardMedia
        component="img"
        image={product.imageUrl}
        alt={product.name}
        sx={{ height: 160, objectFit: 'cover' }}
      />

      <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="subtitle1" noWrap>
          {product.name}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography variant="caption" color="text.secondary">
            {product.cheapestStore}
          </Typography>
          <Typography variant="caption" color="success.main" fontWeight="bold">
            EN UCUZ
          </Typography>
        </Box>

        <Typography variant="h6" fontWeight="bold">
          {product.cheapestPrice}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.otherStore}{' '}
          <Typography component="span" variant="body2" color="text.primary">
            {product.otherPrice}
          </Typography>
        </Typography>
      </CardContent>
    </CardActionArea>

    {/* Alt buton */}
    <Box sx={{ p: 2 }}>
      <Button variant="contained" size="small" fullWidth>
        {product.offersCount} fiyatı incele
      </Button>
    </Box>
  </Card>
);

export default ProductCard;
