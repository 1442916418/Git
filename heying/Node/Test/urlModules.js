var url = require('url'); // 引入url模块
var urlString = "//www.aowin.com?name=zhs&pwd=123";

// 将url的字符串转换成url对象
// 参数2: 是否将url的查询参数解析成一个对象(保存在url对象的query属性中)
// 参数3: 在没有加协议的情况下,是否以//作为解析主机名的依据, 默认是false
var urlObj = url.parse(urlString, true, true);
console.log(urlObj);

// 请求参数
console.log("请求提交的参数 name: ",urlObj.query.name)
