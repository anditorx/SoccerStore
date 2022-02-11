import * as ActionTypes from '../actionTypes';

const initialState = {
  dataUser: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return {
        ...state,
        dataUser: action.payload,
      };

    default:
      return state;
  }
}
