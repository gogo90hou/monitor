<template>
  <div class="detail_body">
    <el-row class="detail_box port_box">
      <el-col :span="24">
        <div class="detail">
          <div class="title">
            <span class="box_title">端口</span>
            <span class="box_small_title">总数：7个</span>
            <span class="box_small_title">已用4个/未用3个</span>
          </div>
          <div class="tableBox two">
            <div class="cacheName">
              <el-row class="medium_box" :gutter="20">
                <el-col :span="4">
                  <div class="small_box active">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: runStateColor}"></i>端口3(<span class="size12">带宽</span> 10M)</span>
                    <span class="fr"><span class="size12">流速</span> 329B/s</span>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="small_box no">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: noStateColor}"></i>端口3(<span class="size12">带宽</span> 10M)</span>
                    <span class="fr">未启用</span>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="small_box">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: runStateColor}"></i>端口3(<span class="size12">带宽</span> 10M)</span>
                    <span class="fr"><span class="size12">流速</span> 329B/s</span>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="small_box no">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: noStateColor}"></i>端口3(<span class="size12">带宽</span> 10M)</span>
                    <span class="fr">未启用</span>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="small_box">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: runStateColor}"></i>端口3(<span class="size12">带宽</span> 10M)</span>
                    <span class="fr"><span class="size12">流速</span> 329B/s</span>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="small_box no">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: noStateColor}"></i>端口3(<span class="size12">带宽</span> 10M)</span>
                    <span class="fr">未启用</span>
                  </div>
                </el-col>
              </el-row>
              <el-row class="medium_box" :gutter="20">
                <el-col :span="4">
                  <div class="small_box">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: runStateColor}"></i>端口2(<span class="size12">带宽</span> 10M)</span>
                    <span class="fr"><span class="size12">流速</span> 329B/s</span>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="small_box">
                    <span class="fl"><i class="small_round" :style="{backgroundColor: runStateColor}"></i>端口1(<span class="size12">带宽</span> 10M)</span>
                    <span class="fr"><span class="size12">流速</span> 329B/s</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="lineChart">
            <div class="lineChart_body">
              <div class="lineChart_title">
                <span class="leftBox">流速 b / s</span>
                <span class="rightBox">
                  <span class="square one">端口一</span>
                </span>
              </div>
              <div>
                <echarts-line style="height:220px" :charts-data="chartsData" class="echarts"></echarts-line>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box cpu_box">
      <el-col :span="12">
        <div class="detail borderRightNone">
          <div class="title">
            <span class="box_title">CPU</span>
          </div>
          <div class="lineChart">
            <div class="lineChart_title">
              <span class="small_title_one">cpu温度:</span>
              <span class="small_title_two">
                <span class="info">CPU1: 34&#8451;</span>
                <span class="info">CPU2: 34&#8451;</span>
                <span class="info" style="color: #F02323;">CPU3: 38&#8451;</span>
                <span class="info">CPU4: 34&#8451;</span>
              </span>
            </div>
            <div class="lineChart_body">
              <div class="lineChart_title_two">
                <span class="leftBox">&#8451;</span>
                <span class="rightBox">
                  <span class="square one">CPU1</span>
                  <span class="square two">CPU2</span>
                  <span class="square three">CPU3</span>
                  <span class="square four">CPU4</span>
                </span>
              </div>
              <div>
                <echarts-line style="height:220px" :charts-data="chartsData2" class="echarts"></echarts-line>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail borderLeft">
          <div class="lineChart" style="margin-top: 52px;">
            <div class="lineChart_title">
              <span class="small_title_one">cpu负载：</span>
              <span class="small_title_two">
                <span class="info">CPU1: 34%</span>
                <span class="info">CPU2: 34%</span>
                <span class="info" style="color: #F02323;">CPU3: 98%</span>
                <span class="info">CPU4: 34%</span>
              </span>
            </div>
            <div class="lineChart_body">
              <div class="lineChart_title_two">
                <span class="leftBox">负载（%）</span>
                <span class="rightBox">
                  <span class="square one">CPU1</span>
                  <span class="square two">CPU2</span>
                  <span class="square three">CPU3</span>
                  <span class="square four">CPU4</span>
                </span>
              </div>
              <div>
                <echarts-line style="height:220px" :charts-data="chartsData3" class="echarts"></echarts-line>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box run_describe_box" :gutter="20">
      <el-col :span="4">
        <div class="detail run_detail">
          <div class="title">
            <span class="box_title">运行信息</span>
          </div>
          <div class="main">
            <div class="row row_one">
              <span class="col_one">
                设备名称 ：
                <span class="black">大门门禁</span>
              </span>
            </div>
            <div class="row row_two">
              <span class="col_one">
                运行状态 ：
                <i class="small_round" :style="{backgroundColor: runStateColor}"></i>
                <span class="black">正常</span>
              </span>
            </div>
          </div>
          <div class="iconfont iconicon_cog"></div>
        </div>
      </el-col>
      <el-col :span="20" class="describe_box">
        <div class="detail describe_detail">
          <div class="title">
            <span class="box_title">描述信息</span>
          </div>
          <div class="information">
            <div class="row">
              所在区域：
              <span class="black">锦江监狱</span>
            </div>
            <div class="row">
              所在位置：
              <span class="black">省局机房1</span>
            </div>
            <div class="row last_info">
              <span class="title">描述信息：</span>
              <span
                class="black content"
              >服务器设备信息表与普通的IDC(Integrated Data Center)机房或服务器厂商相比,阿里云提供的云服务器ECS服务器设备信息表与普通的IDC(Integrated Data Center)机房或服务器厂商相比,阿里云提供的云服务器ECS</span>
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
      runStateColor: '#2FD902',
      noStateColor: '#A0A0A0',
      getters: 'monitor/soft/flowList',
      chartsData: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [1000, 1300, 1100, 2800, 1500, 2660, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData2: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [1800, 1300, 1100, 2800, 1500, 2660, 1870, 2000, 1200, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData3: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [2600, 1300, 1100, 2800, 2500, 2660, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      fieldArr: [
        {
          label: '流程名称',
          key: 'name',
          formatter: ''
        }, {
          label: '流程状态',
          key: 'state',
          filters: [{ text: '2016-05-01', value: '2016-05-01' }, { text: '2016-05-02', value: '2016-05-02' }, { text: '2016-05-03', value: '2016-05-03' }, { text: '2016-05-04', value: '2016-05-04' }]

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
  .port_box {
    .detail {
      height: 454px;
      .title {
        .box_small_title {
          margin-left: 27px;
        }
      }
      .tableBox.two {
        margin-bottom: 35px;
        .cacheName {
          .medium_box {
            margin-top: 20px;
            .small_box {
              width: 100%;
              height: 32px;
              background-color: #f4f3f9;
              line-height: 32px;
              color: #444444;
              font-size: 14px;
              padding: 0 9px;
              .size12 {
                font-size: 12px;
              }
            }
            @media screen and (max-width: 1600px) {
              .small_box {
                height: 64px;
              }
              .fl {
                width: 100%;
              }
              .fr {
                float: left;
                width: 100%;
                margin-left: 12px;
              }
            }
            .no {
              opacity: 0.9;
              color: #c2c2c2;
              border: 1px solid #eeefff;
            }
            .active {
              background-color: #5466e0;
              color: #ffffff;
            }
          }
        }
      }
    }
    @media screen and (max-width: 1600px) {
      .detail {
        height: 520px;
      }
    }
  }
  .cpu_box {
    .detail {
      height: 391px;
      .lineChart {
        .lineChart_title {
          font-size: 14px;
          padding-bottom: 56px;
          .small_title_one {
            float: left;
            font-size: 16px;
            width: 20%;
            color: #6d727a;
          }
          .small_title_two {
            float: right;
            width: 80%;
            color: #6d727a;
            .info {
              float: left;
              width: 25%;
              text-align: center;
            }
          }
        }
        .lineChart_body {
          .lineChart_title_two {
            margin-bottom: 14px;
          }
        }
      }
    }
  }
  .run_describe_box {
    .describe_box {
      margin-top: 0;
      .last_info {
        .content {
          width: calc(100% - 76px);
        }
      }
    }
    .detail {
      height: 240px;
      .row {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
