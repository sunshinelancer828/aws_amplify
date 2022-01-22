import * as types from '../actions/types'

const initialState = {
    documents: [],
}

const documentReducer = (state=initialState, action) => {
    switch(action.type){
        case types.LISTDOCUMENTS_REQUEST:
            return{
                loading: true,
                documents: [],
            }
        
        case types.LISTDOCUMENTS_SUCCESS:
            return{
                loading: false,
                documents: action.payload,
            }
        
        case types.LISTDOCUMENTS_FAIL:
            return{
                loading: false,
                error: action.payload,
            }

        default:
            return {
                ...state,
            };
    }
}

export { documentReducer }