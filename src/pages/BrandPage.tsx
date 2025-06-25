// src/pages/BrandPage.tsx
import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import HomeTemplate from "../components/templates/HomeTemplate";
import Header from "../components/organisms/Header";
import { getProductsByBrand } from "../api-client/BrandApi";
import { getUrunStockCampaign } from "../api-client/urunStockCampaignApi";
import { BrandProductOverviewResponse } from "../types/BrandOverviewTypes";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  CircularProgress,
  Container,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack
} from "@mui/material";

// TL string'ini float'a çeviriyoruz
const parsePrice = (priceStr: string) => {
  if (!priceStr) return 0;
  return parseFloat(
    priceStr.replace(/\s?TL$/, "").replace(/\./g, "").replace(",", ".")
  );
};

const shuffleArray = (array: ExtendedBrandItem[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

interface ExtendedBrandItem extends BrandProductOverviewResponse {
  stok: string;
  kampanya: string;
}

const BrandPage: React.FC = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const [items, setItems] = useState<ExtendedBrandItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<"random" | "asc" | "desc">("random");

  useEffect(() => {
    if (!brandName) return;
    (async () => {
      setLoading(true);
      try {
        const [data, stocks] = await Promise.all([
          getProductsByBrand(brandName),
          getUrunStockCampaign()
        ]);
        const stockMap = new Map<number, { stok: string; kampanya: string }>(
          stocks.map(s => [s.urunId, { stok: s.stok, kampanya: s.kampanya }])
        );
        const mapped: ExtendedBrandItem[] = data.map(item => {
          const info = stockMap.get(item.id) ?? { stok: "0", kampanya: "" };
          return { ...item, stok: info.stok, kampanya: info.kampanya };
        });
        setItems(mapped);
      } catch (err) {
        console.error("Marka ürünleri yüklenirken hata:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, [brandName]);

  const sortedItems = useMemo(() => {
    let sorted = [...items];
    if (sortOrder === "asc") {
      sorted.sort(
        (a, b) =>
          parsePrice(a.topOffers[0]?.price || "") -
          parsePrice(b.topOffers[0]?.price || "")
      );
    } else if (sortOrder === "desc") {
      sorted.sort(
        (a, b) =>
          parsePrice(b.topOffers[0]?.price || "") -
          parsePrice(a.topOffers[0]?.price || "")
      );
    } else {
      sorted = shuffleArray(sorted);
    }
    return sorted;
  }, [items, sortOrder]);

  if (loading) {
    return (
      <HomeTemplate header={<Header />}>
        <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <CircularProgress />
        </Box>
      </HomeTemplate>
    );
  }

  return (
    <HomeTemplate header={<Header />}>
      <Container maxWidth="lg" sx={{ pt: 14, pb: 10 }}>
        {/* Sıralama Seçeneği */}
        <Stack direction="row" justifyContent="flex-end" mb={3}>
          <FormControl size="small">
            <InputLabel>Sırala</InputLabel>
            <Select
              label="Sırala"
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value as any)}
            >
              <MenuItem value="random">Gelişmiş</MenuItem>
              <MenuItem value="asc">Fiyat Artan</MenuItem>
              <MenuItem value="desc">Fiyat Azalan</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Box display="grid" gap={3}>
          {sortedItems.map(item => (
            <Card
              key={item.id}
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                boxShadow: 1
              }}
            >
              {/* Görsel */}
              <Box
                sx={{
                  width: 140,
                  height: 140,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#fafafa",
                  borderRadius: 2,
                  flexShrink: 0,
                  p: 1
                }}
              >
                <CardMedia
                  component="img"
                  image={item.imageUrl}
                  alt={item.name}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain"
                  }}
                />
              </Box>

              {/* Bilgiler */}
              <Box
                sx={{
                  flex: 1,
                  ml: 3,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {item.name}
                </Typography>

                {/* Kampanya */}
                {item.kampanya &&
                  item.kampanya.toLowerCase() !== "yok" && (
                    <Paper
                      sx={{
                        bgcolor: "#f57c00",
                        color: "white",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        mt: 1
                      }}
                    >
                      <Typography variant="body2" fontWeight={600}>
                        Kampanya: {item.kampanya}
                      </Typography>
                    </Paper>
                  )}

                {/* Stok */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Stok: {item.stok}
                </Typography>

                {/* Teklifler */}
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                  {item.topOffers.map((offer, idx) => (
                    <Paper
                      key={idx}
                      elevation={0}
                      sx={{
                        border: "1px solid #ddd",
                        borderRadius: 2,
                        p: "8px 12px",
                        display: "flex",
                        alignItems: "center",
                        gap: 1
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight={600}>
                        {offer.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {offer.vendor}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Box>

              {/* Buton */}
              <Box sx={{ ml: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#28a745",
                    color: "#fff",
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#218838" }
                  }}
                  href={item.topOffers[0]?.productUrl}
                  target="_blank"
                  rel="noopener"
                  disabled={!item.topOffers[0]?.productUrl}
                >
                  Mağazaya Git
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </HomeTemplate>
  );
};

export default BrandPage;
