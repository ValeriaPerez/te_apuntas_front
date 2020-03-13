import asyncActionTypes from '../constants/action-types';
import { getDestinyInfo } from '../../api-wrapper/api';


export function retrieveDestinyInfo() {
  return function action(dispatch) {
    dispatch(retrieveDestinyInfoStart());
    const request = getDestinyInfo();
    request.then(response => {
        dispatch(retrieveDestinyInfoSucces(response));
    }).catch(error => {
      dispatch(retrieveDestinyInfoFail(error));
    });
  };
} // End function retrieveDestinyInfo

export const retrieveDestinyInfoStart = () => ({
  type: asyncActionTypes.RETRIEVE_DESTINY_INFO.START,
  payload: { 'data': [], 'loading': true, error: null },
});

export const retrieveDestinyInfoSucces = (response) => ({
  type: asyncActionTypes.RETRIEVE_DESTINY_INFO.SUCCESS,
  payload: { 'data': response, 'loading': false, error: null },
});

export const retrieveDestinyInfoFail = (error) => ({
  type: asyncActionTypes.RETRIEVE_DESTINY_INFO.FAIL,
  payload: { 'data': [], 'loading': false, 'error': error },
});
