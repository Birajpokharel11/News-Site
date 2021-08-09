import * as actionTypes from './auth.types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SIGN_IN_START:
    case actionTypes.SIGN_UP_START:
    case actionTypes.LOAD_USER_START:
    case actionTypes.USER_UPDATE_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };

    case actionTypes.SIGN_IN_SUCCESS:
    case actionTypes.SIGN_UP_SUCCESS:
      console.log('hereatreducer', payload.data);
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        user: payload.data
      };
    case actionTypes.USER_UPDATE_SUCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        user: payload.data
      };

    case actionTypes.LOAD_USER_FAILURE:
    case actionTypes.SIGN_IN_FAILURE:
    case actionTypes.SIGN_UP_FAILURE:
    case actionTypes.SIGN_OUT_SUCCESS:
      console.log(123);
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };

    default:
      return state;
  }
};

export default authReducer;
