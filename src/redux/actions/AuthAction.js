import * as ActionTypes from '../actionTypes.js';
import {CONSTANT, SERVICES} from '../../constant';
// firebase
import FIREBASE from '../../config/FIREBASE';
import {navigate, storeData} from '../../utils';

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
        storeData('@storage_dataUser', newData);
        // navigation
        navigation.navigate('MainApp');
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
