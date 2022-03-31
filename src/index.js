import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    "fontFamily": `Poppins`,
    "fontWeightLight": 400,
    "fontWeightRegular": 500,
    "fontWeightMedium": 600,
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: "#008594",
    },
    secondary: {
      main: "#FFCD04",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
