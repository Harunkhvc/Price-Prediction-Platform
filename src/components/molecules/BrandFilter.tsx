import React from 'react';
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography,
} from '@mui/material';

interface BrandFilterProps {
  selectedBrands: string[];
  onChange: (brand: string) => void;
}

const brands = ['Apple', 'Samsung', 'Xiaomi', 'Huawei'];

const BrandFilter: React.FC<BrandFilterProps> = ({ selectedBrands, onChange }) => {
  return (
    <>
      <Typography variant="subtitle2" mt={2}>Marka</Typography>
      <FormGroup>
        {brands.map((brand) => (
          <FormControlLabel
            key={brand}
            control={
              <Checkbox
                checked={selectedBrands.includes(brand)}
                onChange={() => onChange(brand)}
              />
            }
            label={brand}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default BrandFilter;
