import React from 'react';
import SectionHeader from '../atoms/SectionHeader';
import ProductCard, { Product } from '../molecules/ProductCard';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface PopularProductsSectionProps {
  products: Product[];
}

const PopularProductsSection: React.FC<PopularProductsSectionProps> = ({ products }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Box sx={{ pl: 1 }}>
        <SectionHeader title="Popüler Ürünler" icon={<ShoppingCartIcon />} />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', py: 1, pl: 1 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default PopularProductsSection;
