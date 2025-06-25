import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const mainCategories = ['Cep Telefonu', 'Tablet', 'Bilgisayar'];

const subCategories: Record<string, string[]> = {
  'Cep Telefonu': ['iOS', 'Android'],
  'Bilgisayar': ['Windows', 'MacOS'],
  'Tablet': ['Tablet']  // ✅ Artık Tablet tıklanabilir hale geldi.
};

const CategoryDropDown: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [subAnchorEl, setSubAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedMain, setSelectedMain] = useState<string>('');
  const navigate = useNavigate();

  const handleMainClick = (event: React.MouseEvent<HTMLElement>, category: string) => {
    if (subCategories[category].length > 0) {
      setSelectedMain(category);
      setSubAnchorEl(event.currentTarget);
    } else {
      handleClose();
    }
  };

  const handleSubClick = (sub: string) => {
    handleClose();
    navigate(`/categories/${sub.toLowerCase()}`);
  };

  const handleRootClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubAnchorEl(null);
    setSelectedMain('');
  };

  return (
    <Box>
      <Button
        onClick={handleRootClick}
        endIcon={<ExpandMoreIcon sx={{ fontSize: 20, color: 'primary.main' }} />}
        sx={{
          display: 'flex',
          alignItems: 'center',
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1.05rem',
          letterSpacing: '0.08em',
          color: 'primary.main',
          borderWidth: 3,
          borderStyle: 'solid',
          borderColor: 'primary.main',
          borderRadius: 2,
          px: 3,
          py: 1,
          bgcolor: 'transparent',
          transition: 'background-color 0.2s ease, border-color 0.2s ease',
          '&:hover': {
            bgcolor: 'primary.light',
            borderColor: 'primary.dark',
          },
        }}
      >
        Kategoriler
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: 1 }}
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
            border: '1px solid #E0E0E0',
            minWidth: 280,
            p: 1,
          },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        MenuListProps={{ sx: { p: 0 } }}
      >
        {mainCategories.map((cat) => (
          <MenuItem
            key={cat}
            onClick={(e) => handleMainClick(e, cat)}
            sx={{
              mb: 0.5,
              borderRadius: 1,
              px: 2,
              py: 1,
              typography: 'body2',
              fontFamily: 'Poppins, sans-serif',
              color: 'primary.dark',
              justifyContent: 'space-between',
              transition: 'background-color 0.2s ease',
              '&:hover': {
                bgcolor: 'primary.light',
              },
            }}
          >
            {cat}
            {subCategories[cat].length > 0 && <ChevronRightIcon fontSize="small" />}
          </MenuItem>
        ))}
      </Menu>

      <Menu
        anchorEl={subAnchorEl}
        open={Boolean(subAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
            border: '1px solid #E0E0E0',
            minWidth: 200,
            p: 1,
          },
        }}
        MenuListProps={{ sx: { p: 0 } }}
      >
        {subCategories[selectedMain]?.map((sub) => (
          <MenuItem
            key={sub}
            onClick={() => handleSubClick(sub)}
            sx={{
              mb: 0.5,
              borderRadius: 1,
              px: 2,
              py: 1,
              typography: 'body2',
              fontFamily: 'Poppins, sans-serif',
              color: 'primary.dark',
              transition: 'background-color 0.2s ease',
              '&:hover': {
                bgcolor: 'primary.light',
              },
            }}
          >
            {sub}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default CategoryDropDown;
