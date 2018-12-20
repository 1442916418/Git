function LimitDrag(id)
{
    // 继承属性
    Drag.call(this, id);
}

for (var i in Drag.prototype)
{
    LimitDrag.prototype[i] = Drag.prototype[i];
}

LimitDrag.prototype.fnMove = function(ev)
{
    var oEvent = ev || event;
    var leftX = oEvent.clientX - this.disX;
    var topY = oEvent.clientY - this.disY;

    if ( leftX<0 )
    {
        leftX = 0;
    }
    else if ( leftX>document.documentElement.clientWidth-this.oDiv.offsetWidth)
    {
        leftX = document.documentElement.clientWidth-this.oDiv.offsetWidth;
    }
    if ( topY<0 )
    {
        topY = 0;
    }
    else if ( topY>document.documentElement.clientHeight-this.oDiv.offsetHeight)
    {
        topY = document.documentElement.clientHeight-this.oDiv.offsetHeight;
    }


    this.oDiv.style.left = leftX+'px';
    this.oDiv.style.top = topY+'px';
}