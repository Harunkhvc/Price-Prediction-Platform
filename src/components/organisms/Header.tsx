import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Logo from '../atoms/Logo';
import CategoryDropDown from '../molecules/CategoryDropDown';
import SearchBar from '../molecules/SearchBar';

export default function Header() {
  const [query, setQuery] = React.useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
        height: isMobile ? 80 : 140,
      }}
    >
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {/* Sol taraf: Logo ve Kategori */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 2 : 5 }}>
            <Box sx={{ transform: isMobile ? 'scale(1.0)' : 'scale(1.2)' }}>
              <Logo />
            </Box>
            {!isMobile && (
              <Box sx={{ typography: 'h6', minWidth: 150 }}>
                <CategoryDropDown />
              </Box>
            )}
          </Box>

          {/* Arama Barı */}
          <Box sx={{ flexGrow: 1, mx: isMobile ? 2 : 8 }}>
            <Box
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderWidth: '2px',
                  borderRadius: 2,
                  paddingRight: 0,
                },
                '& .MuiOutlinedInput-input': {
                  py: isMobile ? 1.2 : 1.8,
                  fontSize: isMobile ? '0.9rem' : '1rem',
                },
              }}
            >
              <SearchBar
                value={query}
                onChange={e => setQuery(e.target.value)}
                onSearch={handleSearch}
                onClear={() => setQuery('')}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
