<!--
 * @Author: your name
 * @Date: 2020-05-26 20:48:03
 * @LastEditTime: 2020-05-27 10:57:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor\src\views\dashboard\ui\echartLine.vue
-->
<template>
  <div ref="echartLine" class="echartLine"></div>
</template>
<script>
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/markLine');
export default {
  props: {
    chartsData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      style: {
        green: {
          backgroundStyle: {
            color: '#111'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 1, 0, 0,
              [
                { offset: 0, color: 'rgba(46, 214, 198, 0)' },
                { offset: 1, color: 'rgba(46, 214, 198, 0.5)' }
              ]
            )
          },
          itemStyle: {
            color: '#2ED6C6'
          }
        }
      },
      option: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
          axisLine: {
            lineStyle: {
              color: '#b8b8b8',
              width: 1
            }
          },
          splitLine: {
            show: true,
            //  改变轴线颜色
            lineStyle: {
              // 使用深浅的间隔色
              color: ['#E7E7E7']
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: '12px',
              color: '#b8b8b8'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: '#b8b8b8',
              width: 1
            }
          },
          splitLine: {
            show: true,
            //  改变轴线颜色
            lineStyle: {
              // 使用深浅的间隔色
              color: ['#E7E7E7']
            }
          }
        },
        toolbox: {
          show: true
        },
        tooltip: {
          trigger: 'axis',
          show: true
        },
        series: [{
          data: [90, 80, 60, 80, 70, 5, 80],
          itemStyle: {
            color: '#5466E0'
          },
          showBackground: true,
          backgroundStyle: {
            color: '#EDF6FD'
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          },
          symbolSize: 5,
          symbol: 'circle',
          smooth: false,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 1, 0, 0,
              [
                { offset: 0, color: 'rgba(84, 102, 224, 0)' },
                { offset: 1, color: 'rgba(84, 102, 224, 0.31)' }
              ]
            )
          },
          barWidth: '30%',
          type: 'line',
          label: {
            show: false // 开启显示
          }
        }]
      }
    }
  },
  created () {
    this.option.xAxis.data = this.chartsData.x;
    this.option.series[0].data = this.chartsData.y;
    this.option.series[0].areaStyle = this.style[this.chartsData.style].areaStyle;
    this.option.series[0].backgroundStyle = this.style[this.chartsData.style].backgroundStyle;
    this.option.series[0].itemStyle = this.style[this.chartsData.style].itemStyle;
  },
  mounted () {
    this.echartLine = echarts.init(this.$refs.echartLine, 'light');
    this.echartLine.setOption(this.option);
  }
}
</script>
<style lang="scss">
.echartLine {
  height: 90%;
}
</style>
