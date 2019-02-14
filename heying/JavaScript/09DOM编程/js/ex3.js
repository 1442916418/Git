var oHead = document.getElementsByClassName('section-header')[0];
var aBtn = oHead.getElementsByTagName('input');
var oCon = document.getElementsByClassName('section-content')[0];
var aDiv = oCon.getElementsByTagName('ol');

for ( var i = 0; i < aBtn.length; i ++ )
{
    aBtn[i].index = i;
    aBtn[i].onclick = function()
    {
        for ( var i = 0; i < aBtn.length; i ++ )
        {
            aBtn[i].setAttribute('id', '');
            aDiv[i].style.display = 'none';
        }
        this.setAttribute('id', 'active');
        aDiv[this.index].style.display = 'block';
    }
}