const express = require('express');
const { createSubs, getsubs } = require('../controllers/subs');
const asyncHandler = require('../middleware/async');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/subscribe');
router.get('/', getsubs);
router.post(
  '/subs',
  body('name', 'Name is required').notEmpty().isLength({ min: 4 }),
  body('email', 'Email is required with symbol @').isEmail().normalizeEmail(),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: errors.array()[0].msg
      });
    }
    const user = await User.create(req.body);
    res.status(200).json({
      success: true,
      data: user
    });
  })
);
module.exports = router;
