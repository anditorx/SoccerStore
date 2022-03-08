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

export const doAddToCart = data => {
  return dispatch => {
    dispatchRequest(dispatch, ActionTypes.ADD_TO_CART_REQUEST);
    // check data from db
    FIREBASE.database()
      .ref('keranjangs/' + data.uid)
      .once('value', querySnapshot => {
        //
        if (querySnapshot.val()) {
          // update cart
          let mainCart = querySnapshot.val() ? querySnapshot.val() : [];
          const hargaBaru = parseInt(data.jumlah) * parseInt(data.jersey.harga);
          const beratBaru =
            parseInt(data.jumlah) * parseFloat(data.jersey.berat);

          FIREBASE.database()
            .ref('keranjangs')
            .child(data.uid)
            .update({
              totalBerat: beratBaru,
              totalHarga: hargaBaru,
            })
            .then(response => {
              dispatch(doAddToCartDetail(data));
            })
            .catch(error => {
              dispatchFailed(dispatch, ActionTypes.ADD_TO_CART_FAILED, error);
            });
        } else {
          // save cart
          const mainCart = {
            user: data.uid,
            tanggal: new Date().toDateString(),
            totalHarga: parseInt(data.jumlah) * parseInt(data.jersey.harga),
            totalBerat: parseInt(data.jumlah) * parseFloat(data.jersey.berat),
          };

          FIREBASE.database()
            .ref('keranjangs')
            .child(data.uid)
            .set(mainCart)
            .then(response => {
              dispatch(doAddToCartDetail(data));
            })
            .catch(error => {
              dispatchFailed(dispatch, ActionTypes.ADD_TO_CART_FAILED, error);
            });
        }
      })
      .catch(err => {
        // error
        dispatchFailed(dispatch, ActionTypes.ADD_TO_CART_FAILED, err);
      });
  };
};

export const doAddToCartDetail = data => {
  return dispatch => {
    const orders = {
      product: data.jersey,
      jumlahPesan: data.jumlah,
      totalHarga: parseInt(data.jumlah) * parseInt(data.jersey.harga),
      totalBerat: parseInt(data.jumlah) * parseFloat(data.jersey.berat),
      keterangan: data.keterangan,
      ukuran: data.ukuran,
    };
    // save to firebase
    FIREBASE.database()
      .ref('keranjangs' + data.uid)
      .child('pesanans')
      .push(orders)
      .then(response => {
        dispatchSuccess(
          dispatch,
          ActionTypes.ADD_TO_CART_SUCCESS,
          response ? response : [],
        );
      })
      .catch(error => {
        dispatchFailed(dispatch, ActionTypes.ADD_TO_CART_FAILED, error);
      });
  };
};
