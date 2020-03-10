import asyncActionTypes from '../constants/action-types';

const initialState = {
  imagesHome: [],
  loadingImagesHome: false,
  error: null,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    /* --------------       RETRIEVE_API_AIRPORTS       -------------- */
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
    default:
      return state;
  }
};

export default home;
