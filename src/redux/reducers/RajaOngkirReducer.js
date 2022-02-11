import * as ActionTypes from '../actionTypes';

const initialState = {
  dataProvince: false,
  dataCity: false,
  loading: false,
  error: false,
  errorMessage: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    // GET PROVINCE
    case ActionTypes.GET_PROVINCE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: false,
      };
    case ActionTypes.GET_PROVINCE_SUCCESS:
      return {
        ...state,
        loading: false,
        dataProvince: action.payload.dataProvince,
      };
    case ActionTypes.GET_PROVINCE_FAILED:
      return {
        ...state,
        loading: false,
        dataProvince: action.payload.dataProvince,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    // GET CITY
    case ActionTypes.GET_CITY_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: false,
      };
    case ActionTypes.GET_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        dataCity: action.payload.dataCity,
      };
    case ActionTypes.GET_CITY_FAILED:
      return {
        ...state,
        loading: false,
        dataCity: action.payload.dataCity,
        error: true,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
