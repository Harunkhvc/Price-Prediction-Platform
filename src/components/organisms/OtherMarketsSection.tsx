import React, { useState } from 'react';
import SectionHeader from '../atoms/SectionHeader';
import SellerCard from '../molecules/SellerCard';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Product } from '../molecules/ProductCard';

interface PriceComparisonSectionProps {
  products: Product[];
}

const availableStores = ['Hepsiburada', 'Trendyol', 'N11'];

const allSellers = [
  {
    storeName: 'Hepsiburada',
    sellerName: 'TeknoShop',
    price: '34.999,00 TL',
  },
  {
    storeName: 'Trendyol',
    sellerName: 'MobilPark',
    price: '35.499,00 TL',
  },
  {
    storeName: 'N11',
    sellerName: 'ABC Elektronik',
    price: '35.899,00 TL',
  },
];

const OtherMarketsSection: React.FC<PriceComparisonSectionProps> = ({ products }) => {
  const product = products[0];
  const [selectedStore, setSelectedStore] = useState<string>('Tümü');

  const handleChange = (event: SelectChangeEvent | string) => {
    const value = typeof event === 'string' ? event : event.target.value;
    setSelectedStore(value);
  };

  const filteredSellers =
    selectedStore === 'Tümü'
      ? allSellers
      : allSellers.filter((s) => s.storeName === selectedStore);

  return (
    <Box p={2}>
      <SectionHeader title="Diğer Mağazalar" icon={<LocalOfferIcon />} />

      {/* 🔽 ComboBox + Butonlar */}
      <Stack direction="row" alignItems="center" spacing={2} mt={2} mb={3}>
        {/* ComboBox */}
        <FormControl size="small" sx={{ width: 200 }}>
          <InputLabel>Mağaza Filtrele</InputLabel>
          <Select
            value={selectedStore}
            label="Mağaza Filtrele"
            onChange={handleChange}
          >
            <MenuItem value="Tümü">Tümü</MenuItem>
            {availableStores.map((store) => (
              <MenuItem key={store} value={store}>
                {store}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Sadece mağaza butonları */}
        <Stack direction="row" spacing={1}>
          {availableStores.map((store) => (
            <Button
              key={store}
              variant={selectedStore === store ? 'contained' : 'outlined'}
              onClick={() => handleChange(store)}
            >
              {store}
            </Button>
          ))}
        </Stack>
      </Stack>

      {/* 🟩 Filtrelenmiş kartlar */}
      {filteredSellers.map((seller, index) => (
        <SellerCard
          key={index}
          storeName={seller.storeName}
          sellerName={seller.sellerName}
          productName={product.name}
          price={seller.price}
        />
      ))}
    </Box>
  );
};

export default OtherMarketsSection;
