const { check, validationResult } = require('express-validator');

exports.userSubscribeValidator = [
  check('name', 'Name is required').notEmpty(),
  check('username', 'Username Must Be an Email Address').isEmail()
];
