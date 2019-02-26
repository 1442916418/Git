// 当页面加载完成时，去服务器端请求所有的学生数据
function init()
{
    // 一、创建XMLHttpRequest对象
    var xhr;
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

    // 二、向服务器发送异步请求
    xhr.open('get', 'data/city.json', true);
    xhr.send();

    // 三、获得响应内容
    // 回调函数
    function callback()
    {
        if ( xhr.readyState==4 && xhr.status==200 )
        {
            // 响应JSON格式文本
            var jsonText = xhr.responseText;
            console.log(jsonText, typeof jsonText);

            // 将json格式的文本解析成js对象。1、早期的eval()，2、现在的全局对象JSON.parse()
            var obj2 = JSON.parse(jsonText);
            console.log(obj2);

            updateTable(obj2);
        }
    }

    xhr.onreadystatechange = callback;
}

// 添加数据
function updateTable(objArray)
{   
    var table = document.getElementById('stuTable');
    var tbody = document.getElementById('stuTbody');

    // 通过DOM跟新html中部分内容(表格中的数据)
    for ( var i = 0; i < objArray.length; i ++ )
    {
        
    }
}