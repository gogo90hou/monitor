<template>
  <div ref="echartBar" class="echartBar"></div>
</template>
<script>
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
export default {
  data () {
    return {
      option: {
        yAxis: [{
          type: 'category',
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
        }, {
          type: 'category',
          boundaryGap: true,
          data: [90, 80, 60, 80, 70, 99, 80],
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
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
              color: ['#E7E7E7'],
              type: 'dashed'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: '12px',
              color: '#b8b8b8'
            }
          }
        }],
        xAxis: {
          type: 'value',
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
              color: ['#E7E7E7'],
              type: 'dotted'
            }
          }
        },
        grid: {
          top: '0',
          left: '50px',
          right: '50px',
          bottom: '1%',
          backgroundColor: '#fff',
          width: 'auto',
          height: '80%'
        },
        series: [{
          data: [90, 80, 60, 80, 70, 99, 80],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 0,
              [
                { offset: 1, color: '#5CE8FF' },
                { offset: 0, color: '#5466E0' }
              ]
            ),
            barBorderRadius: [0, 10, 10, 0]
          },
          showBackground: true,
          backgroundStyle: {
            color: '#EDF6FD'
          },
          barWidth: '30%',
          type: 'bar',
          label: {
            show: false // 开启显示
          }
        }]
      }
    }
  },
  mounted () {
    this.echartBar = echarts.init(this.$refs.echartBar, 'light');
    this.echartBar.setOption(this.option);
  }
}
</script>
<style lang="scss">
.echartBar {
  height: 90%;
}
</style>
