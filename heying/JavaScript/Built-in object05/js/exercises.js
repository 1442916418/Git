// 习题一
function time()
{
    var date = new Date();

    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if ( seconds < 10 )
    {
        seconds = "0" + seconds;
    }

    document.getElementById("time").innerHTML = "现在时间是："+year+"年"+month+"月"+day+"日"+hours+"时"+minutes+"分"+seconds+"秒 ";

    // if ( hours >= 8 && hours < 12 )
    // {
    //     alert("早上好！");
    // }
    // else if ( hours >= 12 && hours < 14 )
    // {
    //     alert("中午好!该休息了");
    // }
    // else if ( hours >= 14 && hours < 18 )
    // {
    //     alert("下午好！");
    // }
    // else if ( hours >= 19 && hours < 24 )
    // {
    //     alert("晚上好!天黑了,心还是要亮着");
    // }
}

// 习题二
var n = "201010-34234-354234-323423";
var str = n.split("-");

function sum()
{
    var s = 0;
    for ( var i = 0; i < str.length; i ++ )
    {
        s += Number(str[i]);
    }
    document.write(s);
}

// 习题三
function totalScore()
{
    var arr = [];
    var sum = 0;

    arr.push(Number(prompt("请输入10个成绩：")));

    var highestScore = arr[0];
    var bottomScore = arr[0];

    for ( var i = 0; i < arr.length; i ++ )
    {
        if ( arr.length != 10)
        {
            if ( isNaN(arr[i]) )
            {
                alert("输入的不是数字，请重新输入！");
                arr[i] = null;
            }
            arr.push(Number(prompt("请输入10个成绩：")));
        }
        else 
        {
            for ( var j = 0; j < arr.length; j ++ )
            {
                sum += arr[j];
                if ( arr[j] > highestScore )
                {
                    highestScore = arr[j];
                }
                if ( arr[j] < bottomScore )
                {
                    bottomScore = arr[j];
                }
            }

            document.write("总和是：",sum,"<br>");
            document.write("最大值是：",highestScore,"<br>");
            document.write("最小值是：",bottomScore,"<br>");
        }
    }    
}

// 习题四
function ex4(s)
{
    document.write("1)、字符串长度：",s.length,"<br>");
    document.write("2)、取出指定位置上字符,如:0,3,5,9：",s[0],s[3],s[5],s[9],"<br>");

    if ( s.indexOf("i") == -1 )
    {
        document.write("3)、字符串中没有该字符！","<br>");
    }
    else 
    {
        document.write("3)、字符串中有该字符","<br>");
    }

    document.write("4)、截取指定位置1(起始位置)~5(结束位置)之间的字符串：",s.substr(1, 5),"<br>");

    var count = 0;
    for ( var i = 0; i < s.length; i ++ )
    {
        if ( s[i] == "f")
        {
            count ++;
        }
    }
    document.write("字符串中字符f出现的次数为：",count,"次","<br>");
}

// 习题五
function ex5()
{
    var random = Math.random().toFixed(1)*100;
    var userInput = Number(prompt("请输入自己的猜测："));

    do
    {
        if ( userInput > random )
        {
            alert("猜大了！请重新输入");
            userInput = Number(prompt("请输入自己的猜测："));
        }
        else if ( userInput < random )
        {
            alert("猜小了！请重新输入");
            userInput = Number(prompt("请输入自己的猜测："));
        }
    }while( userInput != random );

    alert("恭喜你猜对了，莫有奖励！！！");    
}

// 第六题
function life()
{
    var date = new Date();
    
    var userInput = prompt("请输入出生年月日，格式为2019-1-1","1997-6-21");
    var d = new Date(userInput);

    var sum = date.getTime() - d.getTime();
    var days = sum/1000/60/60/24;

    var surplus = (100*365*24*60*60) - days;
    
    document.write("你已经存活了",Math.floor(days),"天了！","<br>");
    document.write("如果能活到100岁，还有",Math.floor(surplus),"天可以得瑟!!!!!");
}

