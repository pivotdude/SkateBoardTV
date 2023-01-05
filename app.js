var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
const crypto = require('crypto')
require('dotenv').config();

var app = express();

start()

app.use(function (req, res, next) {
  res.setHeader('Accept', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(function(err, req, res, next) {
  console.log(req.method)
  if (req.method == 'OPTION') {
    res.status(200)
  }
  next()
})

AuthParse()
var apiRouter = require('./routes/api');
var usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/api', apiRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // res.status(400).json({message: "Page not found"})
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function AuthParse() {
  app.use((req, res, next) => {

    if (req.headers['authorization']) {

      // console.log(res.headers['Authorization'].replace('Bearer ', ''))
      let tokenParts = req.headers.authorization.split('.')

      let signature = crypto.createHmac('SHA256', process.env.SECRET_TOKEN)
          .update(`${tokenParts[0]}.${tokenParts[1]}`)
          .digest('base64')
          .replace('=', '')

          // .replace('-', '+')
           .replace(/\+/g, '-')
          // .replace('_', '/')
          .replace(/\//g, '_')

      // console.log(`'${signature}' == '${tokenParts[2]}'`)

      if (signature === tokenParts[2]) {
        // console.log('=')
        req.user = JSON.parse(Buffer.from(tokenParts[1], 'base64').toString('utf8'))
      }

    }
    next()
  })
}
async function start() {
  try {
    await mongoose.connect(process.env.DB_PATH, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`Mongoose connected`)
  } catch (e) {
    console.log('Server error: ' + e.message)
    process.exit(1)
  }
}


module.exports = app;
