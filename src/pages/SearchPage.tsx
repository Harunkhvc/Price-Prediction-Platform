// src/pages/SearchPage.tsx
import React, { useEffect, useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import HomeTemplate from '../components/templates/HomeTemplate';
import Header from '../components/organisms/Header';
import { searchProducts } from '../api-client/SearchApi';
import { getUrunStockCampaign } from '../api-client/urunStockCampaignApi';
import { ProductCardResponse } from '../types/ProductTypes';
import SearchProductCard from '../components/molecules/SearchProductCard';
import { Box, Button, Typography, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// Shuffle fonksiyonu
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

interface CombinedProduct extends ProductCardResponse {
  stok: string;
  kampanya: string;
}

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [results, setResults] = useState<CombinedProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState<'advanced' | 'asc' | 'desc'>('advanced');
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);

    Promise.all([
      searchProducts(query),
      getUrunStockCampaign()
    ])
      .then(([prods, stocks]) => {
        const stockMap = new Map<number, { stok: string; kampanya: string }>(
          stocks.map(s => [s.urunId, { stok: s.stok, kampanya: s.kampanya }])
        );
        const merged: CombinedProduct[] = prods.map(p => ({
          ...p,
          stok:     stockMap.get(p.id)?.stok     ?? '0',
          kampanya: stockMap.get(p.id)?.kampanya ?? ''
        }));
        setResults(merged);
      })
      .catch(err => {
        console.error('Arama veya stok/kampanya yüklenirken hata:', err);
        setResults([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  const sortedResults = useMemo(() => {
    if (sortType === 'asc') {
      return [...results].sort((a, b) => a.price - b.price);
    } else if (sortType === 'desc') {
      return [...results].sort((a, b) => b.price - a.price);
    } else {
      return shuffleArray(results);
    }
  }, [results, sortType]);

  return (
    <HomeTemplate header={<Header />}>
      <Box
        sx={{
          paddingTop: 12,
          paddingX: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%', maxWidth: 900 }}>
          <Typography variant="h6">Arama Sonuçları</Typography>
          <FormControl size="small">
            <InputLabel>Sırala</InputLabel>
            <Select
              value={sortType}
              label="Sırala"
              onChange={(e) => setSortType(e.target.value as 'advanced' | 'asc' | 'desc')}
            >
              <MenuItem value="advanced">Gelişmiş</MenuItem>
              <MenuItem value="asc">Artan Fiyat</MenuItem>
              <MenuItem value="desc">Azalan Fiyat</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        {loading ? (
          <Typography>Yükleniyor…</Typography>
        ) : sortedResults.length > 0 ? (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 3,
              width: '100%',
              maxWidth: 900
            }}
          >
            {sortedResults.map(prod => (
              <SearchProductCard
                key={prod.id}
                product={{
                  id: prod.id.toString(),
                  name: prod.name,
                  imageUrl: prod.imageUrl,
                  offers: [{
                    id: prod.id,
                    name: prod.name,
                    imageUrl: prod.imageUrl,
                    price: prod.price,
                    siteName: prod.siteName,
                    seller: prod.seller,
                    productUrl: prod.productUrl,
                    originalPrice: prod.originalPrice,
                    stok: prod.stok,
                  kampanya: prod.kampanya
                  }],
                  stok: prod.stok,
                  kampanya: prod.kampanya
                }}
              />
            ))}
          </Box>
        ) : (
          <Typography>Sonuç bulunamadı.</Typography>
        )}

        <Button variant="outlined" onClick={() => navigate('/')}>
          Anasayfaya Dön
        </Button>
      </Box>
    </HomeTemplate>
  );
};

export default SearchPage;
