import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import theme from './components/utils/theme'
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
