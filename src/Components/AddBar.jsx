import React, { useEffect, useState } from 'react'
import { TextField, Box, Grid, Button, Typography } from '@mui/material';
import { withStyles } from '@material-ui/core';
import ToDoList from './toDoList';
import EmptyList from './EmptyList';
import MyButton from './MyButton';


export default function Addbar() {

const [whatToDo, setWhatToDo] = useState([])
const [toDoText, setoDoText] = useState('')
const [isDisabled, setisDisabled] = useState(true)
const [errors, setErrors] = useState({})

const handleChange = (e) => {
  // console.log(e.target.value.length)
  setoDoText(e.target.value)
  if(e.target.value.length < 54 && e.target.value.length !== 0){
    setisDisabled(false)
  }else{
    //error lini te che steghic piti imana kareli a stegh tal
    setisDisabled(true)
  }
}

const handleSubmit = (e) => {
  e.preventDefault()
  setWhatToDo([...whatToDo, {value: toDoText, isChecked: false}])
  setoDoText('')
  setisDisabled(true)
}



useEffect(() => {
  whatToDo.length !== 0 && localStorage.setItem('ToDoList', JSON.stringify(whatToDo))
}, [whatToDo])

const TextFieldColor = "#FFCD04"

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: TextFieldColor,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: TextFieldColor,
        padding: "0px"
      },
      '&:hover fieldset': {
        borderColor: TextFieldColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: TextFieldColor,
        borderWidth: '1px',
      },
    },
  },
})(TextField);
  return (
        <Box pt={"146px"} sx={{height: '100vh' }}>
          <Grid container direction="column" sx={{height: '100vh' }}>
              <Typography>Task</Typography>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    value={toDoText}
                    onChange={handleChange}
                    placeholder='write here'
                    variant="outlined"
                    required
                    helperText="Incorrect entry."
                    size='small'
                    color="warning"
                  />
                  <MyButton type="submit" disabled={isDisabled} onClick={() => console.log("Ohaio")}/> {/*TODO: State changing button*/}
                </form>
                
              </Grid>
              <Grid item xs={2}>
                 {/* //make submit button or give state by props */}
              </Grid>
            </Grid>

              {whatToDo.length>0 ? <ToDoList /> : <EmptyList/>} //state@ henc poxvi, pti getItem ani ToDoList@

          </Grid>
        </Box>    
  )
}
