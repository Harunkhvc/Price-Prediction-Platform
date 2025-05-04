// src/components/organisms/SpecialChoicesSection.tsx
import React from 'react'
import Box from '@mui/material/Box'
import SectionHeader from '../atoms/SectionHeader'
import ProductCard, { Product } from '../molecules/ProductCard'

interface SpecialChoicesSectionProps {
  products: Product[]
}

const SpecialChoicesSection: React.FC<SpecialChoicesSectionProps> = ({ products }) => (
  <Box mb={6}>
    <SectionHeader title="Pintinin Seçimi" icon={<span>🧠</span>} />
    <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', py: 1 }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  </Box>
)

export default SpecialChoicesSection
