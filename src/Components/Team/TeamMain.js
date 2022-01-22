import React, { useState, useEffect } from 'react'
import {Box, Button, Grid} from '@mui/material'
import {styled} from '@mui/styles'
import { BoardCard } from './BoardCard';
import { BoardAddCard } from './BoardAddCard';
import { Link } from 'react-router-dom';
import { useStyle } from './Style'
import { Loader } from '../Loader'
import { listTeamInformation } from '../../redux/actions/team';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { API, graphqlOperation, Auth } from "aws-amplify"
import {getUser} from '../../graphql/queries'

const TabButton = styled(Button)({
    width: '160px',
    height: '35px',
    boxShadow: '3px 3px 8px 2px #b5b5c4',
    color:'white !important',
    textTransform: 'none !important',
    margin: '6px !important',
});

export const TeamMain = () => {
    const classes=useStyle()
    const dispatch=useDispatch()
    const [uid, setUid] = useState()
    const [permission, setPermission] = useState(false)
    useEffect(() => {
        async function fetchdata(){
            try{
                dispatch(listTeamInformation())
                const user = await Auth.currentAuthenticatedUser()
                const userAttributes = await Auth.userAttributes(user)
                setUid(userAttributes[1].Value)
            }catch(err){
                toast.error(err.message)
            }
        }
        fetchdata()
    }, [dispatch])

    useEffect(() => {
        async function fetchdata(){
            try{
                let userdata=[]
                await API.graphql(graphqlOperation(getUser, {id: uid})).then(result => {
                    userdata = result.data.getUser
                })
            setPermission(userdata.isadmin==='0'? true: false)
            }
            catch(error){}
        }
        fetchdata()
    }, [uid])
    const listdata=useSelector(state => state.teamdata)
    const { teamdata, loading }=listdata
    return(
        <Box sx={{paddingBottom: '10px'}}>
            <Box>
                <TabButton sx={{background: '#a50909'}}>Boards</TabButton>
                <Link to="/member" className={classes.navigate}>
                    <TabButton sx={{background: '#3f7330'}}>Members List</TabButton>
                </Link>
            </Box>
            <Box className={classes.mainTeamBox}>
                <div className={classes.arrowUp}></div>
                {loading ? (<Loader/>):(
                <Grid container sx={{padding: '10px 20px 20px 20px'}} columns={{xs:12, sm:12 ,md:12, lg:10, xl:8}} rowSpacing={1} columnSpacing={1}>
                    {teamdata?.map((item, index)=><BoardCard item={item} key={index} adminid={uid} permission={permission}/>)}
                    {permission?(<BoardAddCard adminid={uid}/>):(<div></div>)}
                </Grid>
                )}
            </Box>
        </Box>
    );
}