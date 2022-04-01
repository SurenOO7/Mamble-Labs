import { Box, Button, Checkbox, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';

export default function ToDoList(props) {
    const initialValue = props.hide ? props.List : props.List.filter(item => !item.completed);
    const [toDoList, setToDoList] = useState(initialValue);
    const [openDialog, setOpenDialog] = useState({open: false, id: ""});

    const deleteTheTask = (id) => {  
        const newList = props.List.filter(task => {
            return task.id !== id;
        })
        props.remove(newList);
    }

    const handleChange = (e, id) => {
        const newList2 = props.List.map(task => {
            return task.id === id ? { ...task, completed: !task.completed } : task;
        })
        setToDoList(newList2)
        props.remove(newList2)
    }

    useEffect(() => {
        props.hide ? setToDoList(props.List.filter(item => !item.completed)) : setToDoList(props.List);
    }, [props.hide])
    useEffect(() => {
        props.hide ? setToDoList(props.List.filter(item => !item.completed)) : setToDoList(props.List);
    }, [props.List])
  return (
    <>
        <Dialog onClose={() => setOpenDialog({open: false, id: ""})} open={openDialog.open}>
            <DialogTitle >
                <Typography sx={{color: "#008594"}}>Are you sure you want to delete?</Typography>
            </DialogTitle>
            <DialogContent>
                <Grid container justifyContent="center">
                    <Button
                        onClick={() => {
                            deleteTheTask(openDialog.id);
                            setOpenDialog({open: false, id: ""});
                        }}>
                        <Typography sx={{color: "#174348"}}>Yes</Typography>
                    </Button>
                    <Button
                        onClick={() => {
                            setOpenDialog({open: false, id: ""});
                        }}>
                        <Typography sx={{color: "#174348"}}>No</Typography>
                    </Button>
                </Grid>
            </DialogContent>
        </Dialog>
        <Grid container direction="column" >
            <Box mt={"82px"} className="toDoList">
            {toDoList && toDoList.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <Box py={"20px"}  >
                            <Grid container item justifyContent="space-between" wrap="nowrap" alignItems="center" xs={12}>
                                <Grid container item alignItems="center" wrap="nowrap">
                                    <Grid item>
                                        <Box pr={"35px"}>
                                            <Checkbox
                                                checked={item.completed}
                                                onChange={(e) => handleChange(e, item.id)}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                        </Box>                               
                                    </Grid>
                                    <Grid item >
                                        <Typography variant="body2" className={`taskText ${item.completed && 'checked'}`}>
                                            {item.task}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs="auto">
                                    <IconButton color="primary" component="span" onClick={() => setOpenDialog({open: true, id: item.id})}>
                                        {/* onClick={() => deleteTheTask(item.id)} */}
                                        <ClearIcon />
                                    </IconButton>
                                </Grid>
                                
                            </Grid> 
                        
                        </Box>
                        <Divider className='checked'/>
                    </React.Fragment>
                )
            })}
            </Box>
        </Grid>
    </>
  )
}