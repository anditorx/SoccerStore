import * as ActionTypes from '../actionTypes';

const initialState = {
  dataCart: false,
  loadingCart: false,
  successCart: false,
  errorCart: false,
  errorMessageCart: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART_REQUEST:
      return {
        ...state,
        loadingCart: true,
        errorCart: false,
        successCart: false,
        errorMessageCart: false,
      };
    case ActionTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loadingCart: false,
        successCart: true,
        dataCart: action.payload.data,
      };
    case ActionTypes.ADD_TO_CART_FAILED:
      return {
        ...state,
        loadingCart: false,
        errorCart: true,
        successCart: false,
        dataCart: action.payload.data,
        errorMessageCart: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
