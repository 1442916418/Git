// 第三种方法： 改进方法: 将每个省份的城市选项放在二维数组中,对应省份的字符串，下标使用字符串表示

var sProSelect = document.getElementById('province');   // 获取省份
var aProArray = [ '安徽省', '浙江省'];      // 定义省份数组

for ( var i = 0; i < aProArray.length; i ++ )
{
    var oOption = document.createElement('option');
    oOption.innerHTML = aProArray[i];
    oOption.value = aProArray[i];
    sProSelect.appendChild(oOption);
}

function changeCity(proSelect)
{
    console.time();
    // 获取选中的省份
    console.log(proSelect.value, proSelect.selectedIndex, proSelect.options[proSelect.selectedIndex].value);

    var oCitySelect = document.getElementById('city');
    // 删除原有的城市选项
    oCitySelect.options.length = 1;

    var aCtiyArray = new Array();
    aCtiyArray['安徽省'] = ['合肥市', '六安市'];
    aCtiyArray['浙江省'] = ['杭州市', '金华市'];

    var oProvince = proSelect.value;
    console.log(oProvince, oCitySelect[oProvince]);
    var city = aCtiyArray[oProvince];

    for ( var i = 0; i < city.length; i ++ )
    {
        var oOption = document.createElement('option');
        oOption.innerHTML = city[i];
        oOption.value = city[i];
        oCitySelect.appendChild(oOption);
    }
    console.timeEnd();
}