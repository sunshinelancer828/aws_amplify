import { makeStyles } from '@mui/styles'

export const useStyle = makeStyles(() => ({
    meetingCenterBox: {
        display: 'flex', 
        alignItems:'center',
    },
    centerBox: {
        display: 'flex', 
        justifyContent: 'center',
        width: '100%',
    },
    squareBox: {
        border: '1px solid #a50909', 
        display: 'block', 
        width: '40px',
    },
    squareMonthTxt: {
        height: '20px !important', 
        background: '#a50909',       
        color: 'white', 
        textAlign: 'center',
    },
    squareDayTxt: {
        height: '33px', 
        background: 'white', 
        fontWeight:'semi-bold', 
        color: '#696969', 
        textAlign: 'center', 
        fontSize: '24px !important'
    },
    meetingCardTitle: {
        fontSize: '16px !important', 
        fontWeight: 'bold !important', 
        color: '#5f5f67',
    },
    meetingCardDate: {
        color: '#7a7a84', 
        fontSize: '10px !important',
    },
    welcomeDate: {
        fontWeight: 'bold !important', 
        color:'#91919d', 
        fontSize: '10px !important'
    },
    meetingDescription: {
        fontSize: '10px !important', 
        color:'#a2a2b0',
    },
    meetingAgenda: {
        fontSize: '18px !important', 
        color: '#5f5f67',
    },
    cardIcon: {
        color: '#7777f8', 
        fontSize: '30px !important', 
        padding: '0px 5px !important',
    },
    cardTitle: {
        color: '#7777f8', 
        fontSize: '25px !important', 
        fontWeight: 'bold !important',
    },
    cardBottomButton: {
        color: '#ff9204', 
        fontSize: '20px !important', 
        textShadow: '3px 3px #ececec !important', 
        fontWeight:'bold !important',
    },
    selectoption: {
        marginLeft: '10px',
        color: 'gray',
    },
    ActivitySnapMain: {
        display:'flex', 
        justifyContent: 'row', 
        alignItems: 'start',
    },
    snapShotCardGrid: {
        display: 'flex !important', 
        flexDirection: 'column !important', 
        justifyContent: 'center !important', 
        padding: '20px',
    },
    snapShotCardValue: {
        display: 'flex !important', 
        justifyContent: 'center !important', 
        alignItems: 'baseline !important',
        padding: '20px',
    },
    snapShotCardBottom: {
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center',
    },
    snapShotDescription: {
        color: '#ff9204', 
        fontWeight: 'bold', 
        fontSize: '18px',
        textShadow: '1px 1px gray',
    },
}))