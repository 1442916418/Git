var clearBtn = document.getElementsByClassName('clearCart')[0];
var addBtn =document.getElementsByClassName('addCart')[0];

clearBtn.onmouseover = function()
{
    clearBtn.style.background = "url(images/cart_keydn.png) no-repeat";
}
clearBtn.onmouseout = function()
{
    clearBtn.style.background = "url(images/cart.png) no-repeat";
}
addBtn.onmouseover = function()
{
    addBtn.style.background = "url(images/cart_keydn.png) no-repeat";
}
addBtn.onmouseout = function()
{
    addBtn.style.background = "url(images/cart.png) no-repeat";
}

var username = localStorage.getItem('userName');
var can = document.getElementById('can');
var log = document.getElementById('log');

if ( username )
{
    log.style.display = 'none';
    var userSpan = document.getElementById('welcome');
    userSpan.innerHTML = "欢迎," + username;
}
else
{
    var r = confirm('请登陆');
    if ( r == true )
    {
        location = 'index.html';
    }
    log.style.display = 'block';
}


can.onclick = function()
{
    var r = confirm('确定要注销吗？');
    if ( r == true )
    {
        var userSpan = document.getElementById('welcome');
        userSpan.innerHTML = '';
        log.style.display = 'block';
        localStorage.clear();
    }
}