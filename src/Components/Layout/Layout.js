import React from 'react'
import {Box} from '@mui/material'
import { TitleBar } from './TitleBar'
import CssBaseline from '@mui/material/CssBaseline'
import {styled} from '@mui/styles'

const MainBox = styled(Box)({
  padding: '5px',
  background: '#ececff',
})

export const Layout = ({title,index,children}) => {
    return(
        <MainBox>
            <CssBaseline />
            <TitleBar title={title} index={index}/>
            <Box sx={{paddingLeft:{sm:'80px'}, paddingBottom: '0px', paddingRight: {sm:'70px'}, maxWidth: '100%', background: '#ececff'}}>
                {children}
            </Box>
        </MainBox>
    );
}