var oYear = document.getElementById('year');    // 获取年份
var oMonth = document.getElementById('month');  // 获取月份
var oDay = document.getElementById('day');      // 获取日
var d = new Date();
var dYear = d.getFullYear();                    // 获取当前年份
// 添加年份
window.onload = function()
{
    for ( var i = dYear-100; i < dYear; i ++ )
    {
        var oOption = document.createElement('option');
        oOption.innerHTML = i;
        oOption.value = i;
        oYear.appendChild(oOption);
    }
}
// 添加月份
function changeMonth(m)
{
    oMonth.options.length = 1;
    oDay.options.length = 1;

    for ( var i = 1; i <= 12; i ++ )
    {
        var oOption = document.createElement('option');
        oOption.innerHTML = i;
        oOption.value = i;
        oMonth.appendChild(oOption);
    }
}
// 添加日
function changeDay(d)
{
    oDay.options.length = 1;
    var oD = parseInt(d.value);
    switch ( oD )
    {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: 
                leapYearOrPlainYear(31);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
                leapYearOrPlainYear(30);
            break;
        case 2:
            var oY = parseInt(oYear.value);
            if ( ( oY%4==0 && oY%100!=0 ) || ( oY%400==0 ) )
            {
                leapYearOrPlainYear(29);
            }
            else
            {
                leapYearOrPlainYear(28);
            }
            break;
    }
}
// 闰年或平年
function leapYearOrPlainYear(index)
{
    for ( var k = 1; k <= index; k ++ )
    {
        var oOption = document.createElement('option');
        oOption.innerHTML = k;
        oOption.value = k;
        oDay.appendChild(oOption);
    }
}