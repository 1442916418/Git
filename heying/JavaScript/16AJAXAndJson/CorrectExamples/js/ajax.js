// 当页面加载完成时，去服务器端请求所有的学生数据
function init()
{
    // 一、创建XMLHttpRequest对象
    var xhr;
    if ( window.XMLHttpRequest )
    {
        xhr = new XMLHttpRequest();
    }
    else
    {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    // 二、向服务器发送异步请求
    xhr.open('GET', 'data/student.json', true);
    xhr.send();

    // 三、获得响应内容
    // 回调函数
    function callback()
    {
        if ( xhr.readyState==4 && xhr.status==200 )
        {
            var jsonText = xhr.responseText;
            console.log(jsonText, typeof jsonText);

            // 将json格式的文本解析成js对象。1、早期的eval()，2、现在的全局对象JSON.parse()
            var obj2 = JSON.parse(jsonText);
            console.log(obj2);

            // 通过DOM跟新html中部分内容(表格中的数据)
            var table = document.getElementById('stuTable');
            var tr = table.insertRow(-1);
            tr.insertCell(-1).innerHTML = obj2.stuid;
            tr.insertCell(-1).innerHTML = obj2.name;
            tr.insertCell(-1).innerHTML = obj2.sex;
            tr.insertCell(-1).innerHTML = obj2.age;
        }
    }

    xhr.onreadystatechange = callback;
}