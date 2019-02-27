// 一、创建XMLHttpRequest对象
var xhr;

// 判读浏览器是否兼容
if ( window.XMLHttpRequest )
{
    // ie7+ chrome firefox
    xhr = new XMLHttpRequest();
}
else
{
    // ie7 ie6 ie5
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

// console.log(xhr);

// 请求状态：0 未初始化，还未调用open()方法
// console.log(xhr.readyState);

// 二、向服务器端发送异步请求
// GET方式
// xhr.open('get', '接口', true);
// 请求状态：1 正在加载中
// console.log(xhr.readyState);
// 发送请求
// xhr.send();

// POST方式
xhr.open('post', '接口', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send();


// 三、获得服务器端响应的数据
// 根据响应处理状态的变化执行处理任务, 当状态发生变化时触发事件onreadystatechange
xhr.onreadyStatechange = function(){
    // 请求状态：2 3 4
    // console.log(xhr.readyState);

    if ( xhr.readyState == 4 && xhr.status == 200 )
    {
        // 响应完成
        // console.log('响应完成');
        // 获得响应的JSON内容
        var text = xhr.responseText;
        // console.log('响应的内容：', text, typeof text);

        // 将json格式的文本解析成js对象。1、早期的eval()，2、现在的全局对象JSON.parse()
        var obj = JSON.parse(text);
        // console.log('解析后：', obj, typeof obj);
        
        // 解析后通过DOM跟新HTML中的内容
        // ！！！
    }
}