<template>
    <div class="head">
        <div class="header">
            <div class="h-left">
                <p>logo图片</p>
            </div>
            <div class="h-center">
                <p>某某工厂车间实况状况</p>
            </div>
            <div class="h-right">
                <div class="temperature">
                    <img src="../assets/温度计1.png">
                    <p>车间温度:23℃</p>
                </div>
                <div class="humidity">
                    <img src="../assets/水滴.png">
                    <P>车间湿度:60%</P>
                </div>
            </div>
            <div class="time">
                <img src="../assets/time.png">
                <p id="Clock">{{nowTime}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                nowTime: '',
            }
        },
        methods: {
            // 获取当前时间函数
            timeFormate(timeStamp) {
                let year = new Date(timeStamp).getFullYear();
                let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
                let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
                let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
                let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
                let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
                this.nowTime = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm+":"+ss;
            },
            // 定时器函数
            nowTimes(){
                this.timeFormate(new Date());
                setInterval(this.nowTimes,1*1000);
            },
        },
        created () {
            this.nowTimes();
        }

    }
</script>

<style>
.head{
    width: 100%;
    height: 100%;
    display:  -webkit-box;
    display:  -ms-flexbox;
    display:  flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.head .header{
    width: 100%;
    height: 90px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    margin-top: 10px;
}
.head .header .h-left{
    width: 400px;
    height: 60px;
    display:  -webkit-box;
    display:  -ms-flexbox;
    display:  flex;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.head .header .h-center{
    width: 500px;
    height: 60px;
    display:  -webkit-box;
    display:  -ms-flexbox;
    display:  flex;
    -webkit-box-pack:  center;
        -ms-flex-pack:  center;
            justify-content:  center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.head .header .h-right{
    width: 400px;
    height: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
}
.head .header .h-left p{
    font-size: 26px;
    color: #44A2F9;
    margin-left: 20px;
    font-weight: 700;
}
.head .header .h-center p{
    font-size: 30px;
    color: white;
    font-weight: 500;
}
.head .header .h-right .temperature{
    width: 200px;
    height: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.head .header .h-right .humidity{
    width: 200px;
    height: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-left: 20px;
}
.head .header .h-right .temperature P,
.head .header .h-right .humidity p{
    color: #1296DB;
}
p{
    margin: 0;
    padding: 0;
}
.head .header .time{
    width: 100%;
    height: 25px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.head .header .time p{
    width: 180px;
    height: 25px;
    font-size: 14px;
    color: #677798;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
</style>