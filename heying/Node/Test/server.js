var http = require('http');

var server = http.createServer(function(req, resp){
    console.log('客户端的请求：', req);

    // 响应头信息
    resp.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    // 响应内容
    resp.write("<html><head></head><body><h1>hello node server!修改</h1><ul><li>111</li><li>111</li><li>111</li><li>111</li></ul></body></html>");
    // 响应介绍
    resp.end();
});

// 启动服务器，绑定端口号，建议1024以上
server.listen(8989);