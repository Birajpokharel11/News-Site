import * as actionTypes from './auth.types';

export const userRegister = (name, email, password) => ({
  type: actionTypes.USER_REGISTER_START,
  payload: { name, email, password }
});
export const userRegisterSucess = (response) => ({
  type: actionTypes.USER_REGISTER_SUCESS,
  payload: response
});
export const userRegisterFail = (error) => ({
  type: actionTypes.USER_REGISTER_FAIL,
  payload: error
});

///////////////////////////////////////////////////////////////////////////

export const uerLogin = (email, password) => ({
  type: actionTypes.USER_LOGIN_START,
  payload: { email, password }
});

export const userLoginSucess = (response) => ({
  type: actionTypes.USER_LOGIN_SUCESS,
  payload: response
});

export const userLoginFail = (error) => ({
  type: actionTypes.USER_LOGIN_FAIL,
  payload: error
});
