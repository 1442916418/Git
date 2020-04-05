
<template>
  <div class="div">
    <div class="example-3d">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <table border="1" style="width:100%;height:100%;">
            <tr>
              <td>100</td>
              <td>200</td>
              <td>300</td>
            </tr>
            <tr>
              <td>400</td>
              <td>500</td>
              <td>600</td>
            </tr>
          </table>
        </swiper-slide>
        <swiper-slide>
          <table border="1" style="width:100%;height:100%;">
            <tr>
              <td>100</td>
              <td>200</td>
              <td>300</td>
            </tr>
            <tr>
              <td>400</td>
              <td>500</td>
              <td>600</td>
            </tr>
          </table>
        </swiper-slide>
        <!-- <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>-->
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-3d-cube",
  title: "3D Cube effect",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical", // 垂直方向移动
        effect: "cube",
        grabCursor: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>

<style scoped>
.div {
  height: 300px;
  margin: 20px;
}

.example-3d {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  background-color: #fff;
  background-position: center;
  background-size: cover;
  color: black;
}
</style>