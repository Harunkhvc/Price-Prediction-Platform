import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import PriceDropCard from '../components/molecules/PriceDropCard';
import { getPriceDropProducts } from '../api-client/ProductApi';
import { ProductCardResponse } from '../types/ProductTypes';

const PriceDropPage: React.FC = () => {
  const [items, setItems] = useState<ProductCardResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPriceDropProducts(12)  // kaç ürün çekmek istiyorsan sayıyı verebilirsin
      .then(data => setItems(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={3} mt={5}>
      <Typography variant="h4" gutterBottom>Fiyatı Düşen Ürünler</Typography>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {items.map(item => (
          <PriceDropCard
            key={item.id}
            imageUrl={item.imageUrl}
            productName={item.name}
            oldPrice={(item.originalPrice ?? 0).toLocaleString()}
            newPrice={item.price.toLocaleString()}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PriceDropPage;
