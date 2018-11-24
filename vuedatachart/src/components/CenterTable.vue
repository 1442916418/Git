<template>
    <div class="sectionItemCenter">
        <div class="sectionCenter">
            <div class="center1">
                <div class="node1">
                    <div class="nodeTop">
                        <p>当日产量</p>
                        <img src="../assets/股票.png">
                    </div>
                    <div class="nodecontent">
                        <p><span>2</span></p>
                        <p><span>1</span></p>
                        <p><span>2</span></p>
                        <p><span>3</span></p>
                        <p><span>2</span></p>
                        <p><span>5</span></p>
                    </div>
                </div>
                <div class="node2">
                    <div class="nodeTop"></div>
                    <div class="nodecontent">
                        <div class="contentTitle"><p>计划产量</p></div>
                        <div class="contentNumber"><P>196020</P></div>
                    </div>
                </div>
                <div class="node3">
                    <div class="nodeTop"></div>
                    <div class="nodecontent">
                        <div class="contentTitle"><p>已完成</p></div>
                        <div class="contentNumber"><P>75%</P></div>
                    </div>
                </div>
                <div class="node4">
                    <div class="chartTitle">
                        <p><span>A</span>产品良品率</p>
                    </div>
                    <div class="chartContent"><p>75%</p></div>
                </div>
                <div class="node4">
                    <div class="chartTitle">
                        <p><span>B</span>产品良品率</p>
                    </div>
                    <div class="chartContent">
                        <div id="centerChart1"></div>
                    </div>
                </div>
                <div class="node4">
                    <div class="chartTitle">
                        <p><span>C</span>产品良品率</p>
                    </div>
                    <div class="chartContent">
                        <div id="centerChart2"></div>
                    </div>
                </div>
            </div>
            <div class="center">
                <div class="title">生产量/良品率统计</div>
                <div class="englishTitle">Yield Statistics</div>
                <div id="lineChart1" class="lineChart1"></div>
                <div class="centerBorder"></div>
            </div>
            <div class="center">
                <div class="title">机器产量统计</div>
                <div class="englishTitle">production</div>
                <div id="lineChart2" class="lineChart2"></div>
                <div class="centerBorder"></div>
            </div>
        </div>
    </div>  
</template>

<script>
import echart from 'echarts';

export default {
    data () {
        return {
            
        }
    },
    
}
</script>

<style>
@import '../TotalStyle';
</style>