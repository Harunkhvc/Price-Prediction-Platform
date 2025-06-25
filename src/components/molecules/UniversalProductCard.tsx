import React from "react";
import { Card, Box, Typography, CardMedia, Button } from "@mui/material";
import { UniversalProductListItem } from "../../api-client/UniversalProductApi";

interface Props {
  product: UniversalProductListItem;
}

const UniversalProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card sx={{ width: 240, display: "flex", flexDirection: "column", borderRadius: 2, boxShadow: 1 }}>
      <Box sx={{ height: 180, display: "flex", justifyContent: "center", alignItems: "center", p: 1, bgcolor: "#fff" }}>
        <CardMedia
          component="img"
          image={product.imageUrl}
          alt={product.name}
          sx={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      </Box>

      <Box sx={{ p: 2, flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }} noWrap>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {product.vendor}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }} color="primary">
          {product.price}
        </Typography>
      </Box>

      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          component="a"
          href={product.productUrl}
          target="_blank"
          rel="noopener"
          fullWidth
          variant="contained"
          sx={{ textTransform: "none", fontWeight: 600 }}
        >
          {product.offersCount} fiyatı incele
        </Button>
      </Box>
    </Card>
  );
};

export default UniversalProductCard;
