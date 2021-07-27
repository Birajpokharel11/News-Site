/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
import { connect } from 'react-redux';

import {
  fetchNewsStart,
  newsSubscribeStart
} from '../../store/news/news.actions';

const mapStateToProps = (state) => ({
  news: state.news
});

const mapDispatchToProps = (dispatch) => ({
  onFetchNewsStart: (country, companies, themes) =>
    dispatch(fetchNewsStart(country, companies, themes)),
  onNewsSubscribeStart: (email, name) =>
    dispatch(newsSubscribeStart(email, name))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
