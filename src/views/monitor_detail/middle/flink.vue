<template>
  <div class="detail_body">
    <el-row class="detail_box run_count_box" :gutter="20">
      <el-col :span="4">
        <div class="detail run_detail">
          <div class="title">
            <span class="box_title">运行状态</span>
          </div>
          <div class="main detail_info">
            <div class="row ">
              <span class="">
                运行时长 ：
                <span class="black">3h</span>
              </span>
            </div>
            <div class="row row_two">
              <span class="">
                运行状态 ：
                <i class="small_round" :style="{backgroundColor: runStateColor}"></i>
                <span class="black">正常</span>
              </span>
            </div>
          </div>
          <div class="iconfont iconicon_cog"></div>
        </div>
      </el-col>
      <el-col :span="9" class="count_box" style="padding-right: 0;">
        <div class="detail count_detail">
          <div class="title">
            <span class="box_title">统计</span>
          </div>
          <div class="main detail_info">
            <div class="row ">
              <span class="">
                注册任务管理器数：
                <span class="black">40</span>
              </span>
            </div>
            <div class="row row_two">
              <span class="">
                正在运行的作业数量：
                <span class="black">344</span>
              </span>
            </div>
            <div class="row row_three">
              <span class="">
                任务槽的总数：
                <span class="black">198</span>
              </span>
            </div>
            <div class="row row_four">
              <span class="">
                可用任务槽数量：
                <span class="black">34</span>
              </span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="11" class="lineChart_box" style="padding-left: 0;">
        <div class="detail lineChart_detail">
          <div class="lineChart">
            <div class="lineChart_title">近段时间io读写速率(kb/s)</div>
            <div class="lineChart_body">
              <div class="lineChart_title">(个)</div>
              <div class="box"><echarts-line style="height:200px" :charts-data="chartsData" class="echarts"></echarts-line></div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box memory_active_box" :gutter="20">
      <el-col :span="12">
        <div class="detail lineChart_detail">
          <div class="title">
            <span class="box_title">堆内存</span>
            <span class="info two">堆内存使用率：<span class="title_yellow">49%</span></span>
            <span class="info three">堆内存已使用：<span class="title_blue">6G</span></span>
            <span class="info four">堆内存最大可用：<span class="title_blue">5G</span></span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span>(%)</span>
            </div>
            <div class="lineChart_body"><echarts-line style="height:230px" :charts-data="chartsData2" class="echarts"></echarts-line></div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail lineChart_detail">
          <div class="title">
            <span class="box_title">活动线程数</span>
            <span class="box_title_center">当前活动线程数：<span class="title_blue">32个</span></span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span>(个)</span>
            </div>
            <div class="lineChart_body"><echarts-line style="height:230px" :charts-data="chartsData3" class="echarts"></echarts-line></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box gc_box">
      <el-col :span="12">
        <div class="detail lineChart_detail one">
          <div class="title">
            <span class="box_title">GC</span>
            <span class="box_title_center">近段时间老年代GC执行次数:<span class="title_blue">32次/秒</span></span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span>近段时间老年代GC执行次数(次)</span>
            </div>
            <div class="lineChart_body"><echarts-line style="height:260px" :charts-data="chartsData4" class="echarts"></echarts-line></div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail lineChart_detail two">
          <div class="title">
            <span class="box_title_center">年轻代GC执行次数：<span class="title_blue">32次/秒</span></span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span class="box_title">近段时间年轻代GC执行次数（次）</span>
            </div>
            <div class="lineChart_body"><echarts-line style="height:260px" :charts-data="chartsData5" class="echarts"></echarts-line></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box describe_box">
      <el-col :span="24">
        <div class="describe_detail">
          <div class="detail">
            <div class="title">
              <span class="box_title">基本信息</span>
            </div>
            <div class="information">
              <el-row>
                <el-col :span="6">
                  中间件名称：
                  <span class="black">ngdf3-3320</span>
                </el-col>
                <el-col :span="6">
                  所在区域：
                  <span class="black">锦江监狱</span>
                </el-col>
                <el-col :span="12">
                  版本信息：
                  <span class="black">v1.0</span>
                </el-col>
                <el-col :span="6">
                  中间件类型：
                  <span class="black">Apache</span>
                </el-col>
                <el-col :span="18">
                  所在服务器：
                  <span class="black">省局服务器</span>
                </el-col>
                <el-col :span="24" class="last_info">
                  <span class="title">中间件描述：</span>
                  <span
                    class="black content"
                  >相较于普通的IDC机房以及服务器厂商，云服务器具有高可用性的特点，阿里云使用更严格的IDC标准、服务器准入标准以及运维标准，保证云计算基础框架的高可用性、数据的可靠性以及云服务器的高可用性。</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      runStateColor: '#27B102',
      getters: 'monitor/soft/flowList',
      chartsData: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [60, 77, 91, 90, 65, 73, 78, 20, 88, 66, 71, 54],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData2: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [60, 77, 91, 90, 65, 73, 78, 80, 88, 66, 71, 54],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'green'
      },
      chartsData3: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [60, 77, 61, 90, 65, 73, 78, 50, 88, 66, 71, 54],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData4: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [60, 77, 61, 90, 65, 73, 78, 50, 38, 66, 71, 54],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData5: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [60, 47, 61, 90, 65, 73, 78, 50, 88, 86, 71, 54],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'green'
      },
      fieldArr: [
        {
          label: '流程名称',
          key: 'name',
          formatter: ''
        }, {
          label: '流程状态',
          key: 'state',
          filters: [{ text: '进行中', value: '进行中' }, { text: '已完结', value: '已完结' }, { text: '已拒绝', value: '已拒绝' }]

        }, {
          label: '发起时间',
          key: 'time',
          formatter: ''
        }, {
          label: '耗时',
          key: 'payTime'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.detail_body {
  .tables {
    background-color: #ffffff;
    height: calc(100% - 52px);
    width: 100%;
    >>> .el-table__body-wrapper {
      height: calc(224px - 57px);
      overflow-y: scroll;
    }
  }
  .run_count_box {
    // 运行情况
    .detail {
      position: relative;
      height: 300px;
      font-size: 14px;
      color: #666;
      .lineChart_title {
        display: inline-block;
        height: 22px;
        line-height: 22px;
      }
      .detail_info {
        .row {
          margin-bottom: 25px;
        }
      }
    }
    .lineChart_detail {
      border-left: 1px solid rgba(219, 219, 219, 0.52);
      .lineChart_body {
        margin-left: 40px;
      }
    }
  }
  .memory_active_box {
    .detail {
      height: 331px;
      .title {
        .info {
          display: inline-block;
          width: 26%;
          text-align: center;
          .title_yellow {
            color: #ffd04e;
          }
          .title_blue {
            color: #6474e2;
          }
        }
      }
    }
  }
  .gc_box {
    .detail {
      height: 391px;
    }
    .lineChart_detail {
      .lineChart {
        padding-top: 30px;
      }
      .box_title_center {
        margin-top: 30px;
      }
    }
    .lineChart_detail.two {
      border-left: 1px solid rgba(219, 219, 219, 0.52);
    }
  }
  .describe_box {
    .detail {
      height: 229px;
    }
  }
}
</style>
