import { Box } from "@mui/material";
import BrandCard from "../molecules/BrandCard";
import SectionHeader from "../atoms/SectionHeader";
import StarsIcon from '@mui/icons-material/Stars'; // Örnek ikon

const brands = [
  { imageUrl: "/images/brand_logo/oppo.png", brandName: "Oppo" },
  { imageUrl: "/images/brand_logo/msi.png", brandName: "Msi" },
  { imageUrl: "/images/brand_logo/xiaomi.png", brandName: "Xiaomi" },
  { imageUrl: "/images/brand_logo/apple.png", brandName: "Apple" },
  { imageUrl: "/images/brand_logo/samsung.png", brandName: "Samsung" },
];

const PopularBrands = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem 0",
      }}
    >
      <SectionHeader
        title="Popular Brands"
        icon={<StarsIcon />}
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          paddingLeft: "1rem",
        }}
      >
        {brands.map((brand, index) => (
          <BrandCard
            key={index}
            imageUrl={brand.imageUrl}
            brandName={brand.brandName}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PopularBrands;
