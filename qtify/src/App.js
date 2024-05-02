import React from "react";
import theme from "./components/ThemeProvider";
import { ThemeProvider } from '@mui/material/styles'
import NavBar from "./components/NavBar/NavBar";
import HeroImage from "./components/HeroSection/HeroImage";
import HomePage from "./components/Album/HomePage";
import { useTheme } from "@emotion/react";


function App() {
  const muiTheme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <HeroImage text={{line1: "100 Thousand Songs, ad-free", line2: "Over thousands podcast episodes"}}/>
      <HomePage/>
      
    </ThemeProvider>
  );
}

export default App;
