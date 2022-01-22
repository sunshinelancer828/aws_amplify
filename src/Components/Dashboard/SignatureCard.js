import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/styles'
import DocumentList from './DocumentList'
import {useStyle} from './Style'

const DashCard = styled(Box)({
    margin:'10px 0px',
    background: 'white',
    display: 'block',
});

export const SignatureCard = () => {
    const classes=useStyle()
    return(
        <DashCard>
            <Box className={classes.meetingCenterBox}>
                <InsertDriveFileIcon className={classes.cardIcon}/>
                <Typography component="span" className={classes.cardTitle}>My Approve/Signature</Typography>
            </Box>
            <DocumentList/>
            <Box className={classes.centerBox}>
                <Typography component="span" className={classes.cardBottomButton}>View All Tasks</Typography>
            </Box>
        </DashCard>
    );
}