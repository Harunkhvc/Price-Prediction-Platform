// src/components/molecules/StorageFilter.tsx
import { FC } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Stack
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface StorageOption {
  label: string;
  value: string;
}

interface StorageFilterProps {
  /** Gösterilecek seçenekler */
  options?: StorageOption[];
  /** Seçili olan değerlerin listesi */
  selectedValues: string[];
  /** Bir kutucuk tıklandığında çağrılır */
  onChange: (value: string, checked: boolean) => void;
}

const defaultOptions: StorageOption[] = [
  { label: '128 GB', value: '128' },
  { label: '256 GB', value: '256' },
  { label: '512 GB', value: '512' },
];

const StorageFilter: FC<StorageFilterProps> = ({
  options = defaultOptions,
  selectedValues,
  onChange,
}) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        border: 'none',
        boxShadow: 'none',
        '& .MuiAccordionSummary-root': { padding: 0 },
        '& .MuiAccordionDetails-root': { padding: 0, marginTop: 1 },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="storage-filter-content"
        id="storage-filter-header"
        sx={{ padding: 0 }}
      >
        <Stack spacing={0} flexGrow={1}>
          <Typography variant="subtitle1" fontWeight={600}>
            Dahili Depolama
          </Typography>
          <Typography variant="body2" color="text.secondary">
            (Hafıza)
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {options.map((opt) => (
            <FormControlLabel
              key={opt.value}
              control={
                <Checkbox
                  checked={selectedValues.includes(opt.value)}
                  onChange={(e) => onChange(opt.value, e.target.checked)}
                  size="small"
                />
              }
              label={opt.label}
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default StorageFilter;
