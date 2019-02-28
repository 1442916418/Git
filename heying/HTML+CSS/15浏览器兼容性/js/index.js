var cartBtn = $ID('content-MyShoppingCart');    // 获取我的购物车按钮
var orderBtn = $ID('order');    // 获取继续任性点餐按钮
var page = true;

// 加入购物车
function addCommodity(own)
{
    var tbody = own.parentNode.parentNode.parentNode.parentNode;

    console.log(tbody.rows[0].cells[0]);
}

// 切换页面
function switchover(){
    var comContent = $ID('content');     // 获取商品内容
    var MyCart = $ID('myShoppingCart');     // 获取购物车表格


    if ( page == true )
    {
        comContent.style.display = 'none';
        MyCart.style.display = 'block';
        page = false;
    }
    else
    {
        comContent.style.display = 'block';
        MyCart.style.display = 'none';
        page = true;
    }
}

function $ID(id)
{
    return document.getElementById(id);
}
function $Class(c)
{
    return document.getElementsByClassName(c);
}