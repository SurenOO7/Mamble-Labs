import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function EmptyList() {
  return (
    <Box pt={"140px"}>
        <Grid container alignItems="center" textAlign="center" direction="column" spacing={1}>
            <Grid item >
                <Typography variant="h5" className="EmptyListLight">Your life is a blank page. You write on it.</Typography>
            </Grid>   
            <Grid item>
                <Typography variant="h3" className="EmptyListBold">So start by adding your tasks here.</Typography>
            </Grid>         
        </Grid>
    </Box>
  )
}
