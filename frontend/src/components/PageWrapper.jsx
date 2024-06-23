// src/components/PageWrapper.js
import React from 'react';
import { Box } from '@mui/material';

const PageWrapper = ({ children }) => {
  return (
    <Box sx={{ mt: 16 }}> {/* Adjust the margin top as needed */}
      {children}
    </Box>
  );
};

export default PageWrapper;
