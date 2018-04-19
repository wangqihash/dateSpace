//加载模块
var mongoose= require('mongoose');
//引入users表结构
userSchema= require('../schemas/users');
//创建基于users表结构的model并暴露出去
module.exports = mongoose.model('User',userSchema);