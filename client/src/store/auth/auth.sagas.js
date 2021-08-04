import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from './auth.types';
import * as actions from './auth.actions';

import { openAlert } from '../alert/alert.actions';

//register user
export function* registerUserAsync({ payload: { name, email, password } }) {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const newUser = {
      name,
      email,
      password
    };
    console.log(name);
    const body = JSON.stringify(newUser);
    const { data } = yield axios.post('/api/v1/signup', config, body);
    console.log(data.data);

    yield put(actions.userRegisterSucess(data));
    yield put(openAlert('Registered Sucessfully', 'success'));
  } catch (err) {
    console.error(err);
    yield put(actions.userRegisterFail(err));
    yield put(openAlert('Registration failed !!', 'error'));
  }
}

export function* watchRegisterUser() {
  yield takeLatest(actionTypes.USER_REGISTER_START, registerUserAsync);
}

export function* authSagas() {
  yield all([call(watchRegisterUser)]);
}
