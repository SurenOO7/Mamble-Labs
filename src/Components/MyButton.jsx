import React from 'react'
import { TextField, Box, Grid, Button, Typography } from '@mui/material';

export default function MyButton(props) {
  console.log(props)
  return (
    <Button
    disabled={props.disabled}
      // {...props.disabled && disabled}
      variant="contained"
      color="primary"
      onClick={props.onClick}
      type={props.type}
      >
       Click me
    </Button>
  )
}
