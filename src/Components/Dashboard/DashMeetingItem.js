import { Box, Typography } from '@mui/material'
import {styled} from '@mui/styles'
import React from 'react'
import {useStyle} from './Style'

const MeetingCard = styled(Box)({
    display:'flex', 
    justifyContent: 'space-between', 
    margin: '8px',
    background: '#e6e6f9',
    alignItems: 'center',
    padding: '5px',
    minWidth: '500px',
});

export const DashMeetingItem = ({item}) => {
    const classes=useStyle()
    return(
        <MeetingCard>
            <Box className={classes.meetingCenterBox}>
                <Box className={classes.squareBox}>
                    <Typography 
                        className={classes.squareMonthTxt}>
                        {item.month}
                    </Typography>
                    <Typography 
                        className={classes.squareDayTxt}>
                        {item.day}
                    </Typography>
                </Box>
                <Box sx={{paddingLeft: '5px'}}>
                    <Typography className={classes.meetingCardTitle}>{item.title}</Typography>
                    <Typography className={classes.meetingCardDate}>
                        {item.day} {item.month}, {item.year} | {item.starttime} TO {item.endtime}
                    </Typography>
                    <Box sx={{display: 'flex'}}>
                        <Typography className={classes.welcomeDate}>Welcome!</Typography>
                        <Typography className={classes.meetingDescription}>Meeting agenda Text here...</Typography>
                    </Box>
                </Box>
            </Box>
            <Typography className={classes.meetingAgenda}>View Meeting Agenda</Typography>
        </MeetingCard>
    );
}