import asyncActionTypes from '../constants/action-types';
import { getImagesHome } from '../../api-wrapper/api';

const initialState = {
  destinyInfo: null,
  loadingDestinyInfo: false,
  imagesDestiny: [],
  error: null,
  indexPage: null,
};

const destinyInfo = (state = initialState, action) => {
  switch (action.type) {
    /* --------------       RETRIEVE_API_AIRPORTS       -------------- */
    case asyncActionTypes.RETRIEVE_DESTINY_INFO.START:
      return {
        ...state,
        destinyInfo: action.payload.data,
        loadingDestinyInfo: action.payload.loading,
        error: action.payload.error,
        imagesDestiny: [],
        indexPage: null,
      };
    case asyncActionTypes.RETRIEVE_DESTINY_INFO.SUCCESS:
      return {
        ...state,
        destinyInfo: action.payload.data.results,
        loadingDestinyInfo: action.payload.loading,
        error: action.payload.error,
        imagesDestiny: getImages(action.payload.data.results),
        indexPage: action.payload.data.results.length > 0 ? 0 : null,
      };
    case asyncActionTypes.RETRIEVE_DESTINY_INFO.FAIL:
      return {
        ...state,
        destinyInfo: action.payload.data,
        loadingDestinyInfo: action.payload.loading,
        error: action.payload.error,
        imagesDestiny: [],
        indexPage: null,
      };
    default:
      return state;
  }
};

function getImages(data) {
  return data.map(index => {
    return index.imagenes.map(img => {
      return {url: img.imagen};
    });
  });
}

export default destinyInfo;
