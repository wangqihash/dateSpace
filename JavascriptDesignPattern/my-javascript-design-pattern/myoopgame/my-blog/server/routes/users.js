var express = require('express');
var router = express.Router();
//引入数据库的模型类
var User = require('../models/users');

var responseData;
router.use(function (req, res, next) {
    responseData = {
        code: 0,
        message: ""
    };
    return next();
});

//用户注册
/*
* 用户名不能为空，
* 密码不能为空
* 密码需要一致
* 用户名是否被注册*/
router.post('/register', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;
    //用户名不能为空
    if (username == "") {
        responseData.code = 1;
        responseData.message = "用户名不能为空";
        res.json(responseData);
        return
    }
    //密码不能为空
    if (password == "") {
        responseData.code = 2;
        responseData.message = "密码不能为空";
        res.json(responseData);
        return
    }
    //两次密码输入不一致
    if (password !== repassword) {
        responseData.code = 3;
        responseData.message = "两次密码输入不一致";
        res.json(responseData);
        return
    }
    //用户名是否被注册
    User.findOne({
        username: username
    }).then(function (userInfo) {
        //判断是否查询到数据
        if (userInfo) {
            responseData.code = 4;
            responseData.message = "用户名已存在";
            res.json(responseData);
            return
        }
        //创建一个User的实体类，用于存入用户数据
        var user = new User({
            username: username,
            password: password
        });
        return user.save();
    }).then(function (newUser) {
        if (!newUser) {
            return
        }
        responseData.message = "注册成功"
        res.json(responseData);
        return
    })
});

/**
 * 注册接口
 */
router.post('/login', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    if (username == "" || password == "") {
        responseData.code = 1;
        responseData.message = "用户名和密码不能为空！";
        res.json(responseData);
        return;
    }
    User.findOne({
        username: username,
        password: password
    }).then(function (userInfo) {
        if (!userInfo) {
            responseData.code = 2;
            responseData.message = "用户名或密码错误";
            res.json(responseData);
            return;
        }
        responseData.message = "登录成功";
        responseData.userInfo = {
            _id: userInfo._id,
            username: userInfo.username
        };
        res.cookie('userInfo', {
            _id: userInfo._id,
            username: userInfo.username
        }, { expires: new Date(Date.now() + 1000 * 60 * 60)});
        res.json(responseData);
        return;
    })
});

module.exports = router;
