import React, { useEffect, useState, useRef } from 'react'
import {Box, Button, Typography, Grid, TextField, IconButton, Avatar} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import {styled} from '@mui/styles'
import { useStyle } from './Style'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { toast } from 'react-toastify'
import { getMemberInformation, updateUserInformation } from '../../redux/actions/profile'
import { useDispatch, useSelector } from 'react-redux'
import {Loader} from '../Loader'
import {Storage} from 'aws-amplify'

const ProfileLabel = styled(Typography)({
    color: 'white',
    paddingLeft: '10px',
    fontSize: '20px !important',
    margin: '5px 0px !important',
})

const ProfileTextField = styled(TextField)({
    background: 'white',
})

export const UserProfile = ({onClose, avatarsrc, setAvatarSrc, uid, userflag}) => {
    const classes=useStyle()
    const dispatch=useDispatch()
    const fileInputRef = useRef()
    const data=useSelector(state => state.profiledata)
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [role, setRole] = useState('')
    const [bio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const {profiledata, loading} = data
    useEffect(() => {
        async function fetchdata(){
            try{
                dispatch(getMemberInformation(uid))
            }catch(err){
                toast.error(err.message)
            }
        }
        fetchdata()
    }, [dispatch])
    useEffect(() => {
        setFirstName(profiledata?.firstname)
        setLastName(profiledata?.lastname)
        setAddress(profiledata?.address)
        setEmail(profiledata?.email)
        setPhoneNumber(profiledata?.phonenumber)
        setRole(profiledata?.role)
        setBio(profiledata?.bio)
    }, [loading, profiledata])
    const saveChanges = () => {
        try{
            dispatch(updateUserInformation(firstname, lastname, phonenumber, address, role, bio, avatarsrc))
        }catch(err){
            toast.error(err.message)
        }
    }
    const handleFile = async(event) => {
        const file = event.target.files[0];
        if (file && file.type.substr(0, 5) === "image") {
            let filename='image'+Date.now().toString()+'.png'
            await Storage.put(`images/${filename}`, file, {
                contentType: "image/*",
            })
            const reader = new FileReader();
            let srcname=`${process.env.REACT_APP_S3BUCKET}public/images/${filename}`
            reader.onload = () => setAvatarSrc(srcname)
            reader.readAsDataURL(file)
        } else {
            setAvatarSrc(null);
        }
    }
    const firstnamechange = (event) => {
        setFirstName(event.target.value)
    }

    const lastnamechange = (event) => {
        setLastName(event.target.value)
    }

    const addresschange = (event) => {
        setAddress(event.target.value)
    }

    const phonenumberchange = (event) => {
        setPhoneNumber(event.target.value)
    }

    const rolechange = (event) => {
        setRole(event.target.value)
    }

    const biochange = (event) => {
        setBio(event.target.value)
    }

    return(
        <>
            {loading ? (<Loader/>) : (
                <Box sx={{padding: '10px', height: '100%', overflowY: 'auto'}}>
                    <Box className={classes.rowReverse}>
                        <CancelIcon className={classes.profileCancelIcon} onClick={onClose}/>
                    </Box>
                    <Box className={classes.profileTopbar}>
                        <Box className={classes.profileMainbar}>
                            <Box className={classes.rowReverse}>
                                {userflag===true?(<Button className={classes.saveButton} onClick={saveChanges}>Save</Button>):
                                (<div></div>)}
                            </Box>
                            <Box className={classes.profileInputBar}> 
                                <Box className={classes.avatarButton} 
                                    sx={{
                                        width: {sm: '250px', xs: '200px'}, height: {sm: '250px', xs: '200px'},
                                        marginTop: {sm: '-220px', xs: '-120px'}, marginLeft: { sm: '15%', xs: '5%'}
                                    }} aria-label='add'>
                                    <Avatar src={avatarsrc} sx={{width: '100%', height: '100%'}}/>
                                    {userflag===true?(<IconButton className={classes.addIcon}
                                        sx={{marginLeft: {sm: '174px', xs: '124px', marginTop: '-80px'}}}
                                        onClick={(event) => {event.preventDefault(); fileInputRef.current.click();}}
                                    >
                                        <AddCircleIcon sx={{width: '100%', height: '100%', color: 'white'}}/>
                                    </IconButton>):(<div></div>)}
                                    <input type="file" style={{ display: "none" }} ref={fileInputRef} accept="image/*"
                                     onChange={handleFile} />
                                </Box>
                                <Box className={classes.centerBox}> 
                                    <Grid container className={classes.centerGrid}>
                                        <Grid item md={6} sm={12} xs={12} className={classes.leftinput} sx={{paddingRight: {md: '50px', sm:'0px'}}}>
                                            <ProfileLabel>First Name</ProfileLabel>
                                            {userflag===true?(<ProfileTextField value={firstname} onChange={firstnamechange}></ProfileTextField>):
                                            (<ProfileTextField disabled value={firstname} onChange={firstnamechange}></ProfileTextField>)}
                                            <ProfileLabel>Last Name</ProfileLabel>
                                            {userflag===true?(<ProfileTextField value={lastname} onChange={lastnamechange}></ProfileTextField>):
                                            (<ProfileTextField disabled value={lastname} onChange={lastnamechange}></ProfileTextField>)}
                                            <ProfileLabel>E-mail</ProfileLabel>
                                            {userflag===true?(<ProfileTextField value={email}></ProfileTextField>):
                                            (<ProfileTextField disabled value={email}></ProfileTextField>)}
                                            <ProfileLabel>Phone No</ProfileLabel>
                                            {userflag===true?(<ProfileTextField value={phonenumber} onChange={phonenumberchange}></ProfileTextField>):
                                            (<ProfileTextField disabled value={phonenumber} onChange={phonenumberchange}></ProfileTextField>)}
                                            <ProfileLabel>Address</ProfileLabel>
                                            {userflag===true?(<ProfileTextField value={address} onChange={addresschange} ></ProfileTextField>):
                                            (<ProfileTextField disabled value={address} onChange={addresschange} ></ProfileTextField>)}
                                            <ProfileLabel>Role</ProfileLabel>
                                            {userflag===true?(<ProfileTextField value={role} onChange={rolechange} ></ProfileTextField>):
                                            (<ProfileTextField disabled value={role} onChange={rolechange} ></ProfileTextField>)}
                                        </Grid>
                                        <Grid item md={6} sm={12} xs={12}>
                                            <ProfileLabel>Bio</ProfileLabel>
                                            {userflag===true?(<TextField sx={{background: 'white', width: '100%'}} value={bio} onChange={biochange} multiline rows={22} >
                                            </TextField>):(<TextField sx={{background: 'white', width: '100%'}} disabled value={bio} onChange={biochange} multiline rows={22} >
                                            </TextField>)}
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
}