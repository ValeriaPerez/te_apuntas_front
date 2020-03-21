import asyncActionTypes from '../constants/action-types';
import { getProfileInfo } from '../../api-wrapper/api';


export function retrieveProfileInfo() {
  return function action(dispatch) {
    dispatch(retrieveProfileInfoStart());
    const request = getProfileInfo();
    request.then(response => {
        dispatch(retrieveProfileInfoSuccess(response));
    }).catch(error => {
      dispatch(retrieveProfileInfoFail(error));
    });
  };
} // End function retrieveProfileInfo

export const retrieveProfileInfoStart = () => ({
  type: asyncActionTypes.RETRIEVE_PROFILE_INFO.START,
  payload: { 'data': [], 'loading': true, error: null },
});

export const retrieveProfileInfoSuccess = (response) => (  
  {
    type: asyncActionTypes.RETRIEVE_PROFILE_INFO.SUCCESS,
    payload: { 'data': response, 'loading': false, error: null
  },
});

export const retrieveProfileInfoFail = (error) => ({
  type: asyncActionTypes.RETRIEVE_PROFILE_INFO.FAIL,
  payload: { 'data': [], 'loading': false, 'error': error },
});
