import {combineReducers} from 'redux';

import UserReducer from './UserReducer';
import RajaOngkirReducer from './RajaOngkirReducer';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
  AuthReducer,
});

export default rootReducer;
