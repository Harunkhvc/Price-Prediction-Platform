import React from "react";
import { ProductCardDto } from "../../types/ProductCardDto";
import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";

interface BannerProductCardProps {
  product: ProductCardDto;
}

const BannerProductCard: React.FC<BannerProductCardProps> = ({ product }) => {
  return (
    <Card
      sx={{
        width: 280,
        borderRadius: 4,
        boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
        },
      }}
    >
      <Box sx={{ position: "relative", p: 2 }}>
        <CardMedia
          component="img"
          image={product.imageUrl}
          alt={product.name}
          sx={{
            objectFit: "contain",
            height: 180,
            mx: "auto",
            p: 1,
            backgroundColor: "#f9f9f9",
            borderRadius: 3,
          }}
        />
      </Box>

      <CardContent sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom noWrap>
          {product.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" noWrap>
          {product.siteName} — {product.seller}
        </Typography>

        <Box sx={{ mt: 1 }}>
          <Typography variant="h6" color="primary" fontWeight={700}>
            {product.price.toLocaleString()} TL
          </Typography>

          {product.originalPrice && product.originalPrice > product.price && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              {product.originalPrice.toLocaleString()} TL
            </Typography>
          )}
        </Box>

        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            size="small"
            href={product.productUrl}
            target="_blank"
            fullWidth
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 2,
              background: "linear-gradient(135deg, #4caf50, #81c784)",
              "&:hover": {
                background: "linear-gradient(135deg, #43a047, #66bb6a)",
              },
            }}
          >
            Ürünü Gör
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BannerProductCard;
