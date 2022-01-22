import * as types from '../actions/types';

const initialState = {
    pdfsrc: []
};

const srcReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.UPLOADFILE_REQUEST:
      return{
        load: true,
        pdfsrc: [],
      }

    case types.UPLOADFILE_SUCCESS:
      return{
        load: false,
        pdfsrc: action.payload,
      }

    case types.UPLOADFILE_FAIL:
      return{
        load: false,
        error: action.payload,
      }

    case types.PREVIEWFILE_REQUEST:
      return{
        load: true,
        pdfsrc: [],
      }

    case types.PREVIEWFILE_SUCCESS:
      return{
        load: false,
        pdfsrc: action.payload,
      }

    case types.PREVIEWFILE_FAIL:
      return{
        load: false,
        error: action.payload,
      }

    case types.SAVEFILE_REQUEST:
      return{
        ...state,
        load:true,
      }

    case types.SAVEFILE_SUCCESS:
      return{
        ...state,
        load: false,
      }
    
    case types.SAVEFILE_FAIL:
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

export { srcReducer };
