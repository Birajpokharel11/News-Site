const express = require('express');

const { searchNews, scrapeOG } = require('../controllers/news');
const { check, validationResult } = require('express-validator');
const router = express.Router();

router
  .route('/search', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'please include a valid email').isEmail()
  ])
  .post(searchNews);
router.route('/scrape').post(scrapeOG);

module.exports = router;
