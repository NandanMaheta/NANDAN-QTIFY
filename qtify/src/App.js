import React from "react";
import theme from "./components/ThemeProvider";
import { ThemeProvider } from '@mui/material/styles'
import NavBar from "./components/NavBar/NavBar";
import HeroImage from "./components/HeroSection/HeroImage";
import Section from "./components/Album/Section";
import { useTheme } from "@emotion/react";


function App() {
  const muiTheme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <HeroImage text={{line1: "100 Thousand Songs, ad-free", line2: "Over thousands podcast episodes"}}/>
      <Section/>
    </ThemeProvider>
  );
}

export default App;
