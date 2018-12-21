// 创建“关闭”按钮并将其附加到每个列表项 
var myNodelist = document.getElementsByTagName("li");
for (var i = 0; i < myNodelist.length; i++)
{
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// 单击关闭按钮隐藏当前列表项 
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i ++)
{
    close[i].onclick = function()
    {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}
// 单击列表项时添加“选中”符号 
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    ev.target.classList.toggle('checked');
}, false);
// 单击“添加”按钮时创建新的列表项 
function newElement()
{
    var li = document.createElement('li');
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue == '')
    {
        alert("你必须写点东西！");
    }
    else
    {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";

     var span = document.createElement("span");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     li.appendChild(span);

    for (var i = 0; i < close.length; i ++)
    {
        close[i].onclick = function()
        {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}