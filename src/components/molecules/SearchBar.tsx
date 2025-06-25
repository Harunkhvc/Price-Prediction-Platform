import React from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Search } from 'lucide-react';

export interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onClear?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch, onClear }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: 600,
      height: 48,
      border: 3,
      borderColor: 'primary.main',
      borderRadius: 2,
      overflow: 'hidden',
    }}
  >
    <InputBase
      value={value}
      onChange={onChange}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          onSearch();
          e.preventDefault();
        }
      }}
      placeholder="Neyi en ucuza almak istersin?"
      sx={{
        flex: 1,
        px: 2,
        '& .MuiInputBase-input': {
          py: 1.5,
          fontSize: '1rem',
        },
      }}
    />

    {value && onClear && (
      <IconButton onClick={onClear} sx={{ ml: 1 }}>
        &times;
      </IconButton>
    )}

    <IconButton
      onClick={onSearch}
      sx={{
        width: 48,
        height: 48,
        bgcolor: 'primary.main',
        color: 'common.white',
        borderRadius: 0,
        '&:hover': { bgcolor: 'primary.dark' },
      }}
    >
      <Search size={24} />
    </IconButton>
  </Box>
);

export default SearchBar;
