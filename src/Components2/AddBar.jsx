import React, { useState } from 'react'
import { TextField, Box, Grid, Typography, InputAdornment, IconButton } from '@mui/material';
import { withStyles } from '@material-ui/core';
import MyButton from './MyButton';
import ClearIcon from '@mui/icons-material/Clear';



export default function Addbar(props) {

const initialValue = {
  id:"",
  task:"",
  completed: false
}

const [toDoTask, settoDoTask] = useState(initialValue);
const [isDisabled, setisDisabled] = useState(true);
const [errors, setErrors] = useState({});
// const inputRef = useRef();
const [focused, setFocused] = React.useState(false)
const onFocus = () => setFocused(true)
const onBlur = () => setFocused(false)

const isValid = (text) => {
  const validEerrors = {};
  if (text.length > 54 && text.length !== 0) {
    validEerrors.textLength = 'Task content can contain max 54 characters';
  }
  setErrors(validEerrors);
  return Object.keys(validEerrors).length === 0 ? true : false;
}

const handleChange = (e) => {
  settoDoTask({...toDoTask, task: e.target.value, id: Date.now()});
  if(isValid(e.target.value)){
    setisDisabled(false);
  }else{
    setisDisabled(true)
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
  props.addToDo(toDoTask);
  settoDoTask(initialValue);
  setisDisabled(true);
}


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
          <Grid container justifyContent="center" direction="column">
              <Typography className='header'>Task</Typography>
              <Grid>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={9}>
                      <Box > 
                        <TextField
                          sx={{height: "100%"}}
                          fullWidth
                          error = {Object.keys(errors).length > 0 ? true : false}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          // ref={inputRef}
                          // sx={{width: "954px"}}
                          color="secondary"
                          value={toDoTask.task}
                          onChange={handleChange}
                          // focused={true}
                          placeholder={focused ? '' : 'Write here'}
                          variant="outlined"
                          required
                          helperText={errors.textLength}
                          size='medium'
                          
                          InputProps={Boolean(focused || toDoTask.task) && {
                            endAdornment: <InputAdornment position="end">
                              <IconButton color="primary" component="span" onClick={() => {
                                settoDoTask(initialValue)
                                let {textLength, ...newErrorList} = errors;
                                setErrors(newErrorList)
                                }}>
                                    <ClearIcon />
                              </IconButton>
                            </InputAdornment>,
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={"auto"} justifySelf="end">
                      <Box height={"100%"}>
                        <MyButton type="submit" name={"Add"} disabled={isDisabled} /> {/*TODO: State changing button*/}
                      </Box>
                      
                    </Grid> 
                  </Grid> 
                </form>  
              </Grid>
              
          </Grid>
          
  )
}
