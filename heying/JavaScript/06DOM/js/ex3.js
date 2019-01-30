var oBigPicture = document.getElementsByClassName("bigPicture");
var oSmallPicture = document.getElementsByClassName("smallPicture");
var aBig = oBigPicture[0].getElementsByTagName("img");
var aSmall = oSmallPicture[0].getElementsByTagName("img");

for ( var i = 0; i< aSmall.length; i ++ )
{
    aSmall[i].index = i;
    aSmall[i].onmousemove = function()
    {
        for ( var j = 0; j < aBig.length; j ++ )
        {
            aSmall[j].className = "";
            aBig[j].style.zIndex = 1;
        }
        aSmall[this.index].className = "border";
        aBig[this.index].style.zIndex = 100;
    }
}