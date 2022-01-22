import React, {useState} from "react"
import {Tab, Tabs, Box, Button} from '@mui/material'
import TabPanel from './TabPanel'
import {useStyle} from './Style'
import {styled} from '@mui/styles'

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

export const TaskMain = () => {
    const [value, setValue] = useState(0);
    const classes=useStyle()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
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
                    <CustomTab sx={{zIndex: 2}} label="All Tasks" {...a11yProps(0)} />
                    <CustomTab sx={{zIndex: 1}} label="Incomplete Tasks" {...a11yProps(1)} />
                    <CustomTab label="Tabs Created By Me" {...a11yProps(2)} />
                </Tabs>
                {value===0?
                    (<Box sx={{display:'flex'}}>
                        <DocButton>Create New Task</DocButton>
                    </Box>):(<Box></Box>)
                }
            </Box>
            <TabPanel value={value} index={0}>
                Item One
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