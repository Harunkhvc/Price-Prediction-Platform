// src/components/atoms/BorderBox.tsx
import React from 'react';
import { Box, BoxProps } from '@mui/material';

const BorderBox: React.FC<BoxProps> = ({ children, sx, ...rest }) => {
  return (
    <Box
      sx={{
        border: '2px solid green',
        borderRadius: 4,
        padding: 2,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default BorderBox;
