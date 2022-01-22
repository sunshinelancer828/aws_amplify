import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {Link} from 'react-router-dom'

const useStyle = makeStyles(()=>({
    goLoginBtn: {
        borderRadius: '18px !important',
        border: '1px solid #7575ff !important',
        color: '#7575ff !important',
        background: 'white !important',
        fontSize: '30px !important',
        textTransform: 'none !important',
        boxShadow: '5px 10px 8px 1px #c9c9c9',
        padding: '8px !important',
    },
    navigate: {
        textDecoration: 'none !important',
    },
}))

export const Welcome = () => {
    const classes=useStyle()
    return(
        <Box sx={{marginTop: '200px', flexDirection: 'column'}}>
            <Box sx={{width: '100%', justifyContent: 'center', display: 'flex'}}>
                <Typography sx={{fontSize: '60px'}}>
                    Welcome to Our Site
                </Typography>
            </Box>
            <Box sx={{display:'flex', justifyContent: 'center', width: '100%'}}>
                <Link className={classes.navigate} to="/">
                    <Button className={classes.goLoginBtn}>
                        Click Here to Start
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}