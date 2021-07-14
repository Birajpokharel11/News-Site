const ogs = require('open-graph-scraper');

const googleNewsAPI = require('../utils/news');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const utils = require('../utils/misc');

// @desc    Search News
// @route   POST /api/v1/news/search
// @access  Public
exports.searchNews = asyncHandler(async (req, res, next) => {
  // add user to req.body
  const country = req.body.country;
  const companies = req.body.companies;
  const themes = req.body.themes;

  let query = '';
  if (companies.length && themes.length) {
    query = `${companies} AND ${themes}`;
  } else if (companies.length && !themes.length) {
    query = `${companies}`;
  } else if (themes.length && !companies.length) {
    query = `${themes}`;
  }

  let result;
  try {
    if (query.length) {
      result = await googleNewsAPI.getNews(
        googleNewsAPI.SEARCH,
        query,
        'en',
        country
      );
    } else {
      result = await googleNewsAPI.getNews(null, query, 'en', country);
    }
  } catch (err) {
    return next(
      new ErrorResponse(err.message || 'Unable to send message', 401)
    );
  }

  res.status(201).json({ success: true, items: result.items });
});

// @desc    Scrap OG Tags
// @route   POST /api/v1/news/scrape
// @access  Public
exports.scrapeOG = asyncHandler(async (req, res, next) => {
  // add user to req.body
  const url = req.body.url;
  console.log(url);
  if (utils.isURL(url)) {
    const options = { url };
    ogs(options)
      .then((data) => {
        const { error, result } = data;
        if (error) {
          console.log('error:', error); // This returns true or false. True if there was an error. The error itself is inside the results object.
          return next(
            new ErrorResponse(
              error.message || `Unable to scrape URL:: ${url}`,
              500
            )
          );
        }

        // console.log('result:', result); // This contains all of the Open Graph results
        res.status(201).json({ success: true, ...result });
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).send('Internal Server Error');
      });
  } else {
    return next(new ErrorResponse(`Not Valid URL!! :: ${url}`, 500));
  }
});
