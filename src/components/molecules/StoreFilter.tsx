// src/components/molecules/StoreFilter.tsx
import { FC, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';

export interface StoreOption {
  label: string;
  value: string;
}

interface StoreFilterProps {
  /** Filtre başlığında gösterilecek mağazalar */
  options?: StoreOption[];
  /** Şu anda seçili mağaza değerleri */
  selectedValues: string[];
  /** Bir seçenek işaretlendiğinde tetiklenecek */
  onChange: (value: string, checked: boolean) => void;
}

const defaultOptions: StoreOption[] = [
  { label: 'N11', value: 'n11' },
  { label: 'Teknosa', value: 'teknosa' },
  { label: 'Mediamarkt', value: 'mediamarkt' },
  { label: 'HepsiBurada', value: 'hepsiburada' },
];

const StoreFilter: FC<StoreFilterProps> = ({
  options = defaultOptions,
  selectedValues,
  onChange,
}) => {
  const [search, setSearch] = useState('');

  const filtered = options.filter(opt =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        Mağaza
      </Typography>

      <TextField
        placeholder="Mağaza içinde ara"
        variant="outlined"
        size="small"
        fullWidth
        value={search}
        onChange={e => setSearch(e.target.value)}
        sx={{ mb: 1 }}
      />

      <Box
        sx={{
          maxHeight: 200,
          overflowY: 'auto',
          pr: 1, // scroll bar için
        }}
      >
        <FormGroup>
          {filtered.map(opt => (
            <FormControlLabel
              key={opt.value}
              control={
                <Checkbox
                  size="small"
                  checked={selectedValues.includes(opt.value)}
                  onChange={e => onChange(opt.value, e.target.checked)}
                />
              }
              label={opt.label}
              sx={{ textTransform: 'none' }}
            />
          ))}
          {filtered.length === 0 && (
            <Typography variant="body2" color="text.secondary" sx={{ pl: 1 }}>
              Mağaza bulunamadı.
            </Typography>
          )}
        </FormGroup>
      </Box>
    </Box>
  );
};

export default StoreFilter;
