import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function PriceDropButton() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'scale(1.07)',
          boxShadow: '0 8px 18px rgba(33, 181, 115, 0.25)',
        },
        p: 1,
        borderRadius: 3,
        bgcolor: 'rgba(240, 255, 244, 0.75)',
        backdropFilter: 'blur(4px)',
      }}
      onClick={() => {
        navigate('/price-drops');
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
          bgcolor: '#F0FFF4',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 1,
          boxShadow: '0 4px 10px rgba(100,200,120,0.12)',
          transition: 'all 0.3s ease',
        }}
      >
        <Box
          component="img"
          src="/images/price-drop3.png"
          alt="Fiyatı Düşenler"
          sx={{
            width: 40,
            height: 40,
            objectFit: 'contain',
          }}
        />
      </Box>

      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 700,
          fontSize: '1.05rem',
          color: '#21b573',
          letterSpacing: '0.02em',
          textAlign: 'center',
        }}
      >
        Fiyatı Düşenler
      </Typography>

      <Box
        sx={{
          mt: 0.5,
          width: 28,
          height: 3,
          borderRadius: 2,
          bgcolor: '#21b573',
          opacity: 0.5,
        }}
      />
    </Box>
  );
}
