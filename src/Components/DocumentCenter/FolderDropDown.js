import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import {Box, Typography} from '@mui/material'
import { useStyle } from './Style'
import { CreateFile } from './CreateFile'
import { DocumentFile } from './DocumentFile'

export const FolderDropDown = ({list, folderID, groupdata, profiledata}) => {
    const classes=useStyle()
    const [create, setCreate] = useState(false)
    const handleCreateFile = () => {
        setCreate(true)
    }
    return(
        <Box className={classes.customselectmain}>
            <Box className={classes.newfilebtn} onClick={handleCreateFile}>
                <AddIcon sx={{ fontSize: '24px'}}/>
                <Typography sx={{ fontSize: '16px', paddingLeft: '20px'}}>Create New File</Typography>
            </Box>
            {create && (<CreateFile setCreate={setCreate} folderID={folderID}/>)}
            {list.map((item, index) => (
                <DocumentFile item={item} key={index} groupdata={groupdata} profiledata={profiledata}/>
            ))}
        </Box>
    )
}