import * as actionTypes from './auth.types';

export const loadUserStart = () => ({
  type: actionTypes.LOAD_USER_START
});

export const loadUserSuccess = (currentUser) => ({
  type: actionTypes.LOAD_USER_SUCCESS,
  payload: currentUser
});

export const loadUserFail = (error) => ({
  type: actionTypes.LOAD_USER_FAILURE,
  payload: error
});

export const signinStart = (email, password) => ({
  type: actionTypes.SIGN_IN_START,
  payload: { email, password }
});

export const signinSuccess = (response) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: response
});

export const signinFail = (error) => ({
  type: actionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const signupStart = (name, email, password) => ({
  type: actionTypes.SIGN_UP_START,
  payload: { name, email, password }
});

export const signupSuccess = (response) => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: response
});

export const signupFail = (error) => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const signoutStart = (history) => ({
  type: actionTypes.SIGN_OUT_START,
  payload: { history }
});

export const signoutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS
});

export const signoutFail = (error) => ({
  type: actionTypes.SIGN_OUT_FAILURE,
  payload: error
});
