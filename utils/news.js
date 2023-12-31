const GEO = 'geo';
const LOCATION = GEO;
const TOPIC = 'topic';
const SEARCH = 'search';
const TOP_NEWS = 'top-news';
const HIGHLIGHTS = TOP_NEWS;

const TOPICS_WORLD = 'WORLD';
const TOPICS_NATION = 'NATION';
const TOPICS_BUSINESS = 'BUSINESS';
const TOPICS_TECHNOLOGY = 'TECHNOLOGY';
const TOPICS_ENTERTAINMENT = 'ENTERTAINMENT';
const TOPICS_SCIENCE = 'SCIENCE';
const TOPICS_SPORTS = 'SPORTS';
const TOPICS_HEALTH = 'HEALTH';

const _generateGoogleFeedURL = function (method, query, lang, countryCode) {
  let feedUrl = 'https://news.google.com/rss';
  method = method ? method.toLowerCase() : method;
  if (method && method === 'topic') query = query.toUpperCase();
  switch (method) {
    case 'geo':
    case 'topic':
      feedUrl +=
        '/headlines/section/' + method.toLowerCase() + '/' + query + '?';
      break;
    case 'search':
      feedUrl += encodeURI('/search?q=' + query + '&');
      break;
    default:
      feedUrl += '?';
      break;
  }

  feedUrl +=
    'hl=' +
    lang +
    '-' +
    countryCode +
    '&gl=' +
    countryCode +
    'ceid=' +
    countryCode +
    ':' +
    lang;
  return feedUrl;
};

let _parseArr = function (arr) {
  if (Array.isArray(arr)) {
    arr = _shiftArr(arr);
  }

  if (Array.isArray(arr)) {
    for (let i = 0; i < (arr || []).length; i++) {
      arr[i] = _parseArr(arr[i]);
    }
  } else if (typeof arr === 'object') {
    if (arr['_']) arr['text'] = arr['_'];
    if (arr['$']) arr = Object.assign({}, arr, arr['$']);
    delete arr['_'];
    delete arr['$'];

    let keys = Object.keys(arr);
    for (let n = 0; n < keys.length; n++) {
      if (Array.isArray(arr[keys[n]])) arr[keys[n]] = _parseArr(arr[keys[n]]);
    }
  }
  return arr;
};

let _shiftArr = function (arr) {
  if (!arr || arr.length > 1) return arr;
  return arr.shift();
};

let request = function (url, callback) {
  let http = require('https');
  http.get(url, function (res) {
    res.on('error', function (err) {
      callback(err);
    });

    let data = '';
    res.on('data', function (chunk) {
      data += chunk.toString();
    });

    res.on('end', function () {
      // follow redirect is status code is 302 and new location exists
      if (
        res.statusCode >= 300 &&
        res.statusCode < 400 &&
        res.headers.location
      ) {
        request(res.headers.location, callback);
        return;
      }
      callback(null, data);
    });
  });
};

/**
 * Get Google's News Feed
 *
 * @param method
 * @param query
 * @param lang
 * @param countryCode
 * @returns {Promise<object>}
 */
const getNews = async function (method, query, lang, countryCode) {
  return new Promise((resolve, reject) => {
    const feedUrl = _generateGoogleFeedURL(method, query, lang, countryCode);

    request(feedUrl, function (err, data) {
      if (err) {
        return reject(err);
      }

      let xml2js = require('xml2js');
      xml2js.parseString(data, function (err, result) {
        if (err) {
          return reject(err);
        }

        if (!result['rss'] || !result['rss']['channel']) {
          resolve([]);
          return;
        }

        let rss = _parseArr(result['rss']['channel']);
        if (rss.item && Array.isArray(rss.item)) {
          rss.items = [].concat(rss.item.slice());
          delete rss.item;
        } else if (typeof rss.item === 'object') {
          rss.items = [Object.assign({}, rss.item)];
          delete rss.item;
        } else {
          rss.items = [];
          delete rss.item;
        }

        resolve(rss);
      });
    });
  });
};

module.exports = {
  HIGHLIGHTS,
  TOP_NEWS,
  LOCATION,
  SEARCH,
  TOPIC,
  GEO,
  getNews,
  TOPICS_WORLD,
  TOPICS_NATION,
  TOPICS_BUSINESS,
  TOPICS_TECHNOLOGY,
  TOPICS_ENTERTAINMENT,
  TOPICS_SCIENCE,
  TOPICS_SPORTS,
  TOPICS_HEALTH
};
