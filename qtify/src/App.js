import React from "react";
import theme from "./components/ThemeProvider";
import { ThemeProvider } from '@mui/material/styles'
import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
    </ThemeProvider>
  );
}

export default App;
