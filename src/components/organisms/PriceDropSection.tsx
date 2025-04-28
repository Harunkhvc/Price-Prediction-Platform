// src/components/organisms/PriceDropSection.tsx
import React from 'react'
import Box from '@mui/material/Box'
import SectionHeader from '../atoms/SectionHeader'
import ProductCard, { Product } from '../molecules/ProductCard'

interface PriceDropSectionProps {
  products: Product[]
}

const PriceDropSection: React.FC<PriceDropSectionProps> = ({ products }) => (
  <Box mb={6}>
    <SectionHeader title="Fiyatı Düşenler" icon={<span>📉</span>} />
    <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', py: 1 }}>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </Box>
  </Box>
)

export default PriceDropSection
