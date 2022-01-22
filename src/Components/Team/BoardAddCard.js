import React from 'react'
import {Grid, Box, TextField, Button} from '@mui/material'
import {styled} from '@mui/styles'
import {useStyle} from './Style'
import { useNavigate } from 'react-router'
import {useInput} from '../../utils/forms'
import {toast} from 'react-toastify'

const BoardBox = styled(Box)({
    background: '#dcdcff',
    padding: '10px',
    height: '240px',
    display: 'flex',
    justifyContent: 'center',
})

export const BoardAddCard = (adminid) => {
    const classes=useStyle()
    const navigate=useNavigate()
    const {value:groupname, bind: bindGroupName}=useInput('')
    const handleAddMember= () => {
        if(groupname!=='')
        {
            navigate('/member', {state: {groupname: groupname, adminid: adminid.adminid}})
        }
        else
        {
            toast.error("You must put new group's name")
        }
    }
    return(
        <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
            <BoardBox>
                <Box sx={{width: '80%'}}>
                    <TextField className={classes.guestText} inputProps={{className:classes.addtext}} {...bindGroupName} placeholder='Add Board Name'/>
                    <Button className={classes.addmember} onClick={handleAddMember}>Add Member's</Button>
                    <Button className={classes.publish}>Publish Board</Button>
                </Box>
            </BoardBox>
        </Grid>
    );
}