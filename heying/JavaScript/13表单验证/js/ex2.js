function $(id)
{
    return document.getElementById(id);
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
// 改变样式
function changeStyle(idNmae, state, txt)
{
    var first = idNmae.nextElementSibling;
    if ( state == true )
    { 
        first.innerHTML = txt;
        first.className = 'ok';
    }
    else
    {
        first.innerHTML = txt;
        first.className = 'error';
        idNmae.value = '';
    }
}
// 回车切换到下一个输入框
function pressEnter(ev, input)
{
    // console.log(ev,ev.keyCode); // 获得按下的键
    var ev = ev || event;
    if ( ev.keyCode == 13 )
    {
        ev.preventDefault();    // 阻止默认操作(阻止提交表单), ie9下无效
        input.focus();          // 传入的文本框获得焦点
    }
}
// 鼠标移入清除输入框后面的提示信息
function clearStyle(t)
{
    // console.log(t.nextElementSibling);  // 获取当前元素的下一个兄弟节点
    var nextSiblingNode = t.nextElementSibling;
    nextSiblingNode.innerHTML = '';
    nextSiblingNode.className = '';
}
// 预先确认
function priorValidation(inputBox, txt)
{
    var input = $(inputBox);
    if ( input.value == '' )
    {
        promptInformation(txt);
    }
}



// 判断姓名
function checkName(){
    var userName = $('userName');
    var state = true;

    if ( !/^\s+|\s+$/g.test(userName.value) && userName.value != '' ) // 正确
    {
        changeStyle(userName, state, '用户名可用');
        return state;
    }
    else
    {
        state = false;
        if ( /^\s+|\s+$/g.test(userName.value) )
        {
            promptInformation('用户名不可以有空格');
        }

        changeStyle(userName, state, '用户名不可用');
        console.log(state);
        return state;
    }
}
// 判断密码
function checkPwd()
{
    var userPwd = $('userPwd');
    var state = true;

    if ( !/^\s+|\s+$/g.test(userPwd.value) && userPwd.value != '' )
    {
        changeStyle(userPwd, state, '密码可用');
        return state;
    }
    else
    {
        state = false;
        if ( /^\s+|\s+$/g.test(userName.value) )
        {
            promptInformation('用户密码不可以有空格');
        } 
        changeStyle(userPwd, state, '密码不可用');
        return state;
    }
}

// 在表单中添加onsubmit事件，当提交表单时触发表单的submit事件, 如果返回false,则阻止事件的默认操作(阻止表单提交)
function submission()
{
    var result = checkName();
    console.log(result);
    if ( !result )
    {
        priorValidation('userName', '请输入用户名');
        return false;
    }
    result = checkPwd();
    if ( !result )
    {
        priorValidation('userPwd', '请输入密码');
        return false;
    }

    return true;
}

// 在img图片当提交按钮时，给图片标签添加onclick事件，手动提交，无需返回值
// function submission()
// {
//     var result = checkName();
//     console.log(result);
//     if ( !result )
//     {
//         priorValidation('userName', '请输入用户名');
//         return;
//     }
//     result = checkPwd();
//     if ( !result )
//     {
//         priorValidation('userPwd', '请输入密码');
//         return;
//     }

//     $('uploadForms').submit();      // 获取表单id，条件满足手动提交表单
// }