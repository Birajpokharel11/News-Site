import { combineReducers } from 'redux';

import newsReducer from './news/news.reducer';
import alertReducer from './alert/alert.reducer';
import authReducer from './auth/reducers/auth.reducer';

const rootReducer = combineReducers({
  news: newsReducer,
  alert: alertReducer,
  auth: authReducer
});
export default rootReducer;
