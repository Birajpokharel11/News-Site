const express = require('express');

const { searchNews } = require('../controllers/news');

const router = express.Router();

router.route('/search').post(searchNews);

module.exports = router;
