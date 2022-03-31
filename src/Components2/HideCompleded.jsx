import { Checkbox, FormControlLabel, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

export default function HideCompleded(props) {
    const [checked, setChecked] = useState(false)

  return (
        <Grid item alignSelf="end">
            <Box mb={"47px"}>
                <FormControlLabel
                    value="start"
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={(e) => {
                                props.hide();
                                setChecked(!checked)
                            }}
                            color="primary"
                        />}
                    className='btnTxt'
                    label="Hide compleded"
                    labelPlacement="start"
                />
                
            </Box>                               
        </Grid>
  )
}
