import asyncActionTypes from '../constants/action-types';

const initialState = {
  imagesHome: [],
  loadingImagesHome: false,
  error: null,
  submitContactanos: {},
  loadingSubmitContactanos: false,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    /* --------------       RETRIEVE_IMAGES_HOME       -------------- */
    case asyncActionTypes.RETRIEVE_IMAGES_HOME.START:
      return {
        ...state,
        imagesHome: action.payload.data,
        loadingImagesHome: action.payload.loading,
        error: action.payload.error,
      };
    case asyncActionTypes.RETRIEVE_IMAGES_HOME.SUCCESS:
      return {
        ...state,
        imagesHome: action.payload.data.results,
        loadingImagesHome: action.payload.loading,
        error: action.payload.error,
      };
    case asyncActionTypes.RETRIEVE_IMAGES_HOME.FAIL:
      return {
        ...state,
        imagesHome: action.payload.data,
        loadingImagesHome: action.payload.loading,
        error: action.payload.error,
      };
    /* --------------       SAVE_DATA_CONTACT       -------------- */
    case asyncActionTypes.SAVE_DATA_CONTACT.START:
      return {
        ...state,
        submitContactanos: action.payload.data,
        loadingSubmitContactanos: action.payload.loading,
        error: action.payload.error,
      };
    case asyncActionTypes.SAVE_DATA_CONTACT.SUCCESS:

    return {
        ...state,
        submitContactanos: action.payload.data,
        loadingSubmitContactanos: action.payload.loading,
        error: action.payload.error,
      };
    case asyncActionTypes.SAVE_DATA_CONTACT.FAIL:
      return {
        ...state,
        submitContactanos: action.payload.data,
        loadingSubmitContactanos: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default home;
