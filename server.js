const path = require('path');
const express = require('express');
const colors = require('colors');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const errorHandler = require('./middleware/error');

// route files
const news = require('./routes/news');

const app = express();

// body parser
app.use(express.json());

// set security headers
app.use(helmet());

// prevent XSS attacks
app.use(xss());

// prevent http param pollution
app.use(hpp());

// mount routers
app.use('/api/v1/news', news);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error:: ${err.message}`.red);
  // close server & exit process
  server.close(() => process.exit(1));
});
