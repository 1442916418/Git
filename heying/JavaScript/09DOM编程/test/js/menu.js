var aMenu1 = document.getElementsByClassName('menu-1');
for ( var i = 0; i < aMenu1.length; i ++ )
{
    aMenu1[i].onclick = function()
    {
        // console.log(this, this.nextElementSibling);
        // var subs = document.getElementsByName('menu-sub'); 
        // console.log(subs, subs.length);  
        // for ( var j = 0; j < subs.length; j ++ )
        // {
        //     subs[j].className = 'hidd';
        // }

        var a = document.getElementsByClassName('n');
        console.log(a, a.length);

        for ( var i = 0; i < a.length; i ++ )
        {
            a[i].className = 'hidd';
        }

        this.nextElementSibling.className = 'active';
    }
}