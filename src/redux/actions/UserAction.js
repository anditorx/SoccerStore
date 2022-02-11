import * as ActionTypes from '../actionTypes.js';

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: ActionTypes.GET_USER,
      payload: {
        nama: 'Andi',
        email: 'andi@gmail.com',
      },
    });
  };
};
