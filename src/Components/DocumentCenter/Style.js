import { makeStyles } from "@mui/styles"

export const useStyle=makeStyles(()=>({
    fullbetweenbox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    maingrid: {
        height: '100%',
        padding: '10px',
    },
    customselectheader: {
        width: '100%',
        display:'flex !important', 
        justifyContent: 'space-between !important', 
        background: 'white !important',
        textTransform: 'none !important',
    },
    customselectmain: {
        display: 'flex', 
        flexDirection: 'column', 
        padding: '10px', 
        background: 'white',
    },
    customselectbtn: {
        width: '100%', 
        display:'flex !important', 
        paddingLeft: '40px !important', 
        justifyContent: 'space-between !important',
        textTransform: 'none !important',
        color: 'gray !important',
    },
    newfilebtn :{
        width: '100%',
        display: 'flex',
        color: 'gray',
        cursor: 'pointer',
    },
    foldername: {
        border: 'none',
        fontSize: '18px',
        marginLeft: '10px',
        color: 'gray',
    },
    selectClass: {
        marginBottom: '10px',
    },
    deleteSelect: {
        display: 'none',
        marginBottom: '10px',
    },
    newMemberBox: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    permissionmodal: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '200px',
        width: '40%',
        background: '#6e6ef8',
    },
    newfile: {
        display: 'flex',
        color: 'gray',
        justifyContent: 'space-between',
        paddingLeft: '40px !important',
    }
}))