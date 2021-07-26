const Post = require('../models/subscribe');

exports.createSubs = (req, res) => {
  const post = new Post(req.body);
  post.save((err, result) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(200).json({
      result
    });
  });
};
