import React, {useState} from 'react'
import {Avatar, Grid, Typography, Box, IconButton, Modal, Fade, Backdrop} from '@mui/material'
import {styled} from '@mui/styles'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useStyle } from './Style';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserProfile } from '../Layout/UserProfile'
import { API, graphqlOperation } from "aws-amplify"
import { usergroupsByUserID } from "../../graphql/queries"
import { deleteUserGroup } from "../../graphql/mutations"

const BoardBox = styled(Box)({
    background: '#dcdcff',
    padding: '10px',
    height: '240px',
})

const CenterBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
})

const BoardAvatar = styled(Avatar)({
    width: '30px !important',
    height: '30px !important',
})

export const BoardCard = ({item, adminid, permission}) => {
    const classes=useStyle()
    const navigate=useNavigate()
    const [avatarsrc, setAvatarSrc] = useState()
    const [uid, setUid] = useState()
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false); 
    const handleAddMember= () => {
        navigate('/member', {state: {groupname: item.groupname, adminid: adminid}})
    }
    const startDrag = (id, groupname) => (event) => {
        event.dataTransfer.setData("drag-id", id)
        event.dataTransfer.setData("drag-groupname", groupname)
    }
    const dragOver = (ev) => {
        ev.preventDefault();
    }
    const drop = async (ev) => {
        const droppedId = ev.dataTransfer.getData("drag-id")
        const droppedGroup = ev.dataTransfer.getData("drag-groupname")
        if (droppedId) {
            try{
                const userData = await API.graphql(graphqlOperation(usergroupsByUserID, {userid: droppedId}))
                const totalmemberlist=userData.data.usergroupsByUserID.items
                for(let member of totalmemberlist)
                {
                    if(member.groupname===droppedGroup)
                    {
                        await API.graphql(graphqlOperation(deleteUserGroup, {input: {id: member.id}}));
                    }
                }
                toast.success('User deleted from group successfully')
                window.location.reload()
            }
            catch(error)
            {
                toast.error(error.message)
            }
        }
    }

    const handleProfile = (user) => () =>{
        setUid(user.id)
        setAvatarSrc(user.avatar)
        setOpen(true)
    }
    return(
        <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
            <BoardBox>
                <Typography className={classes.boardTitle}>{item.groupname}</Typography>
                <Typography className={classes.boardAdmin}>Admin</Typography>
                <Box className={classes.alignCenterBox}>
                    <IconButton className={classes.addCircleIcon} onClick={handleProfile(item.admin)}>
                        <BoardAvatar src={item.admin.avatar}></BoardAvatar>
                    </IconButton>
                    <Typography className={classes.adminName}>{item.admin.firstname}</Typography>
                </Box>
                <Typography className={classes.boardMember}>Member's</Typography>
                <Grid container columnSpacing={1} rowSpacing={1}>
                    {item.members.map((initem, index)=>
                        <Grid item xs={2} key={index} className={classes.columnBox}>
                            <Box className={classes.centerBox}>
                                <IconButton className={classes.addCircleIcon} onClick={handleProfile(initem)}>
                                    <BoardAvatar draggable onDragStart={startDrag(initem.id, item.groupname)} src={initem.avatar}></BoardAvatar>
                                </IconButton>
                            </Box>
                            <Typography className={classes.memberName}>{initem.firstname}</Typography>
                        </Grid>
                    )}
                    <Grid item xs={2} className={classes.alignStartGrid}>
                        {permission?
                        (<IconButton className={classes.addCircleIcon} onClick={handleAddMember}>
                            <AddCircleIcon sx={{height: '30px', width: '30px'}}/>
                        </IconButton>):(<div></div>)
                        }
                    </Grid>
                </Grid>
                {permission?
                (<Box className={classes.boardBottomBox}>
                    <CenterBox>
                        <IconButton onDragOver={dragOver} onDrop={drop}>
                            <AddCircleIcon sx={{color: '#5b5b69'}}/>
                        </IconButton>
                    </CenterBox>
                    <CenterBox>
                        <Typography className={classes.dragDrop}>Drag and Drop To Remove</Typography>
                    </CenterBox>
                </Box>):(<div></div>)
                }
            </BoardBox>
            <Modal aria-labelledby = "transition-modal-title" aria-describedby = "transition-modal-description"
                open = { open } onClose = { handleClose } closeAfterTransition BackdropComponent = { Backdrop }
                BackdropProps = {{ timeout: 500 }}>
                < Fade in = { open } >
                    <Box className = { classes.profileBox }>
                        <UserProfile onClose = { handleClose } avatarsrc = {avatarsrc} setAvatarSrc = {setAvatarSrc} uid={uid} userflag={false}/> 
                    </Box> 
                </Fade> 
            </Modal> 
        </Grid>
    );
}