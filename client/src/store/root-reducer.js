import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import newsReducer from './news/news.reducer';
import alertReducer from './alert/alert.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
  alert: alertReducer
});
export default rootReducer;
