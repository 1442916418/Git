/*创建圣诞树*/
var oBoxSmall = document.getElementById("box-0");
var oSec = document.getElementsByClassName("section1");

// 创建外框div
var oSmallNode = document.createElement("div");
oSmallNode.className = "section1";
// 创建第一个三角形
var oSmallHeader1 = document.createElement("div");
oSmallHeader1.className = "header1";
// 创建第二个三角形
var oSmallNode1 = document.createElement("div");
oSmallNode1.className = "node1";
// 创建第三个三角形
var oSmallMain1 = document.createElement("div");
oSmallMain1.className = "main1";
// 创建树干
var oSmallFooter1 = document.createElement("div");
oSmallFooter1.className = "footer1";

// 插入
oBoxSmall.appendChild(oSmallNode);
oSec[0].appendChild(oSmallHeader1);
oSec[0].appendChild(oSmallNode1);
oSec[0].appendChild(oSmallMain1);
oSec[0].appendChild(oSmallFooter1);

for (var i = 1; i <= 8; i ++)
{
    // 克隆节点
    var oCloneNode =  oBoxSmall.cloneNode(true);
    // 修改一下id的值，避免id重复
    oCloneNode.setAttribute("id", "box-" + i);
    // 在父节点插入克隆的节点
    oBoxSmall.parentNode.appendChild(oCloneNode);
}