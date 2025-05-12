import React from 'react';
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography,
} from '@mui/material';

interface ModelFilterProps {
  selectedModels: string[];
  onChange: (model: string) => void;
}

const models = ['iPhone 13', 'Galaxy S22', 'Mi 11', 'P40'];

const ModelFilter: React.FC<ModelFilterProps> = ({ selectedModels, onChange }) => {
  return (
    <>
      <Typography variant="subtitle2" mt={2}>Model</Typography>
      <FormGroup>
        {models.map((model) => (
          <FormControlLabel
            key={model}
            control={
              <Checkbox
                checked={selectedModels.includes(model)}
                onChange={() => onChange(model)}
              />
            }
            label={model}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default ModelFilter;
