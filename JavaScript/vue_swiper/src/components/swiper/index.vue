<!-- 全屏切换 -->

<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-mousewheel-control",
  title: "Mousewheel control",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical", // 垂直方向移动
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        // height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        on: {
          keyPress: function(event) {
            console.log("你按了键盘" + event);
          }
        }
      }
    };
  }
};
</script>

<style scoped>
.swiper {
  margin: 0 auto;
  width: 500px;
  height: 300px;
  border: 2px solid rebeccapurple;
  overflow: hidden;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  background-color: rgb(179, 230, 245);
}
</style>