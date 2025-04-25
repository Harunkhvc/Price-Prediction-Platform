import React from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: 400,
      border: 1,
      borderColor: 'primary.main',  // yeşil çerçeve
      borderRadius: 2,
      overflow: 'hidden'
    }}
  >
    <InputBase
      placeholder="Neyi en ucuza almak istersin?"
      sx={{
        flex: 1,
        px: 2,
        '& .MuiInputBase-input': { py: 1.5 }
      }}
    />
    <IconButton
      sx={{
        bgcolor: 'primary.main',
        color: 'common.white',
        px: 2,
        '&:hover': { bgcolor: 'primary.dark' }
      }}
    >
      <Search size={18} />
    </IconButton>
  </Box>
);

export default SearchBar;
