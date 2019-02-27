var username = localStorage.getItem('userName');                    // 获取应用名
var can = document.getElementById('can');                           // 获取注销按钮
var log = document.getElementById('log');                           // 获取登陆按钮
var select = document.getElementsByClassName('select');             // 获取复选框
var prompt = document.getElementsByClassName('prompt')[0];          // 获取购物车提示标签
var shoList = document.getElementsByClassName('shoppingList')[0];   // 获取购物车区域框
var tradeNaem = document.getElementsByClassName('tradeName');       // 获取商品名称

window.onload = function()
{
    addCart();
    
    // 判断用户是否已登陆   
    if ( username )
    {   
        log.style.display = 'none';
        var userSpan = document.getElementById('welcome');
        userSpan.innerHTML = "欢迎," + username;
        // 取消禁用复选框选中按钮
        for ( var k = 0; k < select.length; k ++ )
        {
            select[k].disabled = false;
        }
    }
    else
    { 
        var r = confirm('请登陆');
        if ( r == true )
        {
            location = 'index.html';
        }
        log.style.display = 'block'; 
        shoList.innerHTML = "购物车空空如也！";
        // 禁用复选框选中按钮
        for ( var k = 0; k < select.length; k ++ )
        {
            select[k].disabled = true;
        }
    }
}

// 增加购物车按钮
function addCart()
{
    // 复选框
    for ( var i = 0; i < select.length; i ++ )
    {
    if ( select[i].checked == true )
    {
        var n = shoList.innerHTML += ( tradeNaem[i].innerHTML + "<br>" );
        console.log(tradeNaem[i].innerHTML);
        
        // 把复选框对应的商品名称存储到本地
        localStorage.setItem('tradeName', n);
    }
    }
    // 获取本地存储的商品名称
    shoList.innerHTML = localStorage.getItem('tradeName');
}

// 清除购物车按钮
function clearCart()
{
    var r = confirm("要清空购物车吗？");
    if (r == true) {
        for (var n = 0; n < select.length; n++) {
            select[n].checked = false;
        }
        localStorage.removeItem("tradeName");
        shoList.innerHTML = '';
    }
}

// 注销按钮
can.onclick = function()
{
    var r = confirm('确定要注销吗？');
    if ( r == true )
    {
        var userSpan = document.getElementById('welcome');
        userSpan.innerHTML = '';
        log.style.display = 'block';
        localStorage.clear();
        shoList.innerHTML = '';
        // 禁用复选框选中按钮
        for ( var k = 0; k < select.length; k ++ )
        {
            select[k].disabled = true;
            select[k].checked = false;
        }
    }
}
