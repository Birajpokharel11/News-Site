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
    case actionTypes.USER_REGISTER_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.USER_REGISTER_SUCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case actionTypes.USER_REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: true,
        loading: false
      };

    default:
      return state;
  }
};
export default authReducer;
