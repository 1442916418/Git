<!-- 中国地图下钻省 -->

<template>
  <div class="china-box" ref="china" id="china" style="width:100%;height:100%;"></div>
</template>

<script>
import echarts from "echarts";
import "../../node_modules/echarts/map/js/china.js";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/geo";
import "echarts/lib/component/graphic";

const china = "/data/map/json/china.json";
const anhui = "/data/map/json/province/anhui.json";

export default {
  name: "china",
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.$axios
      .get("/data/map/json/china.json")
      .then(res => {
        console.log(res, "<------- 请求地图");
        let list = res.data;
        echarts.registerMap("中国", list);
        let myChart = this.initChart("china", {
          bgColor: "#154e90", // 画布背景色
          mapName: "中国", // 地图名
          goDown: true // 是否下钻
          // 下钻回调
          // callback: function(name, option, instance) {
          //   console.log(name, option, instance);
          // }
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    initChart(id, opt) {
      // 实例
      this.chart = echarts.init(document.getElementById(id));

      let that = this;
      let curGeoJson = Object.create(null);
      let cityMap = {
        中国: china,
        安徽: anhui
      };
      let geoCoordMap = {
        安徽: [117.27, 31.86]
      };

      let levelColorMap = {
        "1": "rgba(241, 109, 115, .8)",
        "2": "rgba(255, 235, 59, .7)",
        "3": "rgba(147, 235, 248, 1)"
      };

      let defaultOpt = {
        mapName: "china", // 地图展示
        goDown: false, // 是否下钻
        bgColor: "#404a59", // 画布背景色
        activeArea: [], // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function(name, option, instance) {}
      };
      if (opt) opt = Object.assign(defaultOpt, opt);

      // 层级索引
      let name = [opt.mapName];
      let idx = 0;
      let pos = {
        leftPlus: 115,
        leftCur: 150,
        left: 198,
        top: 50
      };

      let line = [
        [0, 0],
        [8, 11],
        [0, 22]
      ];
      // style
      let style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: "#eee",
        lineColor: "rgba(147, 235, 248, .8)"
      };

      let handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption(i, o, n) {
          let breadcrumb = this.createBreadcrumb(n);
          let j = name.indexOf(n);
          let l = o.graphic.length;
          if (j < 0) {
            o.graphic.push(breadcrumb);
            o.graphic[0].children[0].shape.x2 = 145;
            o.graphic[0].children[1].shape.x2 = 145;
            if (o.graphic.length > 2) {
              let cityData = [];
              let cityJson;
              for (let x = 0; x < opt.data.length; x++) {
                if (n === opt.data[x].city) {
                  opt.data[x].forEach(data => {
                    cityJson = {
                      city: data.city,
                      name: data.name,
                      value: data.value,
                      crew: data.crew,
                      company: data.company,
                      position: data.position,
                      region: data.region
                    };
                    cityData.push(cityJson);
                  });
                }
              }

              if (cityData != null) {
                o.series[0].data = handleEvents.initSeriesData(cityData);
              } else {
                o.series[0].length = 0;
              }
            }
            name.push(n);
            idx++;
          } else {
            o.graphic.splice(j + 2, l);
            if (o.graphic.length <= 2) {
              o.graphic[0].children[0].shape.x2 = 60;
              o.graphic[0].children[1].shape.x2 = 60;
              o.series[0].data = handleEvents.initSeriesData(opt.data);
            }
            name.splice(j + 1, l);
            idx = j;
            pos.leftCur -= pos.leftPlus * (l - j - 1);
          }
          o.geo.map = n;
          o.geo.zoom = 0.4;

          console.log(i, that, this);
          o.series.push({
            name: "light",
            type: "scatter",
            coordinateSystem: "geo",
            data: [
              {
                name: "合肥",
                value: [117.27, 31.86, 6666]
              }
            ],
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#F4E925"
              }
            }
          });

          if (i) {
            i.clear();
            i.setOption(o, true);
            this.zoomAnimation();
            opt.callback(n, o, i);
          } else {
            that.chart.clear();
            that.chart.setOption(o, true);
            this.zoomAnimation();
            opt.callback(n, o, that.chart);
          }
        },
        /**
         * name 地图名
         **/
        createBreadcrumb(name) {
          let cityToPinyin = {
            中国: "zhongguo",
            上海: "shanghai",
            河北: "hebei",
            山西: "shangxi",
            内蒙古: "neimenggu",
            辽宁: "liaoning",
            吉林: "jilin",
            黑龙江: "heilongjiang",
            江苏: "jiangsu",
            浙江: "zhejiang",
            安徽: "anhui",
            福建: "fujian",
            江西: "jiangxi",
            山东: "shangdong",
            河南: "henan",
            湖北: "hubei",
            湖南: "hunan",
            广东: "guangdong",
            广西: "guangxi",
            海南: "hainan",
            四川: "sichuan",
            贵州: "guizhou",
            云南: "yunnan",
            西藏: "xizang",
            陕西: "shanxi",
            甘肃: "gansu",
            青海: "qinghai",
            宁夏: "ningxia",
            新疆: "xinjiang",
            北京: "beijing",
            天津: "tianjin",
            重庆: "chongqing",
            香港: "xianggang",
            澳门: "aomen"
          };
          let breadcrumb = {
            type: "group",
            id: name,
            left: pos.leftCur + pos.leftPlus,
            top: pos.top + 3,
            children: [
              {
                type: "polyline",
                left: -90,
                top: -5,
                shape: {
                  points: line
                },
                style: {
                  stroke: "#fff",
                  key: name
                  // lineWidth: 2,
                },
                onclick: function() {
                  let name = this.style.key;
                  handleEvents.resetOption(this.chart, option, name);
                }
              },
              {
                type: "text",
                left: -68,
                top: "middle",
                style: {
                  text: name,
                  textAlign: "center",
                  fill: style.textColor,
                  font: style.font
                },
                onclick: function() {
                  let name = this.style.text;
                  handleEvents.resetOption(this.chart, option, name);
                }
              },
              {
                type: "text",
                left: -68,
                top: 10,
                style: {
                  name: name,
                  text: cityToPinyin[name]
                    ? cityToPinyin[name].toUpperCase()
                    : "",
                  textAlign: "center",
                  fill: style.textColor,
                  font: '12px "Microsoft YaHei", sans-serif'
                },
                onclick: function() {
                  // console.log(this.style);
                  let name = this.style.name;
                  handleEvents.resetOption(this.chart, option, name);
                }
              }
            ]
          };

          pos.leftCur += pos.leftPlus;

          return breadcrumb;
        },
        // c
        initSeriesData(data) {
          console.log(data, "initSeriesData");
          let temp = [];
          for (let i = 0; i < data.length; i++) {
            let geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              console.log(data[i], geoCoord);
              temp.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                crew: data[i].crew,
                company: data[i].company,
                position: data[i].position,
                region: data[i].region
              });
            }
          }
          return temp;
        },
        zoomAnimation() {
          let count = null;
          let zoom = per => {
            if (!count) count = per;
            count = count + per;
            that.chart.setOption({
              geo: {
                zoom: count
              }
            });
            if (count < 1)
              window.requestAnimationFrame(() => {
                zoom(0.2);
              });
          };
          window.requestAnimationFrame(() => {
            zoom(0.2);
          });
        }
      };

      let option = {
        backgroundColor: opt.bgColor,
        tooltip: {
          show: true,
          trigger: "item",
          alwaysShowContent: false,
          backgroundColor: "rgba(50,50,50,0.7)",
          hideDelay: 100,
          triggerOn: "mousemove",
          enterable: true,
          position: ["60%", "70%"],
          formatter: function(params, ticket, callback) {
            return (
              "简称：" +
              params.data.name +
              "<br/>" +
              "机组：" +
              params.data.crew +
              "万千瓦" +
              "<br/>" +
              "公司名称：" +
              params.data.company +
              "<br/>" +
              "所属大区：" +
              params.data.region +
              "<br/>" +
              "所在位置：" +
              params.data.position
            );
          }
        },
        graphic: [
          {
            type: "group",
            left: pos.left,
            top: pos.top - 4,
            children: [
              {
                type: "line",
                left: 0,
                top: -20,
                shape: {
                  x1: 0,
                  y1: 0,
                  x2: 60,
                  y2: 0
                },
                style: {
                  stroke: style.lineColor
                }
              },
              {
                type: "line",
                left: 0,
                top: 20,
                shape: {
                  x1: 0,
                  y1: 0,
                  x2: 60,
                  y2: 0
                },
                style: {
                  stroke: style.lineColor
                }
              }
            ]
          },
          {
            id: name[idx],
            type: "group",
            left: pos.left + 2,
            top: pos.top,
            children: [
              {
                type: "polyline",
                left: 90,
                top: -12,
                shape: {
                  points: line
                },
                style: {
                  stroke: "transparent",
                  key: name[0]
                },
                onclick: function() {
                  let name = this.style.key;
                  handleEvents.resetOption(this.chart, option, name);
                }
              },
              {
                type: "text",
                left: 0,
                top: "middle",
                style: {
                  text: "中国",
                  textAlign: "center",
                  fill: style.textColor,
                  font: style.font
                },
                onclick: function() {
                  handleEvents.resetOption(this.chart, option, "中国");
                }
              },
              {
                type: "text",
                left: 0,
                top: 10,
                style: {
                  text: "China",
                  textAlign: "center",
                  fill: style.textColor,
                  font: '12px "Microsoft YaHei", sans-serif'
                },
                onclick: function() {
                  handleEvents.resetOption(this.chart, option, "中国");
                }
              }
            ]
          }
        ],
        geo: {
          map: opt.mapName,
          roam: true,
          zoom: 1,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "#fff"
              }
            },
            emphasis: {
              textStyle: {
                color: "#fff"
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(147, 235, 248, 1)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(147, 235, 248, 0)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(147, 235, 248, .2)" // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              },
              shadowColor: "rgba(128, 217, 248, 1)",
              // shadowColor: 'rgba(255, 255, 255, 1)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10
            },
            emphasis: {
              areaColor: "#389BB7",
              borderWidth: 0
            }
          },
          regions: opt.activeArea.map(function(item) {
            if (typeof item !== "string") {
              return {
                name: item.name,
                itemStyle: {
                  normal: {
                    areaColor: item.areaColor || "#389BB7"
                  }
                },
                label: {
                  normal: {
                    show: item.showLabel,
                    textStyle: {
                      color: "#fff"
                    }
                  }
                }
              };
            } else {
              return {
                name: item,
                itemStyle: {
                  normal: {
                    borderColor: "#91e6ff",
                    areaColor: "#389BB7"
                  }
                }
              };
            }
          })
        },
        series: [
          {
            name: "light",
            type: "scatter",
            coordinateSystem: "geo",
            data: [
              {
                name: "合肥",
                value: [117.27, 31.86, 6666]
              }
            ],
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            showEffectOn: "render",
            rippleEffect: {
              period: 15,
              scale: 6,
              brushType: "fill"
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: function(params) {
                  return levelColorMap[params.value[3]];
                },
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            data: handleEvents.initSeriesData(opt.data)
          }
        ]
      };

      this.chart.setOption(option, true);

      // 添加事件
      this.chart.on("click", params => {
        console.log(params, "点击事件");
        if (opt.goDown && params.name !== name[idx]) {
          if (cityMap[params.name]) {
            let url = cityMap[params.name];
            this.$axios
              .get(url)
              .then(response => {
                console.log(response, "<------ 请求省份数据");
                curGeoJson = response.data;
                echarts.registerMap(params.name, response.data);
                handleEvents.resetOption(this.chart, option, params.name);
              })
              .catch(error => {
                console.log(error);
              });
          }
        }
      });

      this.chart.setMap = function(mapName) {
        console.log(mapName, "<------- setMap");
        if (mapName.indexOf("市") < 0) mapName = mapName + "市";
        let citySource = cityMap[mapName];
        if (citySource) {
          let url = "./map/" + citySource + ".json";
          this.$axios
            .get(url)
            .then(response => {
              curGeoJson = response;
              echarts.registerMap(mapName, response);
              handleEvents.resetOption(this.chart, option, mapName);
            })
            .catch(error => {
              console.log(error);
            });
        }
      };
    }
  }
};
</script>

<style lang="less" scoped>
.china-box {
  height: 100%;
  background-color: white;
}
</style>