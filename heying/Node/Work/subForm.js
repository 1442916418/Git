var http = require('http');
var url = require('url');

var server = http.createServer(function(req, resp){
    console.log("请求的url地址：", req.url);
    resp.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});

    var Obj = url.parse(req.url, true).query;
    console.log('信息', Obj);
    
    resp.write("<html><head></head><body><h1>欢迎,"+Obj.name+"</h1></body></html>");
    
    resp.end();
});

server.listen(8989);