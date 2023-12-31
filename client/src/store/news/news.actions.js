import * as actionTypes from './news.types';

export const fetchNewsStart = (country, companies, themes) => ({
  type: actionTypes.FETCH_NEWS_START,
  payload: { country, companies, themes }
});

export const fetchNewsSuccess = (response, merge = false) => ({
  type: actionTypes.FETCH_NEWS_SUCCESS,
  payload: { response, merge }
});

export const fetchNewsFail = (error) => ({
  type: actionTypes.FETCH_NEWS_FAIL,
  payload: error
});

export const getOGSuccess = (guid, response) => ({
  type: actionTypes.GET_OG_SUCCESS,
  payload: { guid, response }
});

export const getOGFail = (error) => ({
  type: actionTypes.GET_OG_FAIL,
  payload: error
});

export const newsSubscribeStart = (email, name) => ({
  type: actionTypes.NEWS_SUBSCRIBE_START,
  payload: { email, name }
});

export const newsSubscribeSuccess = (response) => ({
  type: actionTypes.NEWS_SUBSCRIBE_SUCCESS,
  payload: response
});

export const newsSubscribeFail = (error) => ({
  type: actionTypes.NEWS_SUBSCRIBE_FAIL,
  payload: error
});
