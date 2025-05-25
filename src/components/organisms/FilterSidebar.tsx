// src/components/organisms/FilterSidebar.tsx
import { useState } from 'react';
import {Typography, Divider, Button } from '@mui/material';
import BrandFilter from '../molecules/BrandFilter';
import ModelFilter from '../molecules/ModelFilter';
import BorderBox from '../atoms/BorderBox'; // ✅ entegre edildi

const FilterSidebar = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleModelChange = (model: string) => {
    setSelectedModels((prev) =>
      prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]
    );
  };

  const handleClear = () => {
    setSelectedBrands([]);
    setSelectedModels([]);
  };

  return (
    <BorderBox width={250}>
      <Typography variant="h6" gutterBottom>
        Filtrele
      </Typography>

      <Divider sx={{ my: 2 }} />

      <BrandFilter selectedBrands={selectedBrands} onChange={handleBrandChange} />
      <ModelFilter selectedModels={selectedModels} onChange={handleModelChange} />

      <Divider sx={{ my: 2 }} />

      <Button variant="contained" fullWidth color="success" sx={{ mb: 1 }}>
        Uygula
      </Button>
      <Button variant="outlined" fullWidth onClick={handleClear}>
        Temizle
      </Button>
    </BorderBox>
  );
};

export default FilterSidebar;
