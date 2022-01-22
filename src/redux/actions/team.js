import * as types from './types';
import { Auth, API, graphqlOperation } from "aws-amplify"
import { getUser, usergroupsByOrganization } from "../../graphql/queries"

export const listTeamInformation = () => async dispatch => {
  try {
    dispatch({ type: types.TEAMLIST_REQUEST });
    const user = await Auth.currentAuthenticatedUser()
    const userAttributes = await Auth.userAttributes(user)
    const organization=userAttributes[0].Value
    const userData = await API.graphql(graphqlOperation(usergroupsByOrganization, {organization: organization}))
    const totalmemberlist=userData.data.usergroupsByOrganization.items
    let grouplist=[]
    for(let member of totalmemberlist)
    {
      if(!grouplist.includes(member.groupname))
      {
        grouplist.push(member.groupname)
      }
    }
    let memberlist=[]
    for(let group of grouplist)
    {
      let templist=[]
      let adminid=''
      for(let member of totalmemberlist)
      {
        if(member.groupname===group)
        {
          adminid=member.groupadminid
          templist.push(member.userdata)
        }
      }
      let admindata=[]
      await API.graphql(graphqlOperation(getUser, {id: adminid})).then(result => {
        admindata = result.data.getUser
      })
      const temp={
        groupname: group,
        admin:admindata,
        members:templist
      }
      memberlist.push(temp)
    }
    dispatch({ type: types.TEAMLIST_SUCCESS, payload: memberlist});
  } catch (error) {
    dispatch({ type: types.TEAMLIST_FAIL, payload: error.message });
  }
}
