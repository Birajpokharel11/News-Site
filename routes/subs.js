const express = require('express');
const { createSubs, getsubs } = require('../controllers/subs');
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

router.get('/', getsubs);
router.post(
  '/subs',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'please include a valid email').isEmail()
  ],
  createSubs
);
module.exports = router;
