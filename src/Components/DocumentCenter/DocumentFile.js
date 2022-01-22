import React, {useState} from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import {Box, Typography, Button, Menu, MenuItem, IconButton, Modal, Backdrop, Fade} from '@mui/material'
import { useStyle } from './Style'
import { RestrictionModal } from './RestrictionModal'
import { UpdateModal } from './UpdateModal'
import { toast } from 'react-toastify'
import { API, graphqlOperation } from "aws-amplify"
import { deleteFile, updateFile} from '../../graphql/mutations'
import MenuIcon from '@mui/icons-material/Menu'
import { useSelector, useDispatch } from 'react-redux'
import { previewFile, saveFile } from '../../redux/actions/srcinfo'

export const DocumentFile = ({item, groupdata, profiledata}) => {
    const classes = useStyle()
    const [filename, setFileName] = useState(item.name)
    const [editable, setEditable] = useState(false)
    const [deleteFlag, setDeleteFlag] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const srcdata = useSelector(state => state.pdfsrc)
    const {pdfsrc} = srcdata
    const dispatch = useDispatch()
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleClose = () => setOpen(false)
    const handleClose2 = () => setOpen2(false)

    const handleEdit1 = (event) => {
        if(event.detail===2) setEditable(true)
    }
    
    const handleEdit2 = async (event) => {
        if(event.key==='Enter') 
        {
            if (window.confirm(`Are you sure to edit this file?`)){
                try{
                    await API.graphql(graphqlOperation(updateFile, {input: {id: item.id, name: filename}}))
                    toast.success("File Edited Succesfully")
                }
                catch(error)
                {
                    toast.error(error.message)
                }
            }
            setEditable(false)
        }
    }

    const handleChange = (event) => {
        setFileName(event.target.value)
    }

    const handleDelete = async () => {
        if (window.confirm(`Are you sure? You can't undo this action afterwards.`)){
            try{
                await API.graphql(graphqlOperation(deleteFile, {input: {id: item.id}}))
                setAnchorEl(null);
                toast.success("File Deleted Succesfully")
                setDeleteFlag(true)
            }
            catch(error)
            {
                toast.error(error.message)
            }
        }
    }

    const handleOpen = () => {
        if(profiledata.isadmin!=='0') toast.error("Only Admin Can Set Permissions")
        else setOpen(true)
        setAnchorEl(null)
    }

    const handleOpen2 = () => {
        setOpen2(true)
        setAnchorEl(null)
    }

    const handleSave = async () => {
        if(pdfsrc[2])
        {
            if (window.confirm(`Are you sure to save this document?`)){
                try{
                    dispatch(saveFile(item.id, pdfsrc[2]))
                    setAnchorEl(null)
                    toast.success("File Saved Succesfully")
                }
                catch(error)
                {
                    toast.error(error.message)
                }
            }
        }
        else{
            toast.error("You can not save file from other file's preview")
        }
    }

    return(
        <Box className={deleteFlag?classes.deleteSelect:classes.customselectbtn}>
            <Box sx={{display:'flex', alignItems: 'center'}}>
                <InsertDriveFileIcon sx={{ width: '35px', height: '40px'}}/>
                { editable?
                    (<input type="text" className={classes.foldername} onKeyDown={handleEdit2} value={filename} onChange={handleChange}></input>):
                    (<input type="text" className={classes.foldername} onClick={handleEdit1} value={filename} readOnly></input>)}
            </Box>
            <Box sx={{display:'flex', alignItems: 'center'}}>
                <Box>
                    <IconButton onClick={handleOpenMenu}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu sx={{ mt: '45px' }} anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                        <MenuItem onClick={handleDelete}>
                            <Typography textAlign="center">Delete</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleOpen2}>
                            <Typography textAlign="center">Update</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleOpen}>
                            <Typography textAlign="center">Permission</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleSave} sx={{display:'flex'}}>
                            <Typography textAlign="center">Save</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
                <Button onClick={()=>dispatch(previewFile(item.id))}>Preview</Button>
            </Box>
            <Modal aria-labelledby = "transition-modal-title" aria-describedby = "transition-modal-description"
                open = { open } onClose = { handleClose } closeAfterTransition BackdropComponent = { Backdrop }
                BackdropProps = {{ timeout: 500 }}>
                < Fade in = { open } >
                    <Box className = { classes.newMemberBox }>
                        <RestrictionModal onClose = { handleClose } groupdata={groupdata} folderID={item.id} folder={false}/>
                    </Box> 
                </Fade> 
            </Modal> 
            <Modal aria-labelledby = "transition-modal-title" aria-describedby = "transition-modal-description"
                open = { open2 } onClose = { handleClose2 } closeAfterTransition BackdropComponent = { Backdrop }
                BackdropProps = {{ timeout: 500 }}>
                < Fade in = { open2 } >
                    <Box className = { classes.newMemberBox }>
                        <UpdateModal onClose = { handleClose2 } item={item} folder={false}/>
                    </Box> 
                </Fade> 
            </Modal> 
        </Box>
    )
}