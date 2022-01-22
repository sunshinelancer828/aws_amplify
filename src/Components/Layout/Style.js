import { makeStyles } from '@mui/styles'

export const useStyle = makeStyles(() => ({
    iconstyle: {
        width: '25px',
        height: '25px',
        margin: '10px auto',
        color: 'white'
    },
    profileBox: {
        position: 'absolute',
        top: '2%',
        left: '1%',
        width: '98%',
        height: '96%',
        background: '#d0d0ff !important',
        border: '1px solid gray',
        boxShadow: 24,
    },
    title: {
        color: '#5a5a61', 
        fontWeight: 'bold !important',
    },
    avatarButton: {
        transform: 'translateY(50%)',
        zIndex: 1,
        marginBottom: '20px',
        borderRadius:'50%',
    },
    addIcon: {
        color: 'white', 
        zIndex: 2,
        padding: '0px !important',
        width: '55px !important',
        height: '55px !important',
        background: '#7e7eff !important',
        borderRadius: '50%'
    },
    rowReverse: {
        display:'flex', 
        flexDirection: 'row-reverse',
    },
    profileTopbar: {
        display:'flex', 
        justifyContent: 'center', 
        marginTop: '25px',
    },
    profileCancelIcon: {
        color:'#606069', 
        width:'50px !important', 
        height: '50px !important'
    },
    profileMainbar: {
        width: '90%', 
        display: 'flex', 
        flexDirection: 'column',
    },
    saveButton: {
        width: '120px', 
        height: '44px', 
        color: 'white !important',              
        background: '#7272ff !important', 
        fontSize: '24px !important', 
        textTransform: 'none !important'
    },
    profileInputBar: {
        marginTop: '20px', 
        background: '#7272ff', 
        width: '100%', 
        display: 'flex', 
        flexDirection:'column',
    },
    centerBox: {
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center'
    },
    centerGrid: {
        marginTop: '100px !important', 
        width: '80% !important', 
        marginBottom: '60px !important',
    },
    dashiconstyle: {
        width: '25px', 
        height:'25px', 
        margin: '10px auto',
    },
    leftlink: {
        color: '#b3b3b3 !important',
        display: 'flex',
        justifyContent: 'center',
        margin: '10px 0px',
    },
    activelink: {
        color: '#6d6dee !important',
        borderLeft: '2px solid #6d6dee',
        display: 'flex',
        justifyContent: 'center',
        margin: '10px 0px',
    },
    leftinput: {
        display: 'flex', 
        flexDirection: 'column !important', 
    }
}))