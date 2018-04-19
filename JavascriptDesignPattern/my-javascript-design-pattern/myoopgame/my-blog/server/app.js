var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

//设置静态文件的托管
//当用户以URL/views开始请求返回__dirname + '/views'对应的文件
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//加载数据库模块
var mongoose= require('mongoose');

//数据库的连接
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/blog',function(error){
//     if(error){
//         console.log('连接数据库失败');
//     }else{
//         console.log('连接数据库成功');
//     }
// });

// Using `mongoose.connect`...
var promise = mongoose.connect("mongodb://localhost:27017/blog", {
  useMongoClient: true,
  /* other options */
});

promise.then(function(db) {
  logger('连接数据库成功');
}).catch(function(res){
  logger('连接数据库失败');
})

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('connect-livereload')());

//根据模块加载路由
var routes = require('./routes/index');
var users = require('./routes/users');
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  return next(err);
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
    return
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
  return
});


module.exports = app;
