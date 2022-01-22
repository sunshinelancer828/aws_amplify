import * as types from '../actions/types';

const initialState = {
  profiledata: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USERPROFILE_REQUEST:
      return {
        loading: true,
        profiledata: [],
      };

    case types.USERPROFILE_SUCCESS:
      return{
        loading: false,
        profiledata: action.payload,
      };
    
    case types.USERPROFILE_FAIL:
      return{
        loading: false,
        error: action.payload,
      };

    case types.GETMEMBERINFORMATION_REQUEST:
      return {
        loading: true,
        profiledata: [],
      };
  
    case types.GETMEMBERINFORMATION_SUCCESS:
      return{
        loading: false,
        profiledata: action.payload,
      };
      
    case types.GETMEMBERINFORMATION_FAIL:
      return{
        loading: false,
        error: action.payload,
      };
    
    case types.USERPROFILEUPDATE_REQUEST:
      return{
        ...state,
        loading: true,
      }
    
    case types.USERPROFILEUPDATE_SUCCESS:
      return{
        ...state,
        loading: false,
        profiledata: action.payload,
      }
    
    case types.USERPROFILEUPDATE_FAIL:
      return{
        loading: false,
        error: action.payload,
      }

    default:
      return {
        ...state,
      };
  }
};

export { profileReducer };
