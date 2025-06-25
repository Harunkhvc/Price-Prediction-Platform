// src/pages/StorePage.tsx
import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import HomeTemplate from '../components/templates/HomeTemplate';
import Header from '../components/organisms/Header';
import { getProductsBySite } from '../api-client/ProductApi';
import { getUrunStockCampaign } from '../api-client/urunStockCampaignApi';
import StoreProductCard, { StoreProduct } from '../components/molecules/StoreProductCard';
import FilterPanel, { FilterValues } from '../components/molecules/FilterPanel';
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack
} from '@mui/material';

const PAGE_SIZE = 30;

// "1000 TL" formatındaki fiyatı parse eder
const parsePrice = (priceStr: string) =>
  parseFloat(priceStr.replace(/\s?TL$/, '').replace(/\./g, '').replace(',', '.'));

// lowercase + boşlukları silerek normalize eder
const normalize = (s: string) =>
  s.toLowerCase().replace(/\s+/g, '');

// renk filtreleri için anahtar kelime haritası
const colorKeywords: Record<string, string[]> = {
  Beyaz: ['beyaz', 'white'],
  Siyah: ['siyah', 'black'],
  Kırmızı: ['kirmizi', 'kırmızı', 'red'],
  Gri: ['gri', 'gray', 'grey'],
  Altın: ['altin', 'gold']
};

const StorePage: React.FC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const [allProducts, setAllProducts] = useState<StoreProduct[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'random'>('random');
  const [filters, setFilters] = useState<FilterValues>({
    category: '',
    brand: '',
    memory: '',
    color: '',
    ram: '',
    screen: '',
    cpu: ''
  });

  useEffect(() => {
    if (!storeId) return;
    setLoading(true);
    Promise.all([
      getProductsBySite(+storeId),
      getUrunStockCampaign()
    ])
      .then(([products, stocks]) => {
        const stockMap = new Map<number, { stok: string; kampanya: string }>(
          stocks.map(s => [s.urunId, { stok: s.stok, kampanya: s.kampanya }])
        );
        const mapped: StoreProduct[] = products.map(p => {
          const info = stockMap.get(p.id) ?? { stok: '0', kampanya: '' };
          return {
            id: p.id.toString(),
            name: p.name,
            imageUrl: p.imageUrl,
            seller: p.seller,
            siteName: p.siteName,
            price: `${p.price.toLocaleString('tr-TR')} TL`,
            productUrl: p.productUrl,
            stok: info.stok,
            kampanya: info.kampanya
          };
        });
        setAllProducts(mapped);
      })
      .catch(err => console.error('Ürün veya stok/kampanya yükleme hatası:', err))
      .finally(() => setLoading(false));
  }, [storeId]);

  const handleFilterChange = (field: keyof FilterValues, value: string) => {
    setFilters(f => ({ ...f, [field]: value }));
    setVisibleCount(PAGE_SIZE);
  };

  const filtered = useMemo(() => {
    return allProducts.filter(p => {
      const name = normalize(p.name);

      // Kategori filtresi (anahtar kelime yöntemi)
      if (filters.category) {
        if (filters.category === 'Telefon' &&
            !['iphone','samsung','xiaomi','galaxy','note'].some(k => name.includes(k))
        ) return false;
        if (filters.category === 'Bilgisayar' &&
            !['lenovo','asus','hp','dell','acer','msi'].some(k => name.includes(k))
        ) return false;
        if (filters.category === 'Tablet' &&
            !['ipad','tab','galaxytab','huawei'].some(k => name.includes(k))
        ) return false;
      }

      // Marka, hafıza, ram, ekran, cpu filtresi (normalize edilmiş substr)
      if (filters.brand  && !name.includes(normalize(filters.brand)))  return false;
      if (filters.memory && !name.includes(normalize(filters.memory))) return false;
      if (filters.ram    && !name.includes(normalize(filters.ram)))    return false;
      if (filters.screen && !name.includes(normalize(filters.screen))) return false;
      if (filters.cpu    && !name.includes(normalize(filters.cpu)))    return false;

      // Renk filtresi: hem Türkçe hem İngilizce eşleşme
      if (filters.color) {
        const keys = colorKeywords[filters.color] ?? [normalize(filters.color)];
        if (!keys.some(k => name.includes(k))) return false;
      }

      return true;
    });
  }, [allProducts, filters]);

  const shuffleArray = (array: StoreProduct[]) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const sorted = useMemo(() => {
    let arr = [...filtered];
    if (sortOrder === 'asc') {
      arr.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOrder === 'desc') {
      arr.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else {
      arr = shuffleArray(arr);
    }
    return arr.slice(0, visibleCount);
  }, [filtered, sortOrder, visibleCount]);

  const loadMore = () => setVisibleCount(c => Math.min(c + PAGE_SIZE, filtered.length));

  return (
    <HomeTemplate header={<Header />}>
      <Box sx={{ p: 4, pt: 14 }}>
        {loading ? (
          <Typography>Yükleniyor…</Typography>
        ) : (
          <Box sx={{ display: 'flex', gap: 4 }}>
            <FilterPanel values={filters} onChange={handleFilterChange} />

            <Box sx={{ flex: 1 }}>
              <Stack direction="row" justifyContent="flex-end" alignItems="center" sx={{ mb: 2 }}>
                <FormControl size="small">
                  <InputLabel>Sırala</InputLabel>
                  <Select
                    label="Sırala"
                    value={sortOrder}
                    onChange={e => setSortOrder(e.target.value as any)}
                  >
                    <MenuItem value="random">Gelişmiş</MenuItem>
                    <MenuItem value="asc">Artan Fiyat</MenuItem>
                    <MenuItem value="desc">Azalan Fiyat</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                  gap: 2,
                  '& > *': { maxWidth: '240px', margin: '0 auto' }
                }}
              >
                {sorted.map(p => (
                  <StoreProductCard key={p.id} product={p} />
                ))}
              </Box>

              {visibleCount < filtered.length && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <Button variant="contained" onClick={loadMore}>
                    Daha fazla göster
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </HomeTemplate>
  );
};

export default StorePage;
