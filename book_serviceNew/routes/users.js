// 引用相关的文件和代码包
var express = require('express');
var router = express.Router();
var user =  require('../models/user');
var crypto = require('crypto');
var movie = require('../models/movie');
var mail = require('../models/mail');
var comment = require('../models/comment');
const init_token = 'TKL02o';

/*GET users listing. */
// 用户登录接口
router.post('/login',function(req, res, next){
  // 验证完整性，这里使用简单的 if 方式，可以使用正则表达式对输入的格式进行验证
  if (!req.body.username)
  {
    res.json({status: 1, message: '用户名为空'})
  }
  if (!req.body.password)
  {
    res.json({status: 1, message: '密码为空'})
  }
  user.findUserLogin(req.body.username, req.body,password, function(err, userSave){
    if (userSave.length != 0){
      // 通过 MD5 查看密码
      var token_after = getMD5Password(userSave[0]._id)
      res.json({status: 0, data: {token: token_after,user: userSave},message: '用户登录成功'})
    }
  })
});

//用户注册接口
router.post('/register', function (req, res, next) {
  if (!req.body.username) {
      res.json({status: 1, message: "用户名为空"})
  }
  if (!req.body.password) {
      res.json({status: 1, message: "密码为空"})
  }
  if (!req.body.userMail) {
      res.json({status: 1, message: "用户邮箱为空"})
  }
  if (!req.body.userPhone) {
      res.json({status: 1, message: "用户手机为空"})
  }
  user.findByUsername(req.body.username, function (err, userSave) {
      if (userSave.length != 0) {
          // res.json(userSave)
          res.json({status: 1, message: "用户已注册"})
      } else {
          var registerUser = new user({
              username: req.body.username,
              password: req.body.password,
              userMail: req.body.userMail,
              userPhone: req.body.userPhone,
              userAdmin: 0,
              userPower: 0,
              userStop: 0
          })
          registerUser.save(function () {
              res.json({status: 0, message: "注册成功"})
          })
      }
  })

});
// 用户提交评论
router.post('/postCommment',function(req, res, next){
});
// 用户点赞
router.post('/support',function(req, res, next){
});
// 用户找回密码
router.post('/findPassword',function(req, res , next){
});
// 用户发送站内信
router.post('/sendEmail',function(req, res, next){
});
// 用户显示站内信，其中的 receive 参数值为 1 时是发送的内容，值为 2 时是收到的内容
router.post('/showEmail',function(req, res, next){
});

// 获取MD5值
function getMD5Password(id){
  var md5 = crypto.createHash('md5');
  var token_before = id + init_token;

  return md5.update(token_before).digest('hex');
}

module.exports = router;
