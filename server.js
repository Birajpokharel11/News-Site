const path = require('path');
const express = require('express');
const colors = require('colors');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
//mongoose connect
mongoose
  .connect(
    'mongodb+srv://news123:news123@newssubs.c1wov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .then(console.log('connected to database'));

mongoose.connection.on('error', (err) => {
  console.log(`DB connection error: ${err.message}`);
});
const errorHandler = require('./middleware/error');

// route files
const news = require('./routes/news');
const subs = require('./routes/subs');

const app = express();

//middleware4
app.use(morgan('dev'));

// body parser
app.use(express.json());

// set security headers
app.use(helmet());

// prevent XSS attacks
app.use(xss());

// prevent http param pollution
app.use(hpp());

// enable CORS
app.use(cors());

app.get('/', (req, res) => res.send('API running...'));

// mount routers
app.use('/api/v1/news', news);

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
