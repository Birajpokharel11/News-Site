import { all, call } from 'redux-saga/effects';

import { authSagas } from './auth/auth.sagas';
import { newsSagas } from './news/news.sagas';

export default function* rootSaga() {
  yield all([call(newsSagas), call(authSagas)]);
}
