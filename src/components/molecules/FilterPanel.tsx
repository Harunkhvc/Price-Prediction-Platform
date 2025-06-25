// src/components/molecules/FilterPanel.tsx
import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Divider,
  SelectChangeEvent
} from '@mui/material';

export type Category = 'Telefon' | 'Bilgisayar' | 'Tablet';

export interface FilterValues {
  category: Category | '';
  brand: string;
  memory: string;
  color: string;
  ram: string;
  screen: string;
  cpu: string;
}

interface FilterPanelProps {
  values: FilterValues;
  onChange: (field: keyof FilterValues, value: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ values, onChange }) => {
  const handle = (field: keyof FilterValues) => (e: SelectChangeEvent<string>) => {
    onChange(field, e.target.value);
  };

  return (
    <Box sx={{ width: 240, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
      <Typography variant="h6" gutterBottom>Filtrele</Typography>

      {/* Kategori */}
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <InputLabel>Kategori Seçiniz</InputLabel>
        <Select
          label="Kategori Seçiniz"
          value={values.category}
          onChange={handle('category')}
        >
          <MenuItem value="">Tümü</MenuItem>
          <MenuItem value="Telefon">Telefon</MenuItem>
          <MenuItem value="Bilgisayar">Bilgisayar</MenuItem>
          <MenuItem value="Tablet">Tablet</MenuItem>
        </Select>
      </FormControl>

      <Divider sx={{ my: 2 }} />

      {values.category === 'Telefon' && (
        <>
          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel>Marka</InputLabel>
            <Select label="Marka" value={values.brand} onChange={handle('brand')}>
              <MenuItem value="">Tümü</MenuItem>
              <MenuItem value="Apple">Apple</MenuItem>
              <MenuItem value="Samsung">Samsung</MenuItem>
              <MenuItem value="Xiaomi">Xiaomi</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel>Hafıza</InputLabel>
            <Select label="Hafıza" value={values.memory} onChange={handle('memory')}>
              <MenuItem value="">Tümü</MenuItem>
              <MenuItem value="64 GB">64 GB</MenuItem>
              <MenuItem value="128 GB">128 GB</MenuItem>
              <MenuItem value="256 GB">256 GB</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel>Renk</InputLabel>
            <Select label="Renk" value={values.color} onChange={handle('color')}>
              <MenuItem value="">Tümü</MenuItem>
              <MenuItem value="Beyaz">Beyaz</MenuItem>
              <MenuItem value="Siyah">Siyah</MenuItem>
              <MenuItem value="Kırmızı">Kırmızı</MenuItem>
            </Select>
          </FormControl>
        </>
      )}

      {values.category === 'Bilgisayar' && (
        <>
          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel>Marka</InputLabel>
            <Select label="Marka" value={values.brand} onChange={handle('brand')}>
              <MenuItem value="">Tümü</MenuItem>
              <MenuItem value="Lenovo">Lenovo</MenuItem>
              <MenuItem value="Asus">Asus</MenuItem>
              <MenuItem value="HP">HP</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel>RAM</InputLabel>
            <Select label="RAM" value={values.ram} onChange={handle('ram')}>
              <MenuItem value="">Tümü</MenuItem>
              <MenuItem value="8 GB">8 GB</MenuItem>
              <MenuItem value="16 GB">16 GB</MenuItem>
              <MenuItem value="32 GB">32 GB</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel>Ekran</InputLabel>
            <Select label="Ekran" value={values.screen} onChange={handle('screen')}>
              <MenuItem value="">Tümü</MenuItem>
              <MenuItem value={'13"'}>13"</MenuItem>
              <MenuItem value={'15"'}>15"</MenuItem>
              <MenuItem value={'17"'}>17"</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel>İşlemci</InputLabel>
            <Select label="İşlemci" value={values.cpu} onChange={handle('cpu')}>
              <MenuItem value="">Tümü</MenuItem>
              <MenuItem value="i5">i5</MenuItem>
              <MenuItem value="i7">i7</MenuItem>
              <MenuItem value="Ryzen 5">Ryzen 5</MenuItem>
              <MenuItem value="Ryzen 7">Ryzen 7</MenuItem>
            </Select>
          </FormControl>
        </>
      )}

      {values.category === 'Tablet' && (
        <>
          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel>Marka</InputLabel>
            <Select label="Marka" value={values.brand} onChange={handle('brand')}>
              <MenuItem value="">Tümü</MenuItem>
              <MenuItem value="Apple">Apple</MenuItem>
              <MenuItem value="Samsung">Samsung</MenuItem>
              <MenuItem value="Huawei">Huawei</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel>Hafıza</InputLabel>
            <Select label="Hafıza" value={values.memory} onChange={handle('memory')}>
              <MenuItem value="">Tümü</MenuItem>
              <MenuItem value="64 GB">64 GB</MenuItem>
              <MenuItem value="128 GB">128 GB</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel>Renk</InputLabel>
            <Select label="Renk" value={values.color} onChange={handle('color')}>
              <MenuItem value="">Tümü</MenuItem>
              <MenuItem value="Gri">Gri</MenuItem>
              <MenuItem value="Altın">Altın</MenuItem>
            </Select>
          </FormControl>
        </>
      )}
    </Box>
  );
};

export default FilterPanel;
