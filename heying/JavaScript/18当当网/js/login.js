// 鼠标移入清除输入框后面的提示信息
function clearStyle(t)
{
    // console.log(t.nextElementSibling);  // 获取当前元素的下一个兄弟节点
    var nextSiblingNode = t.nextElementSibling;
    nextSiblingNode.innerHTML = '';
    nextSiblingNode.className = '';
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
// 鼠标移入清除输入框后面的提示信息
function clearStyle(t)
{
    t.value = '';
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
// 预先确认
function priorValidation(inputBox, txt)
{
    var input = document.getElementById(inputBox); 
    if ( input.value == '' )
    {
        promptInformation(txt);
    }
}
function checkName(){
    var eEmail = document.getElementById('email');
    var state = true;
    if ( /^[1-9|a-z|A-Z][0-9a-zA-Z]{2,17}@[a-zA-Z]{1,}\.[a-zA-Z]{1,10}$/.test(eEmail.value) )
    {
        state = true;
        return state;
    }
    else
    {
        state = false;
        var str = eEmail.value.split('');

        // 如果不等于true则提示
        if ( !/[1-9|a-z|A-Z]/.test(str[0]) )
        {
            promptInformation('电子邮件必须以数字1~9或大小写字母开头');
        }
        else if ( !/^[1-9|a-z|A-Z][0-9a-zA-Z]{2,17}/.test(eEmail.value) )
        {
            promptInformation('电子邮件@符前过短或过长(必须是2~17位之间的数字或字母)');
        }
        else if ( !/^[1-9|a-z|A-Z][0-9a-zA-Z]{2,17}@/.test(eEmail.value) )
        {
            promptInformation('电子邮件必须包含@符');
        }
        else if ( !/^[1-9|a-z|A-Z][0-9a-zA-Z]{2,17}@[a-zA-Z]{1,}/.test(eEmail.value) )
        {
            promptInformation('电子邮件@符后必须是1位或多位的数字或字母');
        }
        else if ( !/^[1-9|a-z|A-Z][0-9a-zA-Z]{2,17}@[a-zA-Z]{1,}\./.test(eEmail.value) )
        {
            promptInformation('电子邮件必须包含.点');
        }
        else if ( !/^[1-9|a-z|A-Z][0-9a-zA-Z]{2,17}@[a-zA-Z]{1,}\.[a-zA-Z]{1,10}$/.test(eEmail.value) )
        {
            promptInformation('电子邮件.点后面必须包含1~10位的数字或字母');
        }

        return state;
    }
}

function checkPwd()
{
    var pwd = document.getElementById('pwd');
    var state = true;
    if ( /^[a-zA-Z\d]{4,10}$/.test(pwd.value) )
    {
        state = true;
        return state;
    }
    else
    {
        state = false;
        var str = pwd.value.split('');
        if ( str.length < 4 || str.length > 10 )
        {
            promptInformation('密码过短或超出');
        }
        else 
        {
            for ( var i = 0; i < str.length; i ++ )
            {
                if ( /[^a-zA-Z]/.test(str[i]) == false )
                {
                    promptInformation('密码只能由数字/字母组成');
                    break;
                }
            }
        }

        return state;
    }
}

function checkSubmit()
{
    var result = checkName();
    if ( !result )
    {
        priorValidation('email', '请输入邮箱');
        return;
    }
    result = checkPwd();
    if ( !result )
    {
        priorValidation('pwd', '请输入密码');
        return;
    }

    document.getElementById('form').submit();
}

var reg =  document.getElementsByClassName('register')[0];
reg.onclick = function(){
    window.location.assign('http://127.0.0.1:5500/heying/JavaScript/18%E5%BD%93%E5%BD%93%E7%BD%91/register.html');
}