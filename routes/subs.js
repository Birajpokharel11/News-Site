const express = require('express');
const { createSubs } = require('../controllers/subs');
const router = express.Router();

router.post('/subs', createSubs);

module.exports = router;
