import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function EmptyList() {
  return (
    <Box pt={"140px"}>
        <Grid container alignItems="center" direction="column" spacing={1}>
            <Grid item >
                <Typography className="EmptyListLight">Your life is a blank page. You write on it.</Typography>
            </Grid>   
            <Grid item>
                <Typography className="EmptyListBold">So start by adding your tasks here.</Typography>
            </Grid>         
        </Grid>
    </Box>
  )
}
