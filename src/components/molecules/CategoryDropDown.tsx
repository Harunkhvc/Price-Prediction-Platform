import React, { useState, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const categories = [
  'Elektronik, Cep Telefonu',
  'Ev, Yaşam, Ofis, Kırtasiye',
  'Anne, Bebek, Oyuncak',
  'Saat, Moda, Takı, Ayakkabı',
  'Kitap, Müzik, Hobi',
  'Spor, Outdoor',
  'Sağlık, Bakım, Kozmetik',
  'Oto, Bahçe, Yapı Market',
  'Petshop',
  'Cimri Markette ↗'
];

const CategoryDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      <Button
        endIcon={<Box component="span">▾</Box>}
        onClick={handleClick}
        sx={{
          textTransform: 'none',
          fontWeight: 500,
          color: 'text.primary',
          fontSize: '1rem',            // orijinal boyut
          '&:hover': { bgcolor: 'action.hover' }
        }}
      >
        Kategoriler
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ mt: 1 }}
        MenuListProps={{ sx: { width: 260, p: 1 } }}
      >
        {categories.map(cat => (
          <MenuItem
            key={cat}
            onClick={handleClose}
            sx={{
              borderRadius: 1,
              '&:hover': { bgcolor: 'action.hover' },
              py: 1,
              px: 2,
              typography: 'body2'
            }}
          >
            {cat}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default CategoryDropdown;
