// src/components/molecules/ProductImageGallery.tsx
import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface ProductImageGalleryProps {
  images: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const lastIndex = images.length - 1;

  const prev = () => setCurrent((c) => (c === 0 ? lastIndex : c - 1));
  const next = () => setCurrent((c) => (c === lastIndex ? 0 : c + 1));

  return (
    <Box
      sx={{
        border: 1,
        borderColor: 'grey.300',
        borderRadius: 2,
        p: 2,
        textAlign: 'center',
      }}
    >
      {/* Ana Görsel */}
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src={images[current]}
          alt={`Product ${current + 1}`}
          sx={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />

        <IconButton
          onClick={prev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 8,
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.8)',
            '&:hover': { bgcolor: 'rgba(255,255,255,1)' },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <IconButton
          onClick={next}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 8,
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.8)',
            '&:hover': { bgcolor: 'rgba(255,255,255,1)' },
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        <Box
          sx={{
            position: 'absolute',
            bottom: 8,
            left: 8,
            bgcolor: 'rgba(0,0,0,0.6)',
            color: 'common.white',
            px: 1,
            py: 0.5,
            borderRadius: 1,
          }}
        >
          <Typography variant="caption">
            {current + 1}/{images.length}
          </Typography>
        </Box>
      </Box>

      {/* Küçük Thumbnail’ler */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
        {images.map((_, idx) => (
          <Box
            key={idx}
            component="img"
            src="/images/iphone-mini.png"
            alt={`thumb ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            sx={{
              width: 60,
              height: 60,
              objectFit: 'cover',
              border: 1,
              borderColor: idx === current ? 'primary.main' : 'grey.300',
              borderRadius: 1,
              cursor: 'pointer',
            }}
          />
        ))}
      </Box>
    </Box>
);
}

export default ProductImageGallery;
