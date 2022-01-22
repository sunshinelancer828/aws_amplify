import React from "react"
import {makeStyles} from "@mui/styles"
import { HomeLeft } from "../Components/Auth/HomeLeft"
import { LoginInput } from "../Components/Auth/LoginInput"
import {Grid} from "@mui/material"

const useStyle = makeStyles(() => ({
    root: {
        width: '83%',
        display: 'flex',
        margin: '0 auto',
        marginTop: '100px',
        background: 'url("../Images/background.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop:'50px',
    },
}));

export const Login =() => {
    const classes=useStyle();
    return(
        <div className={classes.root}>
            <Grid container>
                <HomeLeft title="Existing User Log-in"></HomeLeft>
                <LoginInput></LoginInput>
            </Grid>
        </div>
    );
}