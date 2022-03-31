import { Container, Grid } from '@mui/material';
// import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import './style/App.css';
import Addbar from './Components2/AddBar';
import ToDoList from './Components2/toDoList';
import EmptyList from './Components2/EmptyList';
import { Box } from '@mui/system';
import HideCompleded from './Components2/HideCompleded';


function App() {
  const [toDo, setToDo] = useState(!!JSON.parse(localStorage.getItem('ToDoList')) ? JSON.parse(localStorage.getItem('ToDoList')) : []);
  const [hideCompleted, setHideCompleted] = useState(false)
  const addToDo = (toDoTask) => {
    setToDo([...toDo, toDoTask]);
  }

  const removeToDo = (toDoTask) => {
    setToDo([...toDoTask]);
  }

    const hide = () => {
      setHideCompleted(!hideCompleted);
    }

  useEffect(() => {
    toDo.length !== 0 && localStorage.setItem('ToDoList', JSON.stringify(toDo))
  }, [toDo])
  

  return (
      <Container maxWidth="md">
        mnuma textfield@  deghin sarqes, u mobili vra tenas xi a poqr
        <Box pt={"8rem"} >
          <Grid container direction="column">
            {toDo.length>0 && <HideCompleded hide={() => hide()}/>}
            <Addbar addToDo={addToDo}/>
            {toDo.length>0 ? <ToDoList List={toDo} hide={hideCompleted} remove={removeToDo}/> : <EmptyList/>}
          </Grid>
        </Box>
      </Container>
  );
}

export default App;
