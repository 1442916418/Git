// 全局变量
var oBtn = document.getElementById('content-MyShoppingCart');       // 我的购物车按钮
var oContent = document.getElementById('content');                  // 内容页面
var oMyCart = document.getElementById('myShoppingCart');            // 购物车页面
var page = true;
var oOrder = document.getElementById('order');                      // 继续任性点餐按钮
var aInput = document.getElementsByClassName('btn');                // 加入购物车按钮
var oTab = document.getElementById('tab');                          // 购物车表格
var oCount = document.getElementById('content-0');                  // 我的购物车数量
var oPrompt = document.getElementById('prompt');                    // 提示框
var total = 0;      // 总数量
var number = 0;     // 单条记录数量
var oMoney = document.getElementById('sMoney');                     // 金额
var sum = 0;        // 累计金额
var tTbodyNumber = document.getElementById('tbody');                // 获取表格里的tbody

// 点击我的购物车，切换页面、商品数量加减、全选商品、删除选中商品等
oBtn.onclick = function()
{
    // 切换页面
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

    // 提示语
    if ( tTbodyNumber.firstChild == null )
    {
        promptInformation('购物车空空的，赶紧去选购商品吧！');
    }
    
    // 全选、不选、反选
    var oAllOne = document.getElementById('allCheckboxOne');    // 全选按钮
    var aAll = document.getElementsByClassName('allCheckbox');  // 单选框
    var oSet = document.getElementById('settlement');           // 结算按钮
    oSet.disabled = true;

    oAllOne.onclick = function()
    {
        for ( var i = 0; i < aAll.length; i ++ )
        {
            // aAll[i].checked = oAllOne.checked;
            if ( !oAllOne.checked )
            {
                aAll[i].checked = false;
                oSet.disabled = true;
            }
            else
            {
                aAll[i].checked = true;
                oSet.disabled = false;
            }
        }
    }    
    // 复选框全选
    for ( var i = 0; i < aAll.length; i ++ )
    {
        aAll[i].onclick = function()
        {
             // 内循环，循环所有的单选框，判断状态
            for ( var i = 0; i < aAll.length; i ++ )
            {
                // 如果有一个没有勾选，全选按钮为不勾选状态，跳出循环
                if ( !aAll[i].checked )
                {
                    oAllOne.checked = false;
                    break;
                }
                else    // 或者全部都勾选时，全选按钮为选中状态
                {
                    oAllOne.checked = true;
                    oSet.disabled = false;
                }               
            }
            // 选中累加金额 !!!!!
            for ( var i = 0; i < aAll.length; i ++ )
            {
                if ( aAll[i].checked == true )
                {
                    var tMoneyCount = aAll[i].parentNode.parentNode.getElementsByClassName('tMoney')[0].innerHTML;
                    console.log(parseFloat(tMoneyCount));
                }
            }
        }       
    }
    
    // 删除选中商品
    var tTableDel = document.getElementsByClassName('tableDel')[0];
    var oTab = document.getElementById('tab');      // 购物车表格

    tTableDel.onclick = function()
    {
        if ( oAllOne.checked == true )
        {
            var r = confirm("确定要删除所有勾选的商品吗？");
            if ( r == true )
            {
                var aLength = aAll.length;
                for ( var i = 0; i < aLength; i ++ )
                {
                    oTab.tBodies[0].removeChild(aAll[0].parentNode.parentNode);
                }
                oCount.innerHTML = 0;
                total = 0;
                oAllOne.checked = false;    
                promptInformation('删除成功');
            }
            else
            {
                oAllOne.checked = false;    
                for ( var i = 0; i < aAll.length; i ++ )
                {
                    aAll[i].checked = false;
                }
            }
        }
        else
        {
            for ( var i = aAll.length-1; i >= 0; i -- )
            {
                if ( aAll[i].checked == true )
                {
                    var r = confirm("确定要删除勾选的商品吗？");
                    if ( r == true )
                    {
                        oTab.tBodies[0].removeChild(aAll[i].parentNode.parentNode);
                        oCount.innerHTML = --total;
                    }
                    else
                    {
                        oAllOne.checked = false;    
                        for ( var i = 0; i < aAll.length; i ++ )
                        {
                            aAll[i].checked = false;
                        }
                        break;
                    }
                    promptInformation('删除成功'); 
                }
            }
        }
    }
}


// 点击继续任性点餐，切换页面
oOrder.onclick = function()
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


