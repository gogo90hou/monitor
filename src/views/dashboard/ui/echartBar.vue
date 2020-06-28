<template>
  <div ref="echartBar" class="echartBar"></div>
</template>
<script>
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/dataZoom');
export default {
  data () {
    return {
      option: {
        xAxis: {
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
              color: ['#E7E7E7'],
              type: 'dotted'
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
          top: '9%',
          left: '50px',
          right: '10px',
          bottom: '2%',
          backgroundColor: '#fff',
          width: 'auto',
          height: '73%'
        },
        // dataZoom: [{
        //   type: 'slider',
        //   id: 'dataZoomX',
        //   show: true,
        //   realtime: true,
        //   xAxisIndex: 0,
        //   start: 10,
        //   end: 50, // 初始化滚动条
        //   orient: 'horizontal', // 布局方式是横还是竖。不仅是布局方式，对于直角坐标系而言，也决定了，缺省情况控制横向数轴还是纵向数轴。'horizontal'：水平。'vertical'：竖直。
        //   zoomLock: true, // 是否锁定选择区域（或叫做数据窗口）的大小。如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
        //   throttle: 100, // 设置触发视图刷新的频率。单位为毫秒（ms）。
        //   zoomOnMouseWheel: true, // 如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标滚轮能触发缩放。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发缩放。'alt'：表示按住 alt 和鼠标滚轮能触发缩放。
        //   moveOnMouseMove: true
        // }],
        series: [{
          data: [90, 80, 60, 80, 70, 100, 80],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 1, 0, 0,
              [
                { offset: 1, color: '#5CE8FF' },
                { offset: 0, color: '#5466E0' }
              ]
            )
            // barBorderRadius: [10, 10, 0, 0]
          },
          showBackground: true,
          backgroundStyle: {
            color: '#fff'
          },
          barWidth: '30%',
          type: 'bar',
          label: {
            show: true,
            position: 'top',
            formatter: '{c}%'
          }
        }]
      }
    }
  },
  mounted () {
    this.echartBar = echarts.init(this.$refs.echartBar, 'light');
    this.echartBar.setOption(this.option);
    var that = this;
    // 自适应布局
    window.addEventListener('resize', function () {
      const width = that.$refs.echartBar.clientWidth;
      const height = that.$refs.echartBar.clientHeight;
      that.echartBar.resize({
        width: width,
        height: height
      })
    })
  }
}
</script>
<style lang="scss">
.echartBar {
  height: 90%;
}
</style>
