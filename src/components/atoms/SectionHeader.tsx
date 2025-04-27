// src/components/atoms/SectionHeader.tsx
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface SectionHeaderProps {
  title: string
  icon: React.ReactNode
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon }) => (
  <Box display="flex" alignItems="center" mb={2}>
    <Typography variant="h6" component="h2" mr={1}>
      {title}
    </Typography>
    {icon}
  </Box>
)

export default SectionHeader
