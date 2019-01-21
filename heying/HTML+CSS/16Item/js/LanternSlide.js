var oPlay = document.getElementById('play');
var newOl = document.getElementsByTagName('ol')[0];
var aLi = newOl.getElementsByTagName('li');
var oUl = document.getElementsByTagName('ul')[0];

var oBtnPrev = getByClass(oPlay, 'prev')[0];
var oBtnNext = getByClass(oPlay, 'next')[0];
var oMarkBox = getByClass(oPlay, 'mark_box')[0]

var now = 0;

aLi[0].style.background = "#ccc";

// 循环ol下的li
for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onclick = function () {
        now = this.index;

        tab();
    }
}

// 运动函数，循环ol下的li，先给每一个class赋值为空，在使用时为每一个添加active样式
// startMove:运动ul标签，每运动一次left等于-547*now(px)，now就是ol下li的index
function tab() {
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].style.background = '#eee';
    }
    aLi[now].style.background = '#ccc';
    startMove(oUl, { left: -547 * now });
}

// 执行函数
function next() {
    now++;
    // 判断当now等于ul下li的长度时，就说明运动到头了，这时把now赋值为0，重新开始
    if (now == aLi.length) {
        now = 0;
    }
    tab();
}

// 当鼠标移入oMarkBox上时，左右按钮透明度为1，显示出来
// 当鼠标移入左、有按钮时，左右按钮的透明度为1，全部显示出来
oBtnNext.onmouseover = oBtnPrev.onmouseover = oMarkBox.onmouseover = function () {
    startMove(oBtnPrev, { opacity: 100 });
    startMove(oBtnNext, { opacity: 100 });
}
// 当鼠标移入oMarkBox上时，左右按钮透明度变为0，隐藏起来
// 当鼠标移入左、有按钮时，左右按钮的透明度为0，全部隐藏起来
oBtnNext.onmouseout = oBtnPrev.onmouseout = oMarkBox.onmouseout = function () {
    startMove(oBtnPrev, { opacity: 0 });
    startMove(oBtnNext, { opacity: 0 });
}

// 左边按钮
oBtnPrev.onclick = function () {
    now--;
    if (now == -1) {
        now = aLi.length - 1;
    }
    tab();
}

// 右边按钮
oBtnNext.onclick = function () {
    now++;
    if (now == aLi.length) {
        now = 0;
    }
    tab();
}

// 定义一个定时器，每两秒执行一次执行运动函数
var timer = setInterval(next, 2000);

oPlay.onmouseover = function () {
    // 当鼠标移入时结束定时器
    clearInterval(timer);
}
oPlay.onmouseout = function () {
    // 当鼠标移入时开启定时器
    timer = setInterval(next, 2000);
}
