import React from 'react';
import SectionHeader from '../atoms/SectionHeader';
import ProductCard, { Product } from '../molecules/ProductCard';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

interface SpecialChoicesSectionProps {
  products: Product[];
}

const SpecialChoicesSection: React.FC<SpecialChoicesSectionProps> = ({ products }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Box sx={{ pl: 1 }}>
        <SectionHeader title="Özel Seçimler" icon={<StarIcon />} />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', py: 1, pl: 1 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default SpecialChoicesSection;
