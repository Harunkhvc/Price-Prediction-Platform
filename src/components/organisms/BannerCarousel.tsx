// src/components/organisms/BannerCarousel.tsx

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
  routeParam: string;
  bgcolor: string;
}

const banners: BannerItem[] = [
  { id: 'iphone', title: 'Yeni iPhone Modelleriyle Tanışın', subtitle: 'En son teknoloji, sizlerle.', imageUrl: '/images/iphone.jpg', buttonText: 'Hemen İncele', routeParam: 'iphone', bgcolor: '#F76C7C' },
  { id: 'tablet', title: 'Tablet Dünyasına Göz Atın', subtitle: 'En hafif, en güçlü tabletler burada.', imageUrl: '/images/tablet.jpg', buttonText: 'Tabletleri Keşfet', routeParam: 'tablet', bgcolor: '#6C8EF7' },
  { id: 'samsung', title: 'Samsung’un En Yeni Cihazları', subtitle: 'Kalite ve inovasyon bir arada.', imageUrl: '/images/samsung.jpg', buttonText: 'Samsung Koleksiyonu', routeParam: 'samsung', bgcolor: '#4CAF50' },
  { id: 'bilgisayar', title: 'Yüksek Performanslı Bilgisayarlar', subtitle: 'İş ve oyun için ideal çözümler.', imageUrl: '/images/bilgisayar.jpg', buttonText: 'Bilgisayarları Gör', routeParam: 'bilgisayar', bgcolor: '#FFA726' },
  { id: 'macbook', title: 'Trend MacBook Seçimleri', subtitle: 'Şıklık, performans ve uzun pil ömrü.', imageUrl: '/images/macbook.jpg', buttonText: 'MacBook İncele', routeParam: 'macbook', bgcolor: '#8E24AA' },
];

// ✅ Sadece aktif slide görünür
const Slide = styled(Box)<{ bgcolor: string }>(({ bgcolor }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(135deg, ${bgcolor} 0%, #ffffff 200%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.8s ease-in-out',
}));

const Dot = styled(FiberManualRecordIcon)<{ active: boolean }>(({ active }) => ({
  fontSize: active ? '12px' : '8px',
  color: active ? '#ffffff' : '#dddddd',
  margin: '0 5px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
}));

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const totalBanners = banners.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalBanners);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalBanners]);

  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: 1300, mx: 'auto', height: { xs: 180, sm: 220, md: 280 }, maxHeight: 400, overflow: 'hidden', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.15)', mb: 4 }}>
      
      {/* ✅ Sadece aktif olan slide DOM’a giriyor */}
      <Slide bgcolor={banners[currentIndex].bgcolor}>
        <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: { xs: 2, md: 4 }, px: { xs: 2, md: 4 } }}>
          <Box sx={{ maxWidth: { xs: '60%', md: '45%' } }}>
            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, mb: 1.5, fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2rem' }, lineHeight: 1.2, textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>{banners[currentIndex].title}</Typography>

            <Typography variant="subtitle1" sx={{ color: '#fff', mb: 3, fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' }, opacity: 0.95, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>{banners[currentIndex].subtitle}</Typography>

            <Button variant="contained" onClick={() => navigate(`/banner/${banners[currentIndex].routeParam}`)} sx={{ bgcolor: '#fff', color: banners[currentIndex].bgcolor, fontWeight: 700, px: 3, py: 1.4, borderRadius: 3, fontSize: { xs: '0.9rem', md: '1.05rem' }, textTransform: 'none', boxShadow: '0 4px 14px rgba(0,0,0,0.25)', '&:hover': { bgcolor: '#f7f7f7' }, transition: 'all 0.3s ease' }}>
              {banners[currentIndex].buttonText}
            </Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Box component="img" src={banners[currentIndex].imageUrl} alt={banners[currentIndex].title} sx={{ maxHeight: { xs: 90, sm: 130, md: 180 }, maxWidth: { xs: 150, sm: 220, md: 280 }, width: 'auto', height: 'auto', borderRadius: 4, boxShadow: '0 8px 24px rgba(0,0,0,0.25)', background: '#fff', p: 1.5, transition: 'transform 0.35s ease', '&:hover': { transform: 'scale(1.05) translateY(-8px)' }, objectFit: 'contain', ml: { xs: 2, md: 4 }, mt: { xs: 0, md: 1 } }} />
          </Box>
        </Box>
      </Slide>

      {/* 🔘 Dot navigation */}
      <Box sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center' }}>
        {banners.map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
        ))}
      </Box>
    </Box>
  );
}
