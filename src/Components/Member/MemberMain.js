import React, { useEffect, useState } from 'react'
import {Box, Button, Backdrop, Modal, Fade} from '@mui/material'
import {styled} from '@mui/styles'
import { Link } from 'react-router-dom'
import { MemberCard } from './MemberCard'
import { useStyle } from './Style'
import { EmailModal } from './EmailModal'
import { Auth } from 'aws-amplify'
import { listMemberInformation } from '../../redux/actions/member'
import { getUserInformation } from '../../redux/actions/profile'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from 'react-toastify'
import {Loader} from '../Loader'

const TabButton = styled(Button)({
    width: '160px',
    height: '35px',
    boxShadow: '3px 3px 8px 2px #b5b5c4',
    color:'white !important',
    textTransform: 'none !important',
    margin: '6px !important',
});

export const MemberMain = ({groupname}) => {
    const classes=useStyle()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () =>
    { 
        if(profiledata.isadmin!=='0')
        {
            toast.error('Only Admins can send Email')
        }
        else{
            setOpen(true);
        }
    }
    const handleClose = () => setOpen(false);
    const [email, setEmail] = useState('')
    const [uid, setUid] = useState('')
    const dispatch=useDispatch()
    useEffect(() => {
        async function fetchdata(){
            try{
                dispatch(listMemberInformation())
                dispatch(getUserInformation())
            }catch(err){
                toast.error(err.message)
            }
        }
        fetchdata()
    }, [dispatch])
    useEffect(() => {
        async function fetchdata(){
            const user = await Auth.currentAuthenticatedUser()
            const userAttributes = await Auth.userAttributes(user)
            console.log(userAttributes)
            setEmail(userAttributes[7].Value)
            setUid(userAttributes[1].Value)
        }
        fetchdata()
    }, [])
    const listdata=useSelector(state => state.memberlist)
    const userdata=useSelector(state => state.profiledata)
    const {profiledata} = userdata
    const {memberlist, loading} = listdata
    return(
        <Box sx={{paddingBottom: '10px'}}>
            <Box>
                <Link to="/team" className={classes.navigate}>
                    <TabButton sx={{background: '#a50909'}}>Boards</TabButton>
                </Link>
                <TabButton sx={{background: '#3f7330'}}>Members List</TabButton>
            </Box>
            <Box className={classes.conflictBox}>
                <Button className={classes.conflict} onClick= {handleOpen}>Add New</Button>
            </Box>
            <Modal aria-labelledby = "transition-modal-title" aria-describedby = "transition-modal-description"
                open = { open } onClose = { handleClose } closeAfterTransition BackdropComponent = { Backdrop }
                BackdropProps = {{ timeout: 500 }}>
                < Fade in = { open } >
                    <Box className = { classes.newMemberBox }>
                        <EmailModal fromemail={email} fromid={uid} onClose = {handleClose} organization={profiledata?.organization}/>
                    </Box> 
                </Fade> 
            </Modal>
            <Box className={classes.memberlistbox}>
                <div className={classes.arrowUp}></div>
                {loading ? (<Loader/>) : memberlist?.length > 0 ? (
                    memberlist?.map((item, index) => <MemberCard item={item} key={index} groupname={groupname} adminid={profiledata?.id}/>)):("No Members")}
            </Box>
        </Box>
    );
}