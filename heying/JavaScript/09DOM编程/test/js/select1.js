// 第一种方法：使用switch case判断，过程繁琐，对应的序号容易错误，一旦省份数组省市的顺序发送变化，对应的城市就就会乱套

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
    // 获取选中的省份
    console.log(proSelect.value, proSelect.selectedIndex, proSelect.options[proSelect.selectedIndex].value);

    var oCitySelect = document.getElementById('city');
    // 删除原有的城市选项
    oCitySelect.options.length = 1;

    switch(proSelect.value)
    {
        case "安徽省":
            var aCityArray = ['合肥市', '马鞍山市', '六安市'];      // 声明城市数组
            for ( var i = 0; i < aCityArray.length; i ++ )
            {
                var oOption = document.createElement('option');
                oOption.innerHTML = aCityArray[i];
                oOption.value = aCityArray[i];
                oCitySelect.appendChild(oOption);
            }
            break;
        case "浙江省":
            var aCityArray = ['杭州市', '金华市'];      // 声明城市数组
            for ( var i = 0; i < aCityArray.length; i ++ )
            {
                var oOption = document.createElement('option');
                oOption.innerHTML = aCityArray[i];
                oOption.value = aCityArray[i];
                oCitySelect.appendChild(oOption);
            }
            break;
    }
}