import * as types from '../actions/types';

const initialState = {
  teamdata: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TEAMLIST_REQUEST:
      return {
        ...state,
        loading: true,
        teamdata: [],
      };

    case types.TEAMLIST_SUCCESS:
      return{
        loading: false,
        teamdata: action.payload,
      };
    
    case types.TEAMLIST_FAIL:
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

export { teamReducer };
