// src/components/molecules/SearchProductCard.tsx
import React from 'react';
import { Box, Card, CardMedia, Typography, Button } from '@mui/material';
import { ProductCardResponse } from '../../types/ProductTypes';
import { useNavigate } from 'react-router-dom';

interface SearchProductCardProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    offers: ProductCardResponse[];
    stok: string;
    kampanya: string;
  };
}

const SearchProductCard: React.FC<SearchProductCardProps> = ({ product }) => {
  const cheapest3 = product.offers.slice(0, 3);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        display: 'flex',
        p: 4,
        borderRadius: 4,
        boxShadow: 3,
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': { transform: 'scale(1.02)', boxShadow: 6 },
        minHeight: 200,
      }}
    >
      <CardMedia
        component="img"
        image={product.imageUrl}
        alt={product.name}
        sx={{
          width: 160,
          height: 160,
          objectFit: 'contain',
          borderRadius: 2,
          backgroundColor: '#f5f5f5',
          p: 1,
        }}
      />

      <Box sx={{ ml: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" fontWeight={600} mb={1} noWrap>
          {product.name}
        </Typography>

        <Box sx={{ mb: 1 }}>
          <Typography variant="body2">Stok: {product.stok}</Typography>
          <Typography variant="body2">Kampanya: {product.kampanya}</Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          {cheapest3.map((o, i) => (
            <Typography key={i} variant="body2" noWrap>
              {o.price.toLocaleString('tr-TR')} TL — {o.siteName} / {o.seller}
            </Typography>
          ))}
        </Box>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption">
            {product.offers.length} fiyat seçeneği
          </Typography>
          <Button
            size="small"
            component="a"
            href={product.offers[0].productUrl}
            target="_blank"
            rel="noopener"
            onClick={e => e.stopPropagation()}
          >
            Mağazaya Git
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default SearchProductCard;
