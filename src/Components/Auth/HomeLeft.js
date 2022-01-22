import React from "react"
import {Grid} from "@mui/material"
import {useStyle} from './Style'

export const HomeLeft = ({title}) => {
    const classes=useStyle()
    return(
        <Grid item xs={12} md={12} lg={5} className={classes.leftBoard}>
            <div className={classes.logoPart}>
                <img className={classes.companylogo} src="../Images/logo.png" alt=''/>
                <h1 className={classes.companyname}>PUT BOARD</h1>
            </div>
            <p className={classes.companydescription}>Proin ut tincidunt elit, et faucibus arcu. Nunc tincidunt quan ligula, ultrices dapibus orci semper suscipit.</p>
            <h1 className={classes.pageTitle}>{title}</h1>
            <div className={classes.bottomPart}>
                <div className={classes.oauth}>
                    <img className={classes.leftimage} src="../Images/facebook.png" alt=''/>
                    <img className={classes.leftimage} src="../Images/twitter.png" alt=''/>
                    <img className={classes.leftimage} src="../Images/saml.png" alt=''/>
                </div>
            </div>
        </Grid>
    )
}