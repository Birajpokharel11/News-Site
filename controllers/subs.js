const Post = require('../models/subscribe');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

exports.getsubs = asyncHandler(async(req, res, next) => {
  const posts = await Post.find()
  if (!posts) {
    return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: posts });
});

exports.createSubs = asyncHandler(async(req, res) => {
  const post = await Post.create(req.body);
  res.status(200).json({
    success: true,
    data: post
  });
});
