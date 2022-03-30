import { Container } from '@mui/material';
// import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import './style/App.css';
import Addbar from './Components/AddBar';

function App() {
  return (
    // <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Addbar/>
      </Container>
    // </ThemeProvider>
  );
}

export default App;
