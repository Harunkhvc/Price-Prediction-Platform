// src/components/organisms/PopularProductsSection.tsx
import React from 'react'
import Box from '@mui/material/Box'
import SectionHeader from '../atoms/SectionHeader'
import ProductCard, { Product } from '../molecules/ProductCard'

interface PopularProductsSectionProps {
  products: Product[]
}

const PopularProductsSection: React.FC<PopularProductsSectionProps> = ({ products }) => (
  <Box mb={6}>
    <SectionHeader title="Popüler Ürünler" icon={<span>🔥</span>} />
    <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', py: 1 }}>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </Box>
  </Box>
)

export default PopularProductsSection
