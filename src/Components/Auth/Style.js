import {makeStyles} from '@mui/styles'

export const useStyle = makeStyles(() => ({
    root: {
        width: '90%',
        display: 'flex',
        margin: '0 auto',
        marginTop: '20px',
        background:'blue'
    },
    leftBoard: {
        paddingLeft: '30px',
        paddingRight: '30px',
    },
    logoPart: {
        paddingTop: '20px',
        display: 'flex',
        alignItems: 'end',
    },
    companyname: {
        color: 'white',
        textShadow: '2px 2px 8px #888888',
        fontSize: '45px',
        paddingLeft: '20px',
        margin: '0px !important'
    },
    companylogo: {
        width:'90px',
    },
    pageTitle: {
        marginTop: '30px',
        color: '#ffb95e',
        textShadow: '2px 2px 8px #888888',
        fontSize: '32px',
        textAlign: 'left',
    },
    bottomPart: {
        marginTop:'200px',
        width: '100%',
        marginBottom: '90px',
    },
    oauth: {
        width:'30px',
        display: 'block',
    },
    companydescription: {
        color: 'white',
        fontSize: '16px',
        textAlign: 'left',
    },
    rightBoard:{
        borderTopLeftRadius: '50px',
        borderBottomRightRadius: '50px',
        background: 'white',
        marginBottom: '20px !important',
        padding: '50px 30px 30px 30px',
        boxShadow: '5px 10px 8px 1px #3838b2',
    },
    leftimage: {
        height: '40px',
        marginBottom: '10px',
    },
    topinput: {
        display:'flex',
    },
    goLoginBtn: {
        borderRadius: '18px !important',
        border: '1px solid #7575ff !important',
        color: '#7575ff !important',
        background: 'white !important',
        fontSize: '25px !important',
        textTransform: 'none !important',
        boxShadow: '5px 10px 8px 1px #c9c9c9',
        width: '100%',
    },
    registerBtn: {
        borderRadius: '18px !important',
        border: '1px solid #7575ff !important',
        color: 'white !important',
        background: '#7575ff !important',
        fontSize: '25px !important',
        textTransform: 'none !important',
        boxShadow: '5px 10px 8px 1px #c9c9c9',
        width: '100%',
    },
    bottombutton: {
        marginTop:'80px',
    },
    navigate: {
        textDecoration: 'none !important',
    },
    goRegisterBtn: {
        borderRadius: '18px !important',
        border: '1px solid #7575ff !important',
        color: '#7575ff !important',
        background: 'white !important',
        fontSize: '25px !important',
        textTransform: 'none !important',
        boxShadow: '5px 10px 8px 1px #c9c9c9',
        width: '100%',
    },
    loginBtn: {
        borderRadius: '18px !important',
        border: '1px solid #7575ff !important',
        color: 'white !important',
        background: '#7575ff !important',
        fontSize: '25px !important',
        textTransform: 'none !important',
        boxShadow: '5px 10px 8px 1px #c9c9c9',
        width: '100%',
    },
    googlelogo: {
        height:'48px',
        width:'48px',
        borderRadius: '50%',
    },
    googlepart: {
        marginTop: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '120px',
    },
    googlesign: {
        fontSize: '24px',
        color: '#696969',
        paddingLeft: '10px',
    },
    forgotform: {
        marginTop: '20px', 
        background: '#7575ff', 
        padding: '20px', 
        width: '60%',
        display: 'grid',
    }
}))