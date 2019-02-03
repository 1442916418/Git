// 切换购物车页面
var oBtn = document.getElementById('content-MyShoppingCart');
var oContent = document.getElementById('content');
var oMyCart = document.getElementById('myShoppingCart');
var page = true;


oBtn.onclick = function()
{
    if ( page == true )
    {
        oContent.style.display = 'none';
        oMyCart.style.display = 'block';
        page = false;
    }
    else
    {
        oMyCart.style.display = 'none';
        oContent.style.display = 'block';
        page = true;
    }
}

var aInput = document.getElementsByClassName('btn');              // 加入购物车按钮

// 购物车操作
for ( var i = 0; i < aInput.length; i ++ )
{
    var number = 0;
    var timer;
    aInput[i].index = i;

    var oTab = document.getElementById('tab');                          // 购物车表格
    var oCount = document.getElementById('content-0');                  // 我的购物车数量
    var oPrompt = document.getElementById('prompt');                    // 提示框

    aInput[i].onclick = function()
    {
        var aIntroduce = document.getElementsByClassName('introduce')[this.index];   // 商品详细信息
        var oItem = document.getElementsByClassName('item')[this.index];             // 商品列表项
        var oPicture = oItem.getElementsByTagName('img')[0].src;                    // 商品图片
        var oCommodityName = aIntroduce.getElementsByTagName('span')[0];            // 商品名称
        var oCommodityPrice = aIntroduce.getElementsByTagName('span')[1];           // 商品价格
    
        // 点击按钮，加入购物车时总数加1
        oCount.innerHTML = ++number;
        // oPrompt.style.display = 'block';
        // setTimeout("closePrompt()", 2000);

        // 创建行
        var oTr = document.createElement('tr');
        // 在新建行里添加第一列：单选框
        var oTd = document.createElement('td');
        oTd.innerHTML = '<input type="checkbox" class="allCheckbox">';
        oTr.appendChild(oTd);
        // 在新建行里添加第二列：图片
        var oTd = document.createElement('td');
        var oImg = document.createElement('img');
        oImg.src = oPicture;
        oTd.appendChild(oImg);
        oTr.appendChild(oTd);
        // 在新建行里添加第三列：商品名称
        var oTd = document.createElement('td');
        oTd.innerHTML = oCommodityName.innerHTML;
        oTr.appendChild(oTd);
        // 在新建行里添加第四列：商品价格
        var oTd = document.createElement('td');
        oTd.innerHTML = oCommodityPrice.innerHTML;
        oTr.appendChild(oTd);
        // 在新建行里添加第五列：删除
        var oTd = document.createElement('td');
        oTd.innerHTML = '<a href="javascript:void(0);">删除</a>';
        oTr.appendChild(oTd);

        oTd.getElementsByTagName('a')[0].onclick = function()
        {
            oTab.tBodies[0].removeChild(this.parentNode.parentNode);
            oCount.innerHTML = --number;
        }

        oTab.tBodies[0].appendChild(oTr);
    }
}

// 弹窗隐藏
function closePrompt()
{
    oPrompt.style.display = 'none';
}

// 全选按钮
var oAllOne = document.getElementById('allCheckboxOne');    // 全选按钮
var aAll = document.getElementsByClassName('allCheckbox');  // 单选框

oAllOne.onclick = function()
{
    for ( var i = 0; i < aAll.length; i ++ )
    {
        aAll[i].checked = oAllOne.checked;
    }
}

console.log(aAll);
for ( var i = -1; i < aAll.length; i ++ )
{
    console.log(aAll[0]);
    aAll[i].onclick = function()
    {
        console.log(aAll[0]);
        for ( var i = 0; i < aAll.length; i ++ )
        {
            if ( !aAll[i].checked )
            {
                oAllOne.checked = false;
                break;
            }
            else
            {
                oAllOne.checked = true;
            }
        }
    }
}
