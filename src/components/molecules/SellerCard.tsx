// src/components/molecules/SellerCard.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BorderBox from '../atoms/BorderBox';

interface SellerCardProps {
  storeName: string;
  sellerName: string;
  productName: string;
  price: string;
}

const storeLogos: Record<string, string> = {
  hepsiburada: '/images/store_logo/hepsi.png',
  trendyol: '/images/store_logo/trendyol.png',
  n11: '/images/store_logo/n11.png',
};

const SellerCard: React.FC<SellerCardProps> = ({
  storeName,
  sellerName,
  productName,
  price,
}) => {
  const logoPath = storeLogos[storeName.toLowerCase()] || '/images/store_logo/default.png';

  return (
    <BorderBox mb={2} display="flex" alignItems="center" gap={2}>
      <Box display="flex" flexDirection="column" alignItems="center" width={80}>
        <img
          src={logoPath}
          alt={storeName}
          width={60}
          height={60}
          style={{ objectFit: 'contain' }}
        />
        <Typography variant="caption" mt={1} textAlign="center">
          {storeName}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1">{productName}</Typography>
        <Typography variant="body2">
          Satıcı: <strong>{sellerName}</strong>
        </Typography>
        <Typography variant="body2">
          <strong>{price}</strong>
        </Typography>
      </Box>
    </BorderBox>
  );
};

export default SellerCard;
