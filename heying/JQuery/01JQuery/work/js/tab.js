$(function () {
    // 默认样式
    $('#menu li:first a').css( { "opacity":"1", "box-shadow":"0 -2px 0 #fff inset" } );
    $('.box').css('background','#8021D3');
    $('.txt').html(getText("Ps"));
    
    // 颜色数组和a标签数组
    var color = [ "#8021D3", "#00A566", "#C9003C", "#E54400", "#445370" ];
    var aArr = $('#menu li a');

    // 给a标签添加单机事件
    $(aArr).click(function(){
        // 当点击其中一个a标签时，循环去除其他a标签的样式
        $(aArr).each(function(index, value){
            this.index = index;
            $('.txt').html('');
            $('#menu a').css( { "opacity":"", "box-shadow":"" } );
        });

        // 点击样式
        $('#menu a').eq(this.index).css( { "opacity":"1", "box-shadow":"0 -2px 0 #fff inset" } );
        $('.box').css('background',color[this.index]);
        $('.txt').html(getText(this.text));
    });
    
    // 取出对应名称的文本值
    function getText(name){
        var txt = {
            "Ps":"Adobe Photoshop，简称“PS”，是由Adobe Systems开发和发行的图像处理软件。Photoshop主要处理以像素所构成的数字图像。使用其众多的编修与绘图工具，可以有效地进行图片编辑工作。ps有很多功能，在图像、图形、文字、视频、出版等各方面都有涉及。2003年，Adobe Photoshop 8被更名为Adobe Photoshop CS。2013年7月，Adobe公司推出了新版本的Photoshop CC，自此，Photoshop CS6作为Adobe CS系列的最后一个版本被新的CC系列取代。",
            "Html5":"万维网的核心语言、标准通用标记语言下的一个应用超文本标记语言（HTML）的第五次重大修改（这是一项推荐标准、外语原文：W3C Recommendation、见本处参考资料原文内容： [1]  ）。2014年10月29日，万维网联盟宣布，经过接近8年的艰苦努力，该标准规范终于制定完成。",
            "Css":"层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。 [1] CSS 能够对网页中元素位置的排版进行像素级精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力。 [2] ",
            "JavaScript":"JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。在1995年时，由Netscape公司的Brendan Eich，在网景导航者浏览器上首次设计实现而成。因为Netscape与Sun合作，Netscape管理层希望它外观看起来像Java，因此取名为JavaScript。但实际上它的语法风格与Self及Scheme较为接近。 [1] 为了取得技术优势，微软推出了JScript，CEnvi推出ScriptEase，与JavaScript同样可在浏览器上运行。为了统一规格，因为JavaScript兼容于ECMA标准，因此也称为ECMAScript。",
            "jQuery":"jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。"
        };
        for ( n in txt )
        {
            if ( n == name )
            {
                return txt[n];
            }
        }
    }
});