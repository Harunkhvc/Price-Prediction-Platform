// src/components/molecules/ColorSelector.tsx
import { FC } from 'react';
import { Box, Typography, Stack } from '@mui/material';

export interface ColorOption {
  label: string;
  imageUrl: string;
  price?: string;        // eğer fiyatı yoksa undefined
  value: string;
}

interface ColorSelectorProps {
  options: ColorOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const ColorSelector: FC<ColorSelectorProps> = ({
  options,
  selectedValue,
  onChange,
}) => (
  <Box>
    <Typography variant="subtitle2" gutterBottom>
      Renk
    </Typography>
    <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', pb: 1 }}>
      {options.map((opt) => {
        const isSelected = opt.value === selectedValue;
        return (
          <Box
            key={opt.value}
            onClick={() => onChange(opt.value)}
            sx={{
              minWidth: 100,
              border: 1,
              borderColor: isSelected ? 'primary.main' : 'grey.300',
              borderRadius: 1,
              p: 1,
              cursor: 'pointer',
              textAlign: 'center',
              flexShrink: 0,
              backgroundColor: 'background.paper',
            }}
          >
            <Box
              component="img"
              src={opt.imageUrl}
              alt={opt.label}
              sx={{ width: '100%', height: 72, objectFit: 'contain', mb: 0.5 }}
            />
            <Typography variant="body2">{opt.label}</Typography>
            <Typography
              variant="caption"
              color={opt.price ? 'text.primary' : 'text.secondary'}
            >
              {opt.price ?? 'Fiyat Yok'}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  </Box>
);

export default ColorSelector;
