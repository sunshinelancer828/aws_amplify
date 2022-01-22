import * as types from '../actions/types';

const initialState = {
  userAttributes: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.GETATTRIBUTES_REQUEST:
      return{
        load: true,
        userAttributes: [],
      }

    case types.GETATTRIBUTES_SUCCESS:
      return{
        load: false,
        userAttributes: action.payload,
      }

    case types.GETATTRIBUTES_FAIL:
      return{
        load: false,
        error: action.payload,
      }

    case types.GETPERMISSIONINFORMATION_REQUEST:
      return{
        load: true,
        userAttributes: [],
      }

    case types.GETPERMISSIONINFORMATION_SUCCESS:
      return{
        load: false,
        userAttributes: action.payload,
      }

    case types.GETPERMISSIONINFORMATION_FAIL:
      return{
        load: false,
        error: action.payload,
      }

    default:
      return {
        ...state,
      };
  }
};

export { authReducer };
