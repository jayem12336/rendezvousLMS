import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import theme from './components/utils/theme'
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
