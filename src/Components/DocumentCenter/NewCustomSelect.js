import React, {useState} from 'react'
import { Button, Box } from '@mui/material'
import {useStyle} from './Style'
import { toast } from 'react-toastify'
import { API, Auth } from "aws-amplify"
import { createFolder} from '../../graphql/mutations'

export const NewCustomSelect = ({setCreate}) => {
    const [deleteFlag, setDeleteFlag] = useState(false)
    const [foldername, setFolderName] = useState('New Folder')
    const classes=useStyle()

    const handleCreate = async () => {
        try{
            const user = await Auth.currentAuthenticatedUser()
            const userAttributes = await Auth.userAttributes(user)
            await API.graphql({
                query: createFolder,
                variables: {
                    input: {
                        name: foldername,
                        ownerid: userAttributes[1].Value,
                        ownername: userAttributes[6].Value+userAttributes[4].Value,
                        comments: 'Standard Comment',
                        description: 'Standard Description',
                        organization: userAttributes[0].Value,
                    },
                },
            })
            toast.success("New Folder Created Successfully")
            window.location.reload()
        }catch(err){
            toast.error(err.message)
        }
        setCreate(false)
    }

    const handleChange = (event) => {
        setFolderName(event.target.value)
    }

    const handleDelete = () => {
        setDeleteFlag(true)
        setCreate(false)
    }
    return(
        <Box className={deleteFlag?classes.deleteSelect:classes.selectClass}>
            <Box className={classes.customselectheader}>
                <Box sx={{display:'flex', alignItems: 'center'}}>
                    <img src='../Images/foldericon.png' alt=""/>
                    <input type="text" className={classes.foldername} value={foldername} onChange={handleChange} autoFocus></input>
                </Box>
                <Box sx={{display:'flex', alignItems: 'center'}}>
                    <Button onClick={handleCreate}>Create</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </Box>
            </Box>
        </Box>
    )
}