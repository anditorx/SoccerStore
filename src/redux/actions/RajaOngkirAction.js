import axios from 'axios';
import * as ActionTypes from '../actionTypes.js';
import {CONSTANT, SERVICES} from '../../constant';

export const getProvinceList = () => {
  return dispatch => {
    // Loading
    dispatch({type: ActionTypes.GET_PROVINCE_REQUEST});
    axios({
      method: 'GET',
      url: `${CONSTANT.API_URL_RAJAONGKIR}${SERVICES.PROVINCE_LIST}`,
      timeout: CONSTANT.API_TIMEOUT,
      headers: CONSTANT.API_HEADER_RAJAONGKIR,
    })
      .then(res => {
        if (res.status !== 200) {
          // error
          dispatch({
            type: ActionTypes.GET_PROVINCE_FAILED,
            payload: {
              dataProvince: false,
              errorMessage: 'error',
            },
          });
        } else {
          dispatch({
            type: ActionTypes.GET_PROVINCE_SUCCESS,
            payload: {
              dataProvince: res.data ? res.data.rajaongkir.results : [],
            },
          });
        }
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.GET_PROVINCE_FAILED,
          payload: {
            dataProvince: false,
            errorMessage: err,
          },
        });
        alert(err);
      });
  };
};

export const getCityList = province_id => {
  return dispatch => {
    // Loading
    dispatch({type: ActionTypes.GET_CITY_REQUEST});
    axios({
      method: 'GET',
      url: `${CONSTANT.API_URL_RAJAONGKIR}${SERVICES.CITY_LIST}${province_id}`,
      timeout: CONSTANT.API_TIMEOUT,
      headers: CONSTANT.API_HEADER_RAJAONGKIR,
    })
      .then(res => {
        if (res.status !== 200) {
          // error
          dispatch({
            type: ActionTypes.GET_CITY_FAILED,
            payload: {
              dataCity: false,
              errorMessage: 'error',
            },
          });
        } else {
          dispatch({
            type: ActionTypes.GET_CITY_SUCCESS,
            payload: {
              dataCity: res.data ? res.data.rajaongkir.results : [],
            },
          });
        }
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.GET_CITY_FAILED,
          payload: {
            dataCity: false,
            errorMessage: err,
          },
        });
        alert(err);
      });
  };
};
