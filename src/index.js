import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h3: {
      fontSize: "1.3rem",
      fontWeight: 500,
      color: "#666666",
    },
    h5: {
      fontSize: "0.8rem",
      fontWeight: 500,
      color: "#ACACAC ",
  },
  body1: {
      fontSize: "1.1rem",
      fontWeight: 500,
  },
  body2: {
    fontSize: "1.1rem",
    fontWeight: 400,
  },
    button: {
      textTransform: 'none',
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
