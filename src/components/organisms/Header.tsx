// src/components/organisms/Header.tsx
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Logo from '../atoms/Logo'
import CategoryDropdown from '../molecules/CategoryDropdown'
import SearchBar from '../molecules/SearchBar'

export default function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: '1px solid rgba(0,0,0,0.12)'
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: 64 // tasarımla uyumlu yükseklik
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Logo />
          <CategoryDropdown />
        </Box>
        <SearchBar />
      </Toolbar>
    </AppBar>
  )
}
