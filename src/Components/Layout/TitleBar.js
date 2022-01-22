import React, {useState} from "react"
import {Box, Typography, IconButton} from '@mui/material'
import {styled} from "@mui/styles"
import { useStyle } from "./Style";
import MenuIcon from '@mui/icons-material/Menu'
import { LeftControlBar } from "./LeftControlBar";
import { RightControlBar } from "./RightControlBar";

const TitleAppBar = styled(Box)({
    paddingRight: '20px', 
    display: 'flex', 
    justifyContent: 'space-between',
    width: '100%',
});

export const TitleBar = ({title, index}) => {
    const classes=useStyle()
    const [leftopen, setLeftOpen] = useState(false)
    const handleLeftOpen = () => {
        setLeftOpen(!leftopen)
    }
    const [rightopen, setRightOpen] = useState(false)
    const handleRightOpen = () => {
        setRightOpen(!rightopen)
    }
    return(
        <TitleAppBar sx={{ paddingLeft: { sm: '80px', xs: '0px'}, paddingRight: { sm: '70px', xs: '0px'} }}>
            <Box sx={{display: 'flex'}}>
                <IconButton sx={{display:{sm: 'none', xs: 'flex'}}} onClick={handleLeftOpen}>
                    <MenuIcon/>
                </IconButton>
                <LeftControlBar index={index} open={leftopen} setOpen={setLeftOpen}/>
                <Typography className={classes.title} sx={{fontSize: {lg: '30px', xs: '24px'}}}>{title}</Typography>
            </Box>
            <Box sx={{display: 'flex'}}>
                <IconButton sx={{display:{sm: 'none', xs: 'flex'}}} onClick={handleRightOpen}>
                    <MenuIcon/>
                </IconButton>
                <RightControlBar draweropen={rightopen} setDrawerOpen={setRightOpen}/>
                <Typography sx={{color:'green'}}></Typography>
            </Box>
        </TitleAppBar>
    );
}