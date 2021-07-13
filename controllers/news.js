const request = require('request-promise');
const xml2js = require('xml2js');
const path = require('path');

const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Search News
// @route   POST /api/v1/news/
// @access  Public
exports.searchNews = asyncHandler(async (req, res, next) => {
  // add user to req.body
  const country = req.body.country;
  let company = req.body.company;
  let themes = req.body.themes;

  let query = `${company} AND ${themes}`;
  query = encodeURIComponent(query);
  let result, data;
  const parser = new xml2js.Parser(/* options */);
  console.log('query: ', query);

  try {
    data = await request(
      `https://news.google.com/rss/search?q=${query}&hl=en-${country}&ceid=${country}:en&gl=${country}`
    );
  } catch (err) {
    return next(
      new ErrorResponse(err.message || 'Unable to send message', 401)
    );
  }

  try {
    result = await parser.parseStringPromise(data);
  } catch (error) {
    new ErrorResponse(error.message || 'Error while parsing', 500);
  }

  const items = result['rss']['channel'][0].item;

  const list = items.map((item) => {
    // console.log(JSON.stringify(item).yellow.bold);
    const obj = {
      title: item.title[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
      guid: item.guid[0]['_'],
      media: item['media:content'] ? item['media:content'][0]['$']['url'] : null
    };

    if (item['source']) {
      obj.source = {
        name: item.source[0]['_'],
        url: item.source[0]['$']['url']
      };
    }

    if (item['description']) {
      obj.description = item.description[0];
    }

    if (item['content:encoded']) {
      obj.content = item['content:encoded'][0];
    }

    if (item['dc:creator']) {
      obj.creator = item['dc:creator'][0];
    }

    if (item['metadata:type']) {
      obj.metadata = {
        type: item['metadata:type'][0]
      };
    }

    return obj;
  });

  res.status(201).json({ success: true, items: list });
});
