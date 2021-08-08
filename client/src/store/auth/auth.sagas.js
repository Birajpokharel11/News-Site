import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from './auth.types';
import * as actions from './auth.actions';

import { openAlert } from '../alert/alert.actions';
import setAuthToken from 'src/utils/setAuthToken';

export function* loadUserAsync() {
  if (localStorage.token) {
    console.log(localStorage.token);
    setAuthToken(localStorage.token);
  }

  try {
    const { data } = yield axios.get('/api/v1/auth/me');
    console.log(data);

    yield put(actions.loadUserSuccess(data));
    yield put(openAlert('Loaded Sucessfully', 'success'));
  } catch (err) {
    console.error(err);
    yield put(actions.loadUserFail(err));
    yield put(openAlert('Load failed !!', 'error'));
  }
}

export function* onSigninAsync({ payload: { email, password } }) {
  try {
    const { data } = yield axios.post('/api/v1/auth/login', {
      email,
      password
    });
    console.log(data);

    yield put(actions.signinSuccess(data));
    yield put(openAlert('Login Sucessfully!', 'success'));
  } catch (err) {
    console.error(err);
    yield put(actions.signinFail(err));
    yield put(
      openAlert('Invalid Credentials,Email or Password Incorrect!!', 'error')
    );
  }
}

export function* onSignupAsync({ payload: { name, email, password } }) {
  try {
    const { data } = yield axios.post('/api/v1/auth/register', {
      name,
      email,
      password
    });
    console.log(data);

    yield put(actions.signupSuccess(data));
    yield put(openAlert('Registered Sucessfully', 'success'));
  } catch (err) {
    console.error(err);
    yield put(actions.signupFail(err));
    yield put(openAlert('Registration failed !!', 'error'));
  }
}

export function* signOutAsync() {
  try {
    const { data } = yield axios.get('/api/v1/auth/logout');
    console.log(data);

    yield put(actions.signoutSuccess(data));
  } catch (err) {
    console.error(err);
    yield put(actions.signoutFail(err));
  }
}
export function* watchRegisterUser() {
  yield takeLatest(actionTypes.SIGN_UP_START, onSignupAsync);
}

export function* watchSignin() {
  yield takeLatest(actionTypes.SIGN_IN_START, onSigninAsync);
}

// export function* watchSignup() {
//   yield takeLatest(actionTypes.SIGN_UP_START, onSignupAsync);
// }

export function* watchSignout() {
  yield takeLatest(actionTypes.SIGN_OUT_START, signOutAsync);
}
export function* loadUserStart() {
  yield takeLatest(actionTypes.LOAD_USER_START, loadUserAsync);
}
export function* authSagas() {
  yield all([call(watchRegisterUser)]);
  yield all([call(loadUserStart)]);
  yield all([call(watchSignin)]);
}
