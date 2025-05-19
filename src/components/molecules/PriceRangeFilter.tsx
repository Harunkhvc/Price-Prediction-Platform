// src/components/molecules/PriceRangeFilter.tsx
import { FC, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export interface PriceRangeOption {
  label: string;
  value: string;
}

interface PriceRangeFilterProps {
  /** Statik aralık seçenekleri */
  options?: PriceRangeOption[];
  /** Seçili radyo butonunun değeri */
  selectedValue: string;
  /** Radyo grubu seçimi değiştiğinde çağrılır */
  onSelect: (value: string) => void;
  /** “En az / En çok” alanları için “ok” butonuna tıklanınca çağrılır */
  onApplyCustom: (min: string, max: string) => void;
}

const defaultOptions: PriceRangeOption[] = [
  { label: '30000 - 35000 TL', value: '30000-35000' },
  { label: '35000 - 40000 TL', value: '35000-40000' },
  { label: '40000 - 1000000 TL', value: '40000-1000000' },
];

const PriceRangeFilter: FC<PriceRangeFilterProps> = ({
  options = defaultOptions,
  selectedValue,
  onSelect,
  onApplyCustom
}) => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        Fiyat Aralığı
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <TextField
          placeholder="En az"
          variant="outlined"
          size="small"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          sx={{ flex: 1 }}
        />
        <TextField
          placeholder="En çok"
          variant="outlined"
          size="small"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          sx={{ flex: 1 }}
        />
        <IconButton
          onClick={() => onApplyCustom(min, max)}
          sx={{
            p: 1,
            backgroundColor: '#E8F4FF',
            borderRadius: '4px',
            '&:hover': { backgroundColor: '#D0E8FF' },
          }}
        >
          <ChevronRightIcon color="primary" />
        </IconButton>
      </Box>

      <RadioGroup
        value={selectedValue}
        onChange={(e) => onSelect(e.target.value)}
      >
        {options.map((opt) => (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            control={<Radio size="small" />}
            label={opt.label}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default PriceRangeFilter;
