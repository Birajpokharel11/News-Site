/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import {
  USER_REGISTER_SUCESS,
  USER_REGISTER_FAIL
} from '../../news/news.types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_SUCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case USER_REGISTER_FAIL:
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
