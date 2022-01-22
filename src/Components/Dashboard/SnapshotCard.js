import React from 'react'
import { styled } from '@mui/styles'
import { Typography, Box, Grid} from '@mui/material'
import { SnapshotCardItem } from './SnapshotCardItem'
import {useStyle} from './Style'

const historylist = [
    {
        value1 : "0",
        value2 : "",
        description: "RSVP",
    },
    {
        value1: "0",
        value2: "/0",
        description: "Task's Completed",
    },
    {
        value1: "0",
        value2: "%",
        description: "Meeting's attended",
    },
]

const ActivitySnap = styled(Box)({
    background: '#7373ed',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxShadow: '5px 2px 8px 5px #c4c4d4',
});

export const SnapshotCard = () => {
    const classes=useStyle()
    return(
        <ActivitySnap>
            <Box className={classes.ActivitySnapMain}>
                <Box sx={{padding: '10px'}}>
                    <img src="../Images/pulse.png"/>
                </Box>
                <Box>
                    <Typography component="h2" sx={{color: 'white', fontSize: '25px'}}>
                        Activity Snapshot
                    </Typography>
                    <Box sx={{display:'flex'}}>
                        <Typography component="div" sx={{color: 'white'}}>
                            Summary of your activity over the last
                        </Typography>
                        <select className={classes.selectoption}>
                            <option>30</option>
                            <option>20</option>
                            <option>10</option>
                        </select>
                    </Box>
                </Box>
            </Box>
            <Grid container sx={{ marginTop: '40px'}}>
                {historylist.map((item, index) => <SnapshotCardItem item={item} key={index}/>)}
            </Grid>
        </ActivitySnap>
    );
}