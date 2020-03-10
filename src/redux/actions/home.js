import asyncActionTypes from '../constants/action-types';
import { getImagesHome } from '../../api-wrapper/api';

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
    payload: { 'data': [], 'loadingPNR': false, 'error': error },
  });