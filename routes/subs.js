const express = require('express');
const { check } = require('express-validator');

const { createSubs, getsubs } = require('../controllers/subs');

const router = express.Router();

router.get('/', getsubs);
router.post(
  '/',
  [
    check('email', 'Please include a valid Email').isEmail(),
    check('name', 'Name is required').exists()
  ],
  createSubs
);

module.exports = router;
