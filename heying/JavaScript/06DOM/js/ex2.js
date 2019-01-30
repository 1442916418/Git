var aBtn = document.getElementsByClassName("listBtn");
var aItem = document.getElementsByClassName("listItem");

for ( var i = 0; i < aBtn.length; i ++ )
{
    aBtn[i].index = i;
    aBtn[i].onmousedown = function()
    {
        for ( var j = 0; j < aItem.length; j ++ )
        {
            aItem[j].style.display = 'none';
        }
        aItem[this.index].style.display = 'block';
    }

    aBtn[i].onmousemove = function()
    {
        for ( var j = 0; j < aItem.length; j ++ )
        {
            aItem[j].style.display = 'none';
        }
        aItem[this.index].style.display = 'none';
    }
}