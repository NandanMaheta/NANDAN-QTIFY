import React from 'react';
import { createTheme } from '@mui/material/styles'

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#34C94B', // Primary color for all
      light: '#FFFFFF', // Lighter shade
      dark: '#121212', // Darker shade
    },
  },
});

export default theme;