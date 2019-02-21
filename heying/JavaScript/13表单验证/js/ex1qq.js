// 获取id
function $(id)
{
    return document.getElementById(id);
}
// 改变样式
function changeStyle(idNmae, state)
{
    var first = idNmae.nextElementSibling;
    if ( state == true )
    {
        first.className = 'ok';
    }
    else
    {
        first.className = 'error';
        idNmae.value = '';
    }
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
    // console.log(t.nextElementSibling);  // 获取当前元素的下一个兄弟节点
    var nextSiblingNode = t.nextElementSibling;
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

// onblur:（当鼠标失去焦点时） 判断密码时，没有输入内容也会显示正确，会显示提示
// onchange：（当内容发生变化时） 判断密码，没有输入内容不会判断，不会显示提示

// 判断昵称
function checkName()
{
    var name = $('name');
    var state = true;

    if ( /^\w{4,16}$/.test(name.value) )
    {
        changeStyle(name, state);
        return state;
    }
    else
    {
        state = false;

        if ( !/^\w{4,16}$/.test(name.value) )
        {
            promptInformation('昵称请使用长度为4~16个字母、下划线、数字的字符');
        }
        else if ( name.value.length < 4 || name.value.length > 16 )
        {
            promptInformation('昵称长度过短或过长');
        }
        else if ( /^[^\w]{4,16}$/.test(name.value) )
        {
            promptInformation('昵称请使用长度为4~16个字母、下划线、数字的字符');
        }

        changeStyle(name, state);
        return state;
    }
}
// 判断密码 
function checkPwd()
{
    var pwd = $('pwd');
    var state = true;

    if ( /^[a-zA-Z0-9]{6,16}$/.test(pwd.value) )
    {
        changeStyle(pwd, state);
        return state;
    }
    else
    {
        state = false;

        if ( pwd.value.length < 6 || pwd.value.length > 16 )
        {
            promptInformation('密码长度过短或过长');
        }
        else if ( !/^[a-zA-Z0-9]$/.test(pwd.value) )
        {
            promptInformation('密码必须使用6~16位的字母或数字组成');
        }

        changeStyle(pwd, state);
        return state;
    }
}
// 判断二次密码
function checkRePwd()
{
    var pwd = $('pwd');
    var rePwd = $('rePwd');
    var state = true;
    var strPwd = pwd.value.split('');
    var strRePwd = rePwd.value.split('');

    // 右bug
    if ( pwd.value.length == rePwd.value.length )
    {
        changeStyle(pwd, state);
        changeStyle(rePwd, state);
        return state;
    }
    else
    {
        state = false;

        if ( pwd.value.length == rePwd.value.length )
        {
            promptInformation('两次密码长度不一致');
        }
        else
        {
            if ( pwd.value == '' || rePwd.value == '' )
            {
                promptInformation('请输入密码');
            }

            for ( var i = 0; i < strPwd.length; i ++ )
            {
                if ( strPwd[i] != strRePwd[i] )
                {
                    promptInformation('两次密码输入不一致');
                    break;
                }
            }

            changeStyle(pwd, state);
            changeStyle(rePwd, state);
            return state;
        }
    }
}
// 判断出生日期
function checkDate()
{
    var dateOfBirth = $('date');
    var state = true;
     
    if ( /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/.test(dateOfBirth.value) )
    {
        changeStyle(dateOfBirth, state);
        return state;
    }
    else
    {
        state = false;
        var dateSplit = dateOfBirth.value.split('-');
        
        if ( dateOfBirth.value.charAt(4) != '-' || dateOfBirth.value.charAt(7) != '-' )
        {
            promptInformation('出生日期必须使用-符连接');
        }
        else if ( dateSplit.length != 3 )
        {
            promptInformation('必须输入出生日期')
        }
        else if ( dateSplit[0].length < 4 )
        {
            promptInformation('出生日期年份必须四位数');
        }
        else if ( (dateSplit[1].length < 1 || dateSplit[1].length > 2) || (dateSplit[2].length < 1 || dateSplit[2].length > 2) ) 
        {
            promptInformation('出生日期月份和日数必须是一位或二位');
        }
        else if ( /[^0-9]/.test(dateSplit[0]) )
        {
            promptInformation('出生日期年份必须是数字');
        }
        else if ( /[^0-9]/.test(dateSplit[1]) )
        {
            promptInformation('出生日期月份必须是数字');
        }
        else if ( /[^0-9]/.test(dateSplit[2]) )
        {
            promptInformation('出生日期日数必须是数字');
        }

        changeStyle(dateOfBirth, state);
        return state;
    }
}
// 判断电子邮件，正则表达式：必须以1-9或字母开头；后面接数字或字母2-17位；@分开；后面只能是大小写字母最少1位或多位；再接着.点分开；后面只能是大小写字母最少一位最多10位;
function checkEmail()
{
    var eEmail = $('mail');
    var state = true;
    if ( /^[1-9|a-z|A-Z][0-9a-zA-Z]{2,17}@[a-zA-Z]{1,}\.[a-zA-Z]{1,10}$/.test(eEmail.value) )
    {
        changeStyle(eEmail, state );
        return state;
    }
    else
    {
        state = false;
        var str = eEmail.value.split('');
        console.log(str, eEmail.value);

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

        changeStyle(eEmail, state );
        return state;
    }
}
// 手动提交按钮
function btnSubmit()
{
    // 校验昵称
    var result = checkName();
    if ( !result )
    {
        priorValidation('name', '请输入昵称');
        return;
    }
    // 校验密码
    result = checkPwd();
    if ( !result )
    {
        priorValidation('pwd', '请输入密码');
        return;
    }
    // 校验二次密码
    result = checkRePwd();
    if ( !result )
    {
        priorValidation('rePwd', '请输入正确密码');
        return;
    }
    // 校验出生日期
    result = checkDate();
    if ( !result )
    {
        priorValidation('date', '请输入出生日期');
        return;
    }
    // 校验电子邮件
    result = checkEmail();
    if ( !result )
    {
        priorValidation('mail', '请输入电子邮件');
        return;
    }

    $('form').submit();     // 手动提交表单
}
// 获取国家
var country = $('country');
// 定义国家数组
var CounArray = [ '中国', '俄罗斯', '英国' ];
// 循环给HTML下拉列表添加国家
for ( var i = 0; i < CounArray.length; i ++ )
{
    var oOption = document.createElement('option');     // 创建下拉列表项
    oOption.innerHTML = CounArray[i];                   // 把国家数组依次赋给下拉列表项
    oOption.value = CounArray[i];
    country.appendChild(oOption);                       // 在已有的国家下拉列表项中插入刚才创建的列表项
}
// 点击国家，省份列表出现对应国家的省份
function checkProvince(pro)
{
    // 获取选中的国家
    // console.log(pro.value, pro.selectedIndex, pro.options[pro.selectedIndex].value);
    // 获取省份
    var province = $('province');
    // 删除原有的省份选项
    province.options.length = 1;
    var proArray =name = Array();
    proArray['中国'] = [ '安徽省', '浙江省', '河北省' ];
    proArray['俄罗斯'] = [ '俄罗斯', '别尔哥罗德州', '布良斯克州 ' ];
    proArray['英国'] = [ '伦敦', '大曼彻斯特', '默西赛德郡' ];

    // 获取国家的名称
    var oPro = pro.value;
    // 赋给省份数组的下标（数组下标可以是数字，也可以是字符串）
    var oProvince = proArray[oPro];
    // 循环省份数组
    for ( var i = 0; i < oProvince.length; i ++ )
    {
        var oOption = document.createElement('option');     // 创建下拉列表项
        oOption.innerHTML = oProvince[i];                   // 把对应的省份数组依次赋给省份下拉列表
        oOption.value = oProvince[i];
        province.appendChild(oOption);                      // 在已有的省份下拉列表项中插入刚才创建的列表项
    }
}