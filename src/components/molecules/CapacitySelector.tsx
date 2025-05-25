// src/components/molecules/CapacitySelector.tsx
import { FC } from 'react';
import { ToggleButton, ToggleButtonGroup, Box, Typography } from '@mui/material';

export interface CapacityOption {
  label: string;
  value: string;
}

interface CapacitySelectorProps {
  options?: CapacityOption[];
  value: string;
  onChange: (value: string) => void;
}

const defaultOptions: CapacityOption[] = [
  { label: '128 GB', value: '128' },
  { label: '256 GB', value: '256' },
  { label: '512 GB', value: '512' },
];

const CapacitySelector: FC<CapacitySelectorProps> = ({
  options = defaultOptions,
  value,
  onChange,
}) => (
  <Box>
    <Typography variant="subtitle2" gutterBottom>
      Kapasite
    </Typography>
    <ToggleButtonGroup
      value={value}
      exclusive
      size="small"
      onChange={(_, v) => v && onChange(v)}
      sx={{
        '& .MuiToggleButton-root': {
          textTransform: 'none',
          borderColor: 'grey.300',
          '&.Mui-selected': {
            borderColor: 'primary.main',
            color: 'primary.main',
            backgroundColor: 'transparent',
          },
        },
      }}
    >
      {options.map((opt) => (
        <ToggleButton key={opt.value} value={opt.value}>
          {opt.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  </Box>
);

export default CapacitySelector;
