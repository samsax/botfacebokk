const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const LUISClient = require("luis-node-sdk");
const config = require("./config/config");
const Smooch = require('smooch-core');

var app = express();

// Smooch
const smooch = new Smooch({
    keyId: config.SMOOCH.KEYID,
    secret: config.SMOOCH.SECRET,
    scope: 'app'
});

// Luis
let LUISclient = LUISClient({
  appId: config.LUIS.APPID,
  appKey: config.LUIS.APPSECRET,
  verbose: true
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/message', (req, res) => {
  console.log(req.query);
  res.json({});
});

app.post('/message', (req, res) => {
  res.json({});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(config.PORT, function () {
    console.log('Example app listening on port 3000!')
});

module.exports = app;
