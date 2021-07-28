const { check } = require('express-validator');

const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

const User = require('../models/subscribe');

// @desc    Get Subscriber
// @route   GET /api/v1/subscribe
// @access  Public
exports.getsubs = asyncHandler(async (req, res, next) => {
  const posts = await Post.find();
  if (!posts) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: posts });
});

// @desc    Create Subscriber
// @route   POST /api/v1/subscribe
// @access  Public
exports.createSubs = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const user = await User.create(req.body);
  res.status(200).json({
    success: true,
    data: user
  });
});
