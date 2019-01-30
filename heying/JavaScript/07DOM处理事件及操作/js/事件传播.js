// 事件冒泡阶段(从内向外传播事件): 从发生事件的目标元素开始, 一层一层向父元素传播
// 事件捕获阶段(从外向内传播事件): 从最顶级的父元素一层一层向内传递
// 事件传播过程:先经历捕获阶段,然后目标元素事件执行,再经历冒泡阶段

// (一)、事件冒泡阶段
function testBody(e){
    console.log('click body', e.target);
}
function testParent(){
    console.log('click parent');
}
function testChild(e){
    console.log('click child', e.target);
}

// (二)、
window.onload = function()
{
    var a1 = document.getElementById("catch");
    var b1 = document.getElementById("btn1");
    var b2 = document.getElementById("btn2");

    // b2.onclick = function()
    // {
    //     console.log('b2 click');
    // }

    // true: catch捕获, FALSE:bubble冒泡
    // a1.addEventListener("click", function(){
    //     console.log('a1 click');
    // }, true);
    // b1.addEventListener('click', function()
    // {
    //     console.log('b1 click');
    // });

    // (三)、事件冒泡的使用
    var ulList = document.getElementsByTagName('ul');
    // ulList[0].addEventListener('click',function(event){
    //     console.log('click', event.target);
    // });
    ulList[0].onclick = function(event){ // ie中必须加event参数
        // console.log('click ');
        console.log('ul click:', event.target);
    };
}