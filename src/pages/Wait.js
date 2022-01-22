import React from 'react'
import {Box, Typography} from '@mui/material'

export const Wait = () => {
    return(
        <Box sx={{marginTop: '200px', width: '100%', justifyContent: 'center', display: 'flex'}}>
            <Typography sx={{fontSize: '100px', textAlign: 'center'}}>
                Wait for the Confirmation Message
            </Typography>
        </Box>
    );
}