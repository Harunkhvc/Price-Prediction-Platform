import { Box, Typography } from '@mui/material';
import BorderBox from '../atoms/BorderBox';

interface BrandCardProps {
  imageUrl: string;
  brandName: string;
}

const BrandCard = ({ imageUrl, brandName }: BrandCardProps) => {
  return (
    <BorderBox
      sx={{
        width: '140px',
        height: '160px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
          transform: 'scale(1.05)',
          backgroundColor: '#ffffff',
        },
        gap: '0.8rem',
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={brandName}
        sx={{
          width: '60px',
          height: '60px',
          objectFit: 'contain',
        }}
      />
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          fontSize: '1rem',
          textAlign: 'center',
          color: '#333',
        }}
      >
        {brandName}
      </Typography>
    </BorderBox>
  );
};

export default BrandCard;
