// src/components/organisms/Header.tsx
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Logo from '../atoms/Logo'
import CategoryDropDown from '../molecules/CategoryDropDown'
import SearchBar from '../molecules/SearchBar'

export default function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: '#ffffff',                         // düz beyaz zemin
        borderBottom: '1px solid rgba(0,0,0,0.12)', // ince alt çizgi
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 64,
          }}
        >
          {/* Sol taraf: Logo + Kategori */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Logo />
            <CategoryDropDown />
          </Box>

          {/* Sağ taraf: Arama */}
          <Box sx={{ flexGrow: 1, mx: 4 }}>
            <SearchBar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
