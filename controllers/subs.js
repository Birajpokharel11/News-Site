const Post = require('../models/subscribe');

exports.getsubs = (req, res) => {
  const posts = Post.find()
    .then((posts) => {
      res.json({ posts: posts });
    })
    .catch((err) => console.log(err));
};
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
