// src/components/organisms/PriceDropSection.tsx
import React, { useState } from 'react';
import SectionHeader from '../atoms/SectionHeader';
import ProductCard, { Product } from '../molecules/ProductCard';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface PriceDropSectionProps {
  products: Product[];
}

const ITEMS_PER_PAGE = 5;
const CARD_WIDTH = 240; // px per card
const GAP = 16; // px gap between cards
const TOTAL_WIDTH = ITEMS_PER_PAGE * CARD_WIDTH + (ITEMS_PER_PAGE - 1) * GAP;

const PriceDropSection: React.FC<PriceDropSectionProps> = ({ products }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = page * ITEMS_PER_PAGE;
  const visibleProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 0));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));

  return (
    <Box
      sx={{
        my: 4,
        position: 'relative',
        width: '100%',
        maxWidth: TOTAL_WIDTH,
        mx: 'auto',
        px: 1,
      }}
    >
      <SectionHeader title="Fiyatı Düşenler" icon={<ArrowDownwardIcon />} />

      {/* Left arrow */}
      <IconButton
        onClick={handlePrev}
        disabled={page === 0}
        sx={{
          position: 'absolute',
          top: '50%',
          left: -20,
          transform: 'translateY(-50%)',
          width: 40,
          height: 40,
          bgcolor: 'background.paper',
          borderRadius: '50%',
          boxShadow: 1,
          '&:hover': { bgcolor: 'grey.100' },
          zIndex: 10,
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      {/* Cards row */}
      <Box
        sx={{
          display: 'flex',
          gap: `${GAP}px`,
          overflow: 'hidden',
          py: 1,
        }}
      >
        {visibleProducts.map((product) => (
          <Box key={product.id} sx={{ flex: `0 0 ${CARD_WIDTH}px` }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>

      {/* Right arrow */}
      <IconButton
        onClick={handleNext}
        disabled={page >= totalPages - 1}
        sx={{
          position: 'absolute',
          top: '50%',
          right: -20,
          transform: 'translateY(-50%)',
          width: 40,
          height: 40,
          bgcolor: 'background.paper',
          borderRadius: '50%',
          boxShadow: 1,
          '&:hover': { bgcolor: 'grey.100' },
          zIndex: 10,
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default PriceDropSection;
