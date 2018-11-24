<template>
    <div class="sectionItemRight">
        <div class="sectionRight">
            <div class="right1">
                <div class="title">不良指标分布</div>
                <div class="englishTitle">Poor lndicators</div>
                <div id="rightChart1" class="rightChart1"></div>
                <div class="centerBorder"></div>
            </div>
            <div class="right2">
                <div class="title">质量控制</div>
                <div class="englishTitle">Quality Control</div>
                <div id="rightChart2" class="rightChart2"></div>
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
   }
}
</script>

<style>
@import '../TotalStyle';
</style>