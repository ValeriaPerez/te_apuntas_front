import asyncActionTypes from '../constants/action-types';
import { login } from '../../api-wrapper/api';

/*        ---------------    LOGIN    ---------------        */
export function loginPost(data) {
  return function action(dispatch) {
    dispatch(loginStart());
    const request = login(data);
    request.then(response => {
        dispatch(loginSuccess(response));
    }).catch(error => {
      dispatch(loginFail(error));
    });
  };
}
  
export const loginStart = () => ({
  type: asyncActionTypes.LOGIN.START,
  payload: { 'data': {}, 'loading': true, error: null },
});

export const loginSuccess = (response) => ({
  type: asyncActionTypes.LOGIN.SUCCESS,
  payload: { 'data': response, 'loading': false, error: null },
});

export const loginFail = (error) => ({
  type: asyncActionTypes.LOGIN.FAIL,
  payload: { 'data': {}, 'loading': false, 'error': error },
});