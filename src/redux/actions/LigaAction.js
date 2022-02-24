import FIREBASE from '../../config/FIREBASE/index.js';
import {CONSTANT} from '../../constant/index.js';
import {
  storeDataStorage,
  dispatchLoading,
  dispatchRequest,
  dispatchSuccess,
  dispatchFailed,
} from '../../utils';
import * as ActionTypes from '../actionTypes.js';

export const doGetListLiga = (data, navigation) => {
  return dispatch => {
    dispatchRequest(dispatch, ActionTypes.GET_LIGA_REQUEST);
    // check data from db
    FIREBASE.database()
      .ref('ligas')
      .once('value', querySnapshot => {
        //
        let data = querySnapshot.val() ? querySnapshot.val() : [];
        let dataItem = {...data};
        dispatchSuccess(dispatch, ActionTypes.GET_LIGA_SUCCESS, dataItem);
      })
      .catch(err => {
        // error
        dispatchFailed(dispatch, ActionTypes.GET_LIGA_FAILED, err);
      });
  };
};
