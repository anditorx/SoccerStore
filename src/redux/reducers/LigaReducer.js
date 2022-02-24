import * as ActionTypes from '../actionTypes';

const initialState = {
  dataLiga: false,
  loadingLiga: false,
  successLiga: false,
  errorLiga: false,
  errorMessageLiga: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // UPDATE PROFILE
    case ActionTypes.GET_LIGA_REQUEST:
      return {
        ...state,
        loadingLiga: true,
        errorLiga: false,
        successLiga: false,
        errorMessageLiga: false,
      };
    case ActionTypes.GET_LIGA_SUCCESS:
      return {
        ...state,
        loadingLiga: false,
        successLiga: true,
        dataLiga: action.payload.data,
      };
    case ActionTypes.GET_LIGA_FAILED:
      return {
        ...state,
        loadingLiga: false,
        errorLiga: true,
        successLiga: false,
        dataLiga: action.payload.data,
        errorMessageLiga: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
