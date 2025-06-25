// src/components/organisms/PopularBrands.tsx
import React from 'react';
import { Box } from "@mui/material";
import BrandCard from "../molecules/BrandCard";
import SectionHeader from "../atoms/SectionHeader";
import StarsIcon from '@mui/icons-material/Stars';
import { useNavigate } from 'react-router-dom';

const brands = [
  { imageUrl: "/images/brand_logo/oppo.png", brandName: "Oppo" },
  { imageUrl: "/images/brand_logo/msi.png",   brandName: "Msi" },
  { imageUrl: "/images/brand_logo/xiaomi.png",brandName: "Xiaomi" },
  { imageUrl: "/images/brand_logo/apple.png", brandName: "Apple" },
  { imageUrl: "/images/brand_logo/samsung.png",brandName: "Samsung" },
];

const PopularBrands: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SectionHeader title="Popüler Markalar" icon={<StarsIcon />} />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          mt: 2,
        }}
      >
        {brands.map(brand => (
          <BrandCard
            key={brand.brandName}
            imageUrl={brand.imageUrl}
            brandName={brand.brandName}
            onClick={() => navigate(`/brand/${encodeURIComponent(brand.brandName)}`)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PopularBrands;
