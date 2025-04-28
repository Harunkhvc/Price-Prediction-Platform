// src/components/molecules/ProductCard.tsx
import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

export interface Product {
  id: string
  name: string
  imageUrl: string
  cheapestStore: string
  cheapestPrice: string
  otherStore: string
  otherPrice: string
  offersCount: number
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Card sx={{ minWidth: 200, position: 'relative' }}>
    {/* Bildirimi tetikleyen zil ikonu */}
    <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
      <Button size="small">
        <NotificationsNoneIcon fontSize="small" />
      </Button>
    </Box>

    {/* Ürün görseli */}
    <CardMedia
      component="img"
      height="140"
      image={product.imageUrl}
      alt={product.name}
    />

    <CardContent>
      <Typography variant="subtitle1" gutterBottom>
        {product.name}
      </Typography>

      <Box display="flex" alignItems="center" mb={1}>
        <Typography variant="caption" color="text.secondary">
          {product.cheapestStore}
        </Typography>
        <Typography variant="caption" color="success.main" ml={1}>
          EN UCUZ
        </Typography>
      </Box>

      <Typography variant="h6">{product.cheapestPrice}</Typography>

      <Box display="flex" alignItems="center" mt={1} mb={2}>
        <Typography variant="caption" color="text.secondary">
          {product.otherStore}
        </Typography>
        <Typography variant="body2" ml={1}>
          {product.otherPrice}
        </Typography>
      </Box>

      <Button variant="outlined" size="small" fullWidth>
        {product.offersCount} fiyatı incele
      </Button>
    </CardContent>
  </Card>
)

export default ProductCard
