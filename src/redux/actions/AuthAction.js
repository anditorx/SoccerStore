import * as ActionTypes from '../actionTypes.js';
import {CONSTANT, SERVICES} from '../../constant';
// firebase
import FIREBASE from '../../config/FIREBASE';
import {navigate, replace, storeDataStorage} from '../../utils';

export const registerUser = (data, password, navigation) => {
  return dispatch => {
    // Loading
    dispatch({type: ActionTypes.AUTH_REGISTER_REQUEST});
    // //  Create user
    FIREBASE.auth()
      .createUserWithEmailAndPassword(data?.email, password)
      .then(success => {
        // get UID for new data
        const newData = {
          ...data,
          uid: success.user.uid,
        };

        // save to realtime database
        FIREBASE.database()
          .ref('users/' + success?.user?.uid)
          .set(newData);

        // const db = getDatabase();
        // set(ref(db, 'users/' + success?.user?.uid), newData);
        // // success
        dispatch({
          type: ActionTypes.AUTH_REGISTER_SUCCESS,
          payload: {
            dataUser: newData,
          },
        });

        // local storage
        storeDataStorage(CONSTANT.STORAGE_DATAUSER, newData);
        // navigation
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        dispatch({
          type: ActionTypes.AUTH_REGISTER_FAILED,
          payload: {
            dataUser: false,
            errorMessage: errorMessage,
          },
        });
        alert(error);
      });
  };
};

export const loginUser = (data, navigation) => {
  return dispatch => {
    // Loading
    dispatch({type: ActionTypes.AUTH_LOGIN_REQUEST});
    //
    FIREBASE.auth()
      .signInWithEmailAndPassword(data?.email, data?.password)
      .then(success => {
        // read data once
        FIREBASE.database()
          .ref('/users/' + success.user.uid)
          .once('value')
          .then(resDB => {
            // check response
            if (resDB.val()) {
              dispatch({
                type: ActionTypes.AUTH_LOGIN_SUCCESS,
                payload: {
                  dataUser: resDB.val(),
                },
              });

              // local storage
              storeDataStorage(CONSTANT.STORAGE_DATAUSER, resDB.val());

              // navigation
              navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
            } else {
              dispatch({
                type: ActionTypes.AUTH_LOGIN_FAILED,
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
        dispatch({
          type: ActionTypes.AUTH_LOGIN_FAILED,
          payload: {
            dataUser: false,
            errorMessage: errorMessage,
          },
        });
        alert(error);
      });
  };
};
