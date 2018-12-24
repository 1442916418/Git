// 雪花
// 获取屏幕宽高
var windwoWidth = window.screen.width;   
var windowHeight = window.screen.height;

// 创建雪花
function createSnow()
{
    var left = 0;
    var top = 0;

    // 定义一个初始化随机数，使雪花在屏幕中
    var left_random = Math.random() * windwoWidth;
    var top_random = Math.random() * windowHeight;
    var div = document.createElement('div');
    div.className = 'snow';
    div.style.transform = 'scale('+(Math.random())+')';

    document.body.appendChild(div);

    // 雪花飘落
    setInterval(function(){
        div.style.left = left_random + left + 'px';
        div.style.top = top_random + top + 'px';
        left += 0.2;
        top += 0.2;

        // 判读如果雪花跑到屏幕外面了，让雪花重新返回屏幕顶部
        if (left_random+left >= windwoWidth)
        {
            left_random = Math.random();
            left = 0;
        } 
        if (top_random+top >= windowHeight)
        {
            top_random = Math.random();
            top = 0;
        }
    }, 10);
}

for (var i = 0; i < 200; i++)
{
    createSnow();
}