// 购物车操作
for ( var i = 0; i < aInput.length; i ++ )
{
    aInput[i].index = i;
    aInput[i].onclick = function()
    {
        

        if ( tTbodyNumber.firstChild == null )
        {
            establish(oTab, oCount, oPrompt, this.index); 
        }
        else if ( tTbodyNumber.innerHTML != null )
        {
            // 一、第一次点击创建新记录 OK
            // 二、第二次点击相同按钮时，数量加一 待定！！！
            var tCommodityName = document.getElementsByClassName('commodityName');      // 获取购物车商品的名称
            
            var tIntroduce = document.getElementsByClassName('introduce')[this.index];   // 获取主页面商品详细信息
            var oCName = tIntroduce.getElementsByTagName('span')[0];            // 获取主页面商品名称

            for ( var i = 0; i < tCommodityName.length; i ++ )
            {
                if ( tCommodityName[i].innerHTML != oCName.innerHTML )
                {
                    establish(oTab, oCount, oPrompt, this.index); 
                    break;
                }
                else
                {
                    var tNumber = document.getElementsByClassName('number')[0];     // 获取购物车商品的数量
                    var convert = parseInt(tNumber.innerHTML);
                    tNumber.innerHTML = ++convert;
                    break;
                }
            }
        }            
    }
}


// 创建新购物车记录
function establish(oTab, oCount, oPrompt, index)
{
    var aIntroduce = document.getElementsByClassName('introduce')[index];   // 商品详细信息
    var oItem = document.getElementsByClassName('item')[index];             // 商品列表项
    var oPicture = oItem.getElementsByTagName('img')[0].src;                    // 商品图片
    var oCommodityName = aIntroduce.getElementsByTagName('span')[0];            // 商品名称
    var oCommodityPrice = aIntroduce.getElementsByTagName('span')[1];           // 商品价格

    // 点击按钮，加入购物车时总数加1
    oCount.innerHTML = ++total;
    promptInformation('添加成功');

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
    oTd.className = 'commodityName';
    oTd.innerHTML = oCommodityName.innerHTML;
    oTr.appendChild(oTd);
    
    // 在新建行里添加第四列：数量
    var oTd =  document.createElement('td');
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
    oTd.appendChild(oBox);
    oTr.appendChild(oTd);

    // 在新建行里添加第五列：商品价格
    var oTd = document.createElement('td');
    oTd.className = 'tMoney';
    oTd.innerHTML = oCommodityPrice.innerHTML;
    oTr.appendChild(oTd);
    // 在新建行里添加第六列：删除
    var oTd = document.createElement('td');
    oTd.innerHTML = '<a href="javascript:void(0);">删除</a>';
    oTr.appendChild(oTd);

    
    // 把新建行放入 tbody 中
    oTab.tBodies[0].appendChild(oTr);
    number = 0;

    // 删除按钮添加事件
    oTd.getElementsByTagName('a')[0].onclick = function()
    {
        var r = confirm("确定要删除菜品:\n"+oCommodityName.innerHTML);
        if ( r == true )
        {
            oTab.tBodies[0].removeChild(this.parentNode.parentNode);
            oCount.innerHTML = --total;
            promptInformation('删除成功');
        }
    }
    
    // 数量加减
    var tReduce = document.getElementsByClassName('reduce');     // 减少按钮
    for (var i = 0; i < tReduce.length; i ++ )
    {
        tReduce[i].onclick = function()
        {
            for ( var i = 0; i < tReduce.length; i ++ )
            {
                var tBox = document.getElementsByClassName('box')[i];       // 获取数量外框
                var tNumber = tBox.getElementsByClassName('number')[0];     // 获取购物车商品的数量
                var tConvert = parseInt(tNumber.innerHTML);
                if ( tConvert == 1 )
                {
                    promptInformation('数量最低为1份哦');
                }
                else
                {
                    tNumber.innerHTML = --tConvert;
                }
            }
        }
    }
    var tIncrease = document.getElementsByClassName('increase'); // 增加按钮
    for ( var j = 0; j < tIncrease.length; j ++ )
    {
        tIncrease[j].onclick = function()
        {
            for ( var i = 0; i < tIncrease.length; i ++ )
            {
                var tBox = document.getElementsByClassName('box')[i];       // 获取数量外框
                var tNumber = tBox.getElementsByClassName('number')[0];     // 获取购物车商品的数量
                var tConvert = parseInt(tNumber.innerHTML);
                tNumber.innerHTML = ++tConvert;
            }
        }
    }
}

// 弹窗隐藏
function closePrompt()
{
    oPrompt.style.display = 'none';
}
// 提示信息
function promptInformation(txt)
{
    var p = document.getElementById('prompt').children;
    p[0].innerHTML= txt;
    oPrompt.style.display = 'block';
    setTimeout("closePrompt()", 1500);
}