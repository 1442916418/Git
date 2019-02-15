// 全局变量
var tCommodityName = document.getElementsByClassName('commodityName');          // 获取购物车商品的名称
var oAllOne = document.getElementById('allCheckboxOne');                        // 全选按钮
var aAll = document.getElementsByClassName('allCheckbox');                      // 单选框
var oSet = document.getElementById('settlement');                               // 结算按钮
var oBtn = document.getElementById('content-MyShoppingCart');                   // 我的购物车按钮
var oContent = document.getElementById('content');                              // 内容页面
var oMyCart = document.getElementById('myShoppingCart');                        // 购物车页面
var oOrder = document.getElementById('order');                                  // 继续任性点餐按钮
var aInput = document.getElementsByClassName('btn');                            // 加入购物车按钮
var oTab = document.getElementById('tab');                                      // 购物车表格
var oCount = document.getElementById('content-0');                              // 我的购物车数量
var oPrompt = document.getElementById('prompt');                                // 提示框
var oMoney = document.getElementById('sMoney');                                 // 总金额
var tTbodyNumber = document.getElementById('tbody');                            // 获取表格里的tbody
var tSetTlement = document.getElementById('settlement');                        // 结算按钮
oSet.disabled = true;                                                           // 初始状态为不能点击
var page = true;                                                                // 页面状态
var total = 0;                                                                  // 总数量
var number = 0;                                                                 // 单条记录数量
var sum = 0;                                                                    // 累计金额
// 点击我的购物车，切换页面、提示语、全选商品、删除选中商品、结算
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
    if ( tTbodyNumber.innerHTML == '' )
    {
        promptInformation('购物车空空的，赶紧去选购商品吧！');
    }
    // 全选按钮、全选结算
    oAllOne.onclick = function()
    {
        for ( var i = 0; i < aAll.length; i ++ )
        {
            if ( !oAllOne.checked )
            {
                aAll[i].checked = false;
                oSet.disabled = true;
                oMoney.innerHTML = 0;
            }
            else
            {
                aAll[i].checked = true;
                oSet.disabled = false;
            }
        }
        // 累加全部选中项的金额
        if ( oAllOne.checked == true )
        {
            sum = 0;
            for ( var i = 0; i < aAll.length; i ++ )
            {
                var tMoneyCount = parseFloat(aAll[i].parentNode.parentNode.getElementsByClassName('tMoney')[0].innerHTML).toFixed(2);      // 获取价格
                var tNumbers = parseInt(aAll[i].parentNode.parentNode.getElementsByClassName('number')[0].innerHTML);                      // 获取数量
                sum += tMoneyCount*tNumbers;
                oMoney.innerHTML = sum.toFixed(2);
            }
        }
        else
        {
            sum = 0;
            oMoney.innerHTML = 0;
        }
        console.log("全选总和：", sum, "单个商品价格：", tMoneyCount, "单个商品数量：", tNumbers, "总价", oMoney);
    }    
    // 复选框全选、复选框结算
    for ( var i = 0; i < aAll.length; i ++ )
    {
        aAll[i].index = i;
        aAll[i].onclick = function()
        {
             // 内循环，循环所有的单选框，判断状态
            for ( var i = 0; i < aAll.length; i ++ )
            {
                // 如果有一个没有勾选，全选按钮为不勾选状态，跳出循环
                if ( !aAll[i].checked )
                {
                    oSet.disabled = false;
                    oAllOne.checked = false;
                    break;
                }
                else    // 或者全部都勾选时，全选按钮为选中状态
                {
                    oAllOne.checked = true;
                    oSet.disabled = false;
                }    
            }
            // 累加选中项的金额
            if ( aAll[this.index].checked == true )
            {
                var tMoneyCount = parseFloat(aAll[this.index].parentNode.parentNode.getElementsByClassName('tMoney')[0].innerHTML).toFixed(2);      // 获取价格
                var tNumbers = parseInt(aAll[this.index].parentNode.parentNode.getElementsByClassName('number')[0].innerHTML);                      // 获取数量
                sum += tMoneyCount*tNumbers;
                oMoney.innerHTML = sum.toFixed(2);
                console.log("复选框总和：", sum, "单个商品价格：", tMoneyCount, "单个商品数量：", tNumbers, "总价", oMoney);
            }
            else
            {
                var tMoneyCount = parseFloat(aAll[this.index].parentNode.parentNode.getElementsByClassName('tMoney')[0].innerHTML).toFixed(2);      // 获取价格
                var tNumbers = parseInt(aAll[this.index].parentNode.parentNode.getElementsByClassName('number')[0].innerHTML);                      // 获取数量
                sum -= tMoneyCount*tNumbers;
                oMoney.innerHTML = sum.toFixed(2);
                console.log("复选框总和：", sum, "单个商品价格：", tMoneyCount, "单个商品数量：", tNumbers, "总价：", oMoney);
            }
        }       
    }
    // 删除选中商品
    var tTableDel = document.getElementsByClassName('tableDel')[0];
    var oTab = document.getElementById('tab');      // 购物车表格
    // 删除选中按钮
    tTableDel.onclick = function()
    {
        if ( oAllOne.checked == true )
        {
            var r = confirm("确定要删除所有勾选的商品吗？");
            if ( r == true )
            {
                for ( var i = aAll.length-1; i >= 0; i -- )
                {
                    oTab.tBodies[0].removeChild(aAll[i].parentNode.parentNode);
                }
                oCount.innerHTML = 0;
                total = 0;
                oAllOne.checked = false;
                oMoney.innerHTML = 0;    
                sum = 0;
                promptInformation('删除成功');
                console.log("全选框", sum);
            }
            else
            {
                cancelState(oAllOne, aAll);
            }
        }
        else
        {
            console.log(oAllOne,aAll);
            var r = confirm("确定要删除勾选的商品吗？");
            for ( var i = aAll.length-1; i >= 0; i -- )
            {
                if ( aAll[i].checked == true )
                {
                    if ( r == true )
                    {
                        oTab.tBodies[0].removeChild(aAll[i].parentNode.parentNode);
                        oCount.innerHTML = --total;
                        oMoney.innerHTML = 0;    
                        console.log("复选框总和", sum);
                    }
                    else
                    { 
                        cancelState(oAllOne, aAll);
                    }
                }
            }
            promptInformation('删除成功'); 
        }
    }
    // 结算
    tSetTlement.onclick = function()
    {
        var r = confirm('结算金额为：'+parseFloat(oMoney.innerHTML).toFixed(2));
        if ( r == true )
        {
            for ( var i = aAll.length-1; i >= 0; i -- )
            {
                if ( aAll[i].checked == true )
                {
                    oTab.tBodies[0].removeChild(aAll[i].parentNode.parentNode);
                    oCount.innerHTML = --total;
                }
            }
            total = 0;
            oAllOne.checked = false;
            oMoney.innerHTML = 0;    
            promptInformation('结算成功！');
        }
        else
        {
            cancelState(oAllOne, aAll);
        }
    }
}
// 购物车操作
for ( var i = 0; i < aInput.length; i ++ )
{
    aInput[i].index = i;
    aInput[i].onclick = function()
    {
        if ( tTbodyNumber.innerHTML == '' )
        {
            establish(oTab, oCount, this.index); 
        }
        else if ( tTbodyNumber.innerHTML != '' )
        {
            var tIntroduce = document.getElementsByClassName('introduce')[this.index];      // 获取主页面商品详细信息
            var oCName = tIntroduce.getElementsByTagName('span')[0];                        // 获取主页面商品名称

            for ( var j = 0; j < tCommodityName.length; j ++ )
            {
                if ( tCommodityName[j].innerHTML == oCName.innerHTML )
                {
                    var tBox = document.getElementsByClassName('box')[j];          // 获取数量外框
                    var tNumber = tBox.getElementsByClassName('number')[0];                 // 获取购物车商品的数量
                    var convert = parseInt(tNumber.innerHTML);
                    tNumber.innerHTML = ++convert;
                    promptInformation('添加成功');
                    return;
                }
            }
            establish(oTab, oCount, this.index); 
        }            
    }
}
// 创建新购物车记录 oTab是购物车整体表格，oCount是购物车单个商品的总数，index是加入购物车按钮的数组下标
function establish(oTab, oCount, index)
{
    var aIntroduce = document.getElementsByClassName('introduce')[index];       // 商品详细信息
    var oItem = document.getElementsByClassName('item')[index];                 // 商品列表项
    var oPicture = oItem.getElementsByTagName('img')[0].src;                    // 商品图片
    var oCommodityName = aIntroduce.getElementsByTagName('span')[0];            // 商品名称
    var oCommodityPrice = aIntroduce.getElementsByTagName('span')[1];           // 商品价格

    // 当第一次点击按钮加入购物车时，这时购物车为空，总数加一
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
            // 注意要从整个表格中获取tbody
            oTab.tBodies[0].removeChild(this.parentNode.parentNode);
            oCount.innerHTML = --total;

            var thisCheckBox = this.parentNode.parentNode.getElementsByClassName("allCheckbox")[0];     // 获取当前商品的复选框
            // 判断当前的复选框为true，就减去当前商品价格
            if ( thisCheckBox.checked == true )
            {
                var thisMoneyCount =  parseFloat(this.parentNode.parentNode.getElementsByClassName('tMoney')[0].innerHTML).toFixed(2);     // 获取价格
                var thisNumbers = parseInt(this.parentNode.parentNode.getElementsByClassName('number')[0].innerHTML);                      // 获取数量
                sum -= thisMoneyCount*thisNumbers;
                oMoney.innerHTML = sum.toFixed(2);
                console.log("单项总和：", sum, "单个商品价格：", thisMoneyCount, "单个商品数量：", thisNumbers, "总价", oMoney);
            }
            promptInformation('删除成功');
        }
    }
    
    // 数量加减，减少按钮
    var tReduce = document.getElementsByClassName('reduce');     
    for (var i = 0; i < tReduce.length; i ++ )
    {
        tReduce[i].index = i;
        
        tReduce[i].onclick = function()
        {
            var tBox = document.getElementsByClassName('box')[this.index];          // 获取数量外框
            var tNumber = tBox.getElementsByClassName('number')[0];                 // 获取购物车商品的数量
            var tReduceCheckbox = tBox.parentNode.parentNode.getElementsByClassName('allCheckbox')[0];      // 获取当前减少按钮一行的单选按钮
            var tGetMoney = parseFloat(tBox.parentNode.parentNode.getElementsByClassName('tMoney')[0].innerHTML).toFixed(2);    // 花去当前减少按钮一行商品的价格
            var tConvert = parseInt(tNumber.innerHTML);
            if ( tConvert == 1 )
            {
                promptInformation('数量最低为1份哦');
            }
            else
            {
                tNumber.innerHTML = --tConvert;
                if ( tReduceCheckbox.checked == true )
                {
                    var tfMoney = parseFloat(oMoney.innerHTML).toFixed(2);  // 转换
                    var tMoneyReduce = parseFloat(tfMoney) - parseFloat(tGetMoney);                // 总金额和当前单个金额相减
                    oMoney.innerHTML = tMoneyReduce.toFixed(2);
                    return;
                }
            }
        }
    }

    // 数量加减，增加按钮
    var tIncrease = document.getElementsByClassName('increase'); 
    for ( var j = 0; j < tIncrease.length; j ++ )
    {
        tIncrease[j].index = j;
        tIncrease[j].onclick = function()
        {
            var tBox = document.getElementsByClassName('box')[this.index];          // 获取数量外框
            var tNumber = tBox.getElementsByClassName('number')[0];                 // 获取购物车商品的数量
            var tReduceCheckbox = tBox.parentNode.parentNode.getElementsByClassName('allCheckbox')[0];      // 获取当前增加按钮一行的单选按钮
            var tGetMoney = parseFloat(tBox.parentNode.parentNode.getElementsByClassName('tMoney')[0].innerHTML).toFixed(2);    // 获取当前增加按钮一行商品的价格
            var tConvert = parseInt(tNumber.innerHTML);
            tNumber.innerHTML = ++tConvert;
            
            if ( tReduceCheckbox.checked == true )
            {
                var tfMoney = parseFloat(oMoney.innerHTML).toFixed(2);  // 转换
                var tMoneyReduce = parseFloat(tfMoney) + parseFloat(tGetMoney);                 // 总金额和当前单个金额相加
                oMoney.innerHTML = tMoneyReduce.toFixed(2);
                return;
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
// 提示信息
function promptInformation(txt)
{
    var p = document.getElementById('prompt').children;
    p[0].innerHTML= txt;
    oPrompt.style.display = 'block';
    setTimeout("closePrompt()", 1500);
}
// 弹窗隐藏
function closePrompt()
{
    oPrompt.style.display = 'none';
}
// 所有的按钮为false不选择状态
function cancelState(oAllOne, aAll)
{
    oAllOne.checked = false;    
    for ( var i = 0; i < aAll.length; i ++ )
    {
        aAll[i].checked = false;
    }
    oMoney.innerHTML = 0;    
    oSet.disabled = true;

    console.log("取消按钮，结算按钮总和", sum);
}