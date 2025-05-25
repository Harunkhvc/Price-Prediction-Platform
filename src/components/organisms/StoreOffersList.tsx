// src/components/organisms/StoreOffersList.tsx
import React from 'react';
import StoreOfferCard, { StoreOffer } from '../molecules/StoreOfferCard';

const offers: StoreOffer[] = [
  {
    vendor: 'MediaMarkt',
    logoUrl: '/images/store_logo/mediamarkt-logo.png',
    tagline: '35 FİYAT ARASINDA EN UCUZ',
    rating: '9,1',
    price: '32.619,00 TL',
    url: 'https://www.mediamarkt.com.tr/…',
  },
  
];

const StoreOffersList: React.FC = () => (
  <div className="space-y-4">
    {offers.map((o) => (
      <StoreOfferCard key={o.vendor} offer={o} />
    ))}
  </div>
);

export default StoreOffersList;
