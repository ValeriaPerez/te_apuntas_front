import asyncActionTypes from '../constants/action-types';

const initialState = {
  errorLogin: null,
  dataLogin: {},
  loadingLoging: false,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    /* --------------       LOGIN       -------------- */
    case asyncActionTypes.LOGIN.START:
      return {
        ...state,
        dataLogin: action.payload.data,
        loadingLoging: action.payload.loading,
        errorLogin: action.payload.error,
      };
    case asyncActionTypes.LOGIN.SUCCESS:
      return {
        ...state,
        dataLogin: action.payload.data,
        loadingLoging: action.payload.loading,
        errorLogin: action.payload.error,
      };
    case asyncActionTypes.LOGIN.FAIL:
      return {
        ...state,
        dataLogin: action.payload.data,
        loadingLoging: action.payload.loading,
        errorLogin: action.payload.error,
      };
    default:
      return state;
  }
};

export default home;
