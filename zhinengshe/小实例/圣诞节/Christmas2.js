/*创建圣诞树*/
var oBoxSmall2 = document.getElementById("box2-0");
var oSec2 = document.getElementsByClassName("section2");

// 创建外框div
var oSmallNode2 = document.createElement("div");
oSmallNode2.className = "section2";
// 创建第一个三角形
var oSmallHeader2 = document.createElement("div");
oSmallHeader2.className = "header2";
// 创建第二个三角形
var oSmallNode22 = document.createElement("div");
oSmallNode22.className = "node2";
// 创建第三个三角形
var oSmallMain2 = document.createElement("div");
oSmallMain2.className = "main2";
// 创建树干
var oSmallFooter2 = document.createElement("div");
oSmallFooter2.className = "footer2";

// 插入
oBoxSmall2.appendChild(oSmallNode2);
oSec2[0].appendChild(oSmallHeader2);
oSec2[0].appendChild(oSmallNode22);
oSec2[0].appendChild(oSmallMain2);
oSec2[0].appendChild(oSmallFooter2);

for (var i = 1; i <= 8; i ++)
{
    // 克隆节点
    var oCloneNode =  oBoxSmall2.cloneNode(true);
    // 修改一下id的值，避免id重复
    oCloneNode.setAttribute("id", "box2-" + i);
    // 在父节点插入克隆的节点
    oBoxSmall2.parentNode.appendChild(oCloneNode);
}