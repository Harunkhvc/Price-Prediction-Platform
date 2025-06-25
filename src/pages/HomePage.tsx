// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import HomeTemplate from '../components/templates/HomeTemplate';
import Header from '../components/organisms/Header';
import BannerCarousel from '../components/organisms/BannerCarousel';
import PopularProductsSection from '../components/organisms/PopularProductsSection';
import PriceDropSection from '../components/organisms/PriceDropSection';
import SpecialChoicesSection from '../components/organisms/SpecialChoicesSection';
import PopularStores from '../components/organisms/PopularStores';
import PopularBrands from '../components/organisms/PopularBrands';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { fetchUniversalProducts, UniversalProductListItem } from '../api-client/UniversalProductApi';
import { getUrunStockCampaign } from '../api-client/urunStockCampaignApi';
import { Product } from '../components/molecules/ProductCard';

const HomePage: React.FC = () => {
  const [popular, setPopular] = useState<Product[]>([]);
  const [priceDrops, setPriceDrops] = useState<Product[]>([]);
  const [featured, setFeatured] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const [popData, dropData, featData] = await Promise.all([
          fetchUniversalProducts('popular', 10),
          fetchUniversalProducts('price-drop', 10),
          fetchUniversalProducts('featured', 10)
        ]);
        const all = [...popData, ...dropData, ...featData];
        const stocks = await getUrunStockCampaign();
        const stockMap = new Map<number, { stok: string; kampanya: string }>(
          stocks.map(s => [s.urunId, { stok: s.stok, kampanya: s.kampanya }])
        );

        const mapToProduct = (p: UniversalProductListItem): Product => {
          const info = stockMap.get(p.id) ?? { stok: '0', kampanya: '' };
          return {
            id: p.id.toString(),
            name: p.name,
            imageUrl: p.imageUrl,
            cheapestStore: p.vendor,
            cheapestPrice: p.price,
            otherStore: '',
            otherPrice: '',
            offersCount: p.offersCount,
            stok: info.stok,
            kampanya: info.kampanya
          };
        };

        setPopular(popData.map(mapToProduct));
        setPriceDrops(dropData.map(mapToProduct));
        setFeatured(featData.map(mapToProduct));
      } catch (err) {
        console.error('Anasayfa ürünleri alınırken hata:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <HomeTemplate header={<Header />}>
        <Box sx={{ p: 4 }}>
          <Typography>Yükleniyor…</Typography>
        </Box>
      </HomeTemplate>
    );
  }

  return (
    <HomeTemplate header={<Header />}>
      <Box sx={{ height: 40 }} />

      <BannerCarousel />

      <PopularProductsSection products={popular} />

      <PriceDropSection products={priceDrops} />

      <SpecialChoicesSection products={featured} />

      <PopularStores />
      <PopularBrands />
    </HomeTemplate>
  );
};

export default HomePage;
