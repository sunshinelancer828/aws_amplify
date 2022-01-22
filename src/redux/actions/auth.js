import * as types from './types';
import { API, graphqlOperation, Auth } from "aws-amplify"
import {getCandidate} from '../../graphql/queries'

export const getUserAttributes = () => async dispatch => {
  try {
    dispatch({ type: types.GETATTRIBUTES_REQUEST})
    const user = await Auth.currentAuthenticatedUser()
    const userAttributes = await Auth.userAttributes(user)
    dispatch({type: types.GETATTRIBUTES_SUCCESS, payload: userAttributes})
  }
  catch(error){
    dispatch({type: types.GETATTRIBUTES_FAIL, payload: error.message})
  }
}

export const getPermissionInformation = (id) => async dispatch => {
  try{
    dispatch({ type: types.GETPERMISSIONINFORMATION_REQUEST})
    let userdata=[]
    await API.graphql(graphqlOperation(getCandidate, {id: id})).then(result => {
      userdata = result.data.getCandidate
    })
    dispatch({type: types.GETPERMISSIONINFORMATION_SUCCESS, payload: userdata})
  }
  catch(error){
    dispatch({ type: types.GETPERMISSIONINFORMATION_FAIL, payload: error.message})
  }
}