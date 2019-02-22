// 源元素事件
// 在源元素中拖放开始
function dragStart(ev){
    // console.log('源元素拖放开始');
    var ev = ev || event;
    var dt = ev.dataTransfer;           // 向目标元素拖放时传入数据（字符串）
    dt.setData('Text', ev.target.id);   // 保存数据，数据类型两种：Text-文本数据；Url-url数据
}
// 源元素中拖放过程移动中
function drag()
{
    // console.log('源元素拖放移动中');
}
// 源元素中拖放结束
function dragEnd()
{
    // console.log('源元素拖放结束');
}

// 目标元素事件
// 当源元素(被拖动的元素)第一次进入目标元素区域时触发
function dragenter()
{
    // console.log('当源元素第一次进入目标元素区域时触发');
}
// 当源元素(被拖动的元素)在目标元素区域内移动时持续触发
function dragover(ev){
    ev.preventDefault()
    // console.log('当源元素在目标元素区域内移动时持续触发')
}

// 当源元素在目标元素区域内投放时触发，在目标元素上完成一次有效投放时触发
function drop(ev){
    var ev = ev || event;
    // 默认不能将元素投放在目标元素(所有元素都可以成为目标元素)上, 要想投放, 必须阻止默认操作
    ev.preventDefault();
    // console.log('当源元素投放在目标元素上时触发');

    var id = ev.dataTransfer.getData('Text');       // 获取源元素传递过来的数据，由setData()保存的数据
    console.log('源元素id属性：', id);

    var sourceObj = document.getElementById(id);    // 获得源元素id
    ev.target.appendChild(sourceObj);               // 将获得的元素放入目标元素中

}
// 当源元素超出目标元素范围时触发，不是有效投放并离开目标元素时触发
function dragLeave(){
    // console.log('当源元素超出目标元素范围时触发');
}