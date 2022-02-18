import * as ActionTypes from '../actionTypes';

const initialState = {
  dataUser: false,
  loadingUser: false,
  successUser: false,
  errorUser: false,
  errorMessageUser: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return {
        ...state,
        dataUser: action.payload,
      };
    // UPDATE PROFILE
    case ActionTypes.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loadingUser: true,
        errorUser: false,
        successUser: false,
        errorMessageUser: false,
      };
    case ActionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loadingUser: false,
        successUser: true,
        dataUser: action.payload.dataUser,
      };
    case ActionTypes.UPDATE_PROFILE_FAILED:
      return {
        ...state,
        loadingUser: false,
        errorUser: true,
        successUser: false,
        dataUser: action.payload.dataUser,
        errorMessageUser: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
