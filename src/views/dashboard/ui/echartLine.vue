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
export default {
  data () {
    return {
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
            formatter: '{value}%'
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

        grid: {
          top: '5%',
          left: '50px',
          right: '50px',
          bottom: '2%',
          backgroundColor: '#fff',
          width: 'auto',
          height: '75%'
        },
        series: [{
          data: [90, 80, 60, 80, 70, 5, 80],
          itemStyle: {
            color: '#5466E0',
            barBorderRadius: [0, 10, 10, 0]
          },
          showBackground: true,
          backgroundStyle: {
            color: '#EDF6FD'
          },
          markPoint: {
            data: [
              { name: '周最低', value: 5, xAxis: 1, yAxis: -1.5 }
            ]
          },
          // markLine: {
          //   data: [
          //     { type: 'average', name: '平均值' }
          //   ]
          // },
          symbolSize: 5,
          symbol: 'circle',
          smooth: true,
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
