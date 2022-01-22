import React from "react"
import {makeStyles} from "@mui/styles"
import {RegisterInput} from "../Components/Auth/RegisterInput"
import { HomeLeft } from "../Components/Auth/HomeLeft"
import {Grid} from '@mui/material'

const useStyle = makeStyles(() => ({
    root: {
        width: '83%',
        margin: '0 auto',
        marginTop: '100px',
        display: 'flex',
        background: 'url("../Images/background.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop:'50px',
    },
}));
export const Register=()=>{
    const classes=useStyle();
    return(
        <div className={classes.root}>
            <Grid container>
                <HomeLeft title="New Organization Register"></HomeLeft>
                <RegisterInput></RegisterInput>
            </Grid>
        </div>
    )
}