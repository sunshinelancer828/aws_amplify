import {makeStyles} from '@mui/styles'

export const useStyle = makeStyles(() => ({
    navigate: {
        textDecoration: 'none !important',
    },
    arrowUp: {
        position:'relative',
        bottom: '15px',
        left: '70px',
        width: 0,
        height: 0,
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderBottom: '15px solid white',
    },
    mainTeamBox: {
        width: 'calc(100%-146px)', 
        minHeight: '800px', 
        background: 'white', 
        boxShadow: '5px 5px 8px 5px #a8a8b5', 
        margin:'20px 0px',
    },
    boardTitle: {
        color:'#a50909', 
        fontSize:'20px !important', 
        fontWeight: 'bold !important',
    },
    boardAdmin: {
        color:'#5b5b69', 
        fontSize:'12px !important', 
        fontWeight: 'bold !important'
    },
    alignCenterBox: {
        display: 'flex', 
        alignItems: 'center',
    },
    adminName: {
        fontSize: '10px !important', 
        color: '#9b9bb4', 
        paddingLeft: '10px',
    },
    boardMember: {
        color:'#5b5b69', 
        fontSize:'12px !important', 
        fontWeight: 'bold !important', 
        marginTop: '10px',
    },
    columnBox: {
        display: 'flex', 
        flexDirection: 'column !important',
    },
    centerBox: {
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center',
    },
    memberName: {
        fontSize: '8px !important', 
        color: '#9b9bb4', 
        textAlign: 'center !important',
    },
    alignStartGrid: {
        display: 'flex', 
        alignItems:'start',
    },
    addCircleIcon: {
        width: '30px !important', 
        height: '30px !important',
    },
    boardBottomBox: {
        display: 'flex', 
        flexDirection: 'column', 
        marginTop: '30px',
    },
    dragDrop: {
        fontSize: '10px !important', 
        color: '#5b5b69',
    },
    addtext:{
        color: '#c4c4c4', 
        fontSize: '14px !important',
        height: '10px !important',
        textAlign: 'center !important',
    },
    addmember: {
        background: '#6363ff !important', 
        color: 'white !important', 
        fontSize: '14px !important',
        marginTop: '12px !important',
        width: '100%',
        textTransform: 'none !important',
    },
    publish: {
        background: '#a50909 !important', 
        color: 'white !important', 
        fontSize: '14px !important',
        marginTop: '78px !important',
        width: '100%',
        textTransform: 'none !important',
    },
    guestText: {
        marginTop: '20px', 
        background:'white',
        width: '100%',
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
}))