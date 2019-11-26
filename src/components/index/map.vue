<template>
  <div class="map w1420">
    <div class="map-head">
      <h1 class="map-title"><span class="wow xnxg"></span><span class="special-title">人才资源分布图</span></h1>
      <p class="map-intro">
        犀牛小哥CT服务平台拥有10000+名工程师，覆盖全国各个城市，获得各领域原厂商认证的工程师达95％以上。
      </p>
    </div>
    <div id="map-box" class="w100">

    </div>
  </div>
</template>

<script>
    let echarts = require('echarts');
    require('echarts/map/js/china.js');  // 引入中国地图组件
    export default {
        name: "map-box",
        data(){
          return{
            placeList:null,
            maxCount:0,
            getSetOption:{
              tooltip: {
                trigger: 'item',
                formatter: '{b0}: {c0}'
              },
              visualMap: {
                seriesIndex: 0,
                min: 0,
                max: 0,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],// 文本，默认为数值文本
                calculable: true,
                inRange: {
                  color: ['#DDDDDD', '#c0c0c0', '#808080'],
                  a:"#f1ad93",
                  b:"#ff8557",
                  c:"#ff652b"
                }
              },
              grid: {
                height: 200,
                width: 8,
                right: 80,
                bottom: 10,
                display:'none'
              },
              // xAxis: {
                // type: 'category',
                // data: [],
                // splitNumber: 1,
                // show: false
              // },
              // yAxis: {
                // position: 'right',
                // min: 0,
                // max: 20,
                // splitNumber: 20,
                // inverse: true,
                // axisLabel: {
                //   show: true
                // },
                // axisLine: {
                //   show: false
                // },
                // splitLine: {
                //   show: false
                // },
                // axisTick: {
                //   show: false
                // },
                // data: [
                //   this.placeList
                // ]
              // },
              series: [
                {
                  zlevel: 1,
                  name: '中国',
                  type: 'map',
                  mapType: 'china',
                  selectedMode : 'multiple',
                  roam: false,//是否缩放
                  left: 0,
                  right: '15%',
                  label: {
                    normal: {
                      show: true
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  itemStyle:{
                    normal: {
                      label: {
                        show: false,//默认是否显示省份名称
                      },
                      areaStyle: {
                        color: '#ddd',//默认的地图板块颜色#f1ad93 #ff8557
                      },
                      borderWidth:1,
                      borderColor:'#e1e1e1',
                    },
                    emphasis: {
                      label: {
                        show: true,//选中状态是否显示省份名称
                      },
                      areaColor: '#eb7a1d',//选中状态的地图板块颜色
                    },
                  },
                  data:[
                  ]
                },
                // {
                //   zlevel: 2,
                //   name: '地图指示',
                //   type: 'bar',
                //   barWidth: 5,
                //   itemStyle: {
                //     normal: {
                //       color: undefined,
                //       shadowColor: 'rgba(0, 0, 0, 0.1)',
                //       shadowBlur: 10
                //     }
                //   },
                //   data: [20]
                // }
              ]
            }
          }
        },
        mounted(){
          this.drawLine();
        },
        methods: {
          drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('map-box'));
            myChart.setOption(this.getSetOption);
            this.$ajax.get(this.dataURL('view/engineerAndPlaceView',''))
              .then((res)=>{
                // console.log(res)
                this.placeList=res.data.data.placeList;
                this.maxCount=res.data.data.maxCount;
                this.getSetOption.visualMap.max=this.maxCount;
                this.getSetOption.series[0].data=this.placeList;
                myChart.setOption(this.getSetOption);
                // this.drawBar(myChart);
              });
          },
          getGradientColor (start, end, max, val) {
            var rgb = /#((?:[0-9]|[a-fA-F]){2})((?:[0-9]|[a-fA-F]){2})((?:[0-9]|[a-fA-F]){2})/;
            var sM = start.match(rgb);
            var eM = end.match(rgb);
            var err = '';
            max = max || 1
            val = val || 0
            if (sM === null) {
              err = 'start';
            }
            if (eM === null) {
              err = 'end';
            }
            if (err.length > 0) {
              throw new Error('Invalid ' + err + ' color format, required hex color');
            }
            var sR = parseInt(sM[1], 16),
              sG = parseInt(sM[2], 16),
              sB = parseInt(sM[3], 16);
            var eR = parseInt(eM[1], 16),
              eG = parseInt(eM[2], 16),
              eB = parseInt(eM[3], 16);
            var p = val / max;
            var gR = Math.round(sR + (eR - sR) * p).toString(16),
              gG = Math.round(sG + (eG - sG) * p).toString(16),
              gB = Math.round(sB + (eB - sB) * p).toString(16);
            return '#' + gR + gG + gB;
          },
          drawBar(myChart) {
            // var TOPN = 25
            //
            // var option = myChart.getOption()
            // // 修改top
            // option.grid[0].height = TOPN * 20
            // option.yAxis[0].max = TOPN
            // option.yAxis[0].splitNumber = TOPN
            // option.series[1].data[0] = TOPN
            // 排序
            // var data = option.series[0].data.sort(function(a, b) {
            //   return b.value - a.value
            // })
            //
            // var maxValue = data[0].value,
            //   minValue = data.length > TOPN ? data[TOPN - 1].value : data[data.length - 1].value
            //
            // var s = option.visualMap[0].controller.inRange.color[0],
            //   e = option.visualMap[0].controller.inRange.color.slice(-1)[0]
            // var sColor = this.getGradientColor(s, e, maxValue, minValue)
            // var eColor = this.getGradientColor(s, e, maxValue, maxValue)

            // option.series[1].itemStyle.normal={};
            // option.series[1].itemStyle.normal.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //   offset: 1,
            //   color: sColor
            // }, {
            //   offset: 0,
            //   color: eColor
            // }])

            // var that = this;
            // // yAxis
            // var newYAxisArr = []
            // echarts.util.each(data, function(item, i) {
            //   if (i >= TOPN) {
            //     return false
            //   }
            //   var c = that.getGradientColor(sColor, eColor, maxValue, item.value)
            //   newYAxisArr.push({
            //     value: item.name,
            //     textStyle: {
            //       color: c
            //     }
            //   })
            // })
            // option.yAxis[0].data = newYAxisArr
            // option.yAxis[0].axisLabel.formatter = (function(data) {
            //   return function(value, i) {
            //     if (!value) return ''
            //     return value + ' ' + data[i].value
            //   }
            // })(data)
            // myChart.setOption(option)
          }
        }
    }
</script>

<style lang='scss' scoped>
  .map{
    height: 880px;
    margin: 0 auto;
    padding-top: 20px;
    .special-title{
      color: $fontColor;
    }
    .xnxg{
      display: inline-block;
      width: 150px;
      height: 55px;
      margin-right: 10px;
      background-size: 100% 100%;
      background-image: url("../../../static/images/xiniuxiaoge.png");
      animation: fadeInLeft 1s;
    }
    .map-head{
      width: 450px;
      padding-left: 100px;
    }
    .map-title{
      margin-top: 20px;
      text-align: center;
      font-size: 36px;
      white-space: nowrap;
    }
    .map-intro{
      margin-top: 20px;
      font-size: 20px;
      line-height: 1.5;
    }
  }
  #map-box{
    width: 1000px;
    height: 650px;
    margin: 0 220px;
  }
</style>
