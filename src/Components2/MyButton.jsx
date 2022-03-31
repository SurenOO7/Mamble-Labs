import React from 'react'
import { Button, Typography } from '@mui/material';

export default function MyButton(props) {
  return (
    <Button
      disabled={props.disabled}
      variant="contained"
      color="primary"
      className='btn'
      onClick={props.onClick}
      type={props.type}
      stre
      >
        <Typography className={`btnTxt ${props.className && props.className}`}>{props.name}</Typography>
    </Button>
  )
}
