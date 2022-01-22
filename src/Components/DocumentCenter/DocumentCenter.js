import React, {useState, useRef, useEffect} from "react"
import {Tab, Tabs, Box, Button} from '@mui/material'
import TabPanel from './TabPanel'
import {useStyle} from './Style'
import {styled} from '@mui/styles'
import {DocumentTab} from './DocumentTab'
import { getUserInformation } from '../../redux/actions/profile'
import { getGroupInformation } from '../../redux/actions/groupinfo'
import { useDispatch, useSelector } from 'react-redux'
import { uploadFile } from "../../redux/actions/srcinfo"
import { toast } from 'react-toastify'

const DocButton = styled(Button)({
    background: '#3E3EFFE5 !important',
    fontSize: '16px !important',
    color: 'white !important',
    textTransform: 'none !important',
    borderRadius: '5px !important',
    margin: '0px 0px 10px 10px !important',
    boxShadow: '5px 3px 5px 3px #b5b5b5',
})

const CustomTab = styled(Tab)({
    background: 'white !important', 
    boxShadow: '2px 2px 8px 2px #b5b5b5', 
    width: '200px',
})

export const DocumentCenter = () => {
    const [value, setValue] = useState(0);
    const [create, setCreate] = useState(false)
    const fileInputRef = useRef()
    const classes=useStyle()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleCreate = () => {
        setCreate(true)
    }

    const dispatch=useDispatch()
    useEffect(() => {
        async function fetchdata(){
            try{
                dispatch(getUserInformation())
                dispatch(getGroupInformation())
            }catch(err){
                toast.error(err.message)
            }
        }
        fetchdata()
    }, [dispatch])
    const userdata=useSelector(state => state.profiledata)
    const groups = useSelector(state => state.groupdata)
    const {profiledata} = userdata
    const { groupdata } = groups

    const handleFile = async(event) => {
        const file = event.target.files[0];
        const reader = new FileReader()
        reader.onload = () => dispatch(uploadFile(file))
        reader.readAsDataURL(file)
    }

    function a11yProps(index) {
        return {
            id: `horizontal-tab-${index}`,
            'aria-controls': `horizontal-tabpanel-${index}`,
        }
    }
    return(
        <div>
            <Box className={classes.fullbetweenbox}>
                <Tabs
                    orientation="horizontal"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        style:{
                            display: 'none',
                        },
                    }}
                    sx={{ borderRight: 1, borderColor: 'divider', minWidth: '230px !important' }}>
                    <CustomTab sx={{zIndex: 2}} label="Documents" {...a11yProps(0)} />
                    <CustomTab sx={{zIndex: 1}} label="Governance" {...a11yProps(1)} />
                    <CustomTab label="Meetings" {...a11yProps(2)} />
                </Tabs>
                {value===0?
                    (<Box sx={{display:'flex'}}>
                        <DocButton sx={{opacity: '0.5'}} onClick={(event) => {event.preventDefault(); fileInputRef.current.click();}}>Upload Document</DocButton>
                        <input type="file" style={{ display: "none" }} ref={fileInputRef} onChange={handleFile} />
                        <DocButton onClick={handleCreate}>Create New Folder</DocButton>
                    </Box>):(<Box></Box>)
                }
            </Box>
                <TabPanel value={value} index={0}>
                    <DocumentTab create={create} setCreate={setCreate} groupdata={groupdata} profiledata={profiledata}></DocumentTab>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
        </div>
    );
}