import {combineReducers} from 'redux';

import UserReducer from './UserReducer';
import RajaOngkirReducer from './RajaOngkirReducer';
import AuthReducer from './AuthReducer';
import LigaReducer from './LigaReducer';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
  AuthReducer,
  LigaReducer,
});

export default rootReducer;
