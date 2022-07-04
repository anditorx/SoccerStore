import FIREBASE from '../../config/FIREBASE/index.js';
import {CONSTANT} from '../../constant/index.js';
import {
  storeDataStorage,
  dispatchLoading,
  dispatchRequest,
  dispatchSuccess,
  dispatchFailed,
  navigate,
} from '../../utils';
import * as ActionTypes from '../actionTypes.js';

export const doAddToCart = (data, navigation) => {
  return dispatch => {
    dispatchRequest(dispatch, ActionTypes.ADD_TO_CART_REQUEST);
    // check data from db
    FIREBASE.database()
      .ref('keranjangs/' + data.uid)
      .once('value', querySnapshot => {
        //
        if (querySnapshot.val()) {
          // update main cart
          const mainCart = querySnapshot.val();
          const hargaBaru = parseInt(data.jumlah) * parseInt(data.jersey.harga);
          const beratBaru =
            parseInt(data.jumlah) * parseFloat(data.jersey.berat);
          FIREBASE.database()
            .ref('keranjangs')
            .child(data.uid)
            .update({
              totalBerat: mainCart.totalHarga + beratBaru,
              totalHarga: mainCart.totalHarga + hargaBaru,
            })
            .then(response => {
              dispatch(doAddToCartDetail(data, navigation));
            })
            .catch(error => {
              dispatchFailed(dispatch, ActionTypes.ADD_TO_CART_FAILED, error);
            });
        } else {
          // save main cart
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
            .then(() => {
              dispatch(doAddToCartDetail(data, navigation));
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

export const doAddToCartDetail = (data, navigation) => {
  console.tron.log('🚀 ~ doAddToCartDetail :=>');
  return dispatch => {
    const orders = {
      product: data.jersey,
      jumlahPesan: data.jumlah,
      totalHarga: parseInt(data.jumlah) * parseInt(data.jersey.harga),
      totalBerat: parseInt(data.jumlah) * parseFloat(data.jersey.berat),
      keterangan: data.keterangan,
      ukuran: data.ukuran,
    };
    console.tron.log('🚀 ~ orders :=>', orders);
    // save to firebase
    FIREBASE.database()
      .ref('keranjangs/' + data.uid)
      .child('pesanans')
      .push(orders)
      .then(response => {
        console.tron.log('🚀 ~ response doAddToCartDetail :=>', response);
        // dispatchSuccess(
        //   dispatch,
        //   ActionTypes.ADD_TO_CART_SUCCESS,
        //   response ? response : [],
        // );
        navigation.navigate('Cart');
      })
      .catch(error => {
        dispatchFailed(dispatch, ActionTypes.ADD_TO_CART_FAILED, error);
      });
  };
};

export const doGetCartList = (id, navigation) => {
  return dispatch => {
    dispatchRequest(dispatch, ActionTypes.GET_CART_LIST_REQUEST);
    // get data from firebase
    FIREBASE.database()
      .ref('keranjangs/' + id)
      .once('value', querySnapshot => {
        if (querySnapshot.val()) {
          console.tron.log('🚀 ~ getCartList :=>', querySnapshot.val());
          dispatchSuccess(
            dispatch,
            ActionTypes.GET_CART_LIST_SUCCESS,
            querySnapshot.val() ? querySnapshot.val() : false,
          );
        } else {
          dispatchSuccess(dispatch, ActionTypes.GET_CART_LIST_SUCCESS, false);
        }
      });
  };
};

export const doDeleteCartItem = (id, mainCart, cart, navigation) => {
  return dispatch => {
    dispatchRequest(dispatch, ActionTypes.DELETE_CART_ITEM_REQUEST);
    const totalHargaBaru = mainCart.totalHarga - cart.totalHarga;
    const totalBeratBaru = mainCart.totalBerat - cart.totalBerat;

    if (totalHargaBaru === 0) {
      // delete main cart & detail
      FIREBASE.database()
        .ref('keranjangs')
        .child(mainCart.user)
        .remove()
        .then(response => {
          dispatchSuccess(dispatch, ActionTypes.DELETE_CART_ITEM_SUCCESS);
        })
        .catch(error => {
          dispatchFailed(dispatch, ActionTypes.DELETE_CART_ITEM_FAILED, error);
          alert(error);
        });
    } else {
      // update main cart
      FIREBASE.database()
        .ref('keranjangs')
        .child(mainCart.user)
        .update({
          totalBerat: totalBeratBaru,
          totalHarga: totalHargaBaru,
        })
        .then(response => {
          // delete orders
          dispatchSuccess(doDeleteDetailCart(id, mainCart, navigation));
        })
        .catch(error => {
          dispatchFailed(dispatch, ActionTypes.DELETE_CART_ITEM_FAILED, error);
          alert(error);
        });
    }
  };
};

export const doDeleteDetailCart = (id, mainCart, navigation) => {
  return dispatch => {
    // get data from firebase
    FIREBASE.database()
      .ref('keranjangs/' + mainCart.user)
      .child('pesanans')
      .child(id)
      .remove()
      .then(response => {
        dispatchSuccess(dispatch, ActionTypes.DELETE_CART_ITEM_SUCCESS);
      })
      .catch(error => {
        dispatchFailed(dispatch, ActionTypes.DELETE_CART_ITEM_FAILED, error);
        alert(error);
      });
  };
};
