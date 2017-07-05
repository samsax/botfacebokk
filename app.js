const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const LUISClient = require("luis-node-sdk");

const routes = require('./routes/index');

let LUISclient = LUISClient({
  appId: process.env.LUIS_APPID || 'f63da86c-5bdb-4b64-a889-d07bfb9bd43f',
  appKey: process.env.LUIS_APPKEY || '9b9a2e025a5c458bb1a477816916e023',
  verbose: true
});

LUISclient.predict("Quiero comer pizza", {
  //On success of prediction
  onSuccess: function (response) {
    printOnSuccess(response);
  },

  //On failure of prediction
  onFailure: function (err) {
    console.error(err);
  }
});

  let printOnSuccess = function (response) {
    console.log("Query: " + response.query);
    console.log("Top Intent: " + response.topScoringIntent.intent);
    console.log("Entities:", response.entities);
    for (var i = 1; i <= response.entities.length; i++) {
      console.log(i + "- " + response.entities[i - 1].entity);
      // console.log(response.entities[i-1].resolution);
    }
    if (typeof response.dialog !== "undefined" && response.dialog !== null) {
      console.log("Dialog Status: " + response.dialog.status);
      if (!response.dialog.isFinished()) {
        console.log("Dialog Parameter Name: " + response.dialog.parameterName);
        console.log("Dialog Prompt: " + response.dialog.prompt);
      }
    }
  };




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
