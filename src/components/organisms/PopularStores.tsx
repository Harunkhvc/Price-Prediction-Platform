import React from "react";
import { Box, Typography } from "@mui/material";
import StoreCard from "../molecules/StoreCard";

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
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          textAlign: "left",
          paddingLeft: "1rem",
          marginBottom: "1rem",
        }}
      >
        Popular Stores
      </Typography>

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
