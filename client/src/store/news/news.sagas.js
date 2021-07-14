import { takeLatest, call, put, all, select, delay } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from './news.types';
import * as actions from './news.actions';

const getNews = (state) => state.news;

export function* fetchNewsAsync({ payload: { country, companies, themes } }) {
  if (Array.isArray(companies) && companies.length) {
    companies = companies.join(' OR ');
  }
  if (Array.isArray(themes) && themes.length) {
    themes = themes.join(' OR ');
  }

  try {
    const { data } = yield axios.post('/api/v1/news/search', {
      country,
      companies,
      themes
    });
    yield put(actions.fetchNewsSuccess(data.items));
  } catch (err) {
    yield put(actions.fetchNewsFail(err));
  }
}

export function* chunkGen(collection, size = 2, i = 0) {
  for (; i < collection.length; i += size) {
    yield collection.slice(i, i + size);
  }
}

export function* fetchOgTag(item) {
  const newsState = yield select(getNews);

  if (!newsState.news[item.guid.text].media) {
    try {
      const { data } = yield axios.post('/api/v1/news/scrape', {
        url: item.link
      });
      console.log(data);

      yield put(actions.getOGSuccess(item.guid.text, data));
    } catch (err) {
      console.error(err);
      yield put(actions.getOGFail(err));
    }
  }
}

export function* fetchOgTagAsync({ payload: { response } }) {
  const chunkedList = yield call(chunkGen, response, 10);

  for (const arr of chunkedList) {
    yield all(arr.map((item) => call(fetchOgTag, item)));
    yield delay(15 * 1000); // delay 15 sec
  }
}

export function* watchFetchNews() {
  yield takeLatest(actionTypes.FETCH_NEWS_START, fetchNewsAsync);
}

export function* watchFetchNewsSuccess() {
  yield takeLatest(actionTypes.FETCH_NEWS_SUCCESS, fetchOgTagAsync);
}

export function* newsSagas() {
  yield all([call(watchFetchNews), call(watchFetchNewsSuccess)]);
}
