import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Stack, Card, CardMedia, Container, CircularProgress, Paper, Chip, Avatar } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getProductDetail, getColorVariations } from '../api-client/ProductApi';
import { ProductDetailResponse } from '../types/ProductDetailTypes';
import { ColorPriceResponse } from '../types/ColorPriceTypes';
import ForecastChart from '../components/molecules/ForecastChart';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductDetailResponse | null>(null);
  const [colorVariations, setColorVariations] = useState<ColorPriceResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    const fetchData = async () => {
      try {
        const data = await getProductDetail(Number(productId));
        setProduct(data);
        const colorData = await getColorVariations(Number(productId));
        setColorVariations(colorData);
      } catch (err) {
        console.error('Detay alınırken hata oluştu:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <Typography>Ürün bulunamadı.</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 6 }}>
      <Box display="flex" gap={4} flexWrap="wrap">

        {/* Sol: Ürün görseli */}
        <Card sx={{ flex: '1 1 40%', p: 3, borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
          <CardMedia
            component="img"
            image={product.imageUrl}
            alt={product.name}
            sx={{ objectFit: 'contain', maxHeight: 450, mx: 'auto' }}
          />
        </Card>

        {/* Sağ: Ürün detayları */}
        <Paper elevation={3} sx={{ flex: '1 1 55%', p: 4, borderRadius: 3, backgroundColor: '#fff' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>{product.name}</Typography>

          {/* Kapasite */}
          <Typography variant="subtitle1" gutterBottom>Kapasite</Typography>
          <Stack direction="row" spacing={2} mb={2} flexWrap="wrap">
            {product.capacities.map(capacity => (
              <Chip
                key={capacity}
                label={capacity}
                color="primary"
                variant="outlined"
                clickable
                sx={{ fontWeight: 'bold', fontSize: '0.95rem' }}
              />
            ))}
          </Stack>

          {/* Renk ve Fiyatlar */}
          <Typography variant="subtitle1" gutterBottom>Renk ve Fiyatlar</Typography>
          <Stack direction="row" spacing={2} mb={2} flexWrap="wrap">
            {colorVariations.map(color => (
              <Paper
                key={color.color}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  minWidth: 150,
                  textAlign: 'center',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
                  transition: '0.3s',
                  border: '1px solid rgba(0,0,0,0.1)',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              >
                <Typography fontWeight="bold">{color.color}</Typography>

                <Box display="flex" justifyContent="center" my={1}>
                  <CardMedia
                    component="img"
                    src={color.imageUrl}
                    alt={color.color}
                    sx={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #ddd' }}
                  />
                </Box>

                <Typography color="primary" fontWeight="bold">
                  {color.cheapestPrice.toLocaleString()} TL
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  href={color.url}
                  target="_blank"
                  sx={{ mt: 1 }}
                >
                  İncele
                </Button>
              </Paper>
            ))}
          </Stack>

          {/* Mağaza Bilgisi */}
          <Box
            sx={{
              mt: 3,
              p: 3,
              borderRadius: 3,
              border: '1px solid #e0e0e0',
              background: '#F9FFF9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: 'inset 0 0 6px rgba(0,0,0,0.05)'
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar
                src={`/images/site-logos/${product.cheapestOffer.logoUrl}.png`}
                alt={product.cheapestOffer.vendor}
                sx={{ width: 50, height: 50 }}
              />
              <Box>
                <Typography variant="subtitle2" color="success.main">En Ucuz Teklif</Typography>
                <Typography fontWeight="bold">
                  {product.cheapestOffer.vendor} - {product.cheapestOffer.price}
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              color="success"
              sx={{ textTransform: 'none' }}
              href={product.cheapestOffer.productUrl}
              target="_blank"
            >
              Mağazaya Git
            </Button>
          </Box>

          {/* Diğer Satıcılar */}
          {product.allOffers.length > 1 && (
            <Box
              sx={{
                mt: 4,
                p: 3,
                borderRadius: 3,
                border: '1px solid #e0e0e0',
                background: '#fff',
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.05)'
              }}
            >
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Diğer Satıcılar
              </Typography>

              <Stack spacing={2}>
                {product.allOffers
                  .filter(offer => offer.vendor !== product.cheapestOffer.vendor)
                  .map((offer, idx) => (
                    <Paper key={idx} sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography fontWeight={600}>{offer.vendor}</Typography>
                      <Typography color="primary" fontWeight="bold">{offer.price}</Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        href={offer.productUrl}
                        target="_blank"
                      >
                        Git
                      </Button>
                    </Paper>
                  ))}
              </Stack>
            </Box>
          )}
        </Paper>
      </Box>

      {/* Alt: Fiyat Tahmini Grafiği */}
      <Box mt={6}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Fiyat Tahmini
        </Typography>
        <ForecastChart urunId={Number(productId)} />
      </Box>
    </Container>
  );
};

export default ProductPage;
