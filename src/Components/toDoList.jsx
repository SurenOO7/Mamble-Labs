import { Box, Checkbox, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function ToDoList(props) {
    const initialValue = JSON.parse(localStorage.getItem('ToDoList'))
    const [toDoList, setWhatToDo] = useState(initialValue)
    const [checked, setChecked] = useState([]);

    // const handleChange = (e, position) => {
    //     const updatedCheckedState = checked.map((item, index) =>
    //       index === position ? !item : item
    // )};

    useEffect(() => {
        // console.log("-------------------")
        // console.log(checked)
        console.log("---++++++++++----")
        console.log(toDoList)
    }, [toDoList])
    useEffect(() => {
        // console.log("-------------------")
        // console.log(checked)
        console.log("-----------")
        console.log(toDoList)
    }, [])
  return (
    <Box>
        <Grid container spacing={1}>
            {toDoList.map((item, index) => {
                return (
                    <Grid item xs={12} key={index}>
                        <Checkbox
                            checked={checked[index]}
                            // onChange={(e) => handleChange(e, index)}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Grid>
                )
            })}

        </Grid>
    </Box>
  )
}



// import { Box, Checkbox, Grid } from '@mui/material'
// import React, { useEffect, useState } from 'react'


// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

// export default function ToDoList(props) {
//     const initialValue = JSON.parse(localStorage.getItem('items'));
//     const [toDoList, setToDoList] = useState(initialValue)
//     const [checked, setChecked] = useState([]);

//     // const handleChange = (e, position) => {
//     //     const updatedCheckedState = checked.map((item, index) =>
//     //       index === position ? !item : item
//     // )};

//     useEffect(() => {
//         console.log("-------------------")
//         console.log(checked)
//         console.log("---++++++++++----")
//         console.log(toDoList)
//     }, [checked])

//   return (
//     <Box>
//         <Grid container spacing={1}>
//             <Grid item xs={12}>
//                 <List dense={false}>
//                 {toDoList.map((item, index) => {
//                     return (
//                         <ListItem key={index}>
//                             <ListItemIcon>
//                                 <Checkbox
//                                     edge="start"
//                                     checked={checked.indexOf(index) !== -1}
//                                     tabIndex={-1}
//                                     disableRipple
//                                     onClick={() => {
//                                         setChecked(checked.indexOf(index) !== -1 ? checked.filter(item => item !== index) : [...checked, index])
//                                     }}
//                                 />
//                             </ListItemIcon>
//                             <ListItemText primary={item} />
//                             <IconButton aria-label="delete">
//                                 <DeleteIcon />
//                             </IconButton>
//                         </ListItem>
//                     )
//                 })}
//                 {/* {toDoList.map((item, index) => {
//                         return (
//                         <ListItem 
//                             key={index}
//                             secondaryAction={
//                                 <IconButton edge="end" aria-label="delete">
//                                     <DeleteIcon />
//                                 </IconButton>
//                             }
//                         >
//                             <ListItemText
//                                 primary="Single-line item"
//                                 secondary={secondary ? 'Secondary text' : null}
//                             />
//                         </ListItem>,
//                         )})} */}
//                 {/* <Checkbox
//                     checked={checked[index]}
//                     // onChange={(e) => handleChange(e, index)}
//                     inputProps={{ 'aria-label': 'controlled' }}
//                 /> */}
//                 </List>
//             </Grid>
//         </Grid>
//     </Box>
//   )
// }
