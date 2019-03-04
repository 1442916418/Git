function $cl(cl){
    return document.getElementsByClassName(cl);
}
function $id(id){
    return document.getElementById(id);
}
// 轮播图
var oPlay = document.getElementById('play');    // 获取最外层div
var aLi = document.getElementsByTagName('ol')[0].getElementsByTagName('li');    // 获取图片下方的小点
var oUl = document.getElementById('playUL');   // 获取图片

var oBtnPrev = getByClass(oPlay, 'prev')[0];        // 在最外层div下获取左按钮
var oBtnNext = getByClass(oPlay, 'next')[0];        // 在最外层div下获取右按钮
var oMarkBox = getByClass(oPlay, 'mark_box')[0];    // 在最外层div下获取图片上层遮罩层

var now = 0;    // now就是ol下li的index

aLi[0].style.background = '#aaa';   // 把第一个小点设置颜色

for (var j = 0; j < aLi.length; j++) {
    aLi[j].index = j;
    aLi[j].onclick = function () {
        now = this.index;

        tab();
    }
}

// 运动函数，循环ol下的li，先给每一个class赋值为空，在使用时为每一个添加active样式
// startMove:运动ul标签，每运动一次left等于-1180*now(px)，now就是ol下li的index
function tab() {
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].style.background = '#eee';
    }
    aLi[now].style.background = '#aaa';
    startMove(oUl, { left: -820 * now });
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

    
// 回到顶部
var currentPosition,timer;
function GoTop(){
    timer=setInterval("runToTop()",1);
}
function runToTop(){
    // 兼容IE、火狐、谷歌
    currentPosition=document.documentElement.scrollTop || document.body.scrollTop;
    currentPosition-=10;    /*调整滚动的值,值大小会影响速度*/
    if(currentPosition>0){
        // scrollTo() 方法可把内容滚动到指定的坐标
        window.scrollTo(0,currentPosition);
    }else{
        window.scrollTo(0,0);
        clearInterval(timer);
    }
}

// 中间选项卡
var topBtn = $cl('topBtn')[0];  
var aBtn =  topBtn.getElementsByTagName('div');// 按钮
var aCon = $cl('con');  // 内容

for ( var k = 0; k < aBtn.length; k ++ )
{
    aBtn[k].index = k;
    aBtn[k].onclick = function()
    {
        for ( var i = 0; i < aBtn.length; i ++ )
        {
            aBtn[i].className = '';
            aCon[i].style.display = 'none';
        }
        this.className = 'mousePass'
        aCon[this.index].style.display = 'block';
    }
}

// 右侧滚动信息
var rollingInfo = $cl('rollingInformation')[0];
var rollingUL1 = $id('rollingUL');
var rollingUL2 = $cl('rollingUL2')[0];
rollingUL2.innerHTML = rollingUL1.innerHTML;
rollingUL2.setAttribute('id', 'rollingUL');

function scrollUp(){
    // offsetHeight:内容高+padding+边框
    // scrollTop：这个值可以设置或获取位于页面最顶端和窗口中可见内容最顶端之间的距离。
    if ( rollingInfo.scrollTop >= rollingUL1.offsetHeight )
    {
        rollingInfo.scrollTop = 0;
    }
    else
    {
        rollingInfo.scrollTop++;
    }
    // console.log(rollingInfo.scrollTop, rollingUL1.offsetHeight);
}
var timer = setInterval( scrollUp, 50);

rollingInfo.onmouseover = function(){
    clearInterval(timer);
}
rollingInfo.onmouseout = function(){
    timer =setInterval(scrollUp, 50 );
}

// 右侧选项卡
var sevList = $cl('sevList')[0];
var listLI = sevList.getElementsByTagName('ul')[0].getElementsByTagName('li');     // 按钮
var listOL = $cl('listOL');

for ( var i = 0; i < listLI.length; i ++ )
{
    listLI[i].index = i;
    listLI[i].onclick = function()
    {
        console.log(this.index);
        for ( var j = 0; j < listLI.length; j ++ )
        {
            listLI[j].removeAttribute('id');
            listOL[j].style.display = 'none';
        }
        this.setAttribute('id', 'mouseLi');
        listOL[this.index].style.display = 'block';
    }
}

// 滚动广告
window.onscroll = function()
{
    var oRight = $id('couplet');
    // 获取滚动条的位置
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;    
    // 把可视区的高度 减去 div的高度除2 加上 滚动条纵坐标的位置
    startMovePicture(parseInt((document.documentElement.clientHeight-oRight.offsetHeight) / 4 + scrollTop));
    // console.log(parseInt((document.documentElement.clientHeight-oRight.offsetHeight) / 4 + scrollTop));
}

// 悬浮运动框架函数
var tim = null;
function startMovePicture(iTarget)
{
    var oRight = document.getElementById('couplet');
    
    // 先关闭定时器，防止重复使用运动框架函数
    clearInterval(tim);
    tim = setInterval(function(){
        // console.log(iTarget);
        // 计算速度，除的数字越大物体移动越慢，越小物体移动越快
        var speedRight = (iTarget-oRight.offsetTop) / 4;
        
        // 把速度取整，防止物体晃动...
        speedRight = speedRight>0 ? Math.ceil(speedRight) : Math.floor(speedRight);
        
        // 判断左、右div顶部的偏移量是否和目标的相等
        if ( oRight.offsetTop == iTarget)
        {
            // 如果相等关闭定时器
            clearInterval(tim);
        }
        else
        {
            // 否则左、右div样式的上偏移量就 等于 左、右div顶部偏移量加速度
            oRight.style.top = oRight.offsetTop+speedRight+'px';
        }
    }, 30);
}

function esc(th){
    var parentElement = th.parentNode;
    parentElement.style.display = 'none';
}