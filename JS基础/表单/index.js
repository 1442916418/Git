function isChinese(value) {
    return /[\u4E00-\u9FA5]/.test(value)
}

function isEmail(value) {
    return /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/.test(value);
}

function isPhone(value) {
    return /^1[2-9]\d{9}$/.test(value);
}

function isPassword(value) {
    return /^[a-zA-Z0-9]{6,}$/.test(value);
}

function showTip(target, value, cName) {
    removeTip(target);
    let c = document.createElement('span');
    c.setAttribute('class', cName);
    c.innerHTML = value;
    target.parentNode.appendChild(c);
}

function removeTip(target) {
    let parent = target.parentNode, child = parent.childNodes, cName = child[child.length - 1].className;
    if (cName === 'show-tip') {
        parent.removeChild(child[child.length - 1]);
    }
}

function verifyName(e) {
    let v = e.value;
    if (isChinese(v)) {
        removeTip(e);
    } else {
        e.value = null;
        showTip(e, '请输入中文名称', 'show-tip');
    }
}

function verifEmail(e) {
    let v = e.value;
    if (isEmail(v)) {
        removeTip(e);
    } else {
        e.value = null;
        showTip(e, '请输入正确邮箱', 'show-tip');
    }
}

function verifPhone(e) {
    let v = e.value;
    if (isPhone(v)) {
        removeTip(e);
    } else {
        e.value = null;
        showTip(e, '请输入正确手机号码', 'show-tip');
    }
}

function verifPassword(e) {
    let v = e.value;
    if (isPassword(v)) {
        removeTip(e);
    } else {
        e.value = null;
        showTip(e, '请输入最低六位数密码', 'show-tip');
    }
}

function verifConfirmPassword(e) {
    let one = document.getElementById('password').value, two = e.value;
    if (two === one) {
        removeTip(e);
    } else {
        e.value = null;
        showTip(e, '请输入正确确认密码', 'show-tip');
    }
}

function btnSubmint() {
    let input = document.getElementsByTagName('input'), result = Object.create(null);
    for (let i = 0; i < input.length; i++) {
        if (input[i].type === "text") {
            let k = input[i].id, v = input[i].value, t = input[i].placeholder;
            if (v) {
                removeTip(input[i]);
                result[k] = v;
            } else {
                showTip(input[i], t, 'show-tip');
            }
        }
        if (input[i].type === "password") {
            let k = input[i].id, v = input[i].value, t = input[i].placeholder;
            if (v) {
                result[k] = v;
                removeTip(input[i]);
            } else {
                showTip(input[i], t, 'show-tip');
            }
        }
        if (input[i].type === "radio") {
            let k = input[i].id, v = input[i].value;
            if (input[i].checked) {
                result[k] = v;
            }
        }
    }

    if ('confirmPassword' in result) {
        alert(JSON.stringify(result));
    }
}