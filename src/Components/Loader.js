import React from 'react'
import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
    return(
        <Box sx={{width: '100%', height: '900px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress size={200} sx={{color: 'rebeccapurple'}}/>
        </Box>
    );
}