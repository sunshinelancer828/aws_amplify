import React, {useEffect, useState} from 'react'
import { Box, Backdrop, Modal, Fade, Avatar, IconButton, Drawer } from '@mui/material'
import { styled } from "@mui/styles"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NotificationsIcon from '@mui/icons-material/Notifications'
import LogoutIcon from '@mui/icons-material/Logout';
import { Profile } from './Profile'
import { useStyle } from './Style'
import { Auth } from "aws-amplify";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getUserInformation } from '../../redux/actions/profile'
import { useDispatch, useSelector } from 'react-redux'

const RightSideBar = styled(Box)({
    display: 'flex',
    right: '5px',
    flexDirection: 'column',
    background: '#7e7eff',
    height: '100%',
    width: '50px',
    justifyContent: 'space-between',
});

export const RightControlBar = ({draweropen, setDrawerOpen}) => {
    const navigate = useNavigate()
    const classes = useStyle()
    const dispatch=useDispatch()
    const data=useSelector(state => state.profiledata)
    const {profiledata, loading} = data
    const [avatarsrc, setAvatarSrc] = useState()
    const toggleDrawer = (draweropen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setDrawerOpen(!draweropen);
    };
    
    useEffect(() => {
        async function fetchdata(){
            try{
                dispatch(getUserInformation())
            }catch(err){
                toast.error(err.message)
            }
        }
        fetchdata()
    }, [dispatch])
    useEffect(() => {
        setAvatarSrc(profiledata?.avatar)
    }, [loading, profiledata])
    const handleLogout = async () => {
        try {
          await Auth.signOut();
          toast.success("Successfully logged out");
          navigate("/login");
        } catch (error) {
          toast.error(error.message);
        }
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const drawer= (
        <RightSideBar onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <Box sx = {{ display: 'flex', flexDirection: 'column' }} >
                <IconButton onClick = { handleOpen } >
                    <Avatar src = {avatarsrc}/>
                </IconButton>
                <MailOutlineIcon className = { classes.iconstyle }/> 
                <NotificationsIcon className = { classes.iconstyle }/> 
                <IconButton onClick={handleLogout}>
                    <LogoutIcon className={classes.iconstyle} />
                </IconButton>
            </Box>
            <HelpOutlineIcon className = { classes.iconstyle } sx={{marginBottom: '30px'}}/> 
            <Modal aria-labelledby = "transition-modal-title" aria-describedby = "transition-modal-description"
                open = { open } onClose = { handleClose } closeAfterTransition BackdropComponent = { Backdrop }
                BackdropProps = {{ timeout: 500 }}>
                < Fade in = { open } >
                    <Box className = { classes.profileBox }>
                        <Profile onClose = { handleClose } avatarsrc = {avatarsrc} setAvatarSrc = {setAvatarSrc} userflag={true}/> 
                    </Box> 
                </Fade> 
            </Modal> 
        </RightSideBar>
    );
    return ( 
        <Box>
            <Drawer anchor='right' variant="permanent" ModalProps={{ keepMounted: true }}
                sx={{ display: { xs: 'none', sm: 'block' } }}>
                {drawer}
            </Drawer>
            <Drawer anchor='right' variant="temporary" open={draweropen} onClose={toggleDrawer(draweropen)}
                sx={{ display: { xs: 'block', sm: 'none' } }}>
                {drawer}
            </Drawer>
        </Box>
    );
}