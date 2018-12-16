// 运动框架
// obj: 要运动的物体名称; json: 数组，可以同时多种运动; funEnd: 函数，可传可不传
function startMove(obj, json, funEnd)
{
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        // 假设：所有的值都到了
        var bStop = true;

        // 每一次定时器循环的时候，json里有多少条数据，就循环多少次
        for (var attr in json)
        {
            var cur = 0;

            if (attr == 'opacity')
            {
                cur =Math.round(parseFloat(getStyle(obj, attr))*100);
            }
            else
            {
                cur = parseInt(getStyle(obj, attr));
            }

            var speed = (json[attr]-cur) / 6;
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

            // 判断：如果当前值不等于目标点，就把bStop设置为false，因为现在碰到的一个情况，
            //      碰到一个当前值并没有到达目标点的情况，这时说明假设是不成立的，就把bStop设置为false
            if (cur != json[attr])
                bStop = false;
           
            if (attr == 'opacity')
            {
                obj.style.opacity = (cur+speed) / 100;
            }
            else
            {
                obj.style[attr] = cur + speed + 'px';
            }
            
            // 都结束时判断，这时bStop还是保持true的状态，说明中间没有出现不等于目标点的情况，
            // 如果没有出现这种没有到达的情况，这时可以说当前值都到达目标点了。
            if (bStop)
            {
                // 关闭定时器
                clearInterval(obj.timer);

                // 顺便执行函数
                if (funEnd) funEnd();
            }
        }
    }, 30);
}

// 获取样式
function getStyle(obj, name)
{
    if (obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj, false)[name];
    }
}

function getByClass(oParent, sClass)
{
    var aEle = document.getElementsByTagName('*');
    var aResult = [];

    for (var i = 0; i < aEle.length; i++)
    {
        if (aEle[i].className == sClass)
        {
            aResult.push(aEle[i]);
        }
    }
    
    return aResult;
}