import React from 'react'
import {Box, Typography,Avatar} from '@mui/material'
import {styled} from '@mui/styles'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {useStyle} from './Style'
import {API, graphqlOperation } from "aws-amplify"
import { createUserGroup } from "../../graphql/mutations"
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const MemberBox = styled(Box)({
    background: '#ddddff',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
})

export const MemberCard = ({item, groupname, adminid}) => {
    const classes=useStyle()
    const navigate=useNavigate()
    const handleAddMember = async (event) => {
        if((event.detail === 2)&&(groupname!=='')&&(adminid!=='')&&(item.isadmin==='1')) {
            const groupDetails = {
                userid: item.id,
                groupname: groupname,
                organization: item.organization,
                groupadminid: adminid,
            }
            try{
                await API.graphql(graphqlOperation(createUserGroup, {input: groupDetails}))
                toast.success('User added to group successfully')
                navigate('/team')
            }
            catch(error)
            {
                toast.error(error.message)
            }
        }
    }
    return(
        <MemberBox onClick={handleAddMember}>
            <Box className={classes.alignCenterBox}>
                <Avatar className={classes.memberAvatar} src={item.avatar}/>
                <Box sx={{paddingLeft:'12px'}}>
                    <Typography className={classes.usernametxt}>{item.name}</Typography>
                    <Typography className={classes.jobtxt}>{item.role}</Typography>
                    <Typography className={classes.italictxt}>{item.email}</Typography>
                    <Typography className={classes.italictxt}>{item.isadmin==='1'?'Member':'Admin'} Since {item.createdAt}</Typography>
                </Box>
            </Box>
            <Box sx={{margin: '20px'}}>
                <Box className={classes.alignCenterBox}>
                    <img className={classes.image} src='../Images/circle.png' alt=""/>
                    <Typography sx={{color: '#477b3c', fontSize: '16px'}}>Active Now</Typography>
                </Box>
                <Box className={classes.centerBox}>
                    <InsertDriveFileIcon sx={{width: '65px', height: '65px'}}/>
                </Box>
            </Box>
        </MemberBox>
    );
}