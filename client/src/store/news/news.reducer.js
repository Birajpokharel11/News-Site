import _ from 'lodash';
import * as actionTypes from './news.types';

const INITIAL_STATE = {
  news: {},
  featureNewsIDs: [],
  newsIDs: [],
  error: null,
  loading: false
};

const newsReducer = (state = INITIAL_STATE, action) => {
  let response, updatedState;
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_NEWS_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.FETCH_NEWS_SUCCESS:
      response = payload.response;
      updatedState = {
        ...state,
        loading: false
      };

      if (response.length) {
        const reordered = response.sort(
          (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
        );
        const ids = reordered.map((item) => item.guid.text);
        updatedState.newsIDs = ids;
        updatedState.featureNewsIDs = ids.slice(0, 5);
        reordered.forEach((item) => {
          if (!updatedState.news[item.guid.text]) {
            updatedState.news[item.guid.text] = item;
          }
        });
      } else {
        updatedState.newsIDs = [];
      }
      return updatedState;

    case actionTypes.GET_OG_SUCCESS:
      response = payload.response;
      const guid = payload.guid;

      updatedState = { ...state };

      if (!_.isNil(response.ogImage) && !_.isEmpty(response.ogImage)) {
        updatedState.news[guid] = {
          ...updatedState.news[guid],
          media: response.ogImage.url
        };
      }

      return updatedState;

    case actionTypes.FETCH_NEWS_FAIL:
    case actionTypes.GET_OG_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default newsReducer;
