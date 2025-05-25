// src/components/organisms/Header.tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from '../atoms/Logo';
import CategoryDropDown from '../molecules/CategoryDropDown';
import SearchBar from '../molecules/SearchBar';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 80,
            px: 2,
          }}
        >
          {/* Sol taraf: Logo + Kategori */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box sx={{ transform: 'scale(1.2)' }}>
              <Logo />
            </Box>
            <Box sx={{ typography: 'h6', minWidth: 150 }}>
              <CategoryDropDown />
            </Box>
          </Box>

          {/* Sağ taraf: Arama */}
          <Box sx={{ flexGrow: 1, mx: 6 }}>
            <Box
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderWidth: '2px',
                  borderRadius: 2,
                  paddingRight: 0,
                },
                '& .MuiOutlinedInput-input': {
                  py: 1.5,
                  fontSize: '1rem',
                },
              }}
            >
              <SearchBar />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}