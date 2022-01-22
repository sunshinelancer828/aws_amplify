import React from 'react'
import { toast } from 'react-toastify'
import { styled } from '@mui/styles'
import { Typography, TextField, Button} from '@mui/material'
import { API, graphqlOperation } from 'aws-amplify'
import { updateFolder, updateFile } from '../../graphql/mutations'
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

export const UpdateModal = ({ onClose, item, folder }) => {
    const classes = useStyle()
    const { value: ownername, bind: bindOwnerName } = useInput(item.ownername)
    const { value: comments, bind: bindComments } = useInput(item.comments)
    const { value: description, bind: bindDescription } = useInput(item.description)

    const handleUpdate = async(e) => {
        e.preventDefault()
        if(folder)
        {
            try{
                const updateDetails = {
                    id: item.id,
                    ownername: ownername,
                    comments : comments,
                    description: description,
                };
                await API.graphql(graphqlOperation(updateFolder, {input: updateDetails}))
                toast.success('Folder information updated successfully!')
                window.location.reload()
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
                const updateDetails = {
                    id: item.id,
                    ownername: ownername,
                    comments : comments,
                    description: description,
                };
                await API.graphql(graphqlOperation(updateFile, {input: updateDetails}))
                toast.success('File information updated successfully!')
                window.location.reload()
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
        <form onSubmit={handleUpdate} className={classes.permissionmodal}>
            <ProfileLabel>Owner Name</ProfileLabel>
            <ProfileTextField type="text" {...bindOwnerName}/>
            <ProfileLabel>Comments</ProfileLabel>
            <ProfileTextField type="text" {...bindComments}/>
            <ProfileLabel>Description</ProfileLabel>
            <ProfileTextField type="text" {...bindDescription}/>
            <Button type="submit">Update</Button>                  
        </form>
    );
}