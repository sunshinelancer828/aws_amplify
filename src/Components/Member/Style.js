import {makeStyles} from '@mui/styles'

export const useStyle = makeStyles(() => ({
    conflictBox: {
        display:'flex', 
        flexDirection: 'row-reverse', 
        marginTop:"-30px"
    },
    navigate: {
        textDecoration: 'none !important',
    },
    conflict: {
        background: '#6e6ef8 !important',
        color: 'white !important',
        boxShadow: '3px 3px 8px 3px #c1c1d0',
        textTransform: 'none !important',
        fontSize: '12px !important',
    },
    memberlistbox: {
        width: 'calc(100%-146px)', 
        minHeight: '800px', 
        background: 'white', 
        paddingTop:'0px', 
        boxShadow: '5px 5px 8px 5px #a8a8b5', 
        margin:'10px 0px',
    },
    memberbox: {
        width: '100%',
    },
    arrowUp: {
        position:'relative',
        bottom: '15px',
        left: '240px',
        width: 0,
        height: 0,
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderBottom: '15px solid white',
    },
    usernametxt: {
        color: '#5b5b69', 
        fontWeight: 'bold !important', 
        fontSize: '20px !important',
    },
    image:{
        width: '12px !important',
        height: '12px !important',
    },
    jobtxt: {
        color: '#5b5b69', 
        fontSize: '18px !important',
    },
    italictxt: {
        color: '#5b5b69', 
        fontSize: '16px !important', 
        fontStyle: 'italic'
    },
    memberAvatar: {
        width: '90px !important', 
        height: '90px !important', 
        margin: '10px',
    },
    alignCenterBox: {
        display:'flex', 
        alignItems: 'center',
    },
    centerBox: {
        display:'flex', 
        justifyContent: 'center',
    },
    newMemberBox: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    emailsendmodal: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '200px',
        width: '40%',
        background: '#6e6ef8',
    }
}))