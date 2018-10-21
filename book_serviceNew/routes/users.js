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
//用户登录接口
router.post('/login', function (req, res, next) {
  if (!req.body.username) {
      res.json({status: 1, message: "用户名为空"})
  }
  if (!req.body.password) {
      res.json({status: 1, message: "密码为空"})
  }
  user.findUserLogin(req.body.username, req.body.password, function (err, userSave) {
      if (userSave.length != 0) {
          //md5查看密码
          // res.json(userSave)
          // var md5 = crypto.createHash('md5');
          // var token_before = userSave[0]._id + init_token
          // res.json(userSave[0]._id)
          // var token_after = md5.update(token_before).digest('hex')
          var token_after = getMD5Password(userSave[0]._id)
          res.json({status: 0, data: {token: token_after,user:userSave}, message: "用户登录成功"})
      } else {
          res.json({status: 1, message: "用户名或者密码错误"})
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
  // 验证完整性，这里使用简单的 if 方式，可以使用正则表达式对于输入的格式进行验证
  if (!req.body.username){
    var username = '匿名用户'
  }
  if (!req.body.movie_id){
    res.json({status: 1, message: "电影 id 为空"})
  }
  if (!req.body.context){
    res.json({status: 1, message: "评论内容为空"})
  }
  // 根据数据集建立一个新的数据内容
  var saveComment = new comment({
    movie_id: req.body.movie_id,
    username: req.body.username ? req.body.username : username,
    context: req.body.context,
    check: 0
  })
  // 保存合适的数据集
  saveComment.save(function(err){
    if (err){
      res.json({status: 1,message: err})
    } else {
      res.json({status: 0,message: '评论成功'})
    }
  })
});

//用户点赞
router.post('/support', function (req, res, next) {
  if (!req.body.movie_id) {
      res.json({status: 1, message: "电影id传递失败"})
  }
  movie.findById(req.body.movie_id, function(err, supportMovie) {
      movie.update({_id: req.body.movie_id}, {movieNumSuppose: supportMovie.movieNumSuppose + 1}, function (err) {
          if (err) {
              res.json({status: 1, message: "点赞失败", data: err})
          }
          res.json({status: 0, message: '点赞成功'})
      })
  });
});



//用户找回密码
router.post('/findPassword', function (req, res, next) {
  //需要输入用户的邮箱信息和手机信息，同时可以更新密码
  //    这里需要两个返回情况，一个是req.body.repassword存在时，一个是repassword不存在
  //    这个接口同时用于密码的重置，需要用户登录
      if (req.body.repassword) {
          //    存在的时候，需要验证其登录情况或者验证其code验证
          if (req.body.token) {
              //    存在code登录状态时，验证其状态
              if (!req.body.user_id) {
                  res.json({status: 1, message: "用户登录错误"})
              }
              if (!req.body.password) {
                  res.json({status: 1, message: "用户老密码错误"})
              }
              if (req.body.token == getMD5Password(req.body.user_id)) {
                  user.findOne({_id: req.body.user_id, password: req.body.password}, function (err, checkUser) {
                      if (checkUser) {
                          user.update({_id: req.body.user_id}, {password: req.body.repassword}, function (err, userUpdate) {
                              if (err) {
                                  res.json({status: 1, message: "更改错误", data: err})
                              }
                              res.json({status: 0, message: '更改成功', data: userUpdate})
                          })
                      } else {
                          res.json({status: 1, message: "用户老密码错误"})
                      }
                  })
  
              } else {
                  res.json({status: 1, message: "用户登录错误"})
              }
  
          } else {
              //    不存在code时，直接验证mail和phone
              user.findUserPassword(req.body.username, req.body.userMail, req.body.userPhone, function (err, userFound) {
                  if (userFound.length != 0) {
                      user.update({_id: userFound[0]._id}, {password: req.body.repassword}, function (err, userUpdate) {
                          if (err) {
                              res.json({status: 1, message: "更改错误", data: err})
                          }
                          res.json({status: 0, message: '更改成功', data: userUpdate})
                      })
                  } else {
                      res.json({status: 1, message: "信息错误"})
                  }
              })
          }
      } else {
          //    这里只是验证mail和phone，为了前台验证，返回验证成功和所有的字段，改密码使用或者认证失败
          if (!req.body.username) {
              res.json({status: 1, message: "用户名称为空"})
          }
          if (!req.body.userMail) {
              res.json({status: 1, message: "用户邮箱为空"})
          }
          if (!req.body.userPhone) {
              res.json({status: 1, message: "用户手机为空"})
          }
          user.findUserPassword(req.body.username, req.body.userMail, req.body.userPhone, function (err, userFound) {
              if (userFound.length != 0) {
                  res.json({
                      status: 0,
                      message: "验证成功，请修改密码",
                      data: {username: req.body.username, userMail: req.body.userMail, userPhone: req.body.userPhone}
                  })
              } else {
                  res.json({status: 1, message: "信息错误"})
              }
          })
      }
  });
// 用户发送站内信
router.post('/sendEmail',function(req, res, next){
});
// 用户显示站内信，其中的 receive 参数值为 1 时是发送的内容，值为 2 时是收到的内容
router.post('/showEmail',function(req, res, next){
});

//获取md5值
function getMD5Password(id) {
  var md5 = crypto.createHash('md5');
  var token_before = id + init_token
  // res.json(userSave[0]._id)
  return md5.update(token_before).digest('hex')
}


module.exports = router;
