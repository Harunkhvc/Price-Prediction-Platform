import React from "react";
import { Box } from "@mui/material";
import StoreCard from "../molecules/StoreCard";
import SectionHeader from "../atoms/SectionHeader";
import StorefrontIcon from '@mui/icons-material/Storefront'; // Örnek ikon

const stores = [
  { imageUrl: "/images/store_logo/hepsi.png", storeName: "Hepsiburada" },
  { imageUrl: "/images/store_logo/trendyol.png", storeName: "Trendyol" },
  { imageUrl: "/images/store_logo/n11.png", storeName: "N11" },
];

const PopularStores = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "2rem 0",
      }}
    >
      <SectionHeader
        title="Popular Stores"
        icon={<StorefrontIcon />}
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          paddingLeft: "1rem",
        }}
      >
        {stores.map((store, index) => (
          <StoreCard
            key={index}
            imageUrl={store.imageUrl}
            storeName={store.storeName}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PopularStores;
