import React from 'react';
import SectionHeader from '../atoms/SectionHeader';
import ProductCard, { Product } from '../molecules/ProductCard';
import Box from '@mui/material/Box';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface PriceDropSectionProps {
  products: Product[];
}

const PriceDropSection: React.FC<PriceDropSectionProps> = ({ products }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Box sx={{ pl: 1 }}>
        <SectionHeader title="Fiyatı Düşenler" icon={<ArrowDownwardIcon />} />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', py: 1, pl: 1 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default PriceDropSection;
