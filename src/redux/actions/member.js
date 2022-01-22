import * as types from './types';
import { Auth, API, graphqlOperation } from "aws-amplify"
import { usersByOrganization } from "../../graphql/queries"

export const listMemberInformation = () => async dispatch => {
  try {
    dispatch({ type: types.MEMBERLIST_REQUEST });
    const user = await Auth.currentAuthenticatedUser()
    const userAttributes = await Auth.userAttributes(user)
    const organization=userAttributes[0].Value
    const memberData = await API.graphql(graphqlOperation(usersByOrganization, {organization: organization}))
    const memberlist=memberData.data.usersByOrganization.items
    dispatch({ type: types.MEMBERLIST_SUCCESS, payload: memberlist});
  } catch (error) {
    dispatch({ type: types.MEMBERLIST_FAIL, payload: error.message });
  }
};