import React,{ useState } from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import {Box, Button} from '@mui/material'
import { useStyle } from './Style'
import { API, Auth } from "aws-amplify"
import { createFile} from '../../graphql/mutations'
import { toast } from 'react-toastify'

export const CreateFile = ({setCreate, folderID}) => {
    const classes=useStyle()
    const [deleteFlag, setDeleteFlag] = useState(false)
    const [filename, setFileName] = useState('New File')
    const handleCreate = async () => {
        try{
            const user = await Auth.currentAuthenticatedUser()
            const userAttributes = await Auth.userAttributes(user)
            await API.graphql({
                query: createFile,
                variables: {
                    input: {
                        name: filename,
                        ownerid: userAttributes[1].Value,
                        ownername: userAttributes[6].Value+userAttributes[4].Value,
                        folderID: folderID,
                        comments: 'Standard Comment',
                        description: 'Standard Description',
                        src: '1.pdf'
                    },
                },
            })
            toast.success("New File Created Successfully")
            window.location.reload()
        }catch(err){
            toast.error(err.message)
        }
        setCreate(false)
    }

    const handleChange = (event) => {
        setFileName(event.target.value)
    }

    const handleDelete = () => {
        setDeleteFlag(true)
        setCreate(false)
    }
    return(
        <Box className={deleteFlag?classes.deleteSelect:classes.newfile}>
            <Box sx={{display:'flex', alignItems: 'center'}}>
                <InsertDriveFileIcon sx={{ width: '35px', height: '40px'}}/>
                <input type="text" className={classes.foldername} value={filename} onChange={handleChange} autoFocus></input>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Button onClick={handleCreate}>Create</Button>
                <Button onClick={handleDelete}>Delete</Button>
            </Box>
        </Box>
    );
}