import * as types from './types';
import { Auth, API, graphqlOperation } from "aws-amplify"
import { getUser } from "../../graphql/queries"
import { updateUser } from "../../graphql/mutations"

export const getUserInformation = () => async dispatch => {
  try {
    dispatch({ type: types.USERPROFILE_REQUEST });
    const user = await Auth.currentAuthenticatedUser()
    const userAttributes = await Auth.userAttributes(user)
    const uid=userAttributes[1].Value
    let profiledata = [];
    await API.graphql(graphqlOperation(getUser, {id: uid})).then(result => {
        profiledata = result.data.getUser
    })
    dispatch({ type: types.USERPROFILE_SUCCESS, payload: profiledata});
  } catch (error) {
    dispatch({ type: types.USERPROFILE_FAIL, payload: error.message });
  }
};

export const updateUserInformation = (firstname, lastname, phonenumber, address, role, bio, avatarsrc) => async dispatch => {
  try{
    dispatch({ type:types.USERPROFILEUPDATE_REQUEST })
    const user = await Auth.currentAuthenticatedUser()
    const userAttributes = await Auth.userAttributes(user)
    const uid=userAttributes[1].Value
    const updateDetails = {
      id: uid,
      firstname: firstname,
      lastname : lastname,
      phonenumber: phonenumber,
      address: address,
      role: role,
      bio: bio,
      avatar: avatarsrc,
    };
    const updated = await API.graphql(graphqlOperation(updateUser, {input: updateDetails}))
    dispatch({type: types.USERPROFILEUPDATE_SUCCESS, payload: updated.data.updateUser})
  }catch(error){
    console.log(error)
    dispatch({type: types.USERPROFILEUPDATE_FAIL, payload: error.message})
  }
}

export const getMemberInformation = (uid) => async dispatch => {
  try{
    dispatch({type: types.GETMEMBERINFORMATION_REQUEST})
    let profiledata = [];
    await API.graphql(graphqlOperation(getUser, {id: uid})).then(result => {
        profiledata = result.data.getUser
    })
    dispatch({type: types.GETMEMBERINFORMATION_SUCCESS, payload: profiledata})
  }
  catch(error)
  {
    dispatch({type: types.GETMEMBERINFORMATION_FAIL, payload: error.message})
  }
}