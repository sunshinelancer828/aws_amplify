import React from 'react'
import {Box, Drawer} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ReportIcon from '@mui/icons-material/Report';
import PeopleIcon from '@mui/icons-material/People';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import {styled} from "@mui/styles"
import {Link} from "react-router-dom"
import {useStyle} from './Style'

const LeftSideBar = styled(Box)({
    display: 'flex',
    flexDirection: 'column', 
    height: '100%', 
    width: '56px',
    background: 'white',
    justifyContent: 'space-between',
});

export const LeftControlBar= ({index, open, setOpen}) =>{
    const classes=useStyle()
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setOpen(!open);
    };
    const drawer = (
        <LeftSideBar onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <img src="../Images/tablogo.png" alt=""/>
                <Link className={index===1?classes.activelink:classes.leftlink} to="/">
                    <DashboardIcon className={classes.dashiconstyle}/>
                </Link>
                <Link className={index===2?classes.activelink:classes.leftlink} to="/meeting">
                    <GroupsIcon className={classes.dashiconstyle}/>
                </Link>
                <Link className={index===3?classes.activelink:classes.leftlink} to="/tasks">
                    <FormatListNumberedIcon className={classes.dashiconstyle}/>
                </Link>
                <Link className={index===4?classes.activelink:classes.leftlink} to="/documentcenter">
                    <InsertDriveFileIcon className={classes.dashiconstyle}/>
                </Link>
                <Link className={index===5?classes.activelink:classes.leftlink} to="/faq">
                    <InsertDriveFileIcon className={classes.dashiconstyle}/>
                </Link>
                <Link className={index===6?classes.activelink:classes.leftlink} to="/charts">
                    <AssessmentIcon className={classes.dashiconstyle}/>
                </Link>
                <Link className={index===7?classes.activelink:classes.leftlink} to="/report">
                    <ReportIcon className={classes.dashiconstyle}/>
                </Link>
                <Link className={index===8?classes.activelink:classes.leftlink} to="/team">
                    <PeopleIcon className={classes.dashiconstyle}/>
                </Link>
                <Link className={index===9?classes.activelink:classes.leftlink} to="/404">
                    <InsertDriveFileIcon className={classes.dashiconstyle}/>
                </Link>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', paddingBottom: '26px'}}>
                <Link className={index===10?classes.activelink:classes.leftlink} to="/settings">
                    <SettingsOutlinedIcon className={classes.dashiconstyle}/>
                </Link>
            </Box>
        </LeftSideBar>
    );
    
    return(
        <Box>
            <Drawer anchor='left' variant="permanent" ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                }}>
                {drawer}
            </Drawer>
            <Drawer anchor='left' variant="temporary" open={open} onClose={toggleDrawer(open)}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                }}>
                {drawer}
            </Drawer>
        </Box>
    );
}