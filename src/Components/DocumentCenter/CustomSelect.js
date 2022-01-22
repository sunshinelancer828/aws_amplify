import React, {useState} from 'react'
import FontAwesome from 'react-fontawesome'
import { Button, Box, Typography, Menu, MenuItem, IconButton, Modal, Backdrop, Fade } from '@mui/material'
import {useStyle} from './Style'
import { toast } from 'react-toastify'
import { API, graphqlOperation } from "aws-amplify"
import { deleteFolder, updateFolder} from '../../graphql/mutations'
import MenuIcon from '@mui/icons-material/Menu'
import { RestrictionModal } from './RestrictionModal'
import { UpdateModal } from './UpdateModal'
import { FolderDropDown } from './FolderDropDown';

export const CustomSelect = ({item, profiledata, groupdata}) => {
    const [isListOpen, setIsListOpen]=useState(false)
    const [foldername, setFolderName] = useState(item.name)
    const [editable, setEditable] = useState(false)
    const [deleteFlag, setDeleteFlag] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const classes=useStyle()
    const handleClick = () => {
        setIsListOpen(value=>!value)
    }

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleEdit1 = (event) => {
        if(event.detail===2) setEditable(true)
    }
    
    const handleClose = () => setOpen(false)
    const handleClose2 = () => setOpen2(false)

    const handleEdit2 = async (event) => {
        if(event.key==='Enter') 
        {
            if (window.confirm(`Are you sure to edit this folder?`)){
                try{
                    await API.graphql(graphqlOperation(updateFolder, {input: {id: item.id, name: foldername}}))
                    toast.success("Folder Edited Succesfully")
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
        setFolderName(event.target.value)
    }

    const handleDelete = async () => {
        if (window.confirm(`Are you sure? You can't undo this action afterwards.`)){
            try{
                await API.graphql(graphqlOperation(deleteFolder, {input: {id: item.id}}))
                setAnchorEl(null);
                toast.success("Folder Deleted Succesfully")
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

    return(
        <Box className={deleteFlag?classes.deleteSelect:classes.selectClass}>
            <Box className={classes.customselectheader}>
                <Box sx={{display:'flex', alignItems: 'center'}}>
                    <img src='../Images/foldericon.png' alt=""/>
                    { editable?
                        (<input type="text" className={classes.foldername} onKeyDown={handleEdit2} value={foldername} onChange={handleChange}></input>):
                        (<input type="text" className={classes.foldername} onClick={handleEdit1} value={foldername} readOnly></input>)}
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
                        </Menu>
                    </Box>
                    <Button onClick={handleClick}>
                        { isListOpen ? <FontAwesome name="angle-up" size="2x" />
                            : <FontAwesome name="angle-down" size="2x" />}
                    </Button>
                </Box>
                <Modal aria-labelledby = "transition-modal-title" aria-describedby = "transition-modal-description"
                    open = { open } onClose = { handleClose } closeAfterTransition BackdropComponent = { Backdrop }
                    BackdropProps = {{ timeout: 500 }}>
                    < Fade in = { open } >
                        <Box className = { classes.newMemberBox }>
                            <RestrictionModal onClose = { handleClose } groupdata={groupdata} folderID={item.id} folder={true}/>
                        </Box> 
                    </Fade> 
                </Modal> 
                <Modal aria-labelledby = "transition-modal-title" aria-describedby = "transition-modal-description"
                    open = { open2 } onClose = { handleClose2 } closeAfterTransition BackdropComponent = { Backdrop }
                    BackdropProps = {{ timeout: 500 }}>
                    < Fade in = { open2 } >
                        <Box className = { classes.newMemberBox }>
                            <UpdateModal onClose = { handleClose2 } item={item} folder={true}/>
                        </Box> 
                    </Fade> 
                </Modal> 
            </Box>
            {isListOpen && (
                <FolderDropDown folderID={item.id} list={item.files.items} groupdata={groupdata} profiledata={profiledata}/>
            )}
        </Box>
    )
}