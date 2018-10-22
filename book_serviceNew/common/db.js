var mongoose = require('mongoose');
var url = 'mongodb://localhost/movieServer'
mongoose.connect(url,{useNewUrlParser: true});
// 连接数据库
module.exports = mongoose;