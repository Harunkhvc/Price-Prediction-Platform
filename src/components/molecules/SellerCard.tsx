// src/components/molecules/SellerCard.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BorderBox from '../atoms/BorderBox';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();

  return (
    <BorderBox mb={2} display="flex" alignItems="center" justifyContent="space-between" px={2} py={1}>
      <Box display="flex" alignItems="center" gap={2}>
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
      </Box>

      {/* Sağda dairesel buton */}
      <IconButton
        sx={{
          backgroundColor: theme.palette.success.main,
          color: 'white',
          borderRadius: '50%',
          width: 40,
          height: 40,
          '&:hover': {
            backgroundColor: theme.palette.success.dark,
          },
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </BorderBox>
  );
};

export default SellerCard;
