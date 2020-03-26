import asyncActionTypes from '../constants/action-types';
import { getProfileInfo, patchProfileInfo } from '../../api-wrapper/api';


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

export const retrieveProfileInfoSuccess = (response) => ({
  type: asyncActionTypes.RETRIEVE_PROFILE_INFO.SUCCESS,
  payload: { 'data': response, 'loading': false, error: null},
});

export const retrieveProfileInfoFail = (error) => ({
  type: asyncActionTypes.RETRIEVE_PROFILE_INFO.FAIL,
  payload: { 'data': [], 'loading': false, 'error': error },
});

/*        ---------------    PATCH_PROFILE_INFO   ---------------        */
export function submitProfileInfo(data, token) {
  return function action(dispatch) {
    dispatch(submitProfileInfoStart());
    const request = patchProfileInfo(data, token);
    request.then(response => {
        dispatch(submitProfileInfoSuccess(response));
    }).catch(error => {
      dispatch(submitProfileInfoFail(error));
    });
  };
}

export const submitProfileInfoStart = () => ({
  type: asyncActionTypes.PATCH_PROFILE_DATA.START,
  payload: { 'data': {}, 'loading': true, error: null },
});

export const submitProfileInfoSuccess = (response) => ({
  type: asyncActionTypes.PATCH_PROFILE_DATA.SUCCESS,
  payload: { 'data': response, 'loading': false, error: null },
});

export const submitProfileInfoFail = (error) => ({
  type: asyncActionTypes.PATCH_PROFILE_DATA.FAIL,
  payload: { 'data': {}, 'loading': false, 'error': error },
});
