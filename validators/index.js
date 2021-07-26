// exports.userSubscribeValidator = (req, res, next) => {
//   req.check('name', 'Name is required').notEmpty();
//   req.check('email', 'email is required').notEmpty();
//   req
//     .check('email', 'Email must be between 3 to 32 characters')
//     .matches(/.+\@.+\..+/)
//     .withMessage('Email must contain @')
//     .isLength({
//       min: 4,
//       max: 2000
//     });
//   // check for password
//   const errors = req.validationErrors();
//   // if error show the first one as they happen
//   if (errors) {
//     const firstError = errors.map((error) => error.msg)[1];
//     return res.status(400).json({ error: firstError });
//   }
//   // proceed to next middleware
//   next();
// };
