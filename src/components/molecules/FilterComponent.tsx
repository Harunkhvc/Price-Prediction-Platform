import React, { useState, useEffect } from 'react'
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'

export type Category = 'Telefon' | 'Bilgisayar' | 'Tablet' | ''

export interface FilterValues {
  category: Category
  color: string
  storage: string
  ram: string
}

interface FilterComponentProps {
  colors: string[]
  storages: string[]
  rams: string[]
  onChange: (filters: FilterValues) => void
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  colors,
  storages,
  rams,
  onChange
}) => {
  const [filters, setFilters] = useState<FilterValues>({
    category: '',
    color: '',
    storage: '',
    ram: ''
  })

  // Her state değişiminde dışarıya bildir
  useEffect(() => {
    onChange(filters)
  }, [filters, onChange])

  // Kategori değişince diğer alt filtreleri resetle
  const handleCategoryChange = (cat: Category) => {
    setFilters({ category: cat, color: '', storage: '', ram: '' })
  }

  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
      {/* Kategori Seçimi */}
      <FormControl sx={{ minWidth: 160 }}>
        <InputLabel id="category-label">Kategori</InputLabel>
        <Select
          labelId="category-label"
          value={filters.category}
          label="Kategori"
          onChange={e => handleCategoryChange(e.target.value as Category)}
        >
          <MenuItem value="Telefon">Telefon</MenuItem>
          <MenuItem value="Bilgisayar">Bilgisayar</MenuItem>
          <MenuItem value="Tablet">Tablet</MenuItem>
        </Select>
      </FormControl>

      {/* Telefon ve Tablet için: Renk */}
      {(filters.category === 'Telefon' || filters.category === 'Tablet') && (
        <FormControl sx={{ minWidth: 160 }}>
          <InputLabel id="color-label">Renk</InputLabel>
          <Select
            labelId="color-label"
            value={filters.color}
            label="Renk"
            onChange={e =>
              setFilters(f => ({ ...f, color: e.target.value }))
            }
          >
            {colors.map(c => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Telefon ve Tablet için: Hafıza */}
      {(filters.category === 'Telefon' || filters.category === 'Tablet') && (
        <FormControl sx={{ minWidth: 160 }}>
          <InputLabel id="storage-label">Hafıza</InputLabel>
          <Select
            labelId="storage-label"
            value={filters.storage}
            label="Hafıza"
            onChange={e =>
              setFilters(f => ({ ...f, storage: e.target.value }))
            }
          >
            {storages.map(s => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Bilgisayar için: RAM */}
      {filters.category === 'Bilgisayar' && (
        <FormControl sx={{ minWidth: 160 }}>
          <InputLabel id="ram-label">RAM</InputLabel>
          <Select
            labelId="ram-label"
            value={filters.ram}
            label="RAM"
            onChange={e =>
              setFilters(f => ({ ...f, ram: e.target.value }))
            }
          >
            {rams.map(r => (
              <MenuItem key={r} value={r}>
                {r}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Bilgisayar için: Hafıza */}
      {filters.category === 'Bilgisayar' && (
        <FormControl sx={{ minWidth: 160 }}>
          <InputLabel id="storage-label">Hafıza</InputLabel>
          <Select
            labelId="storage-label"
            value={filters.storage}
            label="Hafıza"
            onChange={e =>
              setFilters(f => ({ ...f, storage: e.target.value }))
            }
          >
            {storages.map(s => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  )
}

export default FilterComponent
