// src/components/organisms/PopularStores.tsx
import React from 'react';
import { Box } from '@mui/material';
import StoreCard from '../molecules/PopularStoreCard';
import SectionHeader from '../atoms/SectionHeader';
import StorefrontIcon from '@mui/icons-material/Storefront';

const stores = [
  { imageUrl: '/images/store_logo/hepsi.png', storeName: 'Hepsiburada' },
  { imageUrl: '/images/store_logo/trendyol.png', storeName: 'Trendyol' },
  { imageUrl: '/images/store_logo/n11.png', storeName: 'N11' },
];

const PopularStores: React.FC = () => {
  return (
    <Box sx={{ width: '100%', py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SectionHeader title="Popüler Mağazalar" icon={<StorefrontIcon />} />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        {stores.map((store, index) => (
          <StoreCard
            key={index}
            imageUrl={store.imageUrl}
            storeName={store.storeName}
          />
        ))}
      </Box>
    </Box>
  );
};


export default PopularStores;