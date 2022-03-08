import {combineReducers} from 'redux';

import UserReducer from './UserReducer';
import RajaOngkirReducer from './RajaOngkirReducer';
import AuthReducer from './AuthReducer';
import LigaReducer from './LigaReducer';
import JerseyReducer from './JerseyReducer';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
  AuthReducer,
  LigaReducer,
  JerseyReducer,
  CartReducer,
});

export default rootReducer;
