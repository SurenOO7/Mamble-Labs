import { Container, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './style/App.css';
import Addbar from './Components2/AddBar';
import ToDoList from './Components2/toDoList';
import EmptyList from './Components2/EmptyList';
import { Box } from '@mui/system';
import HideCompleded from './Components2/HideCompleded';


function App() {
  const [toDo, setToDo] = useState(!!JSON.parse(localStorage.getItem('ToDoList')) ? JSON.parse(localStorage.getItem('ToDoList')) : []);
  const [hideCompleted, setHideCompleted] = useState(false);
  const [hidevisible, setHidevisible] = useState(false);
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
    localStorage.setItem('ToDoList', JSON.stringify(toDo));
    setHidevisible(JSON.parse(localStorage.getItem('ToDoList')).length>0 ? true : false);
  }, [toDo])
  
  
  return (
      <Container maxWidth="md" sx={{}}>
        <Box pt={"8rem"} minHeight={"100vh"}>
          <Grid container direction="column">
            {hidevisible && <HideCompleded hide={() => hide()}/>}
            <Addbar addToDo={addToDo}/>
            {toDo.length>0 ? <ToDoList List={toDo} hide={hideCompleted} remove={removeToDo}/> : <EmptyList/>}
          </Grid>
        </Box>
      </Container>
  );
}

export default App;
