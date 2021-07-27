const express = require('express');
const { createSubs, getsubs } = require('../controllers/subs');
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

router.get('/', getsubs);
router.post('/subs', createSubs);
module.exports = router;
