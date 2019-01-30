var oBox = document.getElementById("checkbox");
var aBtn = document.getElementsByClassName("radioButton");

oBox.onclick = function()
{
    for ( var i = 0; i < aBtn.length; i ++ )
    {
        // 当点击全选按钮时，这时按钮是选中状态(true),循环把选中状态赋给列表按钮，这时实现全部选中的状态
        // 当再次点击全选按钮时，这时按钮是取消状态(false),循环把取消状态赋给列表按钮，这时实现全部取消的状态
        aBtn[i].checked = oBox.checked;
    }
}