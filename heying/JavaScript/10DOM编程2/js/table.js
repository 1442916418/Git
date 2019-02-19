var oAdd = document.getElementById('add');  // 增加按钮
var oTbody = document.getElementById('tbody');  // tbody

// 获取class名称
function $(c){
    return document.getElementsByClassName(c);
}

// 增加按钮
oAdd.onclick = function()
{
    // 添加行
    var tr = oTbody.insertRow(0);  
    // 添加第一列：商品名称
    var td0 = tr.insertCell(-1); 
    td0.innerHTML = "<input type='text' class='name' style='width:200px;height:22px;'>";
    // 添加第二列：数量
    var td1 = tr.insertCell(-1);
    td1.innerHTML = "<input type='text' class='number' style='width:50px;height:22px;'>";
    // 添加第三列：单价
    var td2 = tr.insertCell(-1);
    td2.innerHTML = "<input type='text' class='unitPrice' style='width:50px;height:22px;'>";
    // 添加第四列：操作
    var td3 = tr.insertCell(-1);
    td3.innerHTML = "<input type='button' class='delete' value='删除'><input type='button' class='confirmation' value='确认' style='margin-left:4px;'>";

    operationConfirm();
}

// 确认操作
function operationConfirm()
{
    var oConfirmation = $('confirmation')[0];                                       // 获取当前默认创建的确认按钮
    var confirmation = oConfirmation.parentNode.parentNode;                         // 获取当前行
    var oDle = $('delete')[0];                                                      // 删除按钮

    // 确认按钮
    oConfirmation.onclick = function()
    {
        operationModify(oConfirmation, confirmation);
    }

    // 删除按钮
    oDle.onclick = function()
    {
        var dle = oDle.parentNode.parentNode.rowIndex-1;
        oTbody.deleteRow(dle);
    }
}

// 修改操作
function operationModify(oConfirmation, confirmation)
{
    var oName = confirmation.getElementsByClassName('name')[0];                 // 获取当前行的商品名称
    var oNumber = confirmation.getElementsByClassName('number')[0];             // 获取当前行的数量
    var oUnitPrice = confirmation.getElementsByClassName('unitPrice')[0];       // 获取当前行的单价

    confirmation.cells[0].innerHTML = oName.value;                              // 把商品名称文本框的内容赋给当前行的商品名称第一列
    confirmation.cells[1].innerHTML = oNumber.value;                            // 把数量文本框的内容赋给当前行的数量第二列
    confirmation.cells[2].innerHTML = "￥" + oUnitPrice.value;                  // 把单价文本框的内容赋给当前行的单价第三列

    oConfirmation.value = '修改';                                               // 把当前确认按钮的value赋值为修改
    oConfirmation.removeAttribute('class');                                     // 删除当前确认按钮的原有class
    oConfirmation.setAttribute('class', 'modify');                              // 重新赋值class类名

    var oModify = confirmation.getElementsByClassName('modify')[0];             // 获取重新赋class的修改按钮
    var modify = oModify.parentNode.parentNode;                                 // 获取修改按钮的当前行

    // 修改按钮
    oModify.onclick = function()
    {
        // 当前行的第一列：商品名称
        modify.cells[0].innerHTML = "<input type='text' class='name' style='width:200px;height:22px;'>";
        modify.cells[0].getElementsByClassName('name')[0].value = oName.value;
        // 当前行的第二列：数量
        modify.cells[1].innerHTML = "<input type='text' class='number' style='width:50px;height:22px;'>";
        modify.cells[1].getElementsByClassName('number')[0].value = oNumber.value;
        // 当前行的第三列：单价
        modify.cells[2].innerHTML = "<input type='text' class='unitPrice' style='width:50px;height:22px;'>";
        modify.cells[2].getElementsByClassName('unitPrice')[0].value = "￥" + oUnitPrice.value;

        oModify.value = '确认';                                                 // 把当前修改按钮的value赋值为确认
        oModify.removeAttribute('class');                                       // 删除当前修改按钮的原有class
        oModify.setAttribute('class', 'confirmation');                          // 重新赋值class类名
        
        operationConfirm();
    }
}