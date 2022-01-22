import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/styles'
import { DashMeetingItem } from './DashMeetingItem'
import {useStyle} from './Style'

const meetinglist = [
    {
        title:'Meeting One',
        year:'2021',
        month:'Oct',
        day:'10',
        starttime: '9:30 AM',
        endtime: '11:30 AM',
    },
];

const DashCard = styled(Box)({
    margin:'10px 0px',
    background: 'white',
    display: 'block',
});

export const UpcomingMeetingsCard = () => {
    const classes=useStyle()
    return(
        <DashCard>
            <Box className={classes.meetingCenterBox}>
                <GroupsIcon className={classes.cardIcon}/>
                <Typography component="span" className={classes.cardTitle}>Up Coming Meetings</Typography>
            </Box>
            <Box sx={{overflowX: 'scroll'}}>
                {meetinglist.map((item, index) => <DashMeetingItem item={item} key={index}/>)}
            </Box>
            <Box className={classes.centerBox}>
                <Typography component="span" className={classes.cardBottomButton}>View All Meetings</Typography>
            </Box>
        </DashCard>
    );
}