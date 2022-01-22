import React from 'react'
import { toast } from 'react-toastify'
import { styled } from '@mui/styles'
import { Typography, TextField, Button, MenuItem } from '@mui/material'
import { API } from 'aws-amplify'
import { createFolderRestriction, createFileRestriction } from '../../graphql/mutations'
import { useStyle } from './Style'
import { useInput } from '../../utils/forms'

const ProfileLabel = styled(Typography)({
    color: 'white',
    paddingLeft: '10px',
    fontSize: '20px !important',
    margin: '10px 0px !important',
})

const ProfileTextField = styled(TextField)({
    background: 'white',
})

export const RestrictionModal = ({groupdata, onClose, folderID, folder}) => {
    const classes = useStyle()
    const { value: groupname, bind: bindGroupName } = useInput('')
    const { value: role, bind: bindRole } = useInput("User")

    const handleRestriction = async (e) => {
        e.preventDefault()
        if(folder)
        {
            try{
                await API.graphql({
                    query: createFolderRestriction,
                    variables:{
                        input: {
                            groupname: groupname,
                            role: role,
                            folderID: folderID,
                        },
                    },
                })
                toast.success('Permission created successfully!')
                onClose()
            }
            catch(error)
            {
                console.log(error.message)
                toast.error(error.message)
            }
        }
        else{
            try{
                await API.graphql({
                    query: createFileRestriction,
                    variables:{
                        input: {
                            groupname: groupname,
                            role: role,
                            fileID: folderID,
                        },
                    },
                })
                toast.success('Permission created successfully!')
                onClose()
            }
            catch(error)
            {
                console.log(error.message)
                toast.error(error.message)
            }
        }
    }

    return(
        <form onSubmit={handleRestriction} className={classes.permissionmodal}>
            <ProfileLabel>GroupName</ProfileLabel>
            <ProfileTextField select {...bindGroupName}>
                {groupdata.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
            </ProfileTextField>
            <ProfileLabel>Role</ProfileLabel>
            <ProfileTextField select {...bindRole}>
                <MenuItem value="User">User</MenuItem>
            </ProfileTextField>
            <Button type="submit">Submit</Button>                  
        </form>
    );
}