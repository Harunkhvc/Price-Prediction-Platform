// src/pages/CategoriesPage.tsx

import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import HomeTemplate from "../components/templates/HomeTemplate";
import Header from "../components/organisms/Header";
import { getIphoneProducts } from "../api-client/BrandApi";
import {
  getAndroidProducts,
  getMacosProducts,
  getWindowsProducts,
  getTabletProducts
} from "../api-client/CategoryApi";
import { IphoneProductResponse } from "../types/IphoneProductTypes";
import { CategoryProductResponse } from "../types/CategoryProductTypes";
import CategoriesProductCard from "../components/molecules/CategoriesProductCard";
import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { ProductCardResponse } from "../types/ProductTypes";

const mapToProductCard = (
  product: IphoneProductResponse | CategoryProductResponse
) => ({
  name: product.name,
  imageUrl: product.imageUrl,
  offers: product.offers.map((o) => ({
    siteName: o.siteName,
    seller: o.seller,
    price: o.price,
    productUrl: o.productUrl
  })) as ProductCardResponse[]
});

// Rastgele sıralama için shuffle fonksiyonu
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Bir ürünün en düşük teklif fiyatını bulur
const getMinPrice = (offers: ProductCardResponse[]) =>
  Math.min(...offers.map((o) => o.price));

const CategoriesPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [products, setProducts] = useState<
    { name: string; imageUrl: string; offers: ProductCardResponse[] }[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Sıralama tipi: 'advanced' (karışık), 'asc' (artan), 'desc' (azalan)
  const [sortType, setSortType] = useState<"advanced" | "asc" | "desc">(
    "advanced"
  );

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        switch (categoryName?.toLowerCase()) {
          case "ios": {
            const data = await getIphoneProducts();
            setProducts(data.map(mapToProductCard));
            break;
          }
          case "android": {
            const data = await getAndroidProducts();
            setProducts(data.map(mapToProductCard));
            break;
          }
          case "macos": {
            const data = await getMacosProducts();
            setProducts(data.map(mapToProductCard));
            break;
          }
          case "windows": {
            const data = await getWindowsProducts();
            setProducts(data.map(mapToProductCard));
            break;
          }
          case "tablet": {
            const data = await getTabletProducts();
            setProducts(data.map(mapToProductCard));
            break;
          }
          default:
            setProducts([]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [categoryName]);

  // Ürünleri sortType'a göre sıralar
  const sortedProducts = useMemo(() => {
    if (sortType === "asc") {
      return [...products].sort(
        (a, b) => getMinPrice(a.offers) - getMinPrice(b.offers)
      );
    }
    if (sortType === "desc") {
      return [...products].sort(
        (a, b) => getMinPrice(b.offers) - getMinPrice(a.offers)
      );
    }
    return shuffleArray(products);
  }, [products, sortType]);

  return (
    <HomeTemplate header={<Header />}>
      <Container maxWidth="lg" sx={{ pt: 14, pb: 10 }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {/* Sıralama Kontrolleri */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ width: "100%", mb: 2 }}
            >
              <Typography variant="h6">Ürünleri Sırala</Typography>
              <FormControl size="small">
                <InputLabel>Sırala</InputLabel>
                <Select
                  value={sortType}
                  label="Sırala"
                  onChange={(e) =>
                    setSortType(e.target.value as "advanced" | "asc" | "desc")
                  }
                >
                  <MenuItem value="advanced">Gelişmiş</MenuItem>
                  <MenuItem value="asc">Artan Fiyat</MenuItem>
                  <MenuItem value="desc">Azalan Fiyat</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            {/* Ürün Kartları */}
            <Box display="grid" gap={3}>
              {sortedProducts.map((product, idx) => (
                <CategoriesProductCard key={idx} product={product} />
              ))}
            </Box>
          </>
        )}
      </Container>
    </HomeTemplate>
  );
};

export default CategoriesPage;
