
var addCom = $class('cartBtn');
var total = 0;      // 商品总数
var page = true;    // 页面状态
// 加入购物车按钮
for ( var i = 0; i < addCom.length; i ++ )
{
    addCom[i].index = i;
    addCom[i].onclick = function(){
        var tbody = this.parentNode.parentNode.parentNode.parentNode;    // 按钮的最外层table
        var comName = tbody.rows[0].cells[0].innerText;     // 商品名称
        var cartTb= $id('tb');      // 购物车tbody
        var cartName = cartTb.rows;

        if ( cartTb.rows.length == 0 )
        {
            addCart(this);
        }
        else
        {

            for ( var j = 0; j <cartName.length; j ++ )
            {
                var name = cartName[j].cells[1].innerHTML
                if ( name == comName )
                {
                    var number = cartName[j].cells[2].getElementsByClassName('number')[0];
                    console.log(number);
                    number.innerHTML = number++;
                    return;
                }
            }
            addCart(this);
        }
    }
}

// 增加订单
function addCart(own)
{
    var myNum = $id('num');     // 总数
    var cartTb= $id('tb');      // 购物车tbody
    var tbody = own.parentNode.parentNode.parentNode.parentNode;    // 按钮的最外层table
    var number = 0;     // 单个商品数量

    myNum.innerText = ++total;
    promptInformation('加入成功');

    var tr = cartTb.insertRow(-1);
    tr.insertCell(-1).innerHTML = '<input type="checkBox" id="chk" onclick="selection(this)">';
    tr.insertCell(-1).innerHTML =  tbody.rows[0].cells[0].innerText;
    var oBox = document.createElement('div');
    var oReduce = document.createElement('div');
    var oIncrease = document.createElement('div');
    var oNumber = document.createElement('div');
    oBox.className = 'box';
    oReduce.className = 'reduce';
    oIncrease.className = 'increase';
    oNumber.className = 'number';
    oNumber.innerHTML = ++number;
    oBox.appendChild(oReduce);
    oBox.appendChild(oIncrease);
    oBox.appendChild(oNumber);
    tr.insertCell(-1).appendChild(oBox);
    tr.insertCell(-1).innerHTML = tbody.rows[0].cells[1].innerText;
    tr.insertCell(-1).innerHTML = '<input type="button" id="del" value="删除" onclick="del(this)">';
}
// 单选框
function selection(own)
{

}
// 删除
function del(own)
{
    var tTbody = own.parentNode.parentNode.parentNode;
    var tr = own.parentNode.parentNode.rowIndex;
    var myNum = $id('num');     // 总数
    tTbody.deleteRow(tr-1);
    myNum.innerText = --total;
    promptInformation('删除成功');
}
function $id(id)
{
    return document.getElementById(id);
}
function $class(cl)
{
    return document.getElementsByClassName(cl);
}
// 提示信息
function promptInformation(txt) {
    var prompt = document.getElementsByClassName('prompt')[0];
    var subElement = prompt.children[0];

    subElement.innerHTML = txt;
    prompt.setAttribute('id', 'addAnimation');
    setTimeout("closePrompt()", 1500);
}
// 弹窗隐藏
function closePrompt() {
    var prompt = document.getElementsByClassName('prompt')[0];
    prompt.setAttribute('id', '');
}
// 页面切换
function goCart(own)
{
    var content = $id('buy');
    var myCart = $id('dd');
    if ( page == true )
    {
        content.style.display = 'none';
        myCart.style.display = 'block';
        page = false;
    }
    else
    {
        content.style.display = 'block';
        myCart.style.display = 'none';
        page = true;
    }
}