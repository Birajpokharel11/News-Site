import { combineReducers } from 'redux';

import newsReducer from './news/news.reducer';
import alertReducer from './alert/alert.reducer';

const rootReducer = combineReducers({
  news: newsReducer,
  alert: alertReducer
});
export default rootReducer;
