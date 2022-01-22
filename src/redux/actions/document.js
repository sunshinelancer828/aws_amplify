import * as types from './types'
import { API, graphqlOperation, Auth } from "aws-amplify"
import {searchFolders, usergroupsByUserID, getUser} from '../../graphql/queries'

export const listDocuments = () => async dispatch => {
    try{
        dispatch({type: types.LISTDOCUMENTS_REQUEST})
        const user = await Auth.currentAuthenticatedUser()
        const userAttributes = await Auth.userAttributes(user)
        const organization=userAttributes[0].Value
        const uid=userAttributes[1].Value
        let profiledata = []
        await API.graphql(graphqlOperation(getUser, {id: uid})).then(result => {
            profiledata = result.data.getUser
        })
        let documentdata=[]
        const folderData = await API.graphql(graphqlOperation(searchFolders, { filter: {organization: {eq: organization}}, sort: {direction: 'asc', field: 'name'}}))
        const totalfolderlist = folderData.data.searchFolders.items
        if(profiledata.isadmin==='0')
        {
            documentdata=totalfolderlist
        }
        else{
            const userdata= await API.graphql(graphqlOperation(usergroupsByUserID, {userid: uid}))
            const grouplist = []
            for(let tempuser of userdata.data.usergroupsByUserID.items)
            {
                if(!grouplist.includes(tempuser.groupname))
                {
                    grouplist.push(tempuser.groupname)
                }
            }
            for(let tempfolder of totalfolderlist)
            {
                if(tempfolder.restrictions.items.length===0)
                {
                    let tempfilelist=[]
                    for(let tempfile of tempfolder.files.items)
                    {
                        if(tempfile.restrictions.items.length===0)
                        {
                            tempfilelist.push(tempfile)
                        }
                        else{
                            let tempflag=true
                            for(let group of grouplist)
                            {
                                for(let tempitem of tempfile.restrictions.items)
                                {
                                    if((tempitem.groupname===group)&&(tempitem.role==='User'))
                                    {
                                        tempflag=false
                                        break
                                    }
                                }
                            }
                            if(!tempflag){tempfilelist.push(tempfile)}
                        }
                    }
                    tempfolder.files.items=tempfilelist
                    documentdata.push(tempfolder)
                }
                else{
                    let tempflag=true
                    for(let group of grouplist)
                    {
                        for(let tempitem of tempfolder.restrictions.items)
                        {
                            if((tempitem.groupname===group)&&(tempitem.role==='User'))
                            {
                                tempflag = false
                                break
                            }
                        }
                    }
                    if(!tempflag) 
                    {
                        let tempfilelist=[]
                        for(let tempfile of tempfolder.files.items)
                        {
                            if(tempfile.restrictions.items.length===0)
                            {
                                tempfilelist.push(tempfile)
                            }
                            else{
                                let tmpflag=true
                                for(let group of grouplist)
                                {
                                    for(let tempitem of tempfile.restrictions.items)
                                    {
                                        if((tempitem.groupname===group)&&(tempitem.role==='User'))
                                        {
                                            tmpflag=false
                                            break
                                        }
                                    }
                                }
                                if(!tmpflag){tempfilelist.push(tempfile)}
                            }
                        }
                        tempfolder.files.items=tempfilelist
                        documentdata.push(tempfolder)
                    }
                }
            }
        }
        dispatch({type: types.LISTDOCUMENTS_SUCCESS, payload: documentdata})
    }
    catch(error){
        dispatch({type: types.LISTDOCUMENTS_FAIL, payload: error.message})
    }
}