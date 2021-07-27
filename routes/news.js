const express = require('express');

const { searchNews, scrapeOG } = require('../controllers/news');
const router = express.Router();

router.route('/search').post(searchNews);
router.route('/scrape').post(scrapeOG);

module.exports = router;
