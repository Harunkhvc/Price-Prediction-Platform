// src/components/organisms/PopularStores.tsx

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import StoreCard from '../molecules/PopularStoreCard';
import SectionHeader from '../atoms/SectionHeader';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useNavigate } from 'react-router-dom';
import { getAllSites } from '../../api-client/SiteApi';
import { SiteDto } from '../../types/SiteTypes';

const PopularStores: React.FC = () => {
  const [stores, setStores] = useState<SiteDto[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllSites();
        setStores(data);
      } catch (err) {
        console.error('Mağazalar alınırken hata:', err);
      }
    })();
  }, []);

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
        {stores.map((store) => (
          <StoreCard
            key={store.id}
            storeName={store.name}
            onClick={() => navigate(`/store/${store.id}`)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PopularStores;
