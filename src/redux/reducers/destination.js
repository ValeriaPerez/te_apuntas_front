import asyncActionTypes from '../constants/action-types';

const initialState = {
  destinyInfo: null,
  loadingDestinyInfo: false,
  error: null,
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
      };
    case asyncActionTypes.RETRIEVE_DESTINY_INFO.SUCCESS:
      return {
        ...state,
        destinyInfo: action.payload.data.results,
        loadingDestinyInfo: action.payload.loading,
        error: action.payload.error,
      };
    case asyncActionTypes.RETRIEVE_DESTINY_INFO.FAIL:
      return {
        ...state,
        destinyInfo: action.payload.data,
        loadingDestinyInfo: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default destinyInfo;
