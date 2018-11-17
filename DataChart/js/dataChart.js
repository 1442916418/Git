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
    color: ['#1FB5FC', '#E74346', '#6F92BB','#414141'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    formatter: '{d}%\n{b}',
                    padding: [0,-20],
                    textStyle: {
                        color: '#847e8b'
                    }
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
    label: {
        normal: {
            textStyle: {
                color: '#847e8b'
            }
        }
    },
    color: ['#1FB5FC', '#E74346'],
    legend: {
        data: [{
            name: 'A',
            textStyle: {
                color: '#847e8b'
            }
        }, {
            name: 'A+B',
            textStyle: {
                color: '#847e8b'
            }
        }]
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
        boundaryGap: [0, 0.01],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#847e8b',//左边线的颜色
                width:'1'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: '#847e8b',//坐标值得具体的颜色
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['乘夜骐','朱峰','王完成','佳宁','及云涛'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#847e8b',//左边线的颜色
                width:'1'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: '#847e8b',//坐标值得具体的颜色
            }
        }
    },
    series: [
        {
            name: 'A',
            type: 'bar',
            data: [200, 25, 100, 90, 240]
        },
        {
            name: 'A+B',
            type: 'bar',
            data: [100, 125, 110, 60, 170]
        }
    ]
};
myChart2.setOption(option);


var centerChart1 = echarts.init(document.getElementById('centerChart1'));
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#44A2F9', '#504265'],
    series: [
        {
            name:'B良品合格率',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter:function(argument){
                        var html;
                        html = "98%";
                        return html;
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14px',
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
                {value:98, name:'合格'},
                {value:2, name:'不合格'},
            ]
        }
    ]
};
centerChart1.setOption(option);

var centerChart2= echarts.init(document.getElementById('centerChart2'));
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#44A2F9', '#504265'],
    series: [
        {
            name:'C良品合格率',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter:function(argument){
                        var html;
                        html = "90%";
                        return html;
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14px',
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
                {value:90, name:'合格'},
                {value:10, name:'不合格'},
            ]
        }
    ]
};
centerChart2.setOption(option);


var lineChart1= echarts.init(document.getElementById('lineChart1'));
var option = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['系列1','系列2'],
        icon:'stack',// 改变或者增加这个为stack，图例会变成矩形。
        textStyle: {
            fontSize: 12,
            color: 'white'
        },
        x: 'left',
        top: '5px',
        left: '22px'
    },
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['01/01','02/02','03/03','04/04','05/05','06/06','07/07','08/08','09/09','10/10','11/11','12/12'],
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#847e8b',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#847e8b',//坐标值得具体的颜色
                }
            }
        }
    ],
    yAxis : [
        {
            name : '单位',
            nameLocation: 'end',
            type : 'value',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#847e8b',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#847e8b',//坐标值得具体的颜色
                }
            },
            splitLine: {
                show: false
            }
        }
    ],
    series : [
        {
            name:'系列1',
            type:'line',
            // areaStyle: {},
            symbol: 'circle',     //设定为实心点
            symbolSize: 7,   //设定实心点的大小
            itemStyle : {  
                normal : {  
                    color:'#E92F57',
                    lineStyle:{  
                        color:'#E92F57'  
                    }  
                }  
            },  
            data:[420, 332, 101, 34, 90, 230, 120, 410, 322, 132, 24, 203]
        },
        {
            name:'系列2',
            type:'line',
            symbol: 'circle',     //设定为实心点
            symbolSize: 7,   //设定实心点的大小
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(33,196,253,0.8)' // 0%处的颜色
                    }, {
                        offset: 1, color: 'rgba(33,196,253,0.2)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
                
            },
            itemStyle : {  
                normal : {  
                    color:'#21C4FD',
                    lineStyle:{  
                        color:'#21C4FD'  
                    }  
                }  
            },  
            data:[220, 222, 240, 134, 190, 130, 80, 220, 132, 201, 134, 280]
        }
    ]
};
lineChart1.setOption(option);


var lineChart2= echarts.init(document.getElementById('lineChart2'));
var option = {
    tooltip: {

    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        data: ['机床1','机床2','机床3','机床4','机床5','机床6','机床7','机床8','机床9','机床10',
               '机床11','机床12','机床13','机床14','机床15','机床16','机床17','机床18','机床19'],
               axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#847e8b',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#847e8b',//坐标值得具体的颜色
                }
            },
            splitLine: {
                show: false
            }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#847e8b',//左边线的颜色
                width:'1'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: '#847e8b',//坐标值得具体的颜色
            }
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            name: '机床',
            type: 'bar',
            barWidth: '10',
            itemStyle: {
                color: '#21C3FC'
            },
            barCatgoryGap: '10%',
            data: ['340','112','133','123','122','144','111','156','188','199',
                   '111','222','233','222','212','111','440']
        }
    ]

}
lineChart2.setOption(option);
