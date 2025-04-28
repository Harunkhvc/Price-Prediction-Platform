// src/components/molecules/CategoryDropDown.tsx
import React, { useState, MouseEvent } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const defaultCategories = [
  'Elektronik, Cep Telefonu',
  'Ev, Yaşam, Ofis, Kırtasiye',
  'Saat, Moda, Takı, Ayakkabı',
  'Kitap, Müzik, Hobi',
]

interface CategoryDropDownProps {
  options?: string[]
}

const CategoryDropDown: React.FC<CategoryDropDownProps> = ({ options }) => {
  const cats = options ?? defaultCategories
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <Box>
      <Button
        onClick={handleClick}
        endIcon={<Box component="span">▾</Box>}
        sx={{
          textTransform: 'none',
          fontWeight: 500,
          color: '#008000',                 // yeşil metin
          border: '1px solid #008000',      // yeşil çerçeve
          borderRadius: 1,                  // 4px
          px: 1.5,                          // yatay padding
          py: 0.5,                          // dikey padding
          fontSize: '1rem',
          bgcolor: 'transparent',
          '&:hover': {
            bgcolor: 'transparent',
            borderColor: '#006600',         // koyu yeşil hover
          },
        }}
      >
        Kategoriler
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ mt: 1 }}
        PaperProps={{
          sx: {
            border: '1px solid #008000',   // Menü çerçevesi
          },
        }}
        MenuListProps={{ sx: { width: 260, p: 1 } }}
      >
        {cats.map((cat) => (
          <MenuItem
            key={cat}
            onClick={handleClose}
            sx={{
              borderRadius: 1,
              px: 2,
              py: 1,
              typography: 'body2',
              color: '#004d00',             // koyu metin
              '&:hover': { bgcolor: '#e8f5e9' }, // açık yeşil hover
            }}
          >
            {cat}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default CategoryDropDown
