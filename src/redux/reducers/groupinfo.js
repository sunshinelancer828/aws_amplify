import * as types from '../actions/types';

const initialState = {
  groupdata: [],
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GROUPLIST_REQUEST:
      return {
        ...state,
        loading: true,
        groupdata: [],
      };

    case types.GROUPLIST_SUCCESS:
      return{
        loading: false,
        groupdata: action.payload,
      };
    
    case types.GROUPLIST_FAIL:
      return{
        loading: false,
        error: action.payload,
      };
      
    default:
      return {
        ...state,
      };
  }
};

export { groupReducer };
