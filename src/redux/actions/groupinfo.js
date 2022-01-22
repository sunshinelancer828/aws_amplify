import * as types from './types'
import { Auth, API, graphqlOperation } from "aws-amplify"
import { usergroupsByOrganization } from "../../graphql/queries"

export const getGroupInformation = () => async dispatch => {
  try {
    dispatch({ type: types.GROUPLIST_REQUEST });
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
    dispatch({ type: types.GROUPLIST_SUCCESS, payload: grouplist});
  } catch (error) {
    dispatch({ type: types.GROUPLIST_FAIL, payload: error.message });
  }
}
