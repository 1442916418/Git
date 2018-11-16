function tick() {
    var years,months,days,hours, minutes, seconds;
    var intYears,intMonths,intDays,intHours, intMinutes, intSeconds;
    var today;
    today = new Date(); //系统当前时间
    intYears = today.getFullYear(); //得到年份,getFullYear()比getYear()更普适
    intMonths = today.getMonth() + 1; //得到月份，要加1
    intDays = today.getDate(); //得到日期
    intHours = today.getHours(); //得到小时 
    intMinutes = today.getMinutes(); //得到分钟
    intSeconds = today.getSeconds(); //得到秒钟
    years = intYears + "-"; 

    if(intMonths < 10 ){
    months = "0" + intMonths +"-";
    } else {
    months = intMonths +"-";
    }
    if(intDays < 10 ){
    days = "0" + intDays +" ";
    } else {
    days = intDays + " ";
    }
    if (intHours == 0) {
    hours = "00:";
    } else if (intHours < 10) {
    hours = "0" + intHours+":";
    } else {
    hours = intHours + ":";
    }
    if (intMinutes < 10) {
    minutes = "0"+intMinutes+":";
    } else {
    minutes = intMinutes+":";
    }
    if (intSeconds < 10) {
    seconds = "0"+intSeconds+" ";
    } else {
    seconds = intSeconds+" ";
    }
    timeString = years+months+days+hours+minutes+seconds;
    Clock.innerHTML = timeString;
    window.setTimeout("tick();", 1000);
    }
    window.onload = tick;

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('data1'));
// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"   
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    formatter: '{d}%\n{b}',
                    padding: [0,-20]
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1548, name:'替货'},
                {value:335, name:'设备'},
                {value:310, name:'泡货'},
                {value:234, name:'设备'}
            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

var myChart2 = echarts.init(document.getElementById('data2'));
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['A', 'A+B']
    },
    grid: {
        left: '5%',
        right: '10%',
        bottom: '5%',
        top: '15%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['乘夜骐','朱峰','王完成','佳宁','及云涛']
    },
    series: [
        {
            name: 'A',
            type: 'bar',
            data: [200, 25, 100, 90, 240]
        },
        {
            name: 'B',
            type: 'bar',
            data: [100, 125, 110, 60, 170]
        }
    ]
};
myChart2.setOption(option);

