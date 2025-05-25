import React from 'react';
import { Box, Typography } from '@mui/material';
import BorderBox from '../atoms/BorderBox';

interface StoreCardProps {
  imageUrl: string;
  storeName: string;
}

const StoreCard = ({ imageUrl, storeName }: StoreCardProps) => {
  return (
    <BorderBox
      sx={{
        width: '250px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#ffffff',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={storeName}
        sx={{
          width: '50px',
          height: '50px',
          objectFit: 'contain',
        }}
      />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.1rem',
            color: '#333',
            textAlign: 'center',
          }}
        >
          {storeName}
        </Typography>
      </Box>
    </BorderBox>
  );
};

export default StoreCard;
