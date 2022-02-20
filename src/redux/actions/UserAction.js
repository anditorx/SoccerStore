import FIREBASE from '../../config/FIREBASE/index.js';
import {CONSTANT} from '../../constant/index.js';
import {storeDataStorage} from '../../utils/index.js';
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
export const updateProfile = (data, navigation) => {
  return dispatch => {
    dispatch({type: ActionTypes.UPDATE_PROFILE_REQUEST});
    const newData = {
      uid: data?.uid,
      nama: data?.nama,
      email: data?.email,
      phone: data?.phone,
      address: data?.address,
      province: data?.province,
      city: data?.city,
      status: 'user',
      avatar: data.avatarUpdated ? data.avatarForDB : data?.avatar,
    };
    // save to realtime database
    FIREBASE.database()
      .ref('users/' + newData.uid)
      .update(newData)
      .then(() => {
        // read data once
        FIREBASE.database()
          .ref('/users/' + newData.uid)
          .once('value')
          .then(resDB => {
            // check response
            if (resDB.val()) {
              dispatch({
                type: ActionTypes.UPDATE_PROFILE_SUCCESS,
                payload: {
                  dataUser: resDB.val(),
                },
              });

              // local storage
              storeDataStorage(CONSTANT.STORAGE_DATAUSER, resDB.val());

              // navigation
              navigation.replace('MainApp');
            } else {
              dispatch({
                type: ActionTypes.UPDATE_PROFILE_FAILED,
                payload: {
                  dataUser: [],
                  errorMessage: 'Data not found',
                },
              });
              alert('Data not found');
            }
          });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        // dispatch({
        //   type: ActionTypes.UPDATE_PROFILE_FAILED,
        //   payload: {
        //     dataUser: false,
        //     errorMessage: errorMessage,
        //   },
        // });
        alert(error);
      });
  };
};
