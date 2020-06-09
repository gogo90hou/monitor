<template>
  <div ref="echartBar" class="echartBar circle"></div>
</template>
<script>
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
export default {
  data () {
    return {
      option: {
        color: ['#5466e0', '#5cabfb', '#2ed6c6', '#ffc34e', '#aa49d6', '#26b414'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['90%', '100%'],
            avoidLabelOverlap: false,
            legendHoverLink: false,
            hoverAnimation: false,
            left: 0,
            width: '100%',
            label: {
              show: true,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold',
                formatter: '{c}个\n {b}'
              }
            },
            labelLine: {
              show: false
            },
            data: [121, 231, 232, 233, 234, 456]
          }
        ]
      }
    }
  },
  mounted () {
    this.echartBar = echarts.init(this.$refs.echartBar, 'light');
    this.echartBar.setOption(this.option);
  }
}
</script>
<style lang="scss" scoped>
</style>
