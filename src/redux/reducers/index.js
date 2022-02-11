import {combineReducers} from 'redux';

import UserReducer from './UserReducer';
import RajaOngkirReducer from './RajaOngkirReducer';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
});

export default rootReducer;
