<template>
    <div class="sectionItem">
        <div class="sectionLeft">
            <div class="left">
                <div class="leftHeader">
                    <div class="title">设备运行状态</div>
                    <div class="englishTitle">Equipment Running Status</div>
                </div>
                <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
                <div id="data1" class="data1 fourAngles"></div>
                <div class="leftBorder"></div>
            </div>
            <div class="left">
                <div class="leftHeader">
                    <div class="title">人员绩效</div>
                    <div class="englishTitle">Workers Performance</div>
                </div>
                <div id="data2" class="data2 fourAngles"></div>
                <div class="leftBorder"></div>
            </div>
            <div class="left">
                <div class="leftHeader">
                    <div class="title">报警信息</div>
                    <div class="englishTitle">Alarm Information</div>
                </div>
                <div id="data3" class="data3 fourAngles">
                    <p>【H338-&gt:厂务冷却水入水温度[℃]】 34-&gt:14.13</p>
                    <p>【H338-&gt:厂务冷却水入水温度[℃]】 34-&gt:14.13</p>
                    <p>【H338-&gt:厂务冷却水入水温度[℃]】 34-&gt:14.13</p>
                    <p>【H338-&gt:厂务冷却水入水温度[℃]】 34-&gt:14.13</p>
                    <p>【H338-&gt:厂务冷却水入水温度[℃]】 34-&gt:14.13</p>
                    <p>【H338-&gt:厂务冷却水入水温度[℃]】 34-&gt:14.13</p>
                </div>
                <div class="leftBorder"></div>
            </div>
        </div>
    </div>
</template>

<script>
import echart from 'echarts';
export default {
    data () {
        return {
            chart1: '',
            chart2: ''
        }
    },
    methods: {
        DeviceStatus (id) {
            this.chart1 = echart.init(document.getElementById(id));
            this.chart1.setOption({
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
            })
        },
        WorkersPerformance (id) {
            this.chart2 = echart.init(document.getElementById(id));
            this.chart2.setOption({
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
                        barWidth: '10',
                        name: 'A',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: new echart.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        {offset: 0, color: '#106DBE'},
                                        {offset: 1, color: '#25D8FB'}
                                    ]
                                ),
                                label: {
                                    show: true ,
                                    position: 'right',
                                    color: '#847e8b',
                                    fontSize: 10
                                }
                            }
                        },
                        data: [200, 25, 100, 90, 240]
                    },
                    {
                        barWidth: '10',
                        name: 'A+B',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: new echart.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        {offset: 0, color: '#A00B23'},
                                        {offset: 1, color: '#F0515F'}
                                    ]
                                ),
                                label: {
                                    show: true ,
                                    position: 'right',
                                    color: '#847e8b',
                                    fontSize: 10
                                }
                            }
                        },
                        data: [100, 125, 110, 60, 170]
                    }
                ]
            })
        }
    },
    // 调用
    mounted () {
        this.$nextTick(function(){
            this.DeviceStatus('data1');
            this.WorkersPerformance('data2');
        })
    }
}
</script>

<style>
@import '../TotalStyle';
</style>