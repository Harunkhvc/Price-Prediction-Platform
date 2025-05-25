// src/pages/ProductPage.tsx
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import CapacitySelector from '../components/molecules/CapacitySelector';
import ColorSelector, { ColorOption } from '../components/molecules/ColorSelector';
import StoreOfferCard, { StoreOffer } from '../components/molecules/StoreOfferCard';
import PriceComparisonSection from '../components/organisms/OtherMarketsSection';
import { Product } from '../components/molecules/ProductCard';

// Mock ürün verisi
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Apple iPhone 13 256GB',
    imageUrl: '/images/store_logo/hepsi.png',
    cheapestStore: 'Pazarama',
    cheapestPrice: '46.549,05 TL',
    otherStore: 'Teknosa',
    otherPrice: '46.999,00 TL',
    offersCount: 12,
  },
  {
    id: '2',
    name: 'Apple iPhone 13 128GB',
    imageUrl: '/images/iphone.jpg',
    cheapestStore: 'PttAVM',
    cheapestPrice: '33.114,09 TL',
    otherStore: 'Teknosa',
    otherPrice: '33.599,00 TL',
    offersCount: 40,
  },
];

const sampleOffers: StoreOffer[] = [
  {
    vendor: 'HepsiBurada',
    logoUrl: '/images/store_logo/hepsi.png',
    tagline: '6 fiyat arasında en ucuz',
    price: '44.999,00 TL',
    rating: '8.7',
    url: 'https://www.hepsiburada.com/',
  },
];

const ProductPage: React.FC = () => {
  const [capacity, setCapacity] = useState('256');
  const [color, setColor] = useState('white');

  const colorOptions: ColorOption[] = [
    { value: 'white', label: 'Beyaz', imageUrl: 'https://via.placeholder.com/100x72.png?text=Beyaz', price: '44.999,00 TL' },
    { value: 'red', label: 'Kırmızı', imageUrl: 'https://via.placeholder.com/100x72.png?text=Kırmızı', price: '45.950,00 TL' },
    { value: 'blue', label: 'Mavi', imageUrl: 'https://via.placeholder.com/100x72.png?text=Mavi', price: '48.899,00 TL' },
    { value: 'pink', label: 'Pembe', imageUrl: 'https://via.placeholder.com/100x72.png?text=Pembe' },
    { value: 'black', label: 'Siyah', imageUrl: 'https://via.placeholder.com/100x72.png?text=Siyah', price: '46.999,00 TL' },
    { value: 'green', label: 'Yeşil', imageUrl: 'https://via.placeholder.com/100x72.png?text=Yeşil', price: '47.741,66 TL' },
  ];

  return (
    <>
      <Box sx={{ p: 6 }}>
        <Box sx={{ mt: 3, display: { xs: 'block', md: 'flex' }, gap: 6 }}>
          {/* Sol: Ürün resmi */}
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src="https://via.placeholder.com/400x400.png?text=Ürün"
              alt="Ürün"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Box>

          {/* Sağ: Detaylar */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="h4">Apple iPhone 13 256GB Beyaz</Typography>

            {/* Kapasite seçici */}
            <CapacitySelector value={capacity} onChange={setCapacity} />

            {/* Renk seçici */}
            <ColorSelector options={colorOptions} selectedValue={color} onChange={setColor} />

            {/* Mağaza teklifi */}
            <Box>
              {sampleOffers.map((o) => (
                <StoreOfferCard key={o.vendor} offer={o} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Özel seçimler ve fiyat karşılaştırma bölümleri */}
      
      <PriceComparisonSection products={mockProducts} />
    </>
  );
};

export default ProductPage;