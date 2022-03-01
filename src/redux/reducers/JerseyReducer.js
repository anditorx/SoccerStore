import * as ActionTypes from '../actionTypes';

const initialState = {
  dataJersey: false,
  loadingJersey: false,
  successJersey: false,
  errorJersey: false,
  errorMessageJersey: false,

  idLiga: false,
  namaLiga: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // UPDATE PROFILE
    case ActionTypes.GET_JERSEY_REQUEST:
      return {
        ...state,
        loadingJersey: true,
        errorJersey: false,
        successJersey: false,
        errorMessageJersey: false,
      };
    case ActionTypes.GET_JERSEY_SUCCESS:
      return {
        ...state,
        loadingJersey: false,
        successJersey: true,
        dataJersey: action.payload.data,
      };
    case ActionTypes.GET_JERSEY_FAILED:
      return {
        ...state,
        loadingJersey: false,
        errorJersey: true,
        successJersey: false,
        dataJersey: action.payload.data,
        errorMessageJersey: action.payload.errorMessage,
      };
    case ActionTypes.GET_JERSEY_BY_LIGA:
      return {
        ...state,
        loadingJersey: false,
        errorJersey: false,
        successJersey: false,
        idLiga: action.payload.idLiga,
        namaLiga: action.payload.namaLiga,
      };
    case ActionTypes.DELETE_STATE_JERSEY_BY_LIGA:
      return {
        ...state,
        loadingJersey: false,
        idLiga: false,
        namaLiga: false,
      };
    default:
      return state;
  }
}
