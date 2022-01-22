import * as types from '../actions/types';

const initialState = {
  memberlist: [],
};

const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MEMBERLIST_REQUEST:
      return {
        ...state,
        loading: true,
        memberlist: [],
      };

    case types.MEMBERLIST_SUCCESS:
      return{
        loading: false,
        memberlist: action.payload,
      };
    
    case types.MEMBERLIST_FAIL:
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

export { memberReducer };
