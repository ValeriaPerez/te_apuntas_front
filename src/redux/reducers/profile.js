import asyncActionTypes from '../constants/action-types';

const initialState = {
  profileInfo: null,
  loadingProfileInfo: false,
  error: null,
};

const profileInfo = (state = initialState, action) => {
  switch (action.type) {
    /* --------------       RETRIEVE_API_AIRPORTS       -------------- */
    case asyncActionTypes.RETRIEVE_PROFILE_INFO.START:
      return {
        ...state,
        profileInfo: action.payload.data,
        loadingProfileInfo: action.payload.loading,
        error: action.payload.error,
      };
    case asyncActionTypes.RETRIEVE_PROFILE_INFO.SUCCESS:
      return {
        ...state,
        profileInfo: action.payload.data,
        loadingProfileInfo: action.payload.loading,
        error: action.payload.error,
      };
    case asyncActionTypes.RETRIEVE_PROFILE_INFO.FAIL:
      return {
        ...state,
        profileInfo: action.payload.data,
        loadingProfileInfo: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default profileInfo;
