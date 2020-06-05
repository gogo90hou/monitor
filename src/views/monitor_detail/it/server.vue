<template>
  <div class="detail_body">
    <el-row class="detail_box run_power_disk_box" :gutter="20">
      <el-col :span="4">
        <div class="detail run_detail">
          <div class="title">
            <span class="box_title">运行情况</span>
          </div>
          <div class="main">
            <div class="row row_one">
              <span class="col_one">
                运行时长 ：
                <span class="black">3h</span>
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
      <el-col :span="4">
        <div class="detail power_detail">
          <div class="title">
            <span class="box_title">电源</span>
          </div>
          <div>
            <div class="row row_one">
              <span class="col_one fl">电源1</span>
              <span class="col_two fr">
                <i class="small_round" :style="{backgroundColor: runStateColor}"></i>正常
              </span>
            </div>
            <div class="row row_two">
              <span class="col_one fl">电源2</span>
              <span class="col_two fr">
                <i class="small_round" style="background-color: #FF0000;"></i>异常
              </span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="detail hardDisk_detail">
          <el-row style="height: 100%;">
            <el-col :span="7" class="hardDisk_detail_round">
              <div class="title">
                <span class="box_title">硬盘</span>
              </div>
              <div class="round-box">
                <RoundBar :percent-num="64" :speed="3" />
                <div class="usage">使用率:64%(64G/128G)</div>
              </div>
            </el-col>
            <el-col :span="2" class="partition">
              <div class="histogram_title">分区4个</div>
            </el-col>
            <el-col :span="7" class="histogram_box">
              <div class="histogram_cdef">
                <span class="disk">C盘 ：</span>
                <div class="histogram_middle_box">
                  <div class="figure">
                    <div class="figure_small"></div>
                  </div>
                  <div class="text">已使用45G&nbsp;&nbsp;共100G</div>
                </div>
                <span class="percentage">45%</span>
              </div>
              <div class="histogram_cdef">
                <span class="disk">E盘 ：</span>
                <div class="histogram_middle_box">
                  <div class="figure">
                    <div class="figure_small"></div>
                  </div>
                  <div class="text">已使用45G&nbsp;&nbsp;共100G</div>
                </div>
                <span class="percentage">45%</span>
              </div>
            </el-col>
            <el-col :span="7" class="histogram_box" style="margin-left:20px;">
              <div class="histogram_cdef">
                <span class="disk">D盘 ：</span>
                <div class="histogram_middle_box">
                  <div class="figure">
                    <div class="figure_small"></div>
                  </div>
                  <div class="text">已使用45G&nbsp;&nbsp;共100G</div>
                </div>
                <span class="percentage">45%</span>
              </div>
              <div class="histogram_cdef">
                <span class="disk">F盘 ：</span>
                <div class="histogram_middle_box">
                  <div class="figure">
                    <div class="figure_small" style="width : 90%;background-color: #F13E3E;"></div>
                  </div>
                  <div class="text">已使用90G&nbsp;&nbsp;共100G</div>
                </div>
                <span class="percentage">90%</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box fan_box">
      <el-col :span="7">
        <div class="detail">
          <div class="title">
            <span class="box_title">风扇状态</span>
            <span class="prompt_box">
              <span class="one"></span>
              <span class="two">异常</span>
            </span>
          </div>
          <div class="box">
            <div class="small_box one">
              <div class="small_one">
                <span class="num">2000</span> 转/分
              </div>
              <div class="small_two">风扇一</div>
            </div>
            <div class="small_box two">
              <div class="small_one">
                <span class="num">2000</span> 转/分
              </div>
              <div class="small_two">风扇二</div>
            </div>
            <div class="small_box three">
              <div class="small_one">
                <span class="num" style="color: #FE0000;">2300</span> 转/分
              </div>
              <div class="small_two">风扇三</div>
            </div>
            <div class="small_box four">
              <div class="small_one">
                <span class="num">2000</span> 转/分
              </div>
              <div class="small_two">风扇四</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="detail lineChart">
          <div class="lineChart_title">
            <span>转数（转）</span>
            <span class="rightBox">
              <span class="square one">风扇一</span>
              <span class="square two">风扇二</span>
              <span class="square three">风扇三</span>
              <span class="square four">风扇四</span>
            </span>
          </div>
          <div class="lineChart_body">
            <echarts-line style="height:200px" :charts-data="chartsData1"></echarts-line>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail_box memory_box">
      <el-col :span="7">
        <div class="detail">
          <div class="title">
            <span class="box_title">内存</span>
          </div>
          <div class="round-box">
            <RoundBar :percent-num="72" :speed="3" />
            <div class="usage">使用率:72%(6G/8G)</div>
          </div>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="detail lineChart">
          <div class="lineChart_title">
            <span>使用率</span>
          </div>
          <div class="lineChart_body">
            <echarts-line style="height:200px" :charts-data="chartsData"></echarts-line>
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
        y: [1200, 1300, 1100, 1800, 1500, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
        markLine: { yAxis: 2000, name: '门限' },
        style: 'purple'
      },
      chartsData1: {
        x: ['11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
        y: [
          [1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100, 1200, 1300, 1100, 1800, 1500],
          [1100, 1800, 1500, 1200, 1300, 1060, 1870, 2000, 2300, 1000, 1130, 1080, 2100],
          [1200, 1500, 1400, 1200, 1500, 2000, 2300, 1000, 1130, 1080, 2100, 1060, 1870],
          [1300, 1600, 1300, 1200, 1600, 1260, 1770, 2500, 2100, 1600, 1130, 1080, 2100]
        ],
        multiple: true,
        markLine: { yAxis: 2000, name: '门限' },
        style: 'multipleStyle'
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
  .run_power_disk_box {
    // 运行情况
    .detail {
      height: 240px;
    }
    .run_detail {
      // 加高行间距
      .row {
        margin-bottom: 20px;
      }
    }
    .power_detail {
      .row {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translateX(-50%);
        width: 88%;
        height: 33px;
        line-height: 33px;
        padding: 0 8px;
        border-radius: 16.5px;
        background-color: rgba(238, 237, 246, 0.65);
      }
      .row_one {
        top: 55%;
      }
    }
    // 硬盘
    .hardDisk_detail {
      padding: 0;
      .hardDisk_detail_round {
        position: relative;
        height: 100%;
        border-right: 1px solid #ececec;
        .title {
          padding: 12px 0 0 12px;
        }
      }
      // 分区
      .partition {
        .histogram_title {
          margin-left: 20px;
          margin-top: 16px;
          color: #606060;
          font-size: 14px;
          text-align: right;
        }
      }
    }
  }
  .fan_box {
    .detail {
      height: 289px;
      .title {
        .box_title {
          top: -6px;
        }
        .prompt_box {
          position: relative;
          display: inline-block;
          width: 48px;
          height: 22px;
          background-color: #fff;
          overflow: hidden;
          .one,
          .two {
            position: absolute;
            background-color: #ff1515;
          }
          .one {
            background: none;
            top: 0;
            left: 5px;
            width: 0;
            height: 0;
            border-top: 11px solid transparent;
            border-bottom: 11px solid transparent;
            border-right: 11px solid #ff1515;
          }
          .two {
            left: 16px;
            width: 32px;
            height: 100%;
            color: #fff;
            font-size: 14px;
            line-height: 22px;
          }
        }
      }
      .box {
        margin-left: 56px;
        .small_box {
          width: 50%;
          float: left;
          height: 52px;
          margin-bottom: 55px;
          font-size: 14px;
          color: #999999;
          padding-left: 6px;
          .small_one {
            height: 32px;
            line-height: 32px;
            .num {
              font-size: 26px;
            }
          }
          .small_two {
            height: 20px;
            line-height: 20px;
          }
        }
        .one {
          border-left: 3px solid #5cabfb;
        }
        .two {
          border-left: 3px solid #2ed6c6;
        }
        .three {
          border-left: 3px solid #ffd04e;
        }
        .four {
          border-left: 3px solid #6d7ee1;
        }
      }
    }
  }
  .memory_box {
    .detail {
      height: 287px;
    }
  }
  .cpu_box {
    .detail {
      height: 391px;
      .lineChart {
        .lineChart_title {
          font-size: 14px;
          padding-bottom: 66px;
          .small_title_one {
            float: left;
            width: 20%;
          }
          .small_title_two {
            float: right;
            width: 80%;
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
}
</style>
