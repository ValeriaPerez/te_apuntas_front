import asyncActionTypes from '../constants/action-types';
import { getImagesHome, postContactanos } from '../../api-wrapper/api';

/*        ---------------    RETRIEVE_IMAGES_HOME    ---------------        */
export function retrieveImagesHome() {
    return function action(dispatch) {
      dispatch(retrieveImagesHomeStart());
      const request = getImagesHome();
      request.then(response => {
        dispatch(retrieveImagesHomeSucces(response));
      }).catch(error => {
        dispatch(retrieveImagesHomeFail(error));
      });
    };
  }
  
  export const retrieveImagesHomeStart = () => ({
    type: asyncActionTypes.RETRIEVE_IMAGES_HOME.START,
    payload: { 'data': [], 'loading': true, error: null },
  });
  
  export const retrieveImagesHomeSucces = (response) => ({
    type: asyncActionTypes.RETRIEVE_IMAGES_HOME.SUCCESS,
    payload: { 'data': response, 'loading': false, error: null },
  });
  
  export const retrieveImagesHomeFail = (error) => ({
    type: asyncActionTypes.RETRIEVE_IMAGES_HOME.FAIL,
    payload: { 'data': [], 'loading': false, 'error': error },
  });

/*        ---------------    SAVE_DATA_CONTACT    ---------------        */
export function submitContactanos(data, token) {
  return function action(dispatch) {
    dispatch(submitContactanosStart());
    const request = postContactanos(data, token);
    request.then(response => {
        dispatch(submitContactanosSuccess(response));
    }).catch(error => {
      dispatch(submitContactanosFail(error));
    });
  };
}

export const submitContactanosStart = () => ({
  type: asyncActionTypes.SAVE_DATA_CONTACT.START,
  payload: { 'data': {}, 'loading': true, error: null },
});

export const submitContactanosSuccess = (response) => ({
  type: asyncActionTypes.SAVE_DATA_CONTACT.SUCCESS,
  payload: { 'data': response, 'loading': false, error: null },
});

export const submitContactanosFail = (error) => ({
  type: asyncActionTypes.SAVE_DATA_CONTACT.FAIL,
  payload: { 'data': {}, 'loading': false, 'error': error },
});