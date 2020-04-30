<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <h3>设备名称:{{ jvmMename }}</h3>
        <h4 class="title">堆内存</h4>
        <div ref="echartPie" class="echartPie" />
        <h4 class="title">内存管理</h4>
        <el-table :data="memoryManage" tooltip-effect="dark" style="width: 100%">
          <el-table-column label="属性" prop="attr" />
          <el-table-column label="值" prop="value" />
        </el-table>
      </el-col>
      <el-col :span="8">
        <h3>设备名称:{{ jappName }}</h3>
        <h4 class="title">web请求 top5</h4>
        <el-table :data="resList" tooltip-effect="dark" style="width: 100%" class="echartPie">
          <el-table-column label="请求url" prop="reqUrl" />
          <el-table-column label="请求时间" prop="reqTime" />
          <el-table-column label="调用耗时(s)" prop="costTime" />
        </el-table>
        <h4 class="title">方法调用 top5</h4>
        <el-table :data="funList" tooltip-effect="dark" style="width: 100%">
          <el-table-column label="方法名" prop="methodName" />
          <el-table-column label="请求时间" prop="reqTime" />
          <el-table-column label="调用耗时(s)" prop="costTime" />
        </el-table>
      </el-col>
      <el-col :span="8">
        <h3>设备名称:{{ sdName }}</h3>
        <h4 class="title">最近一小时每五分钟{{ portName }}的入向速率</h4>
        <div ref="echartLine" class="echartLine" />
        <h4 class="title">端口性能</h4>
        <el-table
          :data="portList"
          tooltip-effect="dark"
          style="width: 100%"
          @row-click="changeIndex"
        >
          <el-table-column label="端口" prop="portName" />
          <el-table-column label="速率" prop="portRate" />
          <el-table-column label="每5分钟出向速率(Mbps)" prop="outRate" />
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/chart/pie');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
import { mapGetters } from 'vuex'
import request from '@/utils/request';

export default {
  name: 'Dashboard',
  data () {
    return {
      jvmMename: '',
      sdName: '',
      jappName: '',
      portName: '',
      portIndex: 0,
      memoryManage: [],
      resList: [],
      funList: [],
      portList: [],
      lineOption: {
        xAxis: {
          type: 'category',
          data: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
          name: '(min)'
        },
        grid: {
          left: '0',
          right: '12%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          name: '(Kbps)'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
          type: 'line'
        }]
      },
      pieOption: {
        title: {
          text: '',
          textStyle: {
            color: '#235894'
          }
        },
        tooltip: {},
        left: '0',
        right: '12%',
        series: [{
          name: '堆内存',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 10,
          startAngle: 180,
          hoverAnimation: true,
          legendHoverLink: false,
          clockwise: true,
          label: {
            formatter: '{b|{b}:}{c}g',
            rich: {}
          },
          tooltip: {
            show: false
            // backgroundColor: 'rgba(0,0,0,0)',
            // color: 'rgba(0,0,0,0)',
            // borderColor: 'rgba(0,0,0,0)',
            // padding: 0,
            // textStyle: {
            //   color: 'rgba(0,0,0,0)',
            //   fontSize: 0
            // }
          },
          data: [
            { value: 4, name: '已使用' },
            { value: 3, name: '剩余' },
            {
              value: 7,
              name: '__other',
              itemStyle: {
                opacity: 0,
                normal: {
                  color: 'rgba(0,0,0,0)'
                },
                label: {
                  color: 'rgba(0,0,0,0)'
                }
              }
            }
          ]
        }]
      },
      echart_line: '',
      echart_pie: '',
      timeRun: ''
    }
  },

  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted () {
    this.initLine();
    this.initPie();
    this.timeRun = window.setInterval(() => {
      this.getData();
    }, 600000)
    this.getData();
  },
  destroyed () {
    window.clearInterval(this.timeRun)
  },
  methods: {
    changeIndex (row, column, event) {
      // var data = [
      //   { time: '2020-04-30 14:01:32.0', inRate: '0.1' },
      //   { time: '2020-04-30 14:01:32.0', inRate: '0.2' },
      //   { time: '2020-04-30 14:01:32.0', inRate: '0.31' },
      //   { time: '2020-04-30 14:01:32.0', inRate: '0.4' }
      // ]
      this.setLineData(row.inRateList);
    },
    initLine () {
      this.echart_line = echarts.init(this.$refs.echartLine, 'light');
      // this.echart_line.setOption(this.lineOption);
    },
    initPie () {
      this.echart_pie = echarts.init(this.$refs.echartPie, 'light');
      // this.echart_pie.setOption(this.pieOption);
    },
    setLineData (data) {
      console.log(data)
      this.lineOption.series[0].data = [];
      this.lineOption.xAxis.data = [];
      data.forEach((item) => {
        this.lineOption.series[0].data.push(item.inRate)
        // this.lineOption.xAxis.data.push(item.minute)
      })
      this.echart_line.setOption(this.lineOption);
    },
    bytesToSize (bytes) {
      var k = 1024;
      var i = 3;
      return (bytes / Math.pow(k, i)).toPrecision(1)
    },
    setPieData (data) {
      const max = this.bytesToSize(data.jvmMetric.heapMax);
      const used = this.bytesToSize(data.jvmMetric.heapUsed);
      const residue = max - used;
      this.pieOption.series[0].data = [
        { value: used, name: '已使用' },
        { value: residue, name: '剩余' },
        {
          value: max,
          name: '__other',
          itemStyle: {
            opacity: 0,
            normal: {
              color: 'rgba(0,0,0,0)'
            },
            label: {
              color: 'rgba(0,0,0,0)'
            }
          }
        }
      ];
      this.echart_pie.setOption(this.pieOption);
    },
    setMemory (data) {
      this.memoryManage = [{
        attr: '老年代GC执行次数',
        value: data.oldGcCount
      }, {
        attr: '年轻代GC执行次数',
        value: data.youngGcCount
      }, {
        attr: '老年代GC执行时间（S）',
        value: data.oldGcTime
      }, {
        attr: '年轻代GC执行时间（S）',
        value: data.youngGcTime
      }, {
        attr: '虚拟机的正常运行时间（S）',
        value: data.uptime
      }]
    },
    getData () {
      request({
        url: `index/metric`,
        method: 'get'
      }).then((data) => {
        this.funList = data.jappMetric.jappMethodMetricList;
        this.resList = data.jappMetric.jappWebMetricList;
        this.jappName = data.jappMetric.appName
        this.jvmMename = data.jvmMetric.meName;
        this.sdName = data.sdMetric.sdName;
        this.portList = data.sdMetric.sdPortMetricList;
        this.portName = data.sdMetric.sdPortMetricList[this.portIndex].portName;
        this.setPieData(data);
        this.setMemory(data.jvmMetric);
        this.setLineData(data.sdMetric.sdPortMetricList[this.portIndex].inRateList);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.echartLine {
  width: 100%;
  height: 250px;
}
.echartPie {
  width: 100%;
  height: 250px;
}
</style>
