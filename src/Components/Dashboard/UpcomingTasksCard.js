import React from 'react'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import TaskList from './TaskList'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/styles'
import {useStyle} from './Style'

const DashCard = styled(Box)({
    margin:'10px 0px',
    background: 'white',
    display: 'block',
});

export const UpcomingTasksCard = () => {
    const classes = useStyle()
    return(
        <DashCard>
            <Box className={classes.meetingCenterBox}>
                <FormatListNumberedIcon className={classes.cardIcon}/>
                <Typography component="span" className={classes.cardTitle}>Up Coming Tasks</Typography>
            </Box>
            <TaskList/>
            <Box className={classes.centerBox}>
                <Typography component="span" className={classes.cardBottomButton}>View All Tasks</Typography>
            </Box>
        </DashCard>
    );
}