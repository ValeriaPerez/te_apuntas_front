import asyncActionTypes from '../constants/action-types';

const initialState = {
  dataLogin: {},
  errorLogin: null,
  isLoading: false,  
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
        isLoading: false,
      };
    case asyncActionTypes.LOGIN.SUCCESS:
      return {
        ...state,
        dataLogin: action.payload.data,
        loadingLoging: action.payload.loading,
        errorLogin: action.payload.error,
        isLoading: true,
      };
    case asyncActionTypes.LOGIN.FAIL:
      return {
        ...state,
        dataLogin: action.payload.data,
        loadingLoging: action.payload.loading,
        errorLogin: action.payload.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default home;
