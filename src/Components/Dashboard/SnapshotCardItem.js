import React from 'react'
import ReportIcon from '@mui/icons-material/Report';
import { Box, Typography, Grid } from '@mui/material';
import { useStyle } from './Style'

export const SnapshotCardItem = ({item}) => {
    const classes=useStyle()
    return(
        <Grid item xs={12} sm={6} md={4} className={classes.snapShotCardGrid}>
            <Box className={classes.snapShotCardValue}>
                <Typography component="span" sx={{fontSize: '40px', color: 'white'}}>
                    {item.value1}
                </Typography>
                <Typography component="span" sx={{fontSize: '16px', color: 'white'}}>
                    {item.value2}
                </Typography>
            </Box>
            <Box className={classes.snapShotCardBottom}>
                <ReportIcon sx={{color:'white'}}></ReportIcon>
                <Typography component="span" 
                    className={classes.snapShotDescription}>
                    {item.description}
                </Typography>
            </Box>
        </Grid>
    );
}