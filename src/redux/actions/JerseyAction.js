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

export const doGetListJersey = idLiga => {
  console.tron.log('🚀 ~ idLiga doGetListJersey :=>', idLiga);
  return dispatch => {
    dispatchRequest(dispatch, ActionTypes.GET_JERSEY_REQUEST);
    // check data from db
    if (idLiga) {
      FIREBASE.database()
        .ref('jerseys')
        .orderByChild('liga')
        .equalTo(idLiga)
        .once('value', querySnapshot => {
          //
          let data = querySnapshot.val() ? querySnapshot.val() : [];
          dispatchSuccess(dispatch, ActionTypes.GET_JERSEY_SUCCESS, data);
        })
        .catch(err => {
          // error
          dispatchFailed(dispatch, ActionTypes.GET_JERSEY_FAILED, err);
        });
    } else {
      FIREBASE.database()
        .ref('jerseys')
        .once('value', querySnapshot => {
          //
          let data = querySnapshot.val() ? querySnapshot.val() : [];
          dispatchSuccess(dispatch, ActionTypes.GET_JERSEY_SUCCESS, data);
        })
        .catch(err => {
          // error
          dispatchFailed(dispatch, ActionTypes.GET_JERSEY_FAILED, err);
        });
    }
  };
};
export const doGetListJerseyWithLimit = () => {
  return dispatch => {
    dispatchRequest(dispatch, ActionTypes.GET_JERSEY_REQUEST);
    // check data from db
    FIREBASE.database()
      .ref('jerseys')
      .limitToLast(6)
      .once('value', querySnapshot => {
        //
        let data = querySnapshot.val() ? querySnapshot.val() : [];
        dispatchSuccess(dispatch, ActionTypes.GET_JERSEY_SUCCESS, data);
      })
      .catch(err => {
        // error
        dispatchFailed(dispatch, ActionTypes.GET_JERSEY_FAILED, err);
      });
  };
};
export const doGetJerseyByLiga = (id, namaLiga) => ({
  type: ActionTypes.GET_JERSEY_BY_LIGA,
  payload: {
    idLiga: id,
    namaLiga: namaLiga,
  },
});
