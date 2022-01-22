import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/auth'
import { memberReducer } from '../reducers/member'
import { profileReducer } from '../reducers/profile'
import { teamReducer } from '../reducers/team'
import { documentReducer } from '../reducers/document'
import { groupReducer } from '../reducers/groupinfo'
import { srcReducer } from '../reducers/srcinfo';

const rootReducer = combineReducers({
  userAttributes: authReducer,
  profiledata: profileReducer,
  memberlist: memberReducer,
  teamdata: teamReducer,
  documents: documentReducer,
  groupdata: groupReducer,
  pdfsrc: srcReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